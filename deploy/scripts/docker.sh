#!/bin/sh

. deploy.env

echo "===== docker  build latest image ===="
docker build --build-arg APP_PORT=${APP_PORT} --rm=false -t ${IMAGE_NAME}:$REV_ID .

echo "==== docker run latest image ===="
docker kill ziara_admin_dashboard_dev || true && docker container prune --force
docker run -it --rm --network=host --name ziara_admin_dashboard_dev "${IMAGE_NAME}":$REV_ID

