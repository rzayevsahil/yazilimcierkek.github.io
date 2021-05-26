const navbar = document.querySelector(".navbar");

const narbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');

const navbarLinks = document.querySelectorAll('.navbar-link');

const progress = document.querySelector('.progress-bars-wrapper');

const progressbarPerecents= [97,80,60,75,90];

window.addEventListener("scroll",()=>{
    mainFn();
});
const mainFn = () =>{
    if(window.pageYOffset >=
        narbarOffsetTop){
        navbar.classList.add("sticky");
        }else{
            navbar.classList.remove("sticky");
        }
    sections.forEach((section,i)=>{
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove("change");
            })
            navbarLinks[i].classList.add("change");
        }
    });
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el,i)=>{
            el.style.width = `${progressbarPerecents[i]}%`;
           el.previousElementSibling.firstElementChild.textContent = progressbarPerecents[i];
        });
    }
}
mainFn();

window.addEventListener('resize',()=>{
     window.location.reload();
});