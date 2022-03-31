const button = document.querySelector('.button'),
      popUpWindow = document.querySelector('.popUpWindow');


button.addEventListener('click', () => {
    showPopUpWindow();
    showPopUpSetTimeOut();
})

popUpWindow.addEventListener('click', (e) => {
    console.dir(e.target);
})


function showPopUpSetTimeOut() {
    setTimeout(() => {
        popUpWindow.innerHTML = 'Загружено';
    }, 1000)
}

function showPopUpWindow() {
    popUpWindow.style.display = "flex";
}

function hidePopUpWindow() {
    popUpWindow.style.display = "none";
}