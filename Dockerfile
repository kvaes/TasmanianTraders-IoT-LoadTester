FROM node:boron


WORKDIR /usr/src/app

COPY app /usr/src/app

ENV eventHubsNamespace your-eventhub-namespace
ENV eventHubsHubName your-eventhub-name
ENV eventHubsKeyName your-eventhub-keyname
ENV eventHubsKey your-eventhub-key

CMD [ "/usr/scr/app/run.sh" ]
