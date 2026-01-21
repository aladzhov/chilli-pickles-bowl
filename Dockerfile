# STAGE 1: Build the Angular Frontend
FROM node:22-alpine AS frontend-build
WORKDIR /build
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# STAGE 2: Build the Spring Boot Backend
FROM eclipse-temurin:21-jdk-alpine AS backend-build
WORKDIR /app
COPY . .
COPY --from=frontend-build /build/dist/*/browser/* /app/backend/src/main/resources/static/
RUN ./gradlew :backend:build -x test -x :frontend:npmInstall -x :frontend:npmBuild

# STAGE 3: Final Runtime Image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/backend/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
