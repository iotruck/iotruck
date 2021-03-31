FROM maven:3.6.3-openjdk-8 AS build

WORKDIR /opt/iotruck/bino

ADD go /opt/iotruck/bino

RUN mvn -f /opt/iotruck/bino/pom.xml clean package -Dmaven.test.skip=true


FROM openjdk:8

ARG PROFILE

ENV PROFILE=${PROFILE}

WORKDIR /opt/bino

COPY --from=build /opt/iotruck/bino/target/bino-0.0.1-SNAPSHOT.jar /opt/bino/bino.jar 

EXPOSE 8080

CMD java -jar /opt/bino/bino.jar --spring.profiles.active=${PROFILE}
