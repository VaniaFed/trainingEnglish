
import "./normalize.css";
import "./index.scss";
'use strict';

/*
JSON.parse – читает объекты из строки в формате JSON.

var numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

Or so:


var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

alert( user.friends[1] ); // 1


*/

const pickRandWord = function(el) {
	let max = el.length,
		min = 0,
		index = Math.floor(Math.random() * (max - min) + min);

    return el[index];
};

const readAndWriteJSON = function(textEl, currentQuestion) {
	textEl.innerHTML = currentQuestion;
};






window.onload = function () {
	const resetDate = function () {
		currentEl = pickRandWord (wordsAndPhrases);
		currentQuestion = currentEl['question'];
		currentAnswer = currentEl['answer'];
	};

	const readFromJSON = function() {
		var currentEl = pickRandWord (wordsAndPhrases),
		currentQuestion = currentEl['question'],
		currentAnswer = currentEl['answer'];
	};

	let jsonLine = `[
		{
			"question": "Вопрос1",
			"answer": "Ответ1",
			"picture": "picture.jpg"
		},
		{
			"question": "Вопрос2",
			"answer": "Ответ2",
			"picture": "picture.jpg"
		},
		{
			"question": "Вопрос3",
			"answer": "Ответ3",
			"picture": "picture.jpg"
		},
		{
			"question": "Вопрос4",
			"answer": "Ответ4",
			"picture": "picture.jpg"
		}
	]`;

	var wordsAndPhrases = JSON.parse(jsonLine),
		textEl = document.querySelector('.text_question'),
		buttonEl = document.querySelector('.submit_data'),
		inputEl = document.querySelector('.input_answer'),
		currentEl = pickRandWord (wordsAndPhrases),
		currentQuestion = currentEl['question'],
		currentAnswer = currentEl['answer'];

		//readFromJSON (wordsAndPhrases);

		readAndWriteJSON (textEl, currentQuestion);

	buttonEl.addEventListener('click', function() {
		if (inputEl.value == currentAnswer) {
			console.log ('Success');
		} else {
			console.log ('Unsuccess');
		}
		//readFromJSON (wordsAndPhrases);
		resetDate();
		readAndWriteJSON (textEl, currentQuestion);
	});

};
