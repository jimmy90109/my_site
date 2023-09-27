// JavaScript Document

/*
function abc(){
	alert('123');
}
*/

/*
//buttonSmooth
function add_smoothscroll(){
	var container = document.getElementById('container');
	container.classList.add('smooth-container');
}
function remove_smoothscroll(){
	
	var container = document.getElementById('container');
	container.classList.remove('smooth-container');
	setTimeout(add_smoothscroll,1000);
}
*/

document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
window.addEventListener("orientationchange", function() {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
});


function scrollHeader(){
	let value = this.scrollY;
	
	//scrollHeader
	let header = document.getElementById('header');
	if(value >= 10)	header.classList.add('scroll-header');
	else			header.classList.remove('scroll-header');
	
	//pinBg
	let bg = document.getElementById('bg');
	bg.style.opacity = 100 + value*-0.2 + '%';
	let home = document.getElementById('home');
	home.style.opacity = 100 + value*-0.2 + '%';
	home.style.top = 50 + value*0.1+'%' ;
	
}
window.addEventListener('scroll',scrollHeader);


/*
//bg

function pinBg(){
	
}*/
