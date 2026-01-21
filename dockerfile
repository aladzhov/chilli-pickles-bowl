# Stage 1: Build Angular
FROM node:22-alpine as build-stage
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Stage 2: Run Spring Boot
FROM eclipse-temurin:21-jre-alpine
COPY --from=build-stage /app/dist/browser /app/static
COPY backend/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]