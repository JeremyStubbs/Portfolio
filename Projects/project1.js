//Source: https://api.jquery.com/animate/

$('#right').click(function () {
	$('.wrapper').animate({ left: '+=50px' }, 'slow');
});

$('#left').click(function () {
	$('.wrapper').animate({ left: '-=50px' }, 'slow');
});

$('#up').click(function () {
	$('.wrapper').animate({ top: '-=50px' }, 'slow');
});

$('#down').click(function () {
	$('.wrapper').animate({ top: '+=50px' }, 'slow');
});


//Source: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

window.addEventListener(
	'keydown',
	function (event) {
		if (event.defaultPrevented) {
			return; // Do nothing if the event was already processed
		}
		switch (event.key) {
			case 'Down': // IE/Edge specific value
			case 'ArrowDown':
				$('.wrapper').animate({ top: '+=50px' }, 'slow');
				break;
			case 'Up': // IE/Edge specific value
			case 'ArrowUp':
				$('.wrapper').animate({ top: '-=50px' }, 'slow');
				break;
			case 'Left': // IE/Edge specific value
			case 'ArrowLeft':
				$('.wrapper').animate({ left: '-=50px' }, 'slow');
				break;
			case 'Right': // IE/Edge specific value
			case 'ArrowRight':
				$('.wrapper').animate({ left: '+=50px' }, 'slow');
				break;
			case 'Enter':
				dance();
				break;
			case 'Esc': // IE/Edge specific value
			case 'Escape':
				stopDancing();
				break;
			default:
				return; // Quit when this doesn't handle the key event.
		}

		// Cancel the default action to avoid it being handled twice
		event.preventDefault();
	},
	true
);

///* Stickman js from https://codepen.io/lorayoconnell/pen/pyayOP 


const dance = () => {
	$('.head').css('animation', 'rock 1s alternate infinite ease-in-out');
	$('.head').css('transform-origin', 'center bottom');
	$('.leftleg').css('animation', 'wave 1s alternate infinite ease-in-out');
	$('.leftleg').css('transform-origin', '50% 0px');
	$('.rightleg').css('animation', 'wave2 1s alternate infinite ease-in-out');
	$('.rightleg').css('transform-origin', '50% 0px');
	$('.leftarm').css('animation', 'wave2 1s alternate infinite ease-in-out');
	$('.leftarm').css('transform-origin', 'bottom right');
	$('.rightarm').css('animation', 'wave 1s alternate infinite ease-in-out');
	$('.rightarm').css('transform-origin', 'bottom left');
	$('.leftfoot').css('animation', 'wave2 1s alternate infinite ease-in-out');
	$('.leftfoot').css('transform-origin', 'top right');
	$('.rightfoot').css('animation', 'wave 1s alternate infinite ease-in-out');
	$('.rightfoot').css('transform-origin', 'top left');
};

const stopDancing = () => {
	$('.head').css('animation', '');
	$('.head').css('transform-origin', '');

	$('.leftleg').css('animation', '');
	$('.leftleg').css('transform-origin', '');
	$('.rightleg').css('animation', '');
	$('.rightleg').css('transform-origin', '');

	$('.leftarm').css('animation', '');
	$('.leftarm').css('transform-origin', '');
	$('.rightarm').css('animation', '');
	$('.rightarm').css('transform-origin', '');

	$('.leftfoot').css('animation', '');
	$('.leftfoot').css('transform-origin', '');
	$('.rightfoot').css('animation', '');
	$('.rightfoot').css('transform-origin', '');
};

$('#dancehead').click(function () {
	$('.head').css('animation', 'rock 1s alternate infinite ease-in-out');
	$('.head').css('transform-origin', 'center bottom');
});

$('#dancelegs').click(function () {
	$('.leftleg').css('animation', 'wave 1s alternate infinite ease-in-out');
	$('.leftleg').css('transform-origin', '50% 0px');
	$('.rightleg').css('animation', 'wave2 1s alternate infinite ease-in-out');
	$('.rightleg').css('transform-origin', '50% 0px');
});

$('#dancearms').click(function () {
	$('.leftarm').css('animation', 'wave2 1s alternate infinite ease-in-out');
	$('.leftarm').css('transform-origin', 'bottom right');
	$('.rightarm').css('animation', 'wave 1s alternate infinite ease-in-out');
	$('.rightarm').css('transform-origin', 'bottom left');
});

$('#dancefeet').click(function () {
	$('.leftfoot').css('animation', 'wave2 1s alternate infinite ease-in-out');
	$('.leftfoot').css('transform-origin', 'top right');
	$('.rightfoot').css('animation', 'wave 1s alternate infinite ease-in-out');
	$('.rightfoot').css('transform-origin', 'top left');
});

$('#stop').click(function () {
	$('.head').css('animation', '');
	$('.head').css('transform-origin', '');

	$('.leftleg').css('animation', '');
	$('.leftleg').css('transform-origin', '');
	$('.rightleg').css('animation', '');
	$('.rightleg').css('transform-origin', '');

	$('.leftarm').css('animation', '');
	$('.leftarm').css('transform-origin', '');
	$('.rightarm').css('animation', '');
	$('.rightarm').css('transform-origin', '');

	$('.leftfoot').css('animation', '');
	$('.leftfoot').css('transform-origin', '');
	$('.rightfoot').css('animation', '');
	$('.rightfoot').css('transform-origin', '');
});


//The following code for creating a draggable div was adopted from and answer on https://stackoverflow.com/questions/66642650/prevent-draggable-div-from-leaving-container-div-while-dragging

dragElement(document.getElementById('topwrapper'));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id)) {
		document.getElementById(elmnt.id).onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
		elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}


//
// $(document).keypress(function (event) {
// 	alert('Handler for .keypress() called. - ' + event.charCode);
// });

// $(document).keypress(function (event) {
// 	var keycode = event.keyCode ? event.keyCode : event.which;
// 	if (keycode == '101') {
// 		event.preventDefault();
// 		$('.wrapper').animate({ top: '-=50px' }, 'slow');
//         console.log('e');
// 	}
// });


// function handle_mousedown(e) {
// 	window.my_dragging = {};
// 	my_dragging.pageX0 = e.pageX;
// 	my_dragging.pageY0 = e.pageY;
// 	my_dragging.elem = this;
// 	my_dragging.offset0 = $(this).offset();
// 	function handle_dragging(e) {
// 		var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
// 		var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
// 		$(my_dragging.elem).offset({ top: top, left: left });
// 	}
// 	function handle_mouseup(e) {
// 		$('body').off('mousemove', handle_dragging).off('mouseup', handle_mouseup);
// 	}
// 	$('body').on('mouseup', handle_mouseup).on('mousemove', handle_dragging);
// }
// $('.wrapper').mousedown(handle_mousedown);


// function handle_mousedown(e) {
// 	window.my_dragging = {};
// 	my_dragging.pageX0 = e.pageX;
// 	my_dragging.pageY0 = e.pageY;
// 	my_dragging.elem = this;
// 	my_dragging.offset0 = $(this).offset();
// 	function handle_dragging(e) {
// 		var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
// 		var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
// 		$(my_dragging.elem).offset({ top: top, left: left });
// 	}
// 	function handle_mouseup(e) {
// 		$('body').off('mousemove', handle_dragging).off('mouseup', handle_mouseup);
// 	}
// 	$('body').on('mouseup', handle_mouseup).on('mousemove', handle_dragging);
// }
// $('#b').mousedown(handle_mousedown);
