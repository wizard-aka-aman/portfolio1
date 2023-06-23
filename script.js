let pageTitle = document.title;

window.addEventListener("blur" , ()=>{
    document.title = "Please come back to Portfolio !!";

})


window.addEventListener("focus" , ()=>{
    document.title = pageTitle;
})


const typed  = new Typed('.multiple-text' , {
    strings:['Web Developer' , 'Youtuber' , 'blogger', 'Student'],
    typeSpeed:50,
    backSpeed:50,
     backdeley :1000,
     loop :true 
     
});



$(document).ready(function(){
    $('.About-image').tilt({
        glare: true,
        maxGlare: .5
    })
})


// --------------------------------
$(document).ready(function(){
	
	// Lift card and show stats on Mouseover
	$('#product-card').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
	});	
	
	// Flip card to the back side
	$('#view_details').click(function(){		
		$('div.carouselNext, div.carouselPrev').removeClass('visible');
		$('#product-card').addClass('flip-10');
		setTimeout(function(){
			$('#product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
				$('#product-front, #product-front div.shadow').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card').removeClass('flip90').addClass('flip190');
			$('#product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();						
				setTimeout(function(){
					$('#product-card').css('transition', '100ms ease-out');			
					$('#cx, #cy').addClass('s1');
					setTimeout(function(){$('#cx, #cy').addClass('s2');}, 100);
					setTimeout(function(){$('#cx, #cy').addClass('s3');}, 200);				
					$('div.carouselNext, div.carouselPrev').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});			
	
	// Flip card back to the front side
	$('#flip-back').click(function(){		
		
		$('#product-card').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card').removeClass('flip190').addClass('flip90');
	
			$('#product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back, #product-back div.shadow').hide();
				$('#product-front, #product-front div.shadow').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card').removeClass('flip90').addClass('flip-10');
			$('#product-front div.shadow').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front div.shadow').hide();
				$('#product-card').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx, #cy').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	

	
	/* ----  Image Gallery Carousel   ---- */
	
	var carousel = $('#carousel ul');
	var carouselSlideWidth = 335;
	var carouselWidth = 0;	
	var isAnimating = false;
	
	// building the width of the casousel
	$('#carousel li').each(function(){
		carouselWidth += carouselSlideWidth;
	});
	$(carousel).css('width', carouselWidth);
	
	// Load Next Image
	$('div.carouselNext').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft + carouselSlideWidth;
		if(newLeft == carouselWidth || isAnimating === true){return;}
		$('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft - carouselSlideWidth;
		if(newLeft < 0  || isAnimating === true){return;}
		$('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
});



// disable right clicks
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };


// let entersound = document.querySelector('enter-sound');

// let audioArr = document.getElementsByTagName('.audio');
// console.log(audioArr);

// entersound.addEventListener('mousenter' ,() =>{
// 	audioArr[0].play();
// })


// // to repeat the same sound when sound is running


	//
// const C4 = new Audio("sound1.wav");
// const Db4 = new Audio("sounds/Db4.mp3");




// const playSound = audio => {
//   const clone = audio.cloneNode();
//   clone.play();
// };

// // C4
// const C4Key = document.querySelector(".C4-key");
// const playC4 = () => {
//   playSound(C4);
//   C4Key.classList.add("active");

//   //   setimeout

// //     setTimeout(() => {

// //        }, 200);


//   setTimeout(() =>
//    C4Key.classList.remove("active"), 200);
// };
// C4Key.addEventListener("mousemove", playC4);





// single sound

let btn1 = document.querySelector('.sound1');
let body1 = document.querySelector('body');
let audio1 = document.querySelector('audio');
btn1.onclick = function(){
	body1.classList.toggle('on');
	audio1.play();
}


let btn = document.querySelector('.soundarcade');
let body = document.querySelector('body');
let audio = document.querySelector('audio');
btn.onclick = function(){
	body.classList.toggle('on');
	audio.play();
}

			// cursor

const cursor  = document.querySelector('.cursor');

document.addEventListener('mousemove' , e => {
	console.log(e);
		cursor.setAttribute("style" , "top:" + (e.pageY-10) + "px; left: " + (e.pageX-10) + "px;")
})



