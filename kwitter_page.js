//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCh5m6jspR1qRvDgugSHo1aznU9raLUK1E",
  authDomain: "kwitter-524class.firebaseapp.com",
  databaseURL: "https://kwitter-524class-default-rtdb.firebaseio.com",
  projectId: "kwitter-524class",
  storageBucket: "kwitter-524class.appspot.com",
  messagingSenderId: "918233490165",
  appId: "1:918233490165:web:0726964982d1262179dbbc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
  msg=document.getElementById("msg").value ;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
  } });  }); }
getData();
