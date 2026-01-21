# Stage 1: Build Angular
FROM node:22-alpine as frontend-build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# STAGE 2: Build the Spring Boot Backend
FROM eclipse-temurin:21-jdk-alpine AS backend-build
WORKDIR /app
COPY . .
RUN ./gradlew :backend:build -x test
COPY --from=frontend-build /app/frontend/dist/frontend/browser /app/backend/src/main/resources/static

# STAGE 3: Final Runtime Image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/backend/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
