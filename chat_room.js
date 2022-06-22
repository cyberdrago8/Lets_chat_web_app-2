const firebaseConfig = {
    apiKey: "AIzaSyCH8DtD_eW4m5zGkWAohw3VV4pW1x6iX6w",
    authDomain: "lets-chat-web-app-2-3f58f.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2-3f58f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2-3f58f",
    storageBucket: "lets-chat-web-app-2-3f58f.appspot.com",
    messagingSenderId: "288445491314",
    appId: "1:288445491314:web:02d899c505a61da3663aeb"
  };

firebase.initializeApp(firebaseConfig);


function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "chat_room.html";
}