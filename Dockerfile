FROM node:boron


WORKDIR /usr/src/app

COPY app /usr/src/app

ENV eventHubsNamespace
ENV eventHubsHubName
ENV eventHubsKeyName
ENV eventHubsKey

CMD [ "/usr/scr/app/run.sh" ]
