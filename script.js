
const alertDiv = document.querySelector(".alert")
const alertBtnClose = document.querySelector(".alert>button")


alertBtnClose.addEventListener("click" ,removeAlert)
function removeAlert(){

    alertDiv.style.transform = "translate(0, 900px)"
}
  

const imgArray = ['img/t1.jpg ', 'img/t2.jpg ', 'img/t3.jpg' , 'img/t5jpg']

nextBtn.addEventListener('click', nextImg)

setInterval(nextImg, 3000)

let flag = 0

function nextImg() {
    flag++
    if (flag > imgArray.length - 1) {
        flag = 0
    }
    imgSlider.setAttribute('src', imgArray[flag])
}

prevBtn.addEventListener('click', prevImg)

function prevImg() {
    flag--
    if (flag < 0) {
        flag = imgArray.length - 1
    }
    imgSlider.setAttribute('src', imgArray[flag])
}