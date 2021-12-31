function help() {
    user = document.getElementById("key").value;
    if(user == "Goodwin"){
        localStorage.setItem("user", "Mrs. Goodwin");
        document.getElementById("key").value = "";
        window.location = "Help.html";
    }
    else if(user == "Shreyas"){
        localStorage.setItem("user", "Shreyas");
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