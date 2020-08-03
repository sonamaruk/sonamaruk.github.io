function sidebarReveal(){
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar(){
  document.getElementById("mySidebar").style.display = "none";
}

var amountOfLikes = 0 ;
function like(){
  amountOfLikes++ ;  
  console.log(amountOfLikes) ; 
  var likesDisplay = document.getElementById("likes") ; 
  likesDisplay.innerHTML = amountOfLikes + " liked this page" ; 
}