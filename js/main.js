//object //property and value
/*var myCat = {
    "name": "Meowsalot",
    "species" :"cat",
    "favFood":"tuna"
}

*/
//array
/*
var myFavColors = ["blue","green","purple"];
*/


/* initializing variables */




//for div
var animalContainer = document.getElementById("animal-info");

//clickEvent
var btn = document.getElementById('btn');




btn.addEventListener("click",function(){
    //anonymous function
    
    //object and array


//JSON

//array of objects

//animals.json
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','js/animals.json'); //download data //send data POST
    
    
ourRequest.onload = function(){
      //console.log(ourRequest.responseText);

    //var ourData = ourRequest.responseText;
       var ourData = JSON.parse(ourRequest.responseText);

        renderHTML(ourData);
        console.log(ourData[0]);
        
      
};


ourRequest.send();
//btn.classList.add("hide-me");
btn.style.visibility="hidden";        
}); //end button event





function renderHTML(data){
    
   var htmlString = ""; 
    
   for(i = 0; i < data.length; i++){
       htmlString +="<p>" + data[i].name + " is a " + data[i].species + ".</p>";
   } 
   animalContainer.insertAdjacentHTML('beforeend',htmlString);
}



