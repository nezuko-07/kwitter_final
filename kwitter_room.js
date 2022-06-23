var firebaseConfig = {
      apiKey: "AIzaSyCdZHVRPaIYdTDRr8yLcGe-74vViv6CzIc",
      authDomain: "kwitter-c1259.firebaseapp.com",
      databaseURL: "https://kwitter-c1259-default-rtdb.firebaseio.com/",
      projectId: "kwitter-c1259",
      storageBucket: "kwitter-c1259.appspot.com",
      messagingSenderId: "974395169399",
      appId: "1:974395169399:web:e74135b11738368c528472",
      measurementId: "G-M7CVVCS252"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "hola "+user_name+"!";  

    function addRoom(){    
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
      
      }
      

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}

getData();
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("index.html");
      
 }

 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location.replace("kwitter_page.html");
 }
