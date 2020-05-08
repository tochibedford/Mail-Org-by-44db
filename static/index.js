var allField = document.querySelectorAll(".check")
var appp = document.querySelector(".indexApp");
var navbar = document.querySelector("nav.navBar");
var circular44 = document.querySelector("img.imgIn");

var sticky = navbar.offsetTop;
var sendOn = false;

window.onscroll = function(){scrollFunct()};

if (circular44){
    const startX44 = circular44.x;
    const startY44 = circular44.y;
    var maxMove = 5;
    var addIntoX;
    var addIntoY;
    document.onmousemove = function(){
        var x = -((event.clientX * 100 / window.innerWidth)-50)/5 + "%";
        var y = -((event.clientY * 100 / window.innerHeight)-50)/5 + "%";
        circular44.style.left = x;
        circular44.style.top = y;

    }
}else if(appp){
    const startX44 = appp.x;
    const startY44 = appp.y;
    var maxMove = 5;
    var addIntoX;
    var addIntoY;
    document.onmousemove = function(){
        var x = -((event.clientX * 100 / window.innerWidth)-50)/2;
        var y = -((event.clientY * 100 / window.innerHeight)-50)/2;
        appp.style.boxShadow = x + "px " + y + "px " + "20px 5px  rgba(255, 255, 255, 0.137)";
    };
}


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

if(allField[0]){
    allField[0].addEventListener("click", function(){
        allField.forEach(function(item, index){
            if(allField[0].checked == true){
                item.checked = true;
            }else{
                item.checked = false
            }
            
        })
    })
}