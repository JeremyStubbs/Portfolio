//Code for since birth clock
const birthdate = new Date('October 11, 2021 12:00:00');

const timer = (event) => {
	var counter = new Date() - birthdate;
	var days = Math.floor(counter / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(counter - 1000 * 60 * 60 * 24 * days) / (1000 * 60 * 60)
	);
	var minutes = Math.floor(
		(counter - (1000 * 60 * 60 * 24 * days + 1000 * 60 * 60 * hours)) /
			(1000 * 60)
	);
	var seconds = Math.floor(
		(counter -
			(1000 * 60 * 60 * 24 * days +
				1000 * 60 * 60 * hours +
				1000 * 60 * minutes)) /
			1000
	);
	$('#ticker').text(
		`This site is ${days} days, ${hours} hours ${minutes} minutes ${seconds} seconds old.`
	);
	setTimeout(timer, 1000);
	// console.log(counter);
};

$(document).ready(function () {
	timer();
});

//Code for weather API. Much more difficult than openweather api
$('#addresssubmit').click(function () {
	let address = $('#address').val();
	// console.log(address);
	getWeather(address);
});

const getWeather = async (element) => {
	try {
		const url =
			'https://maps.googleapis.com/maps/api/geocode/json?address=' +
			element +
			'&key=AIzaSyA5RQUnRrIYrBZA0RVKxWVwDWLi_QnUvoE';
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.results[0].geometry.location);
		const url2 =
			'https://api.weather.gov/points/' +
			data.results[0].geometry.location.lat +
			',' +
			data.results[0].geometry.location.lng;
		// console.log(url2)
		const res2 = await fetch(url2);
		const data2 = await res2.json();
		const url3 = data2.properties.forecast;
		const res3 = await fetch(url3);
		const data3 = await res3.json();
		const finalData = data3.properties.periods;
		// console.log(finalData[0].name);
		let arr = [];
		for (let i = 0; i < finalData.length; i++) {
			arr.push(finalData[i].detailedForecast);
		}
		let nameArr = [];
		for (let i = 0; i < finalData.length; i++) {
			nameArr.push(finalData[i].name);
		}
		let weather = nameArr.map(function (e, i) {
			return [e, arr[i]];
		});
		// console.log(weather);
		$('#project2').text(weather);
	} catch (err) {
		console.error(err);
	}
};

//Display hamburger
function myFunction(element) {
	const element1 = document.getElementById(element);
	if (element1.style.display == '') {
		element1.style.display = 'flex';
	} else if (element1.style.display == 'flex') {
		element1.style.display = '';
	}
}

function searchFunction() {
	let input1 = document.getElementById('hamburger-search-field');
	let input2 = document.getElementById('search-field');
	if (window.innerWidth < 768) {
		alert(`You typed ${input1.value}`);
	} else {
		alert(`You typed ${input2.value}`);
	}
}

function scrollPageTo(input) {
	let ele = document.getElementById(input).offsetTop;
	window.scrollTo(0, ele - 200);
}
