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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
