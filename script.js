/* ==========================================
   AOS Animation
========================================== */

AOS.init({

    duration:1000,
    once:true,
    easing:"ease-in-out"

});

/* ==========================================
   Typing Effect
========================================== */

const words = [

    "Computer Science Graduate",
    "Frontend Developer",
    "Python Developer",
    "AI Enthusiast",
    "React Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type(){

    let current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(type,deleting ? 60 : 110);

}

type();

/* ==========================================
   Custom Cursor
========================================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* ==========================================
   Cursor Grow
========================================== */

document.querySelectorAll("a,button,.skill,.card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.width="40px";
cursor.style.height="40px";
cursor.style.opacity=".4";

});

item.addEventListener("mouseleave",()=>{

cursor.style.width="20px";
cursor.style.height="20px";
cursor.style.opacity="1";

});

});

/* ==========================================
   Smooth Scroll
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ==========================================
   Navbar Shadow on Scroll
========================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

nav.style.background="rgba(0,0,0,.65)";
nav.style.boxShadow="0 8px 25px rgba(0,0,0,.3)";

}

else{

nav.style.background="rgba(0,0,0,.35)";
nav.style.boxShadow="none";

}

});

/* ==========================================
   Reveal Animation
========================================== */

const reveal = document.querySelectorAll(".glass,.skill,.card,.item");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

reveal.forEach(el=>observer.observe(el));
/* =====================================================
   tsParticles Background
===================================================== */

tsParticles.load("particles", {
    background: {
        color: {
            value: "transparent"
        }
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                area: 800
            }
        },

        color: {
            value: ["#7C3AED","#06B6D4","#ffffff"]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: {
                min:2,
                max:5
            }
        },

        links: {

            enable:true,

            distance:150,

            color:"#7C3AED",

            opacity:.25,

            width:1

        },

        move:{

            enable:true,

            speed:1.8,

            direction:"none",

            random:false,

            straight:false,

            outModes:{
                default:"bounce"
            }

        }

    },

    interactivity:{

        events:{

            onHover:{
                enable:true,
                mode:"grab"
            },

            onClick:{
                enable:true,
                mode:"push"
            },

            resize:true

        },

        modes:{

            grab:{
                distance:180,
                links:{
                    opacity:.8
                }
            },

            push:{
                quantity:4
            }

        }

    }

});


/* =====================================================
   Mobile Menu
===================================================== */

const menu = document.querySelector(".menu");
const navLinks = document.querySelector("nav ul");

menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});


/* =====================================================
   Close Menu After Click
===================================================== */

document.querySelectorAll("nav ul li a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   Active Navbar Link
===================================================== */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* =====================================================
   Hero Fade
===================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    hero.style.opacity = 1-(window.scrollY/700);

});


/* =====================================================
   Scroll Progress Bar
===================================================== */

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.background="linear-gradient(90deg,#7C3AED,#06B6D4)";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});


/* =====================================================
   3D Card Tilt Effect
===================================================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});


/* =====================================================
   Floating Profile Glow
===================================================== */

const profile=document.querySelector(".profile-card");

let angle=0;

function glow(){

angle+=0.4;

profile.style.boxShadow=`

0 0 40px rgba(124,58,237,.35),

${Math.sin(angle)*20}px

${Math.cos(angle)*20}px

50px rgba(6,182,212,.25)

`;

requestAnimationFrame(glow);

}

glow();
/* ==========================================
   Scroll To Top Button
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* ==========================================
   Magnetic Buttons
========================================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

button.style.transform=

`translate(${x*0.15}px,${y*0.15}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});


/* ==========================================
   Animated Counters
========================================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.textContent=Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.textContent=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
   Mouse Spotlight
========================================== */

const spotlight=document.createElement("div");

spotlight.style.position="fixed";

spotlight.style.width="300px";

spotlight.style.height="300px";

spotlight.style.borderRadius="50%";

spotlight.style.pointerEvents="none";

spotlight.style.background=

"radial-gradient(circle, rgba(124,58,237,.18), transparent 70%)";

spotlight.style.zIndex="-1";

document.body.appendChild(spotlight);

document.addEventListener("mousemove",(e)=>{

spotlight.style.left=e.clientX-150+"px";

spotlight.style.top=e.clientY-150+"px";

});


/* ==========================================
   Floating Blobs
========================================== */

const blobs=document.querySelectorAll(".blob");

blobs.forEach((blob,index)=>{

let angle=index*120;

function animateBlob(){

angle+=0.4;

blob.style.transform=

`translate(

${Math.sin(angle/40)*30}px,

${Math.cos(angle/40)*30}px

)`;

requestAnimationFrame(animateBlob);

}

animateBlob();

});


/* ==========================================
   Page Loader
========================================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});


/* ==========================================
   Reveal Sections
========================================== */

const hidden=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

hidden.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s ease";

revealObserver.observe(section);

});


/* ==========================================
   Console Signature
========================================== */

console.log("%cPortfolio Developed by Aleeza Ahmed",

"color:#7C3AED;font-size:18px;font-weight:bold;");