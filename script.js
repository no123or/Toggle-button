// console.log("Hello World!");
function change_Btn(){
let circle = document.getElementById("button");
let body = document.body;
let rectangle = document.getElementById("rectangle");
let head1 = document.getElementById("heading1");
let head2 = document.getElementById("heading2");

   if (rectangle.style.justifyContent === 'flex-start') {
      body.style.backgroundColor = "black";
   rectangle.style.backgroundImage = 'url("./Assets/night1.jpg")';
   rectangle.style.justifyContent = "flex-end";
   circle.style.backgroundColor = "black";
   circle.style.float = "left";
   circle.style.transform = "translateX(2%)";
   circle.style.transition = "transform 2s";
   head1.style.color = "white";
   head2.style.color = "white";
   } else {
      body.style.backgroundColor = "rgb(241, 169, 181)";
      rectangle.style.backgroundImage = 'url("./Assets/morning.jpg")';
      rectangle.style.justifyContent = "flex-start";
      circle.style.backgroundColor = "pink";
      circle.style.float = "right";
      circle.style.transform = "translateX(0%)";
      circle.transition = "translate 2s";
      head1.style.color = "black";
      head2.style.color = "black";
   }
}