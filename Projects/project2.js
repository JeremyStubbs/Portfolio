const addtodo = function (event) {
	event.preventDefault();
	let input = $('#input').val();
	$('#dude').append(input);
};

$('#submit').click(addtodo);

const loadData = async () => {
	try {
		const url = 'https://dog.ceo/api/breeds/list/all';
		const res = await fetch(url);
		// console.log(res.ok);
		const data = await res.json();
		let listHtml = '';
		for (const key in data.message) {
			listHtml += `<li>${key}</li>`;
		}
		$('ul').append(listHtml);
		//clear list
		// console.log(data)
	} catch (err) {
		console.error(err);
	}
};

const wtfmate = (event) => {
	event.preventDefault();
	$('ul').append('<h1>yo mama</h1>');
};

const okmakessense = (event) => {
	event.preventDefault();
	$('ul').append('<h1>yo daddy</h1>');
	$('#wtfmate').append('<p>aww yeah</p>');
};

$('button').on('click', wtfmate);

$('button').on('click', loadData);

$('button').on('click', okmakessense);

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
