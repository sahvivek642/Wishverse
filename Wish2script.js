const params = new URLSearchParams(window.location.search);

const occasion = params.get("occasion") || "Wish";
const receiver = params.get("receiver") || "Friend";
const sender = params.get("sender") || "Someone";
const message = params.get("message") || "Have a wonderful day!";

const gift = document.getElementById("giftBox");
const card = document.getElementById("wishCard");

gift.onclick = function () {

    gift.style.display = "none";
    card.style.display = "block";

    document.getElementById("title").innerHTML =
        "🎉 Happy " + occasion + "!";

    document.getElementById("receiver").innerHTML =
        receiver;

    document.getElementById("message").innerHTML =
        "💖 " + message;

    document.getElementById("sender").innerHTML =
        "From ❤️ " + sender;

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });
const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for(let i=0;i<200;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        d:Math.random()*1
    });
}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    for(let i=0;i<stars.length;i++){

        let s=stars[i];

        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();

        s.y+=s.d;

        if(s.y>canvas.height){
            s.y=0;
            s.x=Math.random()*canvas.width;
        }
    }

    requestAnimationFrame(drawStars);

}

drawStars();
};

