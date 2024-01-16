
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
  user_name=localStorage.getItem("user_name");
  user_name=localStorage.getItem("room_name").value;
  function send()
  {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey = "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Inicia código
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"</h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id + "value"+like+"onclick='updateLike(this.id)'>Likes"+like+"</button>";

row=name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML=row;

//Termina código
 } });  }); }
getData();

function updateLike(message_id)
{
console.log("presiono el boton de me gusta"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_like=Number(likes)+1;
console.log(update_like);

firebase.database().ref(room_name).child(message_id).updateLike({
like:updateLike
})

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter_html");
}