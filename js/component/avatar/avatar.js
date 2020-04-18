define(["server/users"], function (data) {
    'use strict';
    
    let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'js/component/avatar/style.css';
    document.getElementsByTagName("head")[0].appendChild(link);

    let photo = data.avatar.photo;
    
    return ` <div class="side-Bar__avatar">
                <img src="${photo}" class="side-Bar__avatar_avatar" title="Аватар пользователя" alt="Аватар пользователя">
            </div>`;
});