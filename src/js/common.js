/*
	Javascript code for the UaPay website project
	Version: 1.0
	Created: 10.12.2019
	Author: Serhii Tiutin
	Modified by: Serhii Tiutin
	Owner: UaPay
	Website: https://uapay.ua/
*/

$(() => {

	/*
		List of global constants
	*/
	
	const primaryTags = $("html, body");

	// Header
	const businessMenuItemTrigger = $(".menu .menu-item #business-trigger");
	const businessSubMenu = $(".menu .menu-item #business-sub-menu");
	const userMenuItemTrigger = $(".menu .menu-item #user-trigger");
	const userSubMenu = $(".menu .menu-item #user-sub-menu");
	const companyMenuItemTrigger = $(".menu .menu-item #company-trigger");
	const companySubMenu = $(".menu .menu-item #company-sub-menu");
	const developersMenuItemTrigger = $(".menu .menu-item #developers-trigger");
	const developersSubMenu = $(".menu .menu-item #developers-sub-menu");

	// Scrolling block at the "Industry solutions" page
	const firstTrigger = $("#first-trigger");
	const firstBlock = $("#first-block");
	const secondTrigger = $("#second-trigger");
	const secondBlock = $("#second-block");
	const thirdTrigger = $("#third-trigger");
	const thirdBlock = $("#third-block");
	const fourthTrigger = $("#fourth-trigger");
	const fourthBlock = $("#fourth-block");
	const fifthTrigger = $("#fifth-trigger");
	const fifthBlock = $("#fifth-block");
	
	const hamburger = $(".burger");

	/*
		Toggle effect at the Header sub menu
	*/

	$(businessMenuItemTrigger).click(() => {
		$(userSubMenu).slideUp(100);
		$(companySubMenu).slideUp(100);
		$(developersSubMenu).slideUp(100);
		$(businessSubMenu).slideToggle(500);
	});

	$(userMenuItemTrigger).click(() => {
		$(businessSubMenu).slideUp(100);
		$(companySubMenu).slideUp(100);
		$(developersSubMenu).slideUp(100);
		$(userSubMenu).slideToggle(500);
	});

	$(companyMenuItemTrigger).click(() => {
		$(businessSubMenu).slideUp(100);
		$(userSubMenu).slideUp(100);
		$(developersSubMenu).slideUp(100);
		$(companySubMenu).slideToggle(500);
	});
	
	$(developersMenuItemTrigger).click(() => {
		$(businessSubMenu).slideUp(100);
		$(userSubMenu).slideUp(100);
		$(companySubMenu).slideUp(100);
		$(developersSubMenu).slideToggle(500);
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#business-sub-menu, #business-sub-menu *, #business-trigger)")) {
			$(businessSubMenu).slideUp(500);
		}
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#user-sub-menu, #user-sub-menu *, #user-trigger)")) {
			$(userSubMenu).slideUp(500);
		}
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#company-sub-menu, #company-sub-menu *, #company-trigger)")) {
			$(companySubMenu).slideUp(500);
		}
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#developers-sub-menu, #developers-sub-menu *, #developers-trigger)")) {
			$(developersSubMenu).slideUp(500);
		}
	});

	/*
		Smooth scroll effect at the "Industry solutions" page
	*/

	$(firstTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(firstBlock).offset().top
		}, 700);
	});
	
	$(secondTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(secondBlock).offset().top
		}, 700);
	});

	$(thirdTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(thirdBlock).offset().top
		}, 700);
	});

	$(fourthTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(fourthBlock).offset().top
		}, 700);
	});

	$(fifthTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(fifthBlock).offset().top
		}, 700);
	});

	/*
		Display mobile menu
	*/

	$(hamburger).click(() => {
		$(".mobile-menu").toggleClass("mobile-menu-active");
	});

	/*
		Languages switcher
	*/

	$(".current-lang").click(() => {
		$(".lang-items").slideToggle(500);
	});

	$(".languages a").click(function() {
		$(".languages a").removeClass('sel');
		$(this).addClass('sel');
		let selectedValue = $(this).text();
		let showLang = selectedValue.substring(0, 2);
		$('.languages .current-lang').html(showLang);
		$('.languages .current-lang').attr("title", selectedValue);
	})

	/*
		Tabs at the home page
	*/

	$('#tabs span:not(:first)').addClass('inactive');
	$('.content-wrapper').hide();
	$('.content-wrapper:first').show();
		
	$('#tabs span').click(function() {
		let tab = $(this).attr('id');
		if($(this).hasClass('inactive')) {
			$('#tabs span').addClass('inactive');           
			$(this).removeClass('inactive');
			$('.content-wrapper').hide();
			$('#'+ tab + 'C').fadeIn('slow');
		}
	});

});

function switchToUaLocale() {
	let path = window.location.pathname;
	let ua_path = path.replace("/ru/", "/ua/").replace("/en/", "/ua/");
	window.location.replace(ua_path);
}

function switchToRuLocale() {
	let path = window.location.pathname;
	let ru_path = path.replace("/ua/", "/ru/").replace("/en/", "/ru/");
	window.location.replace(ru_path);
}

function switchToEnLocale() {
	let path = window.location.pathname;
	let en_path = path.replace("/ua/", "/en/").replace("/ru/", "/en/"); 
	window.location.replace(en_path);
}

function showUserAccountSidebar() {
	$("#user-account-sidebar").show();
}

function hideUserAccountSidebar() {
	$("#user-account-sidebar").hide();
}