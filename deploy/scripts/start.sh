#!/bin/bash

echo "===== change workdir & get envs ====="
cd /home/ubuntu/ziara-admin-dashboard
. deploy.env
cat deploy.env


if [ $(docker ps -f name=$APP_NAME-blue -q) ]
then
    NEW="$APP_NAME-green"
    OLD="$APP_NAME-blue"
else
    NEW="$APP_NAME-blue"
    OLD="$APP_NAME-green"
fi

echo "==== docker log in to registry ===="
aws --profile default configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}
aws --profile default configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}
aws --profile default configure set region ${AWS_REGION}
aws --profile default configure set output "json"
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${REGISTRY_URI}

echo "==== docker pull and retag latest image ===="
docker tag ${REGISTRY_URI}/${IMAGE_NAME}:latest ${REGISTRY_URI}/${IMAGE_NAME}:old
docker pull ${REGISTRY_URI}/${IMAGE_NAME}:${REV_ID}
docker tag ${REGISTRY_URI}/${IMAGE_NAME}:${REV_ID} ${REGISTRY_URI}/${IMAGE_NAME}:latest


echo "Stopping ${OLD} container"
docker-compose --project-name=$OLD stop admin_dashboard
docker ps -aq | xargs docker stop | xargs docker rm

echo "Starting ${NEW} container"
docker-compose --project-name=$NEW up -d

echo "Waiting..."
sleep 5s

if [ $(docker ps -f name=$NEW -q) ]
then
    echo "New deployment up..."
else
    echo "New deployment failed to start, exiting..."
    exit 1;
fi

echo "==== docker debug & log out ===="
docker logout ${REGISTRY_URI}

echo "==== cleanup ===="
docker rmi --force ${REGISTRY_URI}/${IMAGE_NAME}:${REV_ID}
docker rmi --force ${REGISTRY_URI}/${IMAGE_NAME}:old
docker container prune --force
