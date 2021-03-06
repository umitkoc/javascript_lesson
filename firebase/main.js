const forms = document.forms["form"];
const table=document.getElementById('table')
var firebaseConfig = {
apiKey: "AIzaSyC3xHLHFQ-XnhAqcBX9nQFQ79QttMJ9LHk",
authDomain: "tablejs-698f4.firebaseapp.com",
databaseURL: "https://tablejs-698f4-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "tablejs-698f4",
storageBucket: "tablejs-698f4.appspot.com",
messagingSenderId: "525790095951",
appId: "1:525790095951:web:5acaf74c22fadfcd7d583a"
};
firebase.initializeApp(firebaseConfig);









function Control() {
  return forms["name"].value != "" && forms["surname"].value != "";//true
}

function Add(event) {
  if (event.key == "Enter" && Control()) {
    firebase
      .database()
      .ref("/"+Date.now())
      .set({
        name: forms["name"].value,
        surname: forms["surname"].value,
    });
    forms.reset();
    Get()
  }
 
}


function Get(){
   table.innerHTML = "";
   var query=firebase.database().ref('/').orderByKey();
   query.once('value').then(function(snapshot){
       snapshot.forEach(function(childSnapshot){
           var key=childSnapshot.key;
           var childata=childSnapshot.val();
           Table(key,childata)
       });
   })

}

function Table(key,data){
    
    var main=document.createElement('tr')
    var name=document.createElement('td')
    name.innerText=data["name"]
    main.appendChild(name)
    var surname = document.createElement("td");
    surname.innerText=data["surname"]
    main.appendChild(surname)
    var id = document.createElement("td");
    id.innerText=key
    id.setAttribute('id','key')
    main.appendChild(id)
    var td = document.createElement("td");
    var button=document.createElement('button')
    button.setAttribute('onclick','Delete('+key+')')
    button.innerText='Delete'
    td.appendChild(button)
    main.appendChild(td)
    table.appendChild(main)
}

function Delete(id){
    firebase.database().ref('/'+id).remove()
    Get()
}