webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalize_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listData_json__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__listData_json__);




'use strict';

const pickRandWord = function(el) {
	let max = el.length,
		min = 0,
		index = Math.floor(Math.random() * (max - min) + min);

    return el[index];
};

const counterSuccess = function(num) {
	let count = num || 0;
	return function() {
		return count++;
	}
};

const counterError = counterSuccess;

const increaseNumber = function(inputNumber, range) {
	let number = inputNumber || 0;
	return function() {
		number += range;
		return number;
	}
};

window.onload = function () {
	const nextWord = function () {
		currentEl = pickRandWord (wordsAndPhrases);
		currentQuestion = currentEl['question'];
		currentAnswer = currentEl['answer'];
	};

	const clearInputVal = function() {
		inputEl.value = "";
	};

	const checkAnswer = function() {
		return (inputEl.value.toLowerCase().indexOf(currentAnswer.toLowerCase(), 0) !== -1)
	};

	let
		degreeRotateSuccess = increaseNumber(0, 90),
		degreeRotateError = increaseNumber(0, 90);

	const processRequest = function() {
		let
			svgPathError = document.querySelector('.minus .svg-rotate'),
			svgPathSuccess = document.querySelector('.plus .svg-rotate');

		if (checkAnswer ()) {
			if (inputEl.classList.contains('input_answer-error')) {
				inputEl.classList.remove('input_answer-error');
			} else {
				plusText.innerHTML = countSuccess();
				svgPathSuccess.style.transform = 'rotate(' + degreeRotateSuccess() + 'deg)';
			}
			
			nextWord ();
			clearInputVal ();
			textEl.innerHTML = currentQuestion;
		} else {
			svgPathError.style.transform = 'rotate(' + degreeRotateError() + 'deg)';
			minusText.innerHTML = countError();
			inputEl.classList.add('input_answer-error');
			inputEl.value = currentAnswer;
		}
	};

	const toggleClassElement = function(el, className) {
		el.classList.toggle(className);
	};

	const toggleContainer = function() {
		let listContainer 	= 	document.querySelector('.select_level__container'),
			svgOpenList 	= 	document.getElementById('Capa_1');

		if (listContainer.classList.contains('hide')) {
			listContainer.style.display = 'block';
			
		} else {
			const displayNone = function() {
				listContainer.style.display = 'none';
				this.removeEventListener('transitionend', displayNone)
			};
			listContainer.addEventListener('transitionend', displayNone);
		}
			listContainer.classList.toggle('hide');
		
		svgOpenList.classList.toggle('svg-open');
	};

	const closeContainer = function() {
		let listContainer 	= 	document.querySelector('.select_level__container'),
			svgOpenList 	= 	document.getElementById('Capa_1');
		hideElement (listContainer);
		svgOpenList.classList.remove('svg-open');
	};

	const pickNewJSON = function(currentJSON) {
		wordsAndPhrases 	=	JSON.parse(currentJSON),
		currentEl 			=	pickRandWord (wordsAndPhrases),
		currentQuestion 	=	currentEl['question'],
		currentAnswer 		=	currentEl['answer'];
	};

	const selectNewJSON = function() {
		switch(this.innerHTML) {
				case 'Main phrases': {
					pickNewJSON (basicLineJSON);
					toggleContainer ();
					break;
				};
				case 'Special questions': {
					pickNewJSON (questionsLineJSON);
					toggleContainer ();
					break;
				};
				case 'New words': {
					pickNewJSON (newWordsLineJSON);
					toggleContainer ();
					break;
				};
			}
	};

	let basicLineJSON = `[
		{
			"question": "Что ты хочешь сказать?",
			"answer": "What do you want to say",
			"picture": "picture.jpg"
		},
		{
			"question": "Что выглядит странным?",
			"answer": "What looks strange",
			"picture": "picture.jpg"
		},
		{
			"question": "Кого ты знаешь?",
			"answer": "Who do you know",
			"picture": "picture.jpg"
		},
		{
			"question": "Кто знает это?",
			"answer": "Who knows it",
			"picture": "picture.jpg"
		},
		{
			"question": "Кого ты знаешь?",
			"answer": "Who do you know",
			"picture": "picture.jpg"
		},
		{
			"question": "Какого рода книги ты читаешь?",
			"answer": "What kind of books do you read",
			"picture": "picture.jpg"
		},
		{
			"question": "В какое время ты встаешь?",
			"answer": "What time do you got up",
			"picture": "picture.jpg"
		},
		{
			"question": "Сколько денег у тебя с собой?",
			"answer": "How much money do you have with you",
			"picture": "picture.jpg"
		},
		{
			"question": "Мне нравится это",
			"answer": "I like it",
			"picture": "picture.jpg"
		},
		{
			"question": "Кого ты знаешь?",
			"answer": "Who do you know",
			"picture": "picture.jpg"
		},
		{
			"question": "Изучать Английский язык быстро",
			"answer": "Learn English fast",
			"picture": "picture.jpg"
		},
		{
			"question": "Говорить на Английском языке правильно",
			"answer": "Speak English correctly",
			"picture": "picture.jpg"
		},
		{
			"question": "Хорошая работа",
			"answer": "Good job",
			"picture": "picture.jpg"
		},
		{
			"question": "Прямо сейчас",
			"answer": "Right now",
			"picture": "picture.jpg"
		},
		{
			"question": "Еще один раз",
			"answer": "One more time",
			"picture": "picture.jpg"
		},
		{
			"question": "Я хочу жить за границей",
			"answer": "I want to live abroad",
			"picture": "picture.jpg"
		},
		{
			"question": "Спасибо большое",
			"answer": "Thanks a lot",
			"picture": "picture.jpg"
		},
		{
			"question": "Миллион раз спасибо",
			"answer": "Thanks a million",
			"picture": "picture.jpg"
		},
		{
			"question": "Упасть",
			"answer": "Fell down",
			"picture": "picture.jpg"
		},
		{
			"question": "Перерыв",
			"answer": "Break time",
			"picture": "picture.jpg"
		},
		{
			"question": "Поддерживать",
			"answer": "Keep up",
			"picture": "picture.jpg"
		},
		{
			"question": "Решать эту проблему",
			"answer": "Solve this problem",
			"picture": "picture.jpg"
		},
		{
			"question": "Они дома",
			"answer": "They're at home",
			"picture": "picture.jpg"
		},
		{
			"question": "Теряться",
			"answer": "Get lost",
			"picture": "picture.jpg"
		},
		{
			"question": "Время от времени",
			"answer": "From time to time",
			"picture": "picture.jpg"
		},
		{
			"question": "Поднять голову",
			"answer": "Head up",
			"picture": "picture.jpg"
		},
		{
			"question": "Платить за нее",
			"answer": "Pay for her",
			"picture": "picture.jpg"
		},
		{
			"question": "Как можно быстрее",
			"answer": "As soon as possible",
			"picture": "picture.jpg"
		},
		{
			"question": "Упасть",
			"answer": "Fell over",
			"picture": "picture.jpg"
		},
		{
			"question": "Садиться",
			"answer": "Sit down",
			"picture": "picture.jpg"
		},
		{
			"question": "Отдыхать на выходных",
			"answer": "Rest on weekends",
			"picture": "picture.jpg"
		},
		{
			"question": "Работать над чем-то",
			"answer": "Work on",
			"picture": "picture.jpg"
		},
		{
			"question": "Слушать музыку",
			"answer": "Listen to music",
			"picture": "picture.jpg"
		},
		{
			"question": "Искать работу",
			"answer": "Look for a job",
			"picture": "picture.jpg"
		},
		{
			"question": "Собираться ложиться спать",
			"answer": "Going to bed",
			"picture": "picture.jpg"
		},
		{
			"question": "Выйти",
			"answer": "Went out",
			"picture": "picture.jpg"
		},
		{
			"question": "От них всех",
			"answer": "From them all",
			"picture": "picture.jpg"
		},
		{
			"question": "Идти назад",
			"answer": "Walk back",
			"picture": "picture.jpg"
		},
		{
			"question": "Вся правда",
			"answer": "All the trust",
			"picture": "picture.jpg"
		},
		{
			"question": "Зависеть от тебя",
			"answer": "Depend on you",
			"picture": "picture.jpg"
		},
		{
			"question": "Произвести впечатление",
			"answer": "Make an impression",
			"picture": "picture.jpg"
		},
		{
			"question": "Проводить время",
			"answer": "Spend time",
			"picture": "picture.jpg"
		},
		{
			"question": "Добираться до работы",
			"answer": "Get to work",
			"picture": "picture.jpg"
		},
		{
			"question": "Какого рода?",
			"answer": "What kind of",
			"picture": "picture.jpg"
		},
		{
			"question": "В какое время?",
			"answer": "What time",
			"picture": "picture.jpg"
		},
		{
			"question": "Им",
			"answer": "Them",
			"picture": "picture.jpg"
		},
		{
			"question": "Сколько времени у тебя занимает добраться до работы?",
			"answer": "How long time does it take you to get to work",
			"picture": "picture.jpg"
		},
		{
			"question": "Уходить из дома",
			"answer": "Leave home",
			"picture": "picture.jpg"
		},
		{
			"question": "Высокий",
			"answer": "Tall",
			"picture": "picture.jpg"
		},
		{
			"question": "Оставаться",
			"answer": "Stay",
			"picture": "picture.jpg"
		},
		{
			"question": "Скоро",
			"answer": "Soon",
			"picture": "picture.jpg"
		},
		{
			"question": "Родиться",
			"answer": "Born",
			"picture": "picture.jpg"
		},
		{
			"question": "В браке",
			"answer": "Married",
			"picture": "picture.jpg"
		},
		{
			"question": "Доказывать",
			"answer": "Prove",
			"picture": "picture.jpg"
		},
		{
			"question": "Ожидать",
			"answer": "Expect",
			"picture": "picture.jpg"
		},
		{
			"question": "Еще",
			"answer": "Yet",
			"picture": "picture.jpg"
		},
		{
			"question": "Предпочитать",
			"answer": "Prefer",
			"picture": "picture.jpg"
		},
		{
			"question": "Наличные",
			"answer": "Cash",
			"picture": "picture.jpg"
		},
		{
			"question": "Вдохновение писать код",
			"answer": "Inspiration to write code",
			"picture": "picture.jpg"
		},
		{
			"question": "Тревога",
			"answer": "Alarm",
			"picture": "picture.jpg"
		},
		{
			"question": "Крыша",
			"answer": "Roof",
			"picture": "picture.jpg"
		},
		{
			"question": "Сомнительно",
			"answer": "Doubtfully",
			"picture": "picture.jpg"
		},
		{
			"question": "Встречаться",
			"answer": "Meet",
			"picture": "picture.jpg"
		},
		{
			"question": "Грязь",
			"answer": "Dirt",
			"picture": "picture.jpg"
		},
		{
			"question": "Сидеть",
			"answer": "Sit",
			"picture": "picture.jpg"
		},
		{
			"question": "Привычный",
			"answer": "Habitual",
			"picture": "picture.jpg"
		},
		{
			"question": "Платье",
			"answer": "Dress",
			"picture": "picture.jpg"
		},
		{
			"question": "Квартира",
			"answer": "Flat",
			"picture": "picture.jpg"
		},
		{
			"question": "Улучшать",
			"answer": "Improve",
			"picture": "picture.jpg"
		},
		{
			"question": "Лучше",
			"answer": "Better",
			"picture": "picture.jpg"
		},
		{
			"question": "Грамматика",
			"answer": "Grammar",
			"picture": "picture.jpg"
		},
		{
			"question": "Правильный",
			"answer": "Correct",
			"picture": "picture.jpg"
		},
		{
			"question": "Использовать (не use)",
			"answer": "Employ",
			"picture": "picture.jpg"
		},
		{
			"question": "Пачкать",
			"answer": "Sully",
			"picture": "picture.jpg"
		},
		{
			"question": "Мудрый",
			"answer": "Sage",
			"picture": "picture.jpg"
		},
		{
			"question": "Состоять",
			"answer": "Consist",
			"picture": "picture.jpg"
		},
		{
			"question": "Недоумение",
			"answer": "Perplexity",
			"picture": "picture.jpg"
		},
		{
			"question": "Приносить",
			"answer": "Bring",
			"picture": "picture.jpg"
		},
		{
			"question": "Тугой",
			"answer": "Tight",
			"picture": "picture.jpg"
		},
		{
			"question": "Соотношение",
			"answer": "Ratio",
			"picture": "picture.jpg"
		},
		{
			"question": "Купить",
			"answer": "Buy",
			"picture": "picture.jpg"
		},
		{
			"question": "Платить",
			"answer": "Pay",
			"picture": "picture.jpg"
		},
		{
			"question": "Снова",
			"answer": "Again",
			"picture": "picture.jpg"
		},
		{
			"question": "За границу",
			"answer": "Abroad",
			"picture": "picture.jpg"
		},
		{
			"question": "Другой",
			"answer": "Another",
			"picture": "picture.jpg"
		},
		{
			"question": "Обед",
			"answer": "Lunch",
			"picture": "picture.jpg"
		},
		{
			"question": "Стать",
			"answer": "Become",
			"picture": "picture.jpg"
		},
		{
			"question": "Обсуждать",
			"answer": "Discuss",
			"picture": "picture.jpg"
		},
		{
			"question": "Привлекать",
			"answer": "Attract",
			"picture": "picture.jpg"
		},
		{
			"question": "Рекомендовать",
			"answer": "Recommend",
			"picture": "picture.jpg"
		},
		{
			"question": "Счастье",
			"answer": "Happiness",
			"picture": "picture.jpg"
		},
		{
			"question": "Какие-либо (любые)",
			"answer": "Any",
			"picture": "picture.jpg"
		},
		{
			"question": "Вообще (совсем)",
			"answer": "At all",
			"picture": "picture.jpg"
		},
		{
			"question": "Совет",
			"answer": "Advice",
			"picture": "picture.jpg"
		},
		{
			"question": "Меньше",
			"answer": "Less",
			"picture": "picture.jpg"
		},
		{
			"question": "Единственное число",
			"answer": "Singular",
			"picture": "picture.jpg"
		},
		{
			"question": "Множественное число",
			"answer": "Plural",
			"picture": "picture.jpg"
		},
		{
			"question": "Заказывать",
			"answer": "Order",
			"picture": "picture.jpg"
		},
		{
			"question": "Объяснять",
			"answer": "Explain",
			"picture": "picture.jpg"
		},
		{
			"question": "Тренировать",
			"answer": "Train",
			"picture": "picture.jpg"
		},
		{
			"question": "Память",
			"answer": "Memory",
			"picture": "picture.jpg"
		},
		{
			"question": "Регулярно",
			"answer": "Regularly",
			"picture": "picture.jpg"
		},
		{
			"question": "Самообразование",
			"answer": "Self-education",
			"picture": "picture.jpg"
		},
		{
			"question": "Решение",
			"answer": "Decision",
			"picture": "picture.jpg"
		},
		{
			"question": "Зал",
			"answer": "Gym",
			"picture": "picture.jpg"
		},
		{
			"question": "Достаточно",
			"answer": "Enough",
			"picture": "picture.jpg"
		},
		{
			"question": "Знания",
			"answer": "Knowledge",
			"picture": "picture.jpg"
		},
		{
			"question": "Услышать (слушать)",
			"answer": "Hear",
			"picture": "picture.jpg"
		},
		{
			"question": "Покой",
			"answer": "Peace",
			"picture": "picture.jpg"
		},
		{
			"question": "Пугать маленьких детей",
			"answer": "Frighten little children",
			"picture": "picture.jpg"
		},
		{
			"question": "Ужасный",
			"answer": "Terrible",
			"picture": "picture.jpg"
		},
		{
			"question": "Биение",
			"answer": "Beating",
			"picture": "picture.jpg"
		},
		{
			"question": "Стоять",
			"answer": "Stand",
			"picture": "picture.jpg"
		},
		{
			"question": "Муж",
			"answer": "Husbend",
			"picture": "picture.jpg"
		},
		{
			"question": "Кричать",
			"answer": "Cry",
			"picture": "picture.jpg"
		},
		{
			"question": "Похороны",
			"answer": "Feneral",
			"picture": "picture.jpg"
		},
		{
			"question": "Пугать",
			"answer": "Frighten",
			"picture": "picture.jpg"
		},
		{
			"question": "Завещание",
			"answer": "Will",
			"picture": "picture.jpg"
		},
		{
			"question": "Трясет",
			"answer": "Shaking",
			"picture": "picture.jpg"
		},
		{
			"question": "Подготовить",
			"answer": "Prepare",
			"picture": "picture.jpg"
		},
		{
			"question": "Туман",
			"answer": "Fog",
			"picture": "picture.jpg"
		},
		{
			"question": "Дышать вместе с тобой",
			"answer": "Breathe with you",
			"picture": "picture.jpg"
		},
		{
			"question": "Накануне",
			"answer": "Eve",
			"picture": "picture.jpg"
		},
		{
			"question": "Страх",
			"answer": "Fear",
			"picture": "picture.jpg"
		},
		{
			"question": "Вместе",
			"answer": "Together",
			"picture": "picture.jpg"
		},
		{
			"question": "Важный",
			"answer": "Important",
			"picture": "picture.jpg"
		},
		{
			"question": "Отличный",
			"answer": "Excellent",
			"picture": "picture.jpg"
		},
		{
			"question": "Экзамен",
			"answer": "Exam",
			"picture": "picture.jpg"
		},
		{
			"question": "Блестяще",
			"answer": "Brilliant",
			"picture": "picture.jpg"
		},
		{
			"question": "Жаловаться на плохую жизнь",
			"answer": "Complain about a bad life",
			"picture": "picture.jpg"
		},
		{
			"question": "Отказываться от лишних денег",
			"answer": "Refuse extra money",
			"picture": "picture.jpg"
		},
		{
			"question": "Беспокоить",
			"answer": "Worry",
			"picture": "picture.jpg"
		},
		{
			"question": "Фильм",
			"answer": "Movie",
			"picture": "picture.jpg"
		},
		{
			"question": "Разные",
			"answer": "Different",
			"picture": "picture.jpg"
		},
		{
			"question": "Напиток",
			"answer": "Drink",
			"picture": "picture.jpg"
		},
		{
			"question": "Уходить",
			"answer": "Leave",
			"picture": "picture.jpg"
		},
		{
			"question": "Упражнение",
			"answer": "Exercise",
			"picture": "picture.jpg"
		},
		{
			"question": "Трудно",
			"answer": "Difficult",
			"picture": "picture.jpg"
		},
		{
			"question": "Что твой босс обычно обещает?",
			"answer": "What does your boss usually promise",
			"picture": "picture.jpg"
		},
		{
			"question": "Я наслаждаюсь изучением Английского языка",
			"answer": "I enjoy learn English",
			"picture": "picture.jpg"
		},
		{
			"question": "Сколько по времени занимает у его дочери добраться в школу?",
			"answer": "How long does it take his daughter to get to school",
			"picture": "picture.jpg"
		},
		{
			"question": "Почему твоя мама думает так?",
			"answer": "Why does your mother think so",
			"picture": "picture.jpg"
		},
		{
			"question": "Мы не разделяем твою точку зрения",
			"answer": "We don't share your point of view",
			"picture": "picture.jpg"
		},
		{
			"question": "Мы хотим намного больше практики",
			"answer": "We want much more practice",
			"picture": "picture.jpg"
		},
		{
			"question": "Этот человек вдохновляет меня",
			"answer": "This person inspire me",
			"picture": "picture.jpg"
		},
		{
			"question": "Этот человек вдохновляет меня",
			"answer": "This person inspire me",
			"picture": "picture.jpg"
		},
		{
			"question": "Я изучаю Английский с большим удовольствием",
			"answer": "I learn English with great pleasure",
			"picture": "picture.jpg"
		},
		{
			"question": "Я пишу код с большим удовольствием",
			"answer": "I write code with great pleasure",
			"picture": "picture.jpg"
		},
		{
			"question": "Я дома",
			"answer": "I'm at home",
			"picture": "picture.jpg"
		},
		{
			"question": "Они на работе",
			"answer": "They're at work",
			"picture": "picture.jpg"
		},
		{
			"question": "Она здесь",
			"answer": "She's here",
			"picture": "picture.jpg"
		},
		{
			"question": "Я уверен",
			"answer": "I'm sure",
			"picture": "picture.jpg"
		},
		{
			"question": "Очень мило с вашей стороны",
			"answer": "That's very kind of you",
			"picture": "picture.jpg"
		}
	]`;

	let questionsLineJSON = `[
		{
			"question": "Это полезный урок",
			"answer": "It's a useful lesson",
			"picture": "picture.jpg"
		},
		{
			"question": "Это высокий уровень",
			"answer": "It's a high level",
			"picture": "picture.jpg"
		},
		{
			"question": "Это низкий уровень",
			"answer": "It's a low level",
			"picture": "picture.jpg"
		},
		{
			"question": "Это важная деталь",
			"answer": "It's an important detail",
			"picture": "picture.jpg"
		},
		{
			"question": "Это информативный урок",
			"answer": "It's an informative lesson",
			"picture": "picture.jpg"
		},
		{
			"question": "Это слишком большая ошибка",
			"answer": "It's too big mistake",
			"picture": "picture.jpg"
		},
		{
			"question": "Это очень маленькая ошибка",
			"answer": "It's a very small mistake",
			"picture": "picture.jpg"
		},
		{
			"question": "Я лучший программист в мире",
			"answer": "I'm the best programmer in the world",
			"picture": "picture.jpg"
		},
		{
			"question": "Это так скучно",
			"answer": "It's so boring",
			"picture": "picture.jpg"
		},
		{
			"question": "Это слишком сложно",
			"answer": "It's too difficult",
			"picture": "picture.jpg"
		},
		{
			"question": "Это слишком дорого",
			"answer": "It's too expensive",
			"picture": "picture.jpg"
		},
		{
			"question": "Это слишком дешево",
			"answer": "It's too cheap",
			"picture": "picture.jpg"
		},
		{
			"question": "Тепло",
			"answer": "It's warm",
			"picture": "picture.jpg"
		},
		{
			"question": "Дождливо",
			"answer": "It's rainy",
			"picture": "picture.jpg"
		},
		{
			"question": "Жарко",
			"answer": "It's hot",
			"picture": "picture.jpg"
		},
		{
			"question": "Холодно",
			"answer": "It's cold",
			"picture": "picture.jpg"
		},
		{
			"question": "Темно",
			"answer": "It's dark",
			"picture": "picture.jpg"
		},
		{
			"question": "Это холодный день",
			"answer": "It's a cold day",
			"picture": "picture.jpg"
		},
		{
			"question": "Я готов",
			"answer": "I'm ready",
			"picture": "picture.jpg"
		},
		{
			"question": "Справа",
			"answer": "It's on the right",
			"picture": "picture.jpg"
		},
		{
			"question": "Слева",
			"answer": "It's on the left",
			"picture": "picture.jpg"
		},
		{
			"question": "У меня все хорошо",
			"answer": "I'm fine",
			"picture": "picture.jpg"
		},
		{
			"question": "Это лучше",
			"answer": "It's better",
			"picture": "picture.jpg"
		},
		{
			"question": "Это хуже",
			"answer": "It's worse",
			"picture": "picture.jpg"
		},
		{
			"question": "Она очень красивая девушка",
			"answer": "She's a very beautiful girl",
			"picture": "picture.jpg"
		},
		{
			"question": "Мы в парке",
			"answer": "We're in the park",
			"picture": "picture.jpg"
		},
		{
			"question": "Ты очень добрый",
			"answer": "You're very kind",
			"picture": "picture.jpg"
		},
		{
			"question": "Они богатые",
			"answer": "They're rich",
			"picture": "picture.jpg"
		},
		{
			"question": "Они бедные",
			"answer": "They're poor",
			"picture": "picture.jpg"
		},
		{
			"question": "Они ленивые",
			"answer": "They're lazy",
			"picture": "picture.jpg"
		},{
			"question": "Он её муж",
			"answer": "He's her husbend",
			"picture": "picture.jpg"
		},
		{
			"question": "Она его жена",
			"answer": "She's his wife",
			"picture": "picture.jpg"
		},
		{
			"question": "Это очень мило с вашей стороны",
			"answer": "That's very kind of you",
			"picture": "picture.jpg"
		},
		{
			"question": "Она испытывает жажду",
			"answer": "She's thirsty",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такая интересная история",
			"answer": "It's such an interesting story",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такая важная встреча",
			"answer": "It's such an important meeting",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такая популярная песня",
			"answer": "It's such a popular song",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такая дорогая машина",
			"answer": "It's such an expensive car",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такая красивая девушка",
			"answer": "It's such a beautiful girl",
			"picture": "picture.jpg"
		},
		{
			"question": "Это так легко",
			"answer": "It's so easy",
			"picture": "picture.jpg"
		},
		{
			"question": "Это легкое упражнение",
			"answer": "It's an easy exercise",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такое полезное видео",
			"answer": "It's such a useful video",
			"picture": "picture.jpg"
		},
		{
			"question": "Это такая плохая ситуация",
			"answer": "It's such a bad situation",
			"picture": "picture.jpg"
		},
		{
			"question": "Он такой странный человек",
			"answer": "He's such a strange person",
			"picture": "picture.jpg"
		},
		{
			"question": "Он такой умный студент",
			"answer": "He's such a clever student",
			"picture": "picture.jpg"
		},
		{
			"question": "Он такой бедный мальчик",
			"answer": "He's such a poor boy",
			"picture": "picture.jpg"
		},
		{
			"question": "Она такая мудрая женщина",
			"answer": "She's such a wise woman",
			"picture": "picture.jpg"
		}
	]`;

	let newWordsLineJSON = `[
		{
			"question": "Поддерживать",
			"answer": "Keep up",
			"picture": "picture.jpg"
		},
		{
			"question": "Вдохновение",
			"answer": "Inspiration",
			"picture": "picture.jpg"
		},
		{
			"question": "Недоумение",
			"answer": "Perplexity",
			"picture": "picture.jpg"
		},
		{
			"question": "Жаловаться",
			"answer": "Complain",
			"picture": "picture.jpg"
		},
		{
			"question": "Впечатление",
			"answer": "impression",
			"picture": "picture.jpg"
		},
		{
			"question": "Идти назад",
			"answer": "Walk back",
			"picture": "picture.jpg"
		},
		{
			"question": "Обещать",
			"answer": "Promise",
			"picture": "picture.jpg"
		},
		{
			"question": "Сомнительно",
			"answer": "Doubtfully",
			"picture": "picture.jpg"
		},
		{
			"question": "В браке",
			"answer": "Married",
			"picture": "picture.jpg"
		},
		{
			"question": "Выйти",
			"answer": "Went out",
			"picture": "picture.jpg"
		},
		{
			"question": "Решение",
			"answer": "Decision",
			"picture": "picture.jpg"
		},
		{
			"question": "Теряться",
			"answer": "Get lost",
			"picture": "picture.jpg"
		},
		{
			"question": "Ожидать",
			"answer": "Expect",
			"picture": "picture.jpg"
		},
		{
			"question": "Богатый",
			"answer": "Rich",
			"picture": "picture.jpg"
		},
		{
			"question": "Добрый",
			"answer": "Kind",
			"picture": "picture.jpg"
		},
		{
			"question": "Бедный",
			"answer": "Poor",
			"picture": "picture.jpg"
		},
		{
			"question": "Ленивый",
			"answer": "Lazy",
			"picture": "picture.jpg"
		},
		{
			"question": "Жена",
			"answer": "Wife",
			"picture": "picture.jpg"
		},
		{
			"question": "Дорого",
			"answer": "Expensive",
			"picture": "picture.jpg"
		},
		{
			"question": "Дешево",
			"answer": "Cheap",
			"picture": "picture.jpg"
		},
		{
			"question": "Тепло",
			"answer": "Warm",
			"picture": "picture.jpg"
		},
		{
			"question": "Замечательно",
			"answer": "Wonderful",
			"picture": "picture.jpg"
		},
		{
			"question": "Великолепно",
			"answer": "Great",
			"picture": "picture.jpg"
		},
		{
			"question": "Это возможно",
			"answer": "It's possible",
			"picture": "picture.jpg"
		},
		{
			"question": "Это невозможно",
			"answer": "It's impossible",
			"picture": "picture.jpg"
		},
		{
			"question": "Очевидный",
			"answer": "Obvious",
			"picture": "picture.jpg"
		},
		{
			"question": "Простой",
			"answer": "Simple",
			"picture": "picture.jpg"
		},
		{
			"question": "Медсестра",
			"answer": "Nurse",
			"picture": "picture.jpg"
		},
		{
			"question": "Обувь",
			"answer": "Shoes",
			"picture": "picture.jpg"
		},
		{
			"question": "Предложение (в языке)",
			"answer": "Sentence",
			"picture": "picture.jpg"
		},
		{
			"question": "Жаждущий",
			"answer": "Thirsty",
			"picture": "picture.jpg"
		},
		{
			"question": "Умный",
			"answer": "Clever",
			"picture": "picture.jpg"
		},
		{
			"question": "Смышленый",
			"answer": "Smart",
			"picture": "picture.jpg"
		},
		{
			"question": "Мудрый (прил.)",
			"answer": "Wise",
			"picture": "picture.jpg"
		},
		{
			"question": "Мудрый (сущ.)",
			"answer": "Sage",
			"picture": "picture.jpg"
		}
	]`;

	let 
		wordsAndPhrases 	=	JSON.parse(basicLineJSON),
		textEl 				=	document.querySelector('.text_question'),
		buttonEl 			=	document.querySelector('.btn_check_word'),
		buttonOpenList		=	document.querySelector('.btn__show_select_line'),
		inputEl 			=	document.querySelector('.input_answer'),
		currentEl 			=	pickRandWord (wordsAndPhrases),
		currentQuestion 	=	currentEl['question'],
		currentAnswer 		=	currentEl['answer'],
		plusText 			=	document.querySelector('#plus_text'),
		minusText 			=	document.querySelector('#minus_text');

	textEl.innerHTML = currentQuestion;
	inputEl.focus();

	let countSuccess = counterSuccess(1);
	let countError = counterError(1);

	buttonEl.addEventListener('click', function() {
		processRequest ();
		inputEl.focus();
	});

	window.addEventListener('keypress', function(e) {
		inputEl.focus();
		if (e.code === 'Enter') {
			processRequest ();
		}
	});

	buttonOpenList.addEventListener('click', function() {
		toggleContainer ();
	});

	let listSelect = document.querySelectorAll('.select_level-link');
	for (var i = 0; i < listSelect.length; i++) {
		listSelect[i].addEventListener('click', function() {
			selectNewJSON.call (this);
			nextWord ();
			textEl.innerHTML = currentQuestion;
		});
	}
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{"question":"Что ты хочешь сказать?","answer":"What do you want to say?","picture":"picture.jpg"},{"question":"Что выглядит странным?","answer":"What looks strange?","picture":"picture.jpg"},{"question":"Кого ты знаешь?","answer":"Who do you know?","picture":"picture.jpg"},{"question":"Кто знает это?","answer":"Who know it?","picture":"picture.jpg"},{"question":"Кого ты знаешь?","answer":"Who do you know?","picture":"picture.jpg"},{"question":"Какого рода книги ты читаешь?","answer":"What kind of books do you read?","picture":"picture.jpg"},{"question":"В какое время ты встаешь?","answer":"What time do you got up?","picture":"picture.jpg"},{"question":"Сколько денег у тебя с собой?","answer":"How much money do you have with you?","picture":"picture.jpg"},{"question":"Мне нравится это","answer":"I like it","picture":"picture.jpg"},{"question":"Кого ты знаешь?","answer":"Who do you know?","picture":"picture.jpg"},{"question":"Изучать Английский язык быстро","answer":"Learn English fast","picture":"picture.jpg"},{"question":"Говорить на Английском языке правильно","answer":"Speak English correctly","picture":"picture.jpg"},{"question":"Хорошая работа","answer":"Good job","picture":"picture.jpg"},{"question":"Прямо сейчас","answer":"Right now","picture":"picture.jpg"},{"question":"Еще один раз","answer":"One more time","picture":"picture.jpg"},{"question":"Я хочу жить за границей","answer":"I want to live abroad","picture":"picture.jpg"},{"question":"Спасибо большое","answer":"Thanks a lot","picture":"picture.jpg"},{"question":"Миллион раз спасибо","answer":"Thanks a million","picture":"picture.jpg"},{"question":"Упасть","answer":"Fell down","picture":"picture.jpg"},{"question":"Перерыв","answer":"Break time","picture":"picture.jpg"},{"question":"Поддерживать","answer":"Keep up","picture":"picture.jpg"},{"question":"Решать эту проблему","answer":"Solve this problem","picture":"picture.jpg"},{"question":"Они дома","answer":"They are at home","picture":"picture.jpg"},{"question":"Теряться","answer":"Get lost","picture":"picture.jpg"},{"question":"Время от времени","answer":"From time to time","picture":"picture.jpg"},{"question":"Поднять голову","answer":"Head up","picture":"picture.jpg"},{"question":"Платить за нее","answer":"Pay for her","picture":"picture.jpg"},{"question":"Как можно быстрее","answer":"As soon as possible","picture":"picture.jpg"},{"question":"Упасть","answer":"Fell over","picture":"picture.jpg"},{"question":"Садиться","answer":"Sit down","picture":"picture.jpg"},{"question":"Отдыхать на выходных","answer":"Have on weekends","picture":"picture.jpg"},{"question":"Работать над чем-то","answer":"Work on","picture":"picture.jpg"},{"question":"Свободное время","answer":"Free time","picture":"picture.jpg"},{"question":"Слушать музыку","answer":"Listen to music","picture":"picture.jpg"},{"question":"Искать работу","answer":"Look for a job","picture":"picture.jpg"},{"question":"Собираться ложиться спать","answer":"Going to bed","picture":"picture.jpg"},{"question":"Выйти","answer":"Went out","picture":"picture.jpg"},{"question":"От них всех","answer":"From them all","picture":"picture.jpg"},{"question":"Идти назад","answer":"Walk back","picture":"picture.jpg"},{"question":"Вся правда","answer":"All the trust","picture":"picture.jpg"},{"question":"Зависеть от тебя","answer":"Depend on you","picture":"picture.jpg"},{"question":"Произвести впечатление","answer":"Make an impression","picture":"picture.jpg"},{"question":"Проводить время","answer":"Spend time","picture":"picture.jpg"},{"question":"Добираться до работы","answer":"Get to work","picture":"picture.jpg"},{"question":"Какого рода?","answer":"What kind of?","picture":"picture.jpg"},{"question":"В какое время?","answer":"What time?","picture":"picture.jpg"},{"question":"Им","answer":"Them","picture":"picture.jpg"},{"question":"Сколько времени у тебя занимает добраться до работы?","answer":"How long time does it take you to get to work?","picture":"picture.jpg"},{"question":"Уходить из дома","answer":"Leave home","picture":"picture.jpg"},{"question":"Высокий","answer":"Tall","picture":"picture.jpg"},{"question":"Оставаться","answer":"Stay","picture":"picture.jpg"},{"question":"Скоро","answer":"Soon","picture":"picture.jpg"},{"question":"Родиться","answer":"Born","picture":"picture.jpg"},{"question":"В браке","answer":"Married","picture":"picture.jpg"},{"question":"Деревня","answer":"Village","picture":"picture.jpg"},{"question":"Доказывать","answer":"Prove","picture":"picture.jpg"},{"question":"Ожидать","answer":"Expect","picture":"picture.jpg"},{"question":"Еще","answer":"Yet","picture":"picture.jpg"},{"question":"Предпочитать","answer":"Prefer","picture":"picture.jpg"},{"question":"Наличные","answer":"Cash","picture":"picture.jpg"},{"question":"Вдохновение писать код","answer":"Inspiration to write code","picture":"picture.jpg"},{"question":"Тревога","answer":"Alarm","picture":"picture.jpg"},{"question":"Крыша","answer":"Roof","picture":"picture.jpg"},{"question":"Сомнительно","answer":"Doubtfully","picture":"picture.jpg"},{"question":"Встречаться","answer":"Meet","picture":"picture.jpg"},{"question":"Грязь","answer":"Dirt","picture":"picture.jpg"},{"question":"Сидеть","answer":"Sit","picture":"picture.jpg"},{"question":"Привычный","answer":"Habitual","picture":"picture.jpg"},{"question":"Платье","answer":"Dress","picture":"picture.jpg"},{"question":"Квартира","answer":"Flat","picture":"picture.jpg"},{"question":"Улучшать","answer":"Improve","picture":"picture.jpg"},{"question":"Лучше","answer":"Better","picture":"picture.jpg"},{"question":"Грамматика","answer":"Grammar","picture":"picture.jpg"},{"question":"Правильный","answer":"Correct","picture":"picture.jpg"},{"question":"Использовать (не use)","answer":"Employ","picture":"picture.jpg"},{"question":"Пачкать","answer":"Sully","picture":"picture.jpg"},{"question":"Мудрый","answer":"Sage","picture":"picture.jpg"},{"question":"Состоять","answer":"Consist","picture":"picture.jpg"},{"question":"Недоумение","answer":"Perplexity","picture":"picture.jpg"},{"question":"Приносить","answer":"Bring","picture":"picture.jpg"},{"question":"Тугой","answer":"Tight","picture":"picture.jpg"},{"question":"Соотношение","answer":"Ratio","picture":"picture.jpg"},{"question":"Купить","answer":"Buy","picture":"picture.jpg"},{"question":"Платить","answer":"Pay","picture":"picture.jpg"},{"question":"Снова","answer":"Again","picture":"picture.jpg"},{"question":"За границу","answer":"Abroad","picture":"picture.jpg"},{"question":"Другой","answer":"Another","picture":"picture.jpg"},{"question":"Обед","answer":"Lunch","picture":"picture.jpg"},{"question":"Стать","answer":"Become","picture":"picture.jpg"},{"question":"Обсуждать","answer":"Discuss","picture":"picture.jpg"},{"question":"Привлекать","answer":"Attract","picture":"picture.jpg"},{"question":"Рекомендовать","answer":"Recommend","picture":"picture.jpg"},{"question":"Партнер","answer":"Partner","picture":"picture.jpg"},{"question":"Счастье","answer":"Happiness","picture":"picture.jpg"},{"question":"Какие-либо (любые)","answer":"Any","picture":"picture.jpg"},{"question":"Вообще (совсем)","answer":"At all","picture":"picture.jpg"},{"question":"Совет","answer":"Advice","picture":"picture.jpg"},{"question":"Меньше","answer":"Less","picture":"picture.jpg"},{"question":"Единственное число","answer":"Singular","picture":"picture.jpg"},{"question":"Множественное число","answer":"Plural","picture":"picture.jpg"},{"question":"Заказывать","answer":"Order","picture":"picture.jpg"},{"question":"Мотивировать","answer":"Motivate","picture":"picture.jpg"},{"question":"Объяснять","answer":"Explain","picture":"picture.jpg"},{"question":"Тренировать","answer":"Train","picture":"picture.jpg"},{"question":"Память","answer":"Memory","picture":"picture.jpg"},{"question":"Регулярно","answer":"Regularly","picture":"picture.jpg"},{"question":"Самообразование","answer":"Self-education","picture":"picture.jpg"},{"question":"Решение","answer":"Decision","picture":"picture.jpg"},{"question":"Зал","answer":"Gym","picture":"picture.jpg"},{"question":"Достаточно","answer":"Enaugh","picture":"picture.jpg"},{"question":"Знания","answer":"Knowledge","picture":"picture.jpg"},{"question":"Услышать (слушать)","answer":"Hear","picture":"picture.jpg"},{"question":"Покой","answer":"Peace","picture":"picture.jpg"},{"question":"Пугать маленьких детей","answer":"Frighten little children","picture":"picture.jpg"},{"question":"Ужасный","answer":"Terrible","picture":"picture.jpg"},{"question":"Биение","answer":"Beating","picture":"picture.jpg"},{"question":"Стоять","answer":"Stand","picture":"picture.jpg"},{"question":"Муж","answer":"Husbend","picture":"picture.jpg"},{"question":"Кричать","answer":"Cry","picture":"picture.jpg"},{"question":"Похороны","answer":"Feneral","picture":"picture.jpg"},{"question":"Пугать","answer":"Frighten","picture":"picture.jpg"},{"question":"Завещание","answer":"Will","picture":"picture.jpg"},{"question":"Трясет","answer":"Shaking","picture":"picture.jpg"},{"question":"Подготовить","answer":"Prepare","picture":"picture.jpg"},{"question":"Туман","answer":"Fog","picture":"picture.jpg"},{"question":"Дышать вместе с тобой","answer":"Breathe with you","picture":"picture.jpg"},{"question":"Накануне","answer":"Eve","picture":"picture.jpg"},{"question":"Страх","answer":"Fear","picture":"picture.jpg"},{"question":"Вместе","answer":"Together","picture":"picture.jpg"},{"question":"Важный","answer":"Important","picture":"picture.jpg"},{"question":"Отличный","answer":"Excellent","picture":"picture.jpg"},{"question":"Экзамен","answer":"Exam","picture":"picture.jpg"},{"question":"Блестяще","answer":"Brilliant","picture":"picture.jpg"},{"question":"Жаловаться на плохую жизнь","answer":"Complain about a bad life","picture":"picture.jpg"},{"question":"Отказываться от лишних денег","answer":"Refuse extra money","picture":"picture.jpg"},{"question":"Добавить","answer":"Add","picture":"picture.jpg"},{"question":"Беспокоить","answer":"Worry","picture":"picture.jpg"},{"question":"Фильм","answer":"Movie","picture":"picture.jpg"},{"question":"Разные","answer":"Different","picture":"picture.jpg"},{"question":"Напиток","answer":"Drink","picture":"picture.jpg"},{"question":"Уходить","answer":"Leave","picture":"picture.jpg"},{"question":"Упражнение","answer":"Exercise","picture":"picture.jpg"},{"question":"Трудно","answer":"Difficult","picture":"picture.jpg"},{"question":"Что твой босс обычно обещает?","answer":"What does your boss usually promise?","picture":"picture.jpg"},{"question":"Я наслаждаюсь изучением Английского языка","answer":"I enjoy learn English","picture":"picture.jpg"},{"question":"Сколько по времени занимает у его дочери добраться в школу?","answer":"How long does it take his daughter to get to school?","picture":"picture.jpg"},{"question":"Почему твоя мама думает так?","answer":"Why does your mother think so?","picture":"picture.jpg"}]

/***/ })
],[0]);