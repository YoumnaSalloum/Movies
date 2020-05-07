var movies=[{name:'Ready or not',type:'comedy horror film ',stars:['Samara Weaving','Adam Brody','Mark OBrien'],dateOfpublish:2019},
{name:'Me before you',type:'romantic drama film',stars:['Emilia Clarke','Sam Claflin','Janet McTeer' ],dateOfpublish:2016},
{name:'Divergent',type:'science fiction action film',stars:['Shailene Woodley','Theo James'],dateOfpublish:2014},
{name:'Maleficent',type:' fantasy film ',stars:["Angelina Jolie","Sharlto Copley","Elle Fanning","Sam Riley"],dateOfpublish:2014}]

 

// var ides=["readyornot","mebeforeyou","divergent","Maleficent"]

// function display(element){
// 	return "name: "+ element.name+"<br>" + "type: " + element.type + "<br>"+ "stars: " + element.stars +"<br>"+ "dateOfpublish: " + element.dateOfpublish
// }



function show(){

// 	var result=document.getElementById("demo")
// 	var id
//   each(movies,function(element,i){
//   	id=document.getElementById(ides[i]).innerHTML
// result.innerHTML += display(element)+"<br>"+id+"<br>";

//   })

 var displayBox = document.createElement("div");
 displayBox.setAttribute("id", "divv00");
displayBox.innerHTML = "name: "+ movies[0].name+"<br>" + "type: " + movies[0].type + "<br>"+ "stars: " + movies[0].stars +"<br>"+ "dateOfpublish: " + movies[0].dateOfpublish


document.getElementById("div0").appendChild(displayBox);
document.getElementById("divv00").style.color = "#FFFAF0";
 document.getElementById("divv00").style.fontSize = "x-large";

}


function show1(){
 var displayBox = document.createElement("div");
 displayBox.setAttribute("id", "divv11");
displayBox.innerHTML = "name: "+ movies[1].name+"<br>" + "type: " + movies[1].type + "<br>"+ "stars: " + movies[1].stars +"<br>"+ "dateOfpublish: " + movies[1].dateOfpublish

document.getElementById("div1").appendChild(displayBox);
document.getElementById("divv11").style.color = "#FFFAF0";
 document.getElementById("divv11").style.fontSize = "x-large";

}

function show2(){

 var displayBox = document.createElement("div");
 displayBox.setAttribute("id", "divv");

displayBox.innerHTML = "name: "+ movies[2].name+"<br>" + "type: " + movies[2].type + "<br>"+ "stars: " + movies[2].stars +"<br>"+ "dateOfpublish: " + movies[2].dateOfpublish
document.getElementById("div2").appendChild(displayBox);
document.getElementById("divv").style.color = "#FFFAF0";
 document.getElementById("divv").style.fontSize = "x-large";


}

function show3(){

 var displayBox = document.createElement("div");
 displayBox.setAttribute("id", "divvv");
displayBox.innerHTML = "name: "+ movies[3].name+"<br>" + "type: " + movies[3].type + "<br>"+ "stars: " + movies[3].stars +"<br>"+ "dateOfpublish: " + movies[3].dateOfpublish
document.getElementById("div3").appendChild(displayBox);
document.getElementById("divvv").style.color = "#FFFAF0";
 document.getElementById("divvv").style.fontSize = "x-large";


}
function each(coll, f) {
  if (Array.isArray(coll)) { 
    for (var i = 0; i < coll.length; i++) { 
      f(coll[i], i); 
    } 
  } else { 
     for (var key in coll) { 
       f(coll[key], key); 
     } 
   } 
 } 
  function filter(coll, predicate) {/// predicate = the inline function
  var acc=[]
 each(coll,function(element,ind){
   //console.log(element)
if(predicate(element)){
   acc[ind]=element 
}
 });
 return acc 
}

var ides=["readyornot","mebeforeyou","divergent","Maleficent"]

function Search(){
var inputMovie=document.getElementById("input-task").value
return each(movies,function(element,i){
if(element.name===inputMovie){

document.getElementById(ides[i]).style.border='5px solid red'
document.getElementById("input-task").value=" "
return 0

}
// alert("The best romantic movie is: Me Before You ")
})
}
// function choose(){
// 	var d=document.getElementById("choose")
// 	var displayText=d.options[d.selectedIndex].text;
// 	return each(movies,function(element,i){
// 		if(element.type===displayText){
// 	console.log(displayText)
// 	document.getElementById(ides[i]).style.border='5px solid red'
// 		return 0

// }
// })








// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   var str = "a,b,c,d,e,f";
//   var arr = str.split(",");
//   document.getElementById("demo").innerHTML = arr[0];
// }

