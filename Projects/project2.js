//All this is only here for reference
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
