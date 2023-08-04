let color1 = document.getElementsByClassName("color1");
let h_modal = document.getElementById("h_modal");
let bc_modal = document.getElementById("bc_modal");
let p_modal_button = document.getElementById("p_modal_button");
let n_modal_button = document.getElementById("n_modal_button");
let c_modal = document.getElementById("c_modal");
let container = document.getElementById("container");
let getId_image = [];


// -------------------------------FUNCTIONS--------------------------------- //
// console.log(color1)//dom ao
// for(let i = 0; i < color1.length; i++){
//     color1[i].addEventListener("click",clickImage)
//     // if(color1[i].id != ''){
//     //     getId_image.push({
//     //         id: color1[i].id,
//     //         src: color1[i].children[0].attributes[0].value
//     //     });
//     // }
//     if(color1[i].children.length != 0){
//         // if(getId_image.find((f)=> f.src == color1[i].children[0].attributes[0].value)){
//             getId_image.push({
//                 // id: color1[i].id,
//                 src: color1[i].children[0].attributes[0].value
//             });
//         // }
//     }
//     console.log(color1)
//     console.log(color1[i].children[0].attributes[0].value) //color1[i].children[0].src // se ra url
// }

// function clickImage(property){
//     h_modal.style.zIndex = "10";
//     h_modal.style.opacity = 1;
//     container.style.zIndex = "0";
//     // if(getId_image.find((f)=> f.id == property.target.parentNode.id) != undefined){
//         //     c_modal.children[0].attributes[0].value = getId_image.find((f)=> f.id == property.target.parentNode.id).src;
//         //     console.log("testst")
//         // }
//     if(getId_image.find((f)=> f.src == property.target.attributes[0].value) != undefined){
//         c_modal.children[0].attributes[0].value = getId_image.find((f)=> f.src == property.target.attributes[0].value).src;
//     }
//     // console.log(getId_image.find((f)=> f.src == 'image/72c17c9f004ddd13845c.jpg'))
//     // console.log(property.target.attributes[0].value)
//     // console.log("image click");
// }

if(bc_modal != null || p_modal_button != null || n_modal_button != null){
    bc_modal.addEventListener("click", function(){
        h_modal.style.zIndex = "0";
        h_modal.style.opacity = 0;
        container.style.zIndex = "10";
    })
    p_modal_button.addEventListener("click", function(){
        let index = getId_image.indexOf(c_modal.children[0].attributes[0].value);
        if(index > 0){
            if(getId_image[index-1].includes('mp4')){
                c_modal.innerHTML = `
                <video width="100%" controls id="play" autoplay>
                    <source src="${getId_image[index-1]}" type="video/mp4">
                </video>
                `;
                // c_modal.children[0].style.display = "none";
                // console.log(c_modal.children[0])
            }else{
                c_modal.innerHTML = `<img src="${getId_image[index-1]}" alt="">`;
            }
        }else{
            index = 0;
            if(getId_image[index].includes('mp4')){
                c_modal.innerHTML = `
                <video width="100%" controls id="play" autoplay>
                    <source src="${getId_image[index]}" type="video/mp4">
                </video>
                `;
            }else{
                c_modal.innerHTML = `<img src="${getId_image[index]}" alt="">`;
            }
        }
    })
    
    n_modal_button.addEventListener("click", function(){
        
        
        // console.log(c_modal.children[0])
        
        let index = getId_image.indexOf((c_modal.children[0].localName != 'video')?c_modal.children[0].src:c_modal.children[0].children[0].src);
        // console.log(getId_image[index+1].includes('mp4'))
        // console.log(index)
        // console.log({c_modal})
        // console.log(c_modal.children[0].attributes[0].value)
        // console.log(c_modal.children[0].localName)
        // console.log(c_modal.children[0].src)








        if(index+1 < getId_image.length){
            if(index == -1){
                if(getId_image[index+2].includes('mp4')){
                    c_modal.innerHTML = `
                    <video width="100%" controls id="play" autoplay>
                        <source src="${getId_image[index+1]}" type="video/mp4">
                    </video>
                    `;
                    // c_modal.children[0].style.display = "none";
                    // console.log(c_modal.children[0])
                    // console.log(getId_image[index+1])
                    // console.log(getId_image)
                    // console.log(index);
                }else{
                    c_modal.innerHTML = `<img src="${getId_image[index+1]}" alt="">`;
                    // console.log('co vao day k')
                }
            }else{
                if(getId_image[index+1].includes('mp4')){
                c_modal.innerHTML = `
                <video width="100%" controls id="play" autoplay>
                    <source src="${getId_image[index+1]}" type="video/mp4">
                </video>
                `;
                // c_modal.children[0].style.display = "none";
                // console.log(c_modal.children[0].children[0].src)
                // console.log(getId_image[index+1])
                // console.log(getId_image)
                // console.log(index);
            }else{
                c_modal.innerHTML = `<img src="${getId_image[index+1]}" alt="">`;
                // console.log('co vao day k')
            }
            }
        }else{
            index = 0;
            if(getId_image[index].includes('mp4')){
                c_modal.innerHTML = `
                <video width="100%" controls id="play" autoplay>
                    <source src="${getId_image[index]}" type="video/mp4">
                </video>
                `;
            }else{
                c_modal.innerHTML = `<img src="${getId_image[index]}" alt="">`;
            }
        }
    })
}


// function find(needle, haystack) {
//     var results = [];
//     var idx = haystack.indexOf(needle);
//     while (idx != -1) {
//         results.push(idx);
//         idx = haystack.indexOf(needle, idx + 1);
//     }
//     return results;
// }

// console.log(getId_image);
// console.log(getId_image.find((f)=> f.src == 'image/72c17c9f004ddd13845c.jpg'));
// console.log(getId_image.filter((item, index) => getId_image.indexOf(item) === index))
// console.log(getId_image.find((f)=> f.id == 'bdh_image_3'))
// console.log(c_modal.children[0].attributes[0].value);

// var index = getId_image.map(function (img) { return img.src; }).indexOf('image/72c17c9f004ddd13845c.jpg');
// console.log(index);

function clickImageNew(e) {
    const image = document.createElement('img');
    const video = document.createElement('video');
    const source = document.createElement('source');
    // console.log(`ashdjksd`);
    // console.log(e);
    h_modal.style.zIndex = "10";
    h_modal.style.opacity = 1;
    container.style.zIndex = "0";   
    // console.log(e.target.currentSrc)
    // console.log('clickImage');
    if(e.target.currentSrc.includes('mp4')){
        // c_modal.children[0].attributes[0].value = ""
        // c_modal.appendChild(video)
        // video.appendChild(source);
        // source.src = e.target.currentSrc;
        // video.autoplay = true;
        c_modal.innerHTML = `
                <video width="100%" controls id="play" autoplay>
                    <source src="${e.target.currentSrc}" type="video/mp4">
                </video>
                `;
    }else{
        // c_modal.appendChild(image);
        // image.src = e.target.currentSrc;
        c_modal.children[0].attributes[0].value = e.target.currentSrc
    }
        
}

function getData(image){
    getId_image.push(image)
    // console.log(getId_image);
}
export {getData, clickImageNew}