FROM maven:3.8.1-jdk-8-slim AS build

COPY /binoapi/src /app/src

COPY /binoapi/pom.xml /app/

RUN mvn -f /app/pom.xml clean package

FROM openjdk:8

ARG PROFILE

ENV PROFILE=${PROFILE}

WORKDIR /opt/iotruck

COPY --from=build app/target/*.jar iotruck.jar

SHELL ["/bin/sh","-c"]

EXPOSE 8080

CMD java -jar /opt/iotruck/iotruck.jar --spring.profiles.active=${PROFILE}
