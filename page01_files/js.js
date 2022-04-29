jQuery(document).ready(function(){

	/*jQuery(".sort_by_open span").click(function(){
		jQuery(".sort_by_open ul").slideToggle(300);
	});
	jQuery(".sort_by_open ul li").click(function(){
		var sort_by = jQuery(this).text();
		jQuery(".sort_by_open span").text(sort_by);
		jQuery(".sort_by_open ul").slideUp(300);
	});*/
	/*jQuery(".nav_li li:eq(0) a").click(function(event){
		event.preventDefault();
		jQuery(".div_applications, .section_body").slideUp(300);
		jQuery(".personal_information").slideDown(300);
		jQuery(".header").removeClass('active');
	});
	jQuery(".nav_li li:eq(1) a").click(function(event){
		event.preventDefault();
		jQuery(".div_applications").slideDown(300);
		jQuery(".section_body, .personal_information").slideUp(300);
		jQuery(".header").removeClass('active');
	});*/
	/*jQuery(".logo a").click(function(event){
		event.preventDefault();
		jQuery(".section_body").slideDown(300);
		jQuery(".personal_information, .personal_information").slideUp(300);
		jQuery(".header").removeClass('active');
	});*/
	jQuery(".link_application, .link_daily").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_application, .modal_bg").slideDown(300);
	});
	jQuery(".link_auto").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_auto, .modal_bg").slideDown(300);
	});
	jQuery(".start_work").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_start_work, .modal_bg").slideDown(300);
	});
	jQuery(".end_work").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_end_work, .modal_bg").slideDown(300);
	});
	jQuery(".link_car").click(function(event){
		event.preventDefault();
		jQuery(".map_modal ").slideUp(300);
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_car, .modal_bg").slideDown(300);
	});
	jQuery(".link_daily2").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_daily, .modal_bg").slideDown(300);
	});
	jQuery(".link_sun").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_daily").slideUp(300);
		jQuery(".modal_sun, .modal_bg").slideDown(300);
	});
	jQuery(".link_period").click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
		jQuery(".modal_period, .modal_bg").slideDown(300);
	});
	jQuery("/*.nav_li li:eq(2) a, */.div_comment a").click(function(event){
		event.preventDefault();
		jQuery(".modal_bg, .modal_messages").slideDown(300);
		jQuery(".header").removeClass('active');
	});
	jQuery("/*.nav_li li:eq(0) a, .nav_li li:eq(1) a, */.modal_bg, .close").click(function(event){
		event.preventDefault();
		jQuery(".modal_start_task, .modal_start_work, .modal_end_work, .modal_bg, .modal_messages, .modal_answer, .modal_application, .modal_auto, .modal_car, .modal_daily, .modal_sun, .modal_period").slideUp(300);
	});
	jQuery(".open_close").click(function(event){
				jQuery(".header").removeClass('active');
	});
	jQuery(".nav_open").click(function(event){
				jQuery(".header").addClass('active');
	});
	jQuery(".map_icon").click(function(event){
				jQuery(this).next('.map_modal_one').slideDown(300);
				jQuery('.scroll-pane').jScrollPane();
	});
    jQuery(".map_modal .close").click(function(event){
            jQuery(this).closest('.map_modal').slideUp(300);
	});
    jQuery(".modal_end_task .close").click(function(event){
        jQuery(this).closest('.modal_end_task').slideUp(300);
    });
    jQuery(".modal_return_task .close").click(function(event){
        jQuery(this).closest('.modal_return_task').slideUp(300);
    });
	jQuery(".map_modal_one a").click(function(event){
		event.preventDefault();
		jQuery(this).closest('.map_modal_one').slideUp(300);
		jQuery(this).closest('.map_modal_one').next('.map_modal_two').slideDown(300);

	});
	jQuery(".modal_up a").click(function(event){
		event.preventDefault();
		jQuery(this).closest('.map_modal_two').slideUp(300);
		jQuery(this).closest('.map_modal_two').prev('.map_modal_one').slideDown(300);
	});
	/*jQuery(".btn.btn_red").click(function(event){
		event.preventDefault();
		jQuery(".modal_bg, .modal_answer").slideDown(300);
		jQuery(".header").removeClass('active');
	});*/
	jQuery(".personal_tab ul li:eq(0) a").click(function(event){
		event.preventDefault();
		jQuery(".personal_tab ul li").removeClass('active');
		jQuery(this).closest('li').addClass('active');
		jQuery(".personal_body").slideDown(300);
		jQuery(".personal_tool").slideUp(300);
	});
	jQuery(".personal_tab ul li:eq(1) a").click(function(event){
		event.preventDefault();
		jQuery(".personal_tab ul li").removeClass('active');
		jQuery(this).closest('li').addClass('active');
		jQuery(".personal_body").slideUp(300);
		jQuery(".personal_tool").slideDown(300);
		jQuery('.personal_slider').slick({
            dots: false,
			 slidesToShow: 3,
			slidesToScroll:3,
           infinite: false,
    });
	});
	jQuery(".add_way_click").click(function(){
		jQuery(".add_way").append('<label>Другой способ приезда</label> <input type="text" class="input_1">');
	});
	jQuery(".add_partner_link").click(function(){
		jQuery(".add_partner").append('<div class="select_flex flex"><label>Напарник</label> <select> <option>Выберите из списка</option> <option>Выберите из списка</option> <option>Выберите из списка</option> <option>Выберите из списка</option> </select> </div>');
	});
	jQuery(".add_partner_link2").click(function(){
		jQuery(".add_partner2").append('<div class="select_flex flex"><label>Напарник</label> <select> <option>Выберите из списка</option> <option>Выберите из списка</option> <option>Выберите из списка</option> <option>Выберите из списка</option> </select> </div> <div class="input_time flex"> <label>Время работы напарника с</label> <input type="datetime"> <label>до</label> <input type="datetime"> </div>');
	});

});
/*------------------------------------------------*/


