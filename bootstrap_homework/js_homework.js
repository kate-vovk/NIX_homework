//Progress Bar
window.onscroll = function(){scrollPercentage()};

function scrollPercentage(){
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.body.querySelector("#myBar").style.width = scrolled + "%";  
}

//Form Validation
let myForm = document.querySelector('#myForm');
let validateBtn = document.querySelector('.validateBtn');
let errorMessage  = document.querySelector(".notValidFormError");
let modalSubmitBtn= document.querySelector("#myModal .submitBtn");

validateBtn.addEventListener('click', (event)=>{
    if(formIsValid() == true){   
        document.querySelector(".triggerModal").click();
    };
});
function formIsValid(){
    let error_mess="";
    let ul = document.createElement('ul');
    if(errorMessage.innerHTML.length !=0){
        errorMessage.innerHTML ="<p>Please fill out fields:</p>";
    }
    if(myForm.name.value ==""){
        error_mess += "name \n";
        document.form.name.focus();
        ul.innerHTML += "<li>name</li>";
    }
    if(myForm.email.value ==""){
        error_mess += "email \n";
        document.form.email.focus();
        
        ul.innerHTML += "<li>email</li>";
    }
    if(myForm.phone.value ==""){
        error_mess += "phone \n";
        document.form.phone.focus();
        
        ul.innerHTML += "<li>phone</li>";
    }
    if(error_mess !=""){
        error_mess = "Please fill out:\n"+error_mess;
        errorMessage.append(ul);
        errorMessage.removeAttribute('hidden');
        return false;
    }
    else{
        errorMessage.innerHTML ="";
        errorMessage.setAttribute('hidden', "");
        return true;
    }
}
modalSubmitBtn.addEventListener("click", ()=>{
    submitForm.click();
});
submitForm.addEventListener("click", ()=>{
    let alert_message ="";
    let name = document.querySelector("#myForm input[name=name]");
    let email = document.querySelector("#myForm input[name=email]");
    let phone = document.querySelector("#myForm input[name=phone]");
    let date = document.querySelector("#myForm input[name=date]");
    if(name.value!=""){
        alert_message +="name: " + name.value+ "\n ";
    }
    if(email.email!=""){
        alert_message +="email: " + email.value+ "\n ";
    }
    if(phone.value!=""){
        alert_message +="phone: " + phone.value+ "\n ";
    }
    if(date.value!=""){
        alert_message +="date: " + date.value+ "\n ";
    }
    let link = document.body.querySelector("#submitForm a");

    //alert data on another page
    localStorage.setItem("alert_message", JSON.stringify(alert_message ));  
    alert_message = JSON.parse(localStorage.getItem("alert_message"));
    window.open('js_alert_page.html?&'+alert_message);

})


//dark mode light mode 
let toggleSwitch = document.body.querySelector(".custom-switch #darkMode");
let toggleSwitchLabel = document.body.querySelector(".custom-switch #darkModeLabel");

toggleSwitch.addEventListener("change", e =>{
    let nav = document.body.querySelector("nav")
    let carousel = document.body.querySelector("#carousel");
    let table = document.body.querySelector("#table");
    let accordion = document.body.querySelector("#accordion");
    let form = document.body.querySelector("#form");

    if(e.target.checked){
        toggleSwitchLabel.innerHTML = "Dark-Mode on";

        document.body.style.color="white";
        document.body.style.backgroundColor="black";

        nav.setAttribute('class', "navbar navbar-expand-sm navbar-dark bg-dark");
        carousel.setAttribute('class', "carousel_container_dark container-fluid p-2");
        table.setAttribute('class', "table_container_dark container-fluid p-2");
        accordion.setAttribute('class', "accordion_container_dark container-fluid p-2");
        form.setAttribute('class', "form_container_dark container-fluid p-2");

    }else{
        toggleSwitchLabel.innerHTML = "Dark-Mode off";

        document.body.style.color="black";
        document.body.style.backgroundColor="white";

        nav.setAttribute('class', "navbar navbar-expand-sm navbar-light bg-light");
        carousel.setAttribute('class', "carousel_container_light container-fluid p-2");
        table.setAttribute('class', "table_container_light container-fluid p-2");
        accordion.setAttribute('class', "accordion_container_light container-fluid p-2");
        form.setAttribute('class', "form_container_light container-fluid p-2");

    }
})


//prohibit to overlook and save code
let keysPressed = {};
document.oncontextmenu = ()=> false;
document.onkeydown = el =>{
    console.log(el.key);
    //F12
    if(el.key =="F12"){
        console.log(el.key);
        return false;
    }
    //CTRL + SHIFT + I ||  Command + Option + I
    //CTRL + U ||  Command + Option + U
    if(el.key=="Dead"){
        return false;
    }
}


//is User Active
window.addEventListener("load", resetTime);
window.addEventListener("click", resetTime);
window.addEventListener("keydown", resetTime);
window.addEventListener("keyup", resetTime);
window.addEventListener("mouseover", resetTime);
window.addEventListener("mouseout", resetTime);
window.addEventListener("mousedown", resetTime);
window.addEventListener("mouseup", resetTime);

let time;
let openedWindow;
function resetTime(){
    clearTimeout(time);
    time=setTimeout(alertUser, 1000 * 60 * 5);
}
function alertUser() {

    if(confirm("Are you still here?")){
        console.log("true");
        resetTime;
    }
    else{
        openedWindow = window.open("js_additional_page.html", "_self");
        console.log("false");
        openedWindow.close();
    }
}

//browser name and browser version
let browserInfo = document.body.querySelector(".browser-info");
let info =`<p class="row align-items-start">Browser: ${window.navigator.appCodeName}</p>`;
info+=`<h10 class="row justify-content-start align-items-start">Version: ${window.navigator.appVersion}</h10>`
browserInfo.innerHTML = info;
//console.log(browserInfo.innerHTML);



//smooth scroll to anchors
let anchors = document.querySelectorAll("a.scroll-to");
for(let anchor of anchors){
    //console.log(anchor.innerHTML);
    anchor.addEventListener("click", e=>{
        e.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
            behavior:'smooth',
            block:'end'
        });
    })
}

