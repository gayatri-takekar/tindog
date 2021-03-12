var randomColor = Math.floor(Math.random()*16777215).toString(16);

 var changeColor = document.querySelector("#title");

 changeColor.style.backgroundColor = "#" + randomColor;


 var changeColor2 = document.querySelector("#testimonials");
 changeColor2.style.backgroundColor = "#" + randomColor;

 var changeColor3 = document.querySelector("#press");
 changeColor3.style.backgroundColor = "#" + randomColor;


 
 for(i =0; i<3;i++){

    var changeColor4 = document.querySelectorAll(".icon")[i];
    changeColor4.style.color = "#" + randomColor;
 }

 