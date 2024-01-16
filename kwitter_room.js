
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

const firebaseConfig = {
      apiKey: "AIzaSyAEI6tJh52YNT-B3q3DYQgBW-iAvzl91q0",
      authDomain: "prueba-c18fe.firebaseapp.com",
      databaseURL: "https://prueba-c18fe-default-rtdb.firebaseio.com",
      projectId: "prueba-c18fe",
      storageBucket: "prueba-c18fe.appspot.com",
      messagingSenderId: "10581032031",
      appId: "1:10581032031:web:04bf94e26d18e63d7c2fea"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Te damos la bienvenida, " + user_name + "!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {

      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

      Room_names = childKey;

      console.log("Nombre de la sala: " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";

      document.getElementById("output").innerHTML += row;

      });});
}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",room_name);
 window.location ="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location="index.html";
}