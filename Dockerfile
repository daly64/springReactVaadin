FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY publish/*.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 3000