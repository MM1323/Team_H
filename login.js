/*global firebase*/
var provider = new firebase.auth.GoogleAuthProvider();
var userData = null;

function logIn(func){
    firebase.auth().onAuthStateChanged(function(user) {
      userData = user;
      if (!user) {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            let username = result.user.displayName.replace(' ','').toLowerCase();
            firebase.database().ref('/users/' + result.user.uid).update({'username':username, 'name':result.user.displayName});
        }).catch(function(error) {
            console.log(error);
        });
      }
      
      func = func || (() => {});
      func(user);
    });
}

// Topic's Page

$(document).ready(function(){
  $(".btn").click(function() {
    $(".btn").css("background-color", "gray");
    $(this).css("background-color", "blue");
  });
});

$('a').click(function (e) {
    e.preventDefault();                   
    var goTo = this.getAttribute("href");
    setTimeout(function(){
         window.location = goTo;
    },3000);       
}); 