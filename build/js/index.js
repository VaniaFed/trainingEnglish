webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalize_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);


'use strict';
window.onload = function () {
    var getRandomIndexArray = function (arr) {
        return getRandomNumberOfRande(0, arr.length);
    };
    var getRandomNumberOfRande = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    var Counter = /** @class */ (function () {
        function Counter(start) {
            this.count = start || 0;
        }
        Counter.prototype.tick = function () {
            this.count++;
        };
        Counter.prototype.setTimer = function (time, callback) {
            var f = callback || function () { };
            setInterval(f, time);
        };
        Counter.prototype.getCount = function () {
            return this.count;
        };
        return Counter;
    }());
    var Test = /** @class */ (function () {
        function Test(JSONString) {
            this.allCombinations = JSONString;
            this.maxLength = this.allCombinations.length;
            this.nextCombination();
        }
        Test.prototype.getQuestion = function () {
            return this.question;
        };
        Test.prototype.getAnswer = function () {
            return this.answer;
        };
        Test.prototype.getMaxLength = function () {
            return this.maxLength;
        };
        Test.prototype.setCombination = function (JSONString) {
            this.currentCombination = JSONString;
        };
        Test.prototype.nextCombination = function () {
            this.currentIndex = getRandomIndexArray(this.allCombinations);
            this.currentCombination = this.allCombinations[this.currentIndex];
            this.question = this.currentCombination['question'];
            this.answer = this.currentCombination['answer'];
        };
        Test.prototype.removeCurrentCombinationFromArray = function () {
            this.allCombinations.splice(this.currentIndex, 1);
        };
        Test.prototype.checkAnswer = function (userAnswer) {
            console.log(this.answer);
            return userAnswer.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
        };
        return Test;
    }());
    var getResultOfRequest = function (URL, callback) {
        var f = callback || function (data) { };
        var request = new XMLHttpRequest();
        var checkRequest = function () {
            if (isRequestPostedWithoutErrors(this)) {
                f(this.response);
            }
        };
        request.onreadystatechange = checkRequest;
        request.open('GET', URL, false);
        request.send();
    };
    var isRequestPostedWithoutErrors = function (request) {
        return request.readyState === 4 && request.status === 200;
    };
    var hideElement = function () {
        this.classList.add('hide');
        this.removeEventListener('transitionend', hideElement);
    };
    var showElement = function (el) {
        el.classList.remove('hide');
    };
    var toggleVisibleOfContainer = function () {
        var menuContainer = document.querySelector('.select_level__container'), imgOpenMenu = document.getElementById('Capa_1');
        toggleVisibleOfElement(menuContainer);
        imgOpenMenu.classList.toggle('svg-open');
    };
    var toggleVisibleOfElement = function (el) {
        if (el.classList.contains('hide')) {
            showElement(el);
        }
        else {
            el.addEventListener('transitionend', hideElement);
        }
    };
    var closeContainer = function () {
        var menuContainer = document.querySelector('.select_level__container'), imgOpenMenu = document.getElementById('Capa_1');
        hideElement.call(menuContainer);
        imgOpenMenu.classList.remove('svg-open');
    };
    var setNewJSON = function (inputJSONName) {
        var newJSONName;
        switch (inputJSONName) {
            case 'Main phrases':
                {
                    getResultOfRequest('basicLine.json', function (result) { jsonData = result; });
                    break;
                }
                ;
            case 'Special questions':
                {
                    getResultOfRequest('questionsLine.json', function (result) { jsonData = result; });
                    break;
                }
                ;
            case 'New words':
                {
                    getResultOfRequest('newWordsLine.json', function (result) { jsonData = result; });
                    break;
                }
                ;
            case 'Antonyms':
                {
                    getResultOfRequest('antonymsLine.json', function (result) { jsonData = result; });
                    break;
                }
                ;
        }
    };
    // start is here
    var jsonData;
    var defaultJSONString = './js/basicLine.json';
    getResultOfRequest(defaultJSONString, function (result) {
        jsonData = result;
    });
    var test1 = new Test(JSON.parse(jsonData));
    var elements = {
        inputAnswer: document.querySelector('.input_answer'),
        buttonCheck: document.querySelector('.btn_check_word'),
        textQuestion: document.querySelector('.text_question'),
        textCorrectlyAnswers: document.querySelector('#plus_text'),
        textWrongAnswers: document.querySelector('#minus_text'),
        textCountSuccessAnswers: document.querySelector('.quantity__success'),
        textCountAllAnswers: document.querySelector('.quantity__all')
    };
    var quantityCorrectlyAnswers = new Counter(0);
    var quantityWrondAnswers = new Counter(0);
    var checkAnswerEvent = function () {
        if (test1.checkAnswer(elements.inputAnswer.value)) {
            quantityCorrectlyAnswers.tick();
            test1.removeCurrentCombinationFromArray();
        }
        else {
            quantityWrondAnswers.tick();
        }
        test1.nextCombination();
        updateElements();
    };
    var updateElements = function () {
        elements['textQuestion'].innerHTML = test1.getQuestion();
        elements['inputAnswer'].value = '';
        elements['textCorrectlyAnswers'].innerHTML = quantityCorrectlyAnswers.getCount();
        elements['textWrongAnswers'].innerHTML = quantityWrondAnswers.getCount();
        elements['textCountSuccessAnswers'].innerHTML = quantityCorrectlyAnswers.getCount();
        elements['textCountAllAnswers'].innerHTML = test1.getMaxLength();
    };
    updateElements();
    //handles
    elements['buttonCheck'].addEventListener('click', checkAnswerEvent);
    addEventListener('keydown', function (e) {
        elements['inputAnswer'].focus();
        if (e.keyCode === 13) {
            checkAnswerEvent();
            console.log(test1.allCombinations);
        }
    });
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);