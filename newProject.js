


// var pictures = [
// "family2",
// "family3",
//  "family4",
// "family6",
//  "christmas3"];
 var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0] = 'family1'

imgArray[1] = new Image();
imgArray[1] = 'family1';

imgArray[2] = new Image();
imgArray[2] = 'family3';

imgArray[3] = new Image();
imgArray[3] = 'family4';

imgArray[4] = new Image();
imgArray[4] = 'family6';

imgArray[5] = new Image();
imgArray[5] = 'christmas3';


var Btn = document.querySelector("#Btn");
Btn.addEventListener("click", function(){


//DISPLAY BOX
document.getElementById("finalbox").style.display = "block";

//GET INPUT FROM THE FORM
var firstname = document.getElementById("firstname").value 
var lastname = document.getElementById("lastname").value 

//CHECK IF INPUT IS EMPTY
if (firstname === ""){
document.getElementById("notice") = "Input Your Firstname"
}

// MANIPULATE DOM TO SHOW USER`S FULLNAME
document.getElementById("fullname").textContent = firstname + " " + lastname;

// MANIPULATE DOM TO SHOW IMAGES

//   document.getElementById("slideimage1").src= document.getElementById("image1").value 
// document.getElementById("slideimage2").src= document.getElementById("image2").value 
//     document.getElementById("slideimage3").src= document.getElementById("image3").value 
//     document.getElementById("slideimage4").src= document.getElementById("image4").value 
//      document.getElementById("slideimage5").src= document.getElementById("image5").value 


// Upload image from local folder
var loadFile = function(event) {
var output = imgArray[0];
output.src = URL.createObjectURL(event.target.files[0]); //create URL for local file
output.onload = function() {
URL.revokeObjectURL(output.src) // free memory
 }
 };

})



 var images = document.querySelector(".img-container")   
var leftbutton = document.getElementsByClassName("btn-left")
var rightbutton =  document.getElementsByClassName("btn-right")   
var count = 0;

function rightFunction(){
count++;
if(count > imgArray.length - 1){ count = 0;};
images.style.backgroundImage = `url('./images/${imgArray[count]}.jpg')`
console.log (imgArray[count]);
};

function leftFunction(){
count--;
if (count < 0){ count = imgArray.length -1};
console.log(count);
images.style.backgroundImage = `url('./images/${imgArray[count]}.jpg')`
console.log (imgArray[count]);
};



// MANIPULATE DOM TO SHOW IMAGES

//    document.getElementById("slideimage1").src= document.getElementById("image1").value 
//     document.getElementById("slideimage2").src= document.getElementById("image2").value 
//     document.getElementById("slideimage3").src= document.getElementById("image3").value 
//     document.getElementById("slideimage4").src= document.getElementById("image4").value 
//      document.getElementById("slideimage5").src= document.getElementById("image5").value 
// 


/*Upload image from local folder*/
// var loadFile = function(event) {
//   var output = document.getElementById('slideimage6');
//   output.src = URL.createObjectURL(event.target.files[0]); //create URL for local file
//   output.onload = function() {
//     URL.revokeObjectURL(output.src) // free memory
//   }
// };
// console.log(loadFile)


// image slider








// var counter = 1;
// setInterval(function(){
//   document.getElementById('radio' + counter).checked = true;
//   console.log('radio' + counter)
//   counter++;
//   if(counter > 6){
//     counter = 1;
    
//   }
// }, 2000);

