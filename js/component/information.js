define(function () {
	
	let link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = 'css/style.css';
        document.getElementsByTagName("head")[0].appendChild(link);
        
    return `<div class="content__data__info">
                <div class="content__data__info_name">Саетгареев Тимур</div>
                <div class="content__data__info_status">Хороший и общительный человек</div>
                <div class="content__data__info_data">День рождения</div>  
                <span class="content__data__info_viewDate">09.10.1997</span>
                <div class="content__data__info_city">Город</div> 
                <span class="content__data__info_viewCity">Уфа</span>
                <div class="content__data__info_sp">Семейное положение</div>
                <span class="content__data__info_viewSp">Ищу тебя</span>
                <div class="content__data__info__details_cheked">Показать подробности</div>
                <div class="content__data__info__details">
                    <div class="content__data__info_edu">Образование</div> 
                    <span class="content__data__info_viewEdu">БГУ 2020</span>
                    <div class="content__data__info_job">Место работы</div>
                    <span class="content__data__info_viewJob">IT Тензор</span>
                </div>
            </div>`;
	
});