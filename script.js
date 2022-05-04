'use strict';

const button = document.querySelector('.button'),
      popUpWindow = document.querySelector('.popUpWindow');



function showInfoInWindowOnClick() {
    button.addEventListener('click', () => {
        setTimeout(getDataFromServer, 1000);
        showPopUpWindow();
    })
}

async function getDataFromServer() {
    let response = await fetch('https://dummyjson.com/posts')
        .then(res => res.json())

    const posts = response.posts;


    if(response.ok) {
        popUpWindow.innerHTML = posts.slice(0,5).map((post) => {
            return `
               Id: ${post.id} <br>
               Tittle: ${post.title} <br>
               Body: ${post.body}<br><br>`
        })
    } else {
        popUpWindow.innerHTML = 'Произошла ошибка';
    }

}

function showPopUpWindow() {
    popUpWindow.style.display = "flex";
}

function hidePopUpWindow() {
    popUpWindow.style.display = "none";
}

showInfoInWindowOnClick();