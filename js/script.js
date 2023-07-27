import { getDataFromFireBase } from '../js/firebase.js';
(()=>{
    let g_date = new Date();
    let month_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    let history_date = 13;
    let history_month = 8;
    let history_year = 2022;
    
    let count = 0;
    
    const get_day_of_month = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    
    
    for (let y = history_year; y <= g_date.getFullYear(); y++) {
        if (y < g_date.getFullYear()) {
            for (let m = history_month; m <= 12; m++) {
                if(m == history_month){
                    for (let d = history_date + 1; d <= get_day_of_month(y, m); d++) {
                        count++;
                    }
                }else{
                    for(let d = 1; d <= get_day_of_month(y,m); d++){
                        count++;
                    }
                }
            }
        }else{
            if(history_month == month_data[g_date.getMonth()]){
                for (let d = 1; d <= get_day_of_month(y, history_month); d++) {
                    if (y == g_date.getFullYear() && history_month == month_data[g_date.getMonth()] && d <= g_date.getDate() ) {
                        count++;
                        if(d == g_date.getDate()){
                            break;
                        }
                    }else{
                        count++;    
                    }
                }
            }else{
                for (let m = 1; m <= month_data[g_date.getMonth()]; m++) {
                    for (let d = 1; d <= get_day_of_month(y, m); d++) {
                        if (y == g_date.getFullYear() && m == month_data[g_date.getMonth()] && d <= g_date.getDate() ) {
                            count++;
                            if(d == g_date.getDate()){
                                break;
                            }
                        }else{
                            count++;    
                        }
                    }
                }
            }
        }
    }
    
    // console.log("Tong ngay: " + (count));
    
    
    let printdate = document.getElementById('day');
    printdate.innerHTML = count;
    // console.log(printdate);
    
    
    let quickaccess = document.getElementById('quickaccess');
    let divdate = document.querySelectorAll('.date');
    // console.log(divdate[1].children[0].innerText);
    // console.log(quickaccess);
    let merge = ``;
    for(let i = 1; i < divdate.length; i++) {
        merge += `<a href="#${divdate[i].children[0].id}">${divdate[i].children[0].innerText }</a>`+"\n";
    }
    quickaccess.innerHTML = merge;
    
    
    // let divcontent = document.getElementById('divcontent');
    // let divsub = document.getElementById('divsub');
    // console.log(divcontent);
    // console.log(divsub.clientHeight);
    
    // divcontent.style.setProperty('--height', `${divsub.clientHeight + 20}px`);
    let arr = document.querySelectorAll('.content');
    // console.log(arr[0].children[0].clientHeight);
    
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i].children[0].clientHeight);
        arr[i].style.setProperty('--height', `${arr[i].children[0].clientHeight + 20}px`);
    }


    let menu = document.getElementById("menu");
    let btn_menu = document.getElementById("btn_menu");

    btn_menu.addEventListener("click",()=>{
        if(menu.style.display == "block"){
            menu.style.display = "none";
            btn_menu.innerHTML = "<box-icon name='menu'></box-icon>"
            // btn_menu.style.left = 0;
        }else{
            menu.style.display = "block";
            btn_menu.innerHTML = "<box-icon name='x' ></box-icon>"
            // btn_menu.style.right = 0;
        }
        // console.log(menu.style.display)
    })

    //test
    let sub_main = document.getElementById('sub_main');
    let div_date = document.createElement('div');
    let h2_date = document.createElement('h2');
    let div_content = document.createElement('div');
    let div_sub_content =document.createElement('div');

    sub_main.appendChild(div_date);
    div_date.appendChild(h2_date);
    div_date.appendChild(div_content);
    div_content.appendChild(div_sub_content);

    sub_main.className = "sub_main";
    div_date.className = "date";
    div_content.className = "content";
    div_sub_content.className = "sub_content";

    let test = getDataFromFireBase()
    test.forEach((doc) => {
        sub_main.innerHTML +=     `
        <div class="date">
            <h2 id="${doc.time}">${doc.time}</h2>
            <div class="content">
                <div class="sub_content">
                    ${doc.content}
                </div>
            </div>
            ${doc.image}
        </div>
        `
    })
    // console.log(test);
})();