var config = {
  apiKey: 'AIzaSyCeEBspOIcgxJ0hSRytGnuKnHI4cdkxfKU',
  authDomain: 'satbrowserpush.firebaseapp.com',
  databaseURL: 'https://satbrowserpush.firebaseio.com',
  projectId: 'satbrowserpush',
  storageBucket: 'satbrowserpush.appspot.com',
  messagingSenderId: '1027207114693'
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
navigator.serviceWorker.register('./sw.js').then(registration => {
  messaging.useServiceWorker(registration);

  messaging
    .requestPermission()
    .then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
      return messaging.getToken();
    })
    .then(function(token) {
      document.getElementById('token').innerHTML = 'Seu token: ' + token;
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
});

messaging.onMessage(function(payload) {
  console.log('onMessage: ', payload);
});
