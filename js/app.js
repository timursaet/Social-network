"use strict";
const details = document.getElementsByClassName('content__data__info__details_cheked')[0];
const viewDetails = document.getElementsByClassName('content__data__info__details')[0];

details.addEventListener('click', () => {
    viewDetails.style.display = 'none';
    details.innerHTML = 'Показать подробности';
});