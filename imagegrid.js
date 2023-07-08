let color1 = document.getElementsByClassName("color1");
let color2 = document.getElementsByClassName("color2");
let color3 = document.getElementsByClassName("color3");
let color4 = document.getElementsByClassName("color4");
let b_modal = document.getElementById("h_modal");
let container = document.getElementById("container");

// console.log(color4)
for(let i = 0; i < color1.length; i++){
    color1[i].addEventListener("click",clickImage)
}
for(let i = 0; i < color2.length; i++){
    color2[i].addEventListener("click",clickImage)
}
for(let i = 0; i < color3.length; i++){
    color3[i].addEventListener("click",clickImage)
}
for(let i = 0; i < color4.length; i++){
    color4[i].addEventListener("click",clickImage)
}

function clickImage(){
    b_modal.style.zIndex = "10";
    container.style.zIndex = "0";
    console.log("image click");
}

// color1.addEventListener("click", function(){
//     b_modal.style.zIndex = "10";
//     container.style.zIndex = "0";
//     console.log("color1");
// });

h_modal.addEventListener("click", function(){
    b_modal.style.zIndex = "0";
    container.style.zIndex = "10";
    console.log("b_modal");
})

