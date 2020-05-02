var navbar = document.querySelector("nav.navBar");
var circular44 = document.querySelector("img.imgIn");

var sticky = navbar.offsetTop;
var sendOn = false;

window.onscroll = function(){scrollFunct()};

const startX44 = circular44.x;
const startY44 = circular44.y;
var maxMove = 5;
var addIntoX;
var addIntoY;
window.addEventListener("mousemove", function(e){
    
    // if (circular44.x + e.movementX >= startX44+maxMove){
    //     false
    //     // circular44.style.left = addIntoX.toString()+"px";
    // }
    // if(circular44.y + e.movementY >= startY44+maxMove){
    //     false
    //     // circular44.style.left = addIntoX.toString()+"px";
    // }
    // if (circular44.x - e.movementX <= startX44-maxMove){
    //     false
    //     // circular44.style.left = addIntoX.toString()+"px";
    // }
    // if(circular44.y - e.movementY <= startY44-maxMove){
    //     false
    //     // circular44.style.left = addIntoX.toString()+"px";
    // }
    // else{
        // circular44.style.left = (e.x-circular44.x).toString()+"px";
        // circular44.style.top = (e.y-circular44.y).toString()+"px";
        circular44.style.left = e.movementX*1.2.toString()+"px";
        circular44.style.top = e.movementY*1.2.toString()+"px";

        console.log(e.movementX.toString()+"px", e.movementY.toString()+"px")
    // }
});



function scrollFunct(){
    if (window.pageYOffset>sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
};

function dropShow(){
    if (sendOn == false){
        var sender = document.querySelector(".dropShow");
        sender.classList.remove("dropShow");
        sender.classList.add("emailSend");
        sendOn = true;
    }else{
        var sender = document.querySelector(".emailSend");
        sender.classList.remove("emailSend");
        sender.classList.add("dropShow");
        sendOn = false;
    }
};
