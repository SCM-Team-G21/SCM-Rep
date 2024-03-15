let open1=document.getElementById("open1");
let open2=document.getElementById("open2");
let open3=document.getElementById("open3");
let open4=document.getElementById("open4");
let sinp=document.getElementById("sinp");
let img1=document.getElementById("img1");
let o1=document.getElementById("o1");
let but1=document.getElementById("but1");
let but2=document.getElementById("but2");
let login=document.getElementById("login");
let signup=document.getElementById("signup");
let dologin=document.getElementById("dologin");
let dologin1=document.getElementById("dologin1");
let cross=document.getElementById("cross");
let cross1=document.getElementById("cross1");
let body=document.querySelector("body");
var chance=0;

// Functions
function hover1(){
    o1.style.display="block";   
}
function hover2(){
    o1.style.display="none";
}

function hover9(){
    sinp.style.display="block";
    sinp.style.animation="search23 2s";
    img1.style.transform="rotate(360deg)";
}
function hover10(){
    sinp.style.display="none";
    img1.style.transform="rotate(-0deg)";
}
function choice(){
    if(chance==0){
        hover9()
        chance=1
    }
    else if(chance==1){
        hover10()
        chance=0
    }
}
function loginclick(){
    login.style.display="block";
    body.style.overflowY="hidden";  
}
function loginclick1(){
    login.style.display="none";
    body.style.overflowY="scroll";
}
function dologinslide(){
    dologin.style.animation="loginslide .8s";
    dologin.style.position="absolute";
}
function dologinslide1(){
    dologin1.style.animation="loginslide .8s";
    dologin1.style.position="absolute";
}
function signupclick(){
    signup.style.display="block";
    body.style.overflowY="hidden";
}
function signupclick1(){
    signup.style.display="none";
    body.style.overflowY="scroll";
}
const Search= () => {
  sinp.value.toUpperCase();
}


// mouseover
open1.addEventListener('mouseover',hover1);
o1.addEventListener('mouseover',hover1);



// mouseout
open1.addEventListener('mouseout',hover2);
o1.addEventListener('mouseout',hover2);


// click 
img1.addEventListener('click',choice);
but1.addEventListener('click',loginclick);
cross.addEventListener('click',loginclick1);
but1.addEventListener('click',dologinslide);
but2.addEventListener('click',signupclick);
cross1.addEventListener('click',signupclick1);
but2.addEventListener('click',dologinslide1);

