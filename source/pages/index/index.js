import "./normalize.css";
import "./index.scss";
'use strict';

window.onload = function () {
    const getRandomNumberOfRande = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const getRandomIndexArray = function(arr) {
        return getRandomNumberOfRande(0, arr.length);
    };

    class Counter {
        constructor(start) {
            this.count = start || 0;
        }
        tick() {
            this.count++;
        }
        setTimer(time, callback) {
            const f = callback || function(){};
            setInterval(f, time);
        }
        getCount() {
            return this.count;
        }
    }

    class Test {
        constructor(JSONString) {
            this.allCombinations = JSONString;
            this.nextCombination();
        }
        getAnswer() {
            return this.answer;
        }
        getQuestion() {
            return this.question;
        }
        nextCombination() {
            this.currentIndex = getRandomIndexArray(this.allCombinations);
            this.currentCombination = this.allCombinations[this.currentIndex];
            this.question = this.currentCombination['question'];
            this.answer = this.currentCombination['answer'];
            console.log(this.currentCombination);
        }
        removeCurrentCombinationFromArray() {
            this.allCombinations.splice(this.currentIndex, 1);
        }
        checkAnswer(userAnswer) {
            console.log(userAnswer);
            return userAnswer.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
        }
        setCombination(JSONString) {
            this.currentCombination = JSONString;
        }
    }

    const getResultOfRequest = function(URL, callback) {
        const f = callback || function(data) {}; 
        const request = new XMLHttpRequest();
        const checkRequest = function() {
            if (this.readyState === 4 && this.status === 200) {
                f(this.response);
            }
        }

        request.onreadystatechange = checkRequest;
        request.open('GET', URL, false);
        request.send();
    };

    const hideElement = function() {
        this.classList.add('hide');
        this.removeEventListener('transitionend', hideElement);
    };
    const showElement = function(el) {
        el.classList.remove('hide');
    };

    const toggleVisibleOfElement = function(el) {
        if (el.classList.contains('hide')) {
            showElement(el);
        } else {
            menuContainer.addEventListener('transitionend', hideElement);
        }
    };

    const toggleVisibleOfContainer = function() {
        let menuContainer   =   document.querySelector('.select_level__container'),
            imgOpenMenu     =   document.getElementById('Capa_1');

        toggleVisibleOfElement(menuContainer);
        imgOpenMenu.classList.toggle('svg-open');
    };

    const closeContainer = function() {
        let menuContainer   =   document.querySelector('.select_level__container'),
            imgOpenMenu     =   document.getElementById('Capa_1');

        hideElement (menuContainer);
        imgOpenMenu.classList.remove('svg-open');
    };

    const setNewJSON = function(inputJSONName) {
        let newJSONName;

        switch(inputJSONName) {
            case 'Main phrases': {
                jsonData = getResultOfRequest('basicLine.json'); 
                break;
            };
            case 'Special questions': {
                jsonData = getResultOfRequest('questionsLine.json');
                break;
            };
            case 'New words': {
                jsonData = getResultOfRequest('newWordsLine.json');
                break;
            };
            case 'Antonyms': {
                jsonData = getResultOfRequest('antonymsLine.json');
                break;
            };
        }
    };

    let jsonData;

    getResultOfRequest('./js/listData.json', (result) => {
        jsonData = result;
    });

    const test1 = new Test(JSON.parse(jsonData));

    const elements = {
        inputAnswer: document.querySelector('.input_answer'),
        buttonCheck: document.querySelector('.btn_check_word'),
        textQuestion: document.querySelector('.text_question'),
        textCorrectlyAnswers: document.querySelector('#plus_text'),
        textWrongAnswers: document.querySelector('#minus_text')
    };

    const quantityCorrectlyAnswers = new Counter(0);
    const quantityWrondAnswers = new Counter(0);

    const checkAnswerEvent = function() {
        console.log(test1.allCombinations);
        if (test1.checkAnswer(elements.inputAnswer.value)) {
            quantityCorrectlyAnswers.tick();
            test1.removeCurrentCombinationFromArray();
        } else {
            quantityWrondAnswers.tick();
        }
        test1.nextCombination();
        updateElements();
    };
    elements['buttonCheck'].addEventListener('click', checkAnswerEvent);
    addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            checkAnswerEvent();
        }
    });

    const updateElements = function() {
        elements['textQuestion'].innerHTML = test1.getQuestion();
        elements['inputAnswer'].value = '';
        elements['textCorrectlyAnswers'].innerHTML = quantityCorrectlyAnswers.getCount();
        elements['textWrongAnswers'].innerHTML = quantityWrondAnswers.getCount();
    }
    updateElements();
};
