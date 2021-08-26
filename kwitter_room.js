
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAxGBbtJmaDosvky_NNSJhvbLxZ87LdAiI",
      authDomain: "kwitter-989c7.firebaseapp.com",
      databaseURL: "https://kwitter-989c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-989c7",
      storageBucket: "kwitter-989c7.appspot.com",
      messagingSenderId: "747995430963",
      appId: "1:747995430963:web:0f9e2110b1f6062fa62346"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").childKey(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      //End code

      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
      window.location = "index.html";  
}

