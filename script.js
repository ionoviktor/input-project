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
    try {
        let responseFromServer = await fetch('https://dummyjson.com/posts')

        let parsedResponse = await responseFromServer.json();
    
    
        const posts = parsedResponse.posts;

        const ul = document.createElement('ul');

        posts.slice(0,5).forEach((post) => {
            const li = document.createElement('li');
            li.innerHTML = `
            Id: ${post.id} <br>
            Tittle: ${post.title} <br>
            Body: ${post.body}<br><br>`

            ul.append(li)
        })


        popUpWindow.append(ul)
        
    
    } catch (err) {
        console.debug(err);
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