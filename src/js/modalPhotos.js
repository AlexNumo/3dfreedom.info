const btn = document.querySelector('.masonry');
const imgPic = document.querySelectorAll('.masonry__img-task')
const backdrop = document.querySelector('.backdrop');
const imgSrc = document.querySelector('.modal-window__img');
const bodyEl = document.querySelector('body');
const btnBack = document.querySelector('.modal-window__back');
const btnNext = document.querySelector('.modal-window__next')
let listImg = []

listImg.push(...imgPic)

const listImgPicture = listImg.map(({children}) => {
    return children[0].src
})
let counter = 0;

const modalOpen = (even) => {
    even.preventDefault()
    if (even.target.nodeName !== "IMG") {
        return
    }
    counter = Number(even.target.parentElement.attributes.id.value);
    btnNext.addEventListener('click', nextImg);
    btnBack.addEventListener('click', backImg)
    bodyEl.setAttribute("style", "overflow: hidden");
    imgSrc.setAttribute('src', listImgPicture[counter]);
    backdrop.classList.add('is-active');
    backdrop.addEventListener('click', modalClose)
}
const nextImg = () => {
    if (counter === 11) {
        return
    }
    counter = counter + 1;
    imgSrc.setAttribute('src', listImgPicture[counter]);
}
const backImg = () => {
    if (counter === 0) {
        return
    }
    counter = counter - 1
    imgSrc.setAttribute('src', listImgPicture[counter]);
}
const modalClose = (even) => {
    even.preventDefault()
    if (even.target.className !== "backdrop is-active") {
        return
    }
    bodyEl.setAttribute("style", "");
     imgSrc.setAttribute('src', '');
    backdrop.removeEventListener('click', modalClose);
    backdrop.classList.remove('is-active');
}
btn.addEventListener('click', modalOpen);