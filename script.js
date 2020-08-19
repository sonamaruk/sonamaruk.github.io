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

  var favFood = document.getElementById("food");

  function revealFood(){
   favFood.style.backgroundColor =(favFood.style.backgroundColor == "cornflowerblue")? "palevioletred" : "cornflowerblue";
   favFood.innerHTML = (favFood.innerHTML == "Penne Alla Vodka")? "" : "Penne Alla Vodka" ; 
  }


  var favShow =  document.getElementById("show");


  function revealShow(){
   favShow.style.backgroundColor =(favShow.style.backgroundColor == "cornflowerblue")? "palevioletred" : "cornflowerblue";
   favShow.innerHTML = (favShow.innerHTML == "Lost")? "" : "Lost" ; 
  }


  var favMovie =  document.getElementById("movie");

 function revealMovie(){
  favMovie.style.backgroundColor =(favMovie.style.backgroundColor == "cornflowerblue")? "palevioletred" :   "cornflowerblue";  
  favMovie.innerHTML = (favMovie.innerHTML == "Ferris Bueller's Day Off")? "" : "Ferris Bueller's Day Off" ; 
  }

  var favDrink =  document.getElementById("drink");

 function revealDrink(){
  favDrink.style.backgroundColor =(favDrink.style.backgroundColor == "cornflowerblue")? "palevioletred" :   "cornflowerblue";  
  favDrink.innerHTML = (favDrink.innerHTML == "Thai Iced Tea")? "" : "Thai Iced Tea" ; 
  }



var favSeason =  document.getElementById("season");

 function revealSeason(){
  favSeason.style.backgroundColor =(favSeason.style.backgroundColor == "cornflowerblue")? "palevioletred" :   "cornflowerblue";  
  favSeason.innerHTML = (favSeason.innerHTML == "Spring")? "" : "Spring" ; 
  }




var favBook =  document.getElementById("book");

 function revealBook(){
  favBook.style.backgroundColor =(favBook.style.backgroundColor == "cornflowerblue")? "palevioletred" :   "cornflowerblue";  
  favBook.innerHTML = (favBook.innerHTML == "Moon Palace")? "" : "Moon Palace" ; 
  }




favFood.addEventListener("mouseleave",revealFood);
favFood.addEventListener("mouseover",revealFood);
favShow.addEventListener("mouseleave",revealShow);
favShow.addEventListener("mouseover",revealShow);
favMovie.addEventListener("mouseleave",revealMovie);
favMovie.addEventListener("mouseover",revealMovie);
favDrink.addEventListener("mouseleave",revealDrink);
favDrink.addEventListener("mouseover",revealDrink);
favSeason.addEventListener("mouseleave",revealSeason);
favSeason.addEventListener("mouseover",revealSeason);
favBook.addEventListener("mouseleave",revealBook);
favBook.addEventListener("mouseover",revealBook);