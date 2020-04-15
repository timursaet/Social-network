"use strict";
const details = document.getElementsByClassName('content__data__info__details_cheked')[0];
const viewDetails = document.getElementsByClassName('content__data__info__details')[0];
const avatartFilter = document.getElementsByClassName('side-Bar__avatar_ed')[0];
const avatarPerson = document.getElementsByClassName('side-Bar__avatar')[0];
const editAvatarPerson = document.getElementsByClassName('side-Bar__avatar_edit')[0];

details.addEventListener('click', () => {
        viewDetails.style.display = 'grid';
        details.innerHTML = 'Скрыть подробности';
        document.removeEventListener('click');
});

avatarPerson.onmouseover = function() {
    avatartFilter.style.filter = 'grayscale(.75)';
    editAvatarPerson.style.display = 'block';
}

avatarPerson.onmouseout = function() {
    avatartFilter.style.filter = 'none';
    editAvatarPerson.style.display = 'none';
}