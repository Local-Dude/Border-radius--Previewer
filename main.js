let left = document.querySelector('.left')
let right = document.querySelector('.right')
let BottonLeft = document.querySelector('.bleft')
let BottonRight = document.querySelector('.brigth')
let span = document.querySelector('span')
let btn = document.querySelector('button')
let border = document.querySelector('.border-example')

btn.addEventListener('click', ()=>{
    border.style.borderRadius = `${left.value.replace(/[A-Za-zА-Яа-яЁё]/, '')}px ${right.value}px ${BottonRight.value}px ${BottonLeft.value}px`
    span.textContent = `border-radius: ${left.value}px ${right.value}px ${BottonRight.value}px ${BottonLeft.value}px`
})
