(()=>{
    let date = new Date()
    let month = [1,2,3,4,5,6,7,8,9,10,11,12]
    let main = document.getElementById('main')
    if(date.getDate() === 14 && month[date.getMonth()] === 2){
        document.title = "1 món quà cho em";
    }else{
        main.innerHTML = "<h1>Project 142</h1>"
    }
    
    let moon = document.getElementById('moon');
    let stars = document.getElementById('stars');
    let moutains_behind = document.getElementById('moutains_behind');
    let mountains_front = document.getElementById('mountains_front');
    // let text = document.getElementById('text');
    
    
    window.addEventListener('scroll', ()=>{
        let value = window.scrollY
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        moutains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        // text.style.marginRight = value * 2.7 + 'px';
        // text.style.marginTop = value * 1.5 + 'px';
    })
})();