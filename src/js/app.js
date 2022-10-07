// console.log(document.getElementsByClassName("button"))

// let a = document.getElementsByClassName("button")

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     addEventListener("click", function(){console.log("hej")});
// }

// a.forEach(a => {
//     addEventListener("click", displayDate);
// });

// a.forEach(button => {
//     addEventListener("click", displayDate);
// });


function knapp() {
    var btn = document.getElementsByClassName("button");
    for (i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function() {
      console.log("you clicked"); });
    }
  }
  
  window.addEventListener("load",function() {
    knapp();
  });