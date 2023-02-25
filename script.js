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

console.log("Tong ngay: " + (count));


let printdate = document.getElementById('day');
printdate.innerHTML = count;
console.log(printdate);