 const main = document.querySelector("#main");
const center = document.querySelector("#circle");
const button = document.querySelector("button");

function randomcolor(){
let color = 'rgba('+(Math.floor(Math.random()*256))+','
+(Math.floor(Math.random()*256))+','
+(Math.floor(Math.random()*256))+','
+Math.random().toFixed(2)+')'
return color


}





function colorChnage(){
    let first = randomcolor()
   let second = randomcolor()
    main.style.background = "linear-gradient(to left," + first + ","+ second + ")"
    button.background = "linear-gradient(to left," + second + ","+ first + ")"
}

center.addEventListener("click" , function(){
    return colorChnage()


})





