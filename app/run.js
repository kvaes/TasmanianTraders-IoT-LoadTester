var Q = require("q");
var eventHubs = require('eventhubs-js');
const uuidv4 = require('uuid/v4');

console.log(process.env.HOME);

eventHubs.init({
    hubNamespace: process.env.eventHubsNamespace,
    hubName: process.env.eventHubsHubName,
    keyName: process.env.eventHubsKeyName, 
    key: process.env.eventHubsKey 
});

var promise, 
    promises = [],
    iterations = 1000;

for (i = 0; i < iterations; i++) {
    var deviceMessage = {}; 
    deviceMessage.CCSA = uuidv4();
    deviceMessage.CDSA = uuidv4();
    deviceMessage.SentDate = new Date();

    promise = eventHubs.sendMessage({
    	message: deviceMessage,
		deviceId: 'TasmanianDemoDevice',
	});

    promises.push(promise);
}
Q.allSettled(promises).then(function () {
    console.log('All Messages Sent!');
});

