var navMenu = document.querySelector('.nav-menu');
var hamburgerMenu = document.querySelector('.hamburger-menu');

navMenu.addEventListener('click', (e)=> {
    let a = document.querySelectorAll('.nav-menu>a');
    for(let i=0; i<a.length; i++){
        a[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
})

document.addEventListener('scroll', (e) => {
    let scroll = this.scrollY;

    if(scroll < 900 && scroll > 0){
        let a = document.querySelectorAll('.nav-menu>a');
        for(let i=0; i<a.length; i++){
            a[i].classList.remove('selected');
        }
        a[0].classList.add('selected');
    }

    if(scroll < 4126 && scroll > 900){
        let a = document.querySelectorAll('.nav-menu>a');
        for(let i=0; i<a.length; i++){
            a[i].classList.remove('selected');
        }
        a[1].classList.add('selected');
    }

    if(scroll < 5126 && scroll > 4550){
        let a = document.querySelectorAll('.nav-menu>a');
        for(let i=0; i<a.length; i++){
            a[i].classList.remove('selected');
        }
        a[2].classList.add('selected');
    }

    if(scroll < 7982 && scroll > 5500){
        let a = document.querySelectorAll('.nav-menu>a');
        for(let i=0; i<a.length; i++){
            a[i].classList.remove('selected');
        }
        a[3].classList.add('selected');
    }

    if(scroll < 8447 && scroll > 8000){
        let a = document.querySelectorAll('.nav-menu>a');
        for(let i=0; i<a.length; i++){
            a[i].classList.remove('selected');
        }
        a[4].classList.add('selected');
    }
})

/* hamburger menu */
hamburgerMenu.addEventListener('click', (e)=> {
  e.preventDefault();
  let navMenuMobile = document.querySelector('.nav-menu');
  navMenuMobile.classList.toggle('show');
})

/* fade effects */
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("anim-from-down");
};

const hideScrollElement = (element) => {
  element.classList.remove("anim-from-down");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});