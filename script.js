
$(document).ready(function(){

console.log("Script included!");

// Marking an ingredient after buying it
$("li").click(function(){
     $(this).toggleClass("green-cell");});
// Marking your spot inside ingredient list
$("span").click(function(){
     $(this).toggleClass("yellow-cell");});
//hide all images

   $("img").click(function(){
     $(this).hide();});



   //changes Header color
   $("header").mouseover(function(){
     $(this).css("background-color","green");});
   
   $("header").mouseout(function(){
     $(this).css("background-color","red");});

    //changes header text color
    $("h1").mouseover(function(){
     $(this).css("color","rgba(0,0,0,0.9)");});
   
   $("h1").mouseout(function(){
     $(this).css("color","rgba(255,255,255,0.9)");});

   //changes image border color, width, style
   $(".recipe-image").mouseover(function(){
     $(this).css("border","5px dashed green");});
   
   $(".recipe-image").mouseout(function(){
     $(this).css("border","1px solid red");});

   //changes images background color
   $(".recipe-image").mouseover(function(){
     $(this).css("background-color","white");});
   
   $(".recipe-image").mouseout(function(){
     $(this).css("background-color","rgba(255,255,255,0)");}); 

});