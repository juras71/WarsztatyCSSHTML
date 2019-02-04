document.addEventListener("DOMContentLoaded", function () {
//Zadanie 1

    var clairImg = document.getElementById('clair')
    console.log(clairImg)
    var margaritaImg = document.getElementById('margarita')
    console.log(margaritaImg)
    clairImg.addEventListener('mouseover', function () {
        this.firstElementChild.style.display='none'
    })
    clairImg.addEventListener('mouseout', function () {
        this.firstElementChild.style.display='inline'
    })
    margaritaImg.addEventListener('mouseover', function () {
        this.firstElementChild.style.display='none'
    })
    margaritaImg.addEventListener('mouseout', function () {
        this.firstElementChild.style.display='inline'
    })

//Zadanie 2
    var nextBtn = document.getElementById('nextButton')
    var prevBtn = document.getElementById('prevButton')
    console.log(prevBtn,nextBtn)
    var chairList = document.querySelector('.slider').querySelectorAll('li')

    var chairIndex=0
    nextBtn.addEventListener('click', function () {
        if (chairIndex < chairList.length - 1) {
            chairIndex += 1
        }

        if (chairIndex < chairList.length) {
            chairList[chairIndex].classList.add('visible')
            chairList[chairIndex - 1].classList.remove('visible')
        }
    })
    prevBtn.addEventListener('click', function () {
        if (chairIndex > 0) {
            chairIndex -= 1
        }
        if (chairIndex >= 0) {
            chairList[chairIndex].classList.add('visible')
            chairList[chairIndex + 1].classList.remove('visible')
        }
    })
})
