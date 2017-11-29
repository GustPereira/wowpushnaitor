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
navigator.serviceWorker.register('./sw.js')
.then((registration) => {
  messaging.useServiceWorker(registration);

  messaging.requestPermission()
  .then(function () {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
      return messaging.getToken();
  })
  .then(function (token) {
      document.getElementById("token").innerHTML = "Seu token: " + token;
  })
  .catch(function (err) {
      console.log('Unable to get permission to notify.', err);
  });
});


messaging.onMessage(function (payload) {
    console.log('onMessage: ', payload);
})