//Ex1
let div1 = document.body.querySelector(".div1");
let increment=0;
let div1Right;
let screenWidth;
let timer;

div1.addEventListener("click", e=>{
    timer = setInterval(() => {
        div1Right = div1.getBoundingClientRect().right ;
        screenWidth = document.body.getBoundingClientRect().right;
        increment++;
        div1.style = "left: "+ increment + "px";
        if(screenWidth == div1Right){
            console.log("success");
            increment=0;
        }
    }, 10);
})

let div1StopBtn = document.body.querySelector(".div1_stop");
div1StopBtn.addEventListener("click", ()=>{
    timer = clearInterval(timer);
});


//Ex2
let link = document.body.querySelector(".open_close_div2");
let div2 = document.body.querySelector(".div2");
let cancelClickBtn = document.body.querySelector(".cancel_click_btn");
link.addEventListener("click", openCloseDiv);

function openCloseDiv(){
    if(div2.hidden == true){
        div2.hidden = false;
    }
    else{
        div2.hidden = true;
    }
}
cancelClickBtn.addEventListener("click", ()=>{
    link.removeEventListener("click", openCloseDiv);
})


//Ex3
let date;
let day;
let showNumberBtn = document.body.querySelector(".show_number_btn");
let printNumber = document.body.querySelector(".print_number");

showNumberBtn.addEventListener("click", ()=>{
    date = new Date(document.body.querySelector(".date").value);
    day = date.getDay();
    if(day == 0){
        day =7;
    }
    printNumber.value = day;

});


//Ex4
let phrase = prompt("Enter some phrase", );
let arr = phrase.split(",").join("").split(".").join("").split("!").join("").split(" ");
let liText="";
let ul = document.body.querySelector("ul.output4");

arr[0] = arr[0].toUpperCase();
if(arr.length>=2){
    arr[arr.length-1] = arr[arr.length-1].toLowerCase();
    arr[arr.length-2] = arr[arr.length-2].toLowerCase();
}

for(let el of arr){
    liText +=`<li>${el}</li>`;
}
ul.innerHTML = liText;