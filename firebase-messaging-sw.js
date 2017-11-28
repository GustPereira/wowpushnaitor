importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyDtTUYumR5JSXgePJu2qPmxDHXz16QJ9No",
    authDomain: "wowpushnaitor.firebaseapp.com",
    databaseURL: "https://wowpushnaitor.firebaseio.com",
    projectId: "wowpushnaitor",
    storageBucket: "wowpushnaitor.appspot.com",
    messagingSenderId: "413334928836"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title = "Hello World";
    const options = {
        body: 'payload.data.status'
    };
    return self.registration.showNotification(title, options);
});
