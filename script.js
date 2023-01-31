(()=>{
    let date = new Date()
    let month = [1,2,3,4,5,6,7,8,9,10,11,12]
    let main = document.getElementById('main')
    if(date.getDate() === 1 && month[date.getMonth()] === 2){
        document.title = "Valentine hạnh phúc nha bé iu";
    }else{
        main.innerHTML = "<h1>Project 142</h1>"
    }
    
    let moon = document.getElementById('moon');
    let stars = document.getElementById('stars');
    let moutains_behind = document.getElementById('moutains_behind');
    let mountains_front = document.getElementById('mountains_front');
    let play = document.getElementById('play');
    let section = document.getElementById('body_sec');
    // let section_block = document.getElementsByClassName('sub_main');
    // let text = document.getElementById('text');


    let screenHeight = window.screen.height; //chia cho 100 la ra dc 1vh
    let screenWidth = window.screen.width;

    play.addEventListener('loadedmetadata', ()=>{
        let videoHeight = play.videoHeight;
        // let videoWidth = play.videoWidth;
        
        if(screenHeight >= 1080){
            section.style.height = 110+'vh';
        }else{
            section.style.height = 80 + videoHeight/(screenHeight/100) + 'vh';
        }
        // console.log(videoHeight/(screenHeight/100))
        // console.log(section)
    })

    window.addEventListener('scroll', ()=>{
        let value = window.scrollY
        stars.style.left = value * 0.25555555555555 + 'px';
        moon.style.top = value * 1.0555555555555555 + 'px';
        moutains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        // text.style.marginRight = value * 2.7 + 'px';
        // text.style.marginTop = value * 1.5 + 'px';
    })
})();