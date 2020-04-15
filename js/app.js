"use strict";
const details = document.getElementsByClassName('content__data__info__details_cheked')[0];
const viewDetails = document.getElementsByClassName('content__data__info__details')[0];
const avatarPerson = document.getElementsByClassName('side-Bar__avatar')[0];
const editAvatarPerson = document.getElementsByClassName('side-Bar__avatar_edit')[0];


details.addEventListener('click', () => {
        viewDetails.style.display = 'none';
        details.innerHTML = 'Показать подробности';
        document.removeEventListener('click');
});

avatarPerson.onmouseover = function() {
    editAvatarPerson.style.display = 'block';
}

avatarPerson.onmouseout = function() {
       editAvatarPerson.style.display = 'none';
}