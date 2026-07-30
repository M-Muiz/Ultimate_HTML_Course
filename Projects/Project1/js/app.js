// Header Shadow on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }

});

// Fade Animation

const elements = document.querySelectorAll("main img, main p");

elements.forEach(el=>{
    el.classList.add("fade");
});

window.addEventListener("load",()=>{

    elements.forEach((el,index)=>{

        setTimeout(()=>{

            el.classList.add("show");

        },300*index);

    });

});

// Navigation Hover Animation

const links=document.querySelectorAll("header a");

links.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform="translateY(-3px)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform="translateY(0px)";

    });

});

// Logo Click Animation

const logo=document.querySelector(".logo img");

logo.addEventListener("click",()=>{

    logo.animate([
        {transform:"rotate(0deg) scale(1)"},
        {transform:"rotate(10deg) scale(1.1)"},
        {transform:"rotate(-10deg) scale(1.1)"},
        {transform:"rotate(0deg) scale(1)"}
    ],{

        duration:600

    });

});

// Smooth Page Load

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity 1s";

    document.body.style.opacity="1";

});