let color1 = document.getElementsByClassName("color1");
let color2 = document.getElementsByClassName("color2");
let color3 = document.getElementsByClassName("color3");
let color4 = document.getElementsByClassName("color4");
let h_modal = document.getElementById("h_modal");
let bc_modal = document.getElementById("bc_modal");
let p_modal_button = document.getElementById("p_modal_button");
let n_modal_button = document.getElementById("n_modal_button");
let c_modal = document.getElementById("c_modal");
let container = document.getElementById("container");
let getId_image = [];



// -------------------------------FUNCTIONS--------------------------------- //
// console.log(color4)
for(let i = 0; i < color1.length; i++){
    color1[i].addEventListener("click",clickImage)
    // if(color1[i].id != ''){
    //     getId_image.push({
    //         id: color1[i].id,
    //         src: color1[i].children[0].attributes[0].value
    //     });
    // }
    if(color1[i].children.length != 0){
        getId_image.push({
            // id: color1[i].id,
            src: color1[i].children[0].attributes[0].value
        });
    }
    // console.log(color1)
    // console.log(color1[i].children[0].attributes[0].value) //color1[i].children[0].src // se ra url
}
for(let i = 0; i < color2.length; i++){
    color2[i].addEventListener("click",clickImage)
    // if(color2[i].id != ''){
    //     getId_image.push({
    //         id: color2[i].id,
    //         src: color2[i].children[0].attributes[0].value
    //     });
    // }
    if(color1[i].children.length != 0){
        getId_image.push({
            // id: color1[i].id,
            src: color2[i].children[0].attributes[0].value
        });
    }
}
for(let i = 0; i < color3.length; i++){
    color3[i].addEventListener("click",clickImage)
    // if(color3[i].id != ''){
    //     getId_image.push({
    //         id: color3[i].id,
    //         src: color3[i].children[0].attributes[0].value
    //     });
    // }
    if(color1[i].children.length != 0){
        getId_image.push({
            // id: color1[i].id,
            src: color3[i].children[0].attributes[0].value
        });
    }
}
for(let i = 0; i < color4.length; i++){
    color4[i].addEventListener("click",clickImage)
    // if(color4[i].id != ''){
    //     getId_image.push({
    //         id: color4[i].id,
    //         src: color4[i].children[0].attributes[0].value
    //     });
    // }
    if(color1[i].children.length != 0){
        getId_image.push({
            // id: color1[i].id,
            src: color4[i].children[0].attributes[0].value
        });
    }
}

function clickImage(property){
    h_modal.style.zIndex = "10";
    container.style.zIndex = "0";
    // if(getId_image.find((f)=> f.id == property.target.parentNode.id) != undefined){
        //     c_modal.children[0].attributes[0].value = getId_image.find((f)=> f.id == property.target.parentNode.id).src;
        //     console.log("testst")
        // }
    if(getId_image.find((f)=> f.src == property.target.attributes[0].value) != undefined){
        c_modal.children[0].attributes[0].value = getId_image.find((f)=> f.src == property.target.attributes[0].value).src;
    }
    // console.log(getId_image.find((f)=> f.src == 'image/72c17c9f004ddd13845c.jpg'))
    // console.log(property.target.attributes[0].value)
    console.log("image click");
}

bc_modal.addEventListener("click", function(){
    h_modal.style.zIndex = "0";
    container.style.zIndex = "10";
    console.log("b_modal");
})

p_modal_button.addEventListener("click", function(){
    c_modal.children[0].attributes[0].value = 'image/72c17c9f004ddd13845c.jpg';
    console.log("previous image");

})

n_modal_button.addEventListener("click", function(){
    console.log("next image");
})


console.log(getId_image);
// console.log(getId_image.find((f)=> f.id == 'bdh_image_3'))
// console.log(c_modal.children[0].attributes[0].value);