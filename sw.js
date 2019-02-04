importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase.js');
// Initialize Firebase
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
messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Hello World';
  const options = {
    body: 'payload.data.status'
  };
  return self.registration.showNotification(title, options);
});
