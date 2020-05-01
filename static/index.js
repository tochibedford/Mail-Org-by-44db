var navbar = document.querySelector("nav.navBar");

var sticky = navbar.offsetTop;
var sendOn = false;


window.onscroll = function(){scrollFunct()};


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