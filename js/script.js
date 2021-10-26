var navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', (e)=> {
    let a = document.querySelectorAll('.nav-menu>a');
    for(let i=0; i<a.length; i++){
        a[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
})

document.addEventListener('scroll', (e) => {
    let scroll = this.scrollY;
    console.log(scroll)

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

