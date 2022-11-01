
var firebaseConfig = {
      apiKey: "AIzaSyDpx9FLPiAChyjUU-kYrR1wHfUqOphztx8",
      authDomain: "kwitter-6bb5d.firebaseapp.com",
      databaseURL: "https://kwitter-6bb5d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bb5d",
      storageBucket: "kwitter-6bb5d.appspot.com",
      messagingSenderId: "1378736175",
      appId: "1:1378736175:web:d7bd979623ba5dc363ceda"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+ Room_names + "</div>"
   document.getElementById("ouput").innerHTML =  row;
//End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
