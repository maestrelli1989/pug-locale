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
	const businessMenuItemTrigger = $(".menu #business-trigger");
	const businessSubMenu = $("#business-sub-menu");
	const userMenuItemTrigger = $(".menu #user-trigger");
	const userSubMenu = $("#user-sub-menu");
	const companyMenuItemTrigger = $(".menu #company-trigger");
	const companySubMenu = $("#company-sub-menu");
	const developersMenuItemTrigger = $(".menu #developers-trigger");
	const developersSubMenu = $("#developers-sub-menu");

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

	$(businessMenuItemTrigger).mouseover(() => {
		$(userSubMenu).removeClass('active-menu');
		$(companySubMenu).removeClass('active-menu');
		$(developersSubMenu).removeClass('active-menu');
		$(businessSubMenu).addClass('active-menu');
	});

	$(businessMenuItemTrigger).mouseleave(() => {
		$(businessSubMenu).removeClass('active-menu');
	});

	$(userMenuItemTrigger).mouseover(() => {
		$(businessSubMenu).removeClass('active-menu');
		$(companySubMenu).removeClass('active-menu');
		$(developersSubMenu).removeClass('active-menu');
		$(userSubMenu).addClass('active-menu');
	});

	$(userMenuItemTrigger).mouseleave(() => {
		$(businessSubMenu).removeClass('active-menu');
	});

	$(companyMenuItemTrigger).mouseover(() => {
		$(businessSubMenu).removeClass('active-menu');
		$(userSubMenu).removeClass('active-menu');
		$(developersSubMenu).removeClass('active-menu');
		$(companySubMenu).addClass('active-menu');
	});

	$(companyMenuItemTrigger).mouseleave(() => {
		$(businessSubMenu).removeClass('active-menu');
	});
	
	$(developersMenuItemTrigger).mouseover(() => {
		$(businessSubMenu).removeClass('active-menu');
		$(userSubMenu).removeClass('active-menu');
		$(companySubMenu).removeClass('active-menu');
		$(developersSubMenu).addClass('active-menu');
	});

	$(developersMenuItemTrigger).mouseleave(() => {
		$(businessSubMenu).removeClass('active-menu');
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#business-sub-menu, #business-sub-menu *, #business-trigger)")) {
			$(businessSubMenu).removeClass('active-menu');
		}
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#user-sub-menu, #user-sub-menu *, #user-trigger)")) {
			$(userSubMenu).removeClass('active-menu');
		}
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#company-sub-menu, #company-sub-menu *, #company-trigger)")) {
			$(companySubMenu).removeClass('active-menu');
		}
	});

	$(window).click(({target}) => {
		if($(target).is(":not(#developers-sub-menu, #developers-sub-menu *, #developers-trigger)")) {
			$(developersSubMenu).removeClass('active-menu');
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
	$("#user-account-sidebar").addClass('user-account-sidebar-active');
}

function hideUserAccountSidebar() {
	$("#user-account-sidebar").removeClass('user-account-sidebar-active');
}