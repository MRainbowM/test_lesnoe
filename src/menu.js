let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')

burger.addEventListener('click', (e) => {

    let isShow = menu.classList.contains('show')
    if(isShow) {
        menu.classList.remove('show')
        body.classList.remove('hidden-mob-scroll')
    }else {
        menu.classList.add('show')
        body.classList.add('hidden-mob-scroll')
    }
})