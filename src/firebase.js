import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDC9qig0Qv53vZSzJQ401LAzTKn9VkkljM",
    authDomain: "project5-c80cf.firebaseapp.com",
    databaseURL: "https://project5-c80cf.firebaseio.com",
    projectId: "project5-c80cf",
    storageBucket: "project5-c80cf.appspot.com",
    messagingSenderId: "87318358177"
};
firebase.initializeApp(config);

export default firebase;