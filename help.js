user_name = localStorage.getItem("user");
room_name = localStorage.getItem("roomname");
document.getElementById("name").innerHTML = user_name;
var firebaseConfig = {
    apiKey: "AIzaSyCaG3h_ucaMzyVlpGXB-6nNSk8eGPkx2rs",
    authDomain: "constellations-f8f62.firebaseapp.com",
    databaseURL: "https://constellations-f8f62-default-rtdb.firebaseio.com",
    projectId: "constellations-f8f62",
    storageBucket: "constellations-f8f62.appspot.com",
    messagingSenderId: "918076456711",
    appId: "1:918076456711:web:ad89d6708c266c69c9cfa2",
    measurementId: "G-RS6VJFRFWG"
  };
  
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    var help = "<h3 class='eye-p'>" + message_data["1"] +"</h3>"
    document.getElementById("output").innerHTML += help;
//end code
    } });  }); }
getData();

function redirect() {
    window.location = "https://sandhyas14.github.io/Kwitter/"
}