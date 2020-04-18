define(["server/users"], (data) => {
	
	let link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = 'js/component/information/style.css';
    document.getElementsByTagName("head")[0].appendChild(link);

    let info = data.info;
        
    return `<div class="content__data__info">
                <div class="content__data__info_name">${info.name}</div>
                <div class="content__data__info_status">${info.status}</div>
                <div class="content__data__info_data">День рождения</div>  
                <span class="content__data__info_viewDate">${info.birthday}</span>
                <div class="content__data__info_city">Город</div> 
                <span class="content__data__info_viewCity">${info.city}</span>
                <div class="content__data__info_sp">Семейное положение</div>
                <span class="content__data__info_viewSp">${info.maitalStatus}</span>
                <div class="content__data__info__details_cheked">Показать подробности</div>
                <div class="content__data__info__details">
                    <div class="content__data__info_edu">Образование</div> 
                    <span class="content__data__info_viewEdu">${info.education}</span>
                    <div class="content__data__info_job">Место работы</div>
                    <span class="content__data__info_viewJob">${info.job}</span>
                </div>
            </div>`;
	
});