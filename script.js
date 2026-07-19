/*=========================================
    IAN GATHECHA PORTFOLIO
    script.js
=========================================*/

// =============================
// Smooth Scroll for Navigation
// =============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});

// =============================
// Navbar Background on Scroll
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(8,21,45,0.96)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.background = "rgba(8,21,45,.85)";
        header.style.boxShadow = "none";

    }

});

// =============================
// Reveal Sections on Scroll
// =============================

const revealElements = document.querySelectorAll(

    ".card, .project-card, .service-card, .contact-card, .about-grid, .resume-box"

);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// =============================
// Typing Effect
// =============================

const typingElement = document.querySelector(".tagline");

const text = "Crafting stories through sound.";

let index = 0;

function typeText(){

    if(!typingElement) return;

    typingElement.textContent = "";

    index = 0;

    const timer = setInterval(() => {

        typingElement.textContent += text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(timer);

        }

    },70);

}

window.addEventListener("load", typeText);

// =============================
// Floating Cards
// =============================

const cards = document.querySelectorAll(

    ".card, .project-card, .service-card"

);

cards.forEach((card,index)=>{

    card.style.animation = `floatCard 4s ease-in-out ${index * .2}s infinite`;

});

// =============================
// Back To Top Button
// =============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =============================
// Current Year
// =============================

const copyright = document.querySelector(".copyright");

if(copyright){

    const year = new Date().getFullYear();

    copyright.innerHTML = `© ${year} Ian Gathecha. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully");