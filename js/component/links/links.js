define(()  => {
    'use strict';
    
    let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'js/component/links/style.css';
    document.getElementsByTagName("head")[0].appendChild(link);

    return `<div class="side-Bar__link">
    
            <div class="side-Bar__link_img">
                <img src="img/fav.png" alt="Поклонники">
                <p title="Поклонники">Поклонники</p>
            </div>
            
            <div class="side-Bar__link_img">
                <img src="img/int.png" alt="Интересное">
                <p title="Интересное">Интересное</p>
            </div>

            <div class="side-Bar__link_img">
                <img src="img/friends.png" alt="Друзья товарищи">
                <p title="Друзья товарищи">Друзья товарищи</p>
            </div>

            <div class="side-Bar__link_img">
                <img src="img/video.png" alt="Видосы">
                <p title="Видосы">Видосы</p>
            </div>

            <div class="side-Bar__link_img">
                <img src="img/photo.png" alt="Фотки">
                <p title="Фотки">Фотки</p>
            </div>

            <div class="side-Bar__link_img">
                <img src="img/music.png" alt="Музыка">
                <p title="Музыка">Музыка</p>
            </div>

        </div>`;
});
