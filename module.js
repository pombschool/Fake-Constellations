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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function help() {
    user = document.getElementById("key").value;
    if(user == "Goodwin"){
        localStorage.setItem("user", "Mrs. Goodwin");
        localStorage.setItem("roomname", "Goodwin")
        document.getElementById("key").value = "";
        window.location = "Help.html";
    }
    else if(user == "$hreyas"){
        localStorage.setItem("user", "Shreyas");
        localStorage.setItem("roomname", "Shreyas")
        document.getElementById("key").value = "";
        window.location = "Help.html";
    }
    else if(user == "All") {
        localStorage.setItem("user", "All");
        document.getElementById("key").value = "";
        window.location = "AllHelp.html";
    }
    else {
        document.getElementById("key").style = "background-color: red;";
        document.getElementById("body").style = "border-color: red;";
        document.getElementById("key").value = "";
    };
}