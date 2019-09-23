var Config = {
    apiKey: "AIzaSyD3toBaRG2VzLu3idDGBgncdlMQpcKucBQ",
    authDomain: "project-uit.firebaseapp.com",
    databaseURL: "https://project-uit.firebaseio.com",
    projectId: "project-uit",
    storageBucket: "project-uit.appspot.com",
    messagingSenderId: "183119464386",
    appId: "1:183119464386:web:d8c8bfe5b5ed9e0779785b"
  };
  // Initialize Firebase
    firebase.initializeApp(Config);

// after initializiation

var db = firebase.database();

   
  function add(){

    function Obj( name,email,password,gender){

                this.name = name ,
                this.email = email ,
                this.password = password,
                this.gender = gender;
            }
        
            let name = document.getElementById("name").value ;
            let email = document.getElementById("email").value ;
            let password = document.getElementById("password").value ;
            let gender = document.getElementById("gender").value ;
            let address = document.getElementById("address").value ;
            let city = document.getElementById("city").value ;
            let state = document.getElementById("state").value ;
            let zip = document.getElementById("zip").value ;
        
        
            
        
          let obj1 = new  Obj(name,email,password,gender);
        
        
                // window.localStorage.setItem("obj",  JSON.stringify(obj1)  );
              
                firebase.auth().createUserWithEmailAndPassword(email, password);

                firebase.database().ref(obj1.name ).set(obj1);

               

               
               
        
  
        }


function deleted(){
    let name = document.getElementById("name").value ;
            let email = document.getElementById("email").value ;

    db.collection(x).doc(y).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  
}

function read(){
    let x = document.getElementById("inp").value ;
    let y = document.getElementById("in").value ;
    var docRef = db.collection(x).doc(y);

docRef.get().then(function(doc) {
    if (doc.exists) {
        document.write( JSON.stringify(doc.data().id));
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}


function update(){
    let x = document.getElementById("inp").value ;
    let y = document.getElementById("in").value ;

    var washingtonRef = db.collection(x).doc(y);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
       class : ""
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

}





// function add(){

//     let x = document.getElementById("inp").value ;
//     let y = document.getElementById("in").value ;

// firebase.auth().createUserWithEmailAndPassword(x, y)

// .then( function(success){ console.log("success");  }  )



// .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });}