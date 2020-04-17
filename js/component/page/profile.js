define(["component/information", "component/gallery", "component/wall","component/header","component/avatar", 
"component/links", "component/message"], function(information, gallery, wall, header, avatar, links, message){
	
	return `<div class="wrapper">
            ${header}
            <div class="wrapper__content content">
                <div class="content__data">
                    ${information}
                    ${gallery}         
                    ${wall}
                </div>
                <div class="content__side-Bar side-Bar">
                    ${avatar}
                    ${links}                   
                    ${message}            
                </div>
            </div>
        </div>`;
});