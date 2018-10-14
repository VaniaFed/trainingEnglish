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
    // help functions
    var getRandomIndexArray = function (arr) {
        return getRandomNumberOfRande(0, arr.length);
    };
    var getRandomNumberOfRande = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
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
                    getResultOfRequest('basicLine.json', function (result) { return jsonData = result; });
                    break;
                }
                ;
            case 'Special questions':
                {
                    getResultOfRequest('questionsLine.json', function (result) { return jsonData = result; });
                    break;
                }
                ;
            case 'New words':
                {
                    getResultOfRequest('newWordsLine.json', function (result) { return jsonData = result; });
                    break;
                }
                ;
            case 'Antonyms':
                {
                    getResultOfRequest('antonymsLine.json', function (result) { return jsonData = result; });
                    break;
                }
                ;
        }
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
            this.nextIndex();
            this.nextCurrentCombination();
            this.nextQuestion();
            this.nextAnswer();
        };
        Test.prototype.nextIndex = function () {
            this.currentIndex = getRandomIndexArray(this.allCombinations);
        };
        Test.prototype.nextCurrentCombination = function () {
            this.currentCombination = this.allCombinations[this.currentIndex];
        };
        Test.prototype.nextQuestion = function () {
            this.question = this.currentCombination['question'];
        };
        Test.prototype.nextAnswer = function () {
            this.answer = this.currentCombination['answer'];
        };
        Test.prototype.removeCurrentCombinationFromArray = function () {
            this.allCombinations.splice(this.currentIndex, 1);
        };
        Test.prototype.checkAnswer = function (userAnswer) {
            return userAnswer.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
        };
        return Test;
    }());
    var testPage = /** @class */ (function () {
        function testPage(JSONData) {
            this.currentTest = new Test(JSON.parse(JSONData));
            this.currentTest.nextCombination();
            this.counterCorrectlyAnswers = new Counter(0);
            this.counterWrongAnswers = new Counter(0);
        }
        testPage.prototype.init = function (elements) {
            this.setElements(elements);
            this.updateElements();
            this.followToEventEnter();
        };
        testPage.prototype.setElements = function (elements) {
            this.setInputAnswer(elements.inputAnswer);
            this.setButtonCheck(elements.buttonCheck);
            this.setTextQuestion(elements.textQuestion);
            this.setTextQuantityCorrectlyAnswers(elements.textQuantityCorrectlyAnswers);
            this.setTextQuantityWrongAnswers(elements.textQuantityWrongAnswers);
            this.setTextQuantityCorrectlyAnswersFromAll(elements.textCountSuccessAnswersFromAll);
            this.setTextQuantityAllAnswersAtAll(elements.textCountAllAnswers);
            console.log(this);
        };
        testPage.prototype.setInputAnswer = function (element) {
            this.inputAnswer = element;
        };
        testPage.prototype.setButtonCheck = function (element) {
            this.buttonCheck = element;
        };
        testPage.prototype.setTextQuestion = function (element) {
            this.textQuestion = element;
        };
        testPage.prototype.setTextQuantityCorrectlyAnswers = function (element) {
            this.textQuantityCorrectlyAnswers = element;
        };
        testPage.prototype.setTextQuantityWrongAnswers = function (element) {
            this.textQuantityWrongAnswers = element;
        };
        testPage.prototype.setTextQuantityCorrectlyAnswersFromAll = function (element) {
            this.textQuantityCorrectlyAnswersFromAll = element;
        };
        testPage.prototype.setTextQuantityAllAnswersAtAll = function (element) {
            this.textQuantityAllAnswersAtAll = element;
        };
        testPage.prototype.followToEventEnter = function () {
            var _this_1 = this;
            var _this = this;
            this.buttonCheck.addEventListener('click', function () { return _this.checkAnswerEventAfterButtonClick; });
            addEventListener('keydown', function (e) {
                _this_1.giveFocusInput();
                if (e.keyCode === 13) {
                    console.log(_this_1.currentTest.getAnswer());
                    if (_this_1.isAnswerCorrectly()) {
                        _this_1.incCorrectAnswersAndRemoveCurrentCombination();
                    }
                    else {
                        _this_1.counterWrongAnswers.tick();
                    }
                    _this_1.currentTest.nextCombination();
                    _this_1.updateElements();
                }
            });
        };
        testPage.prototype.checkAnswerEventAfterButtonClick = function () {
            if (this.isAnswerCorrectly()) {
                this.incCorrectAnswersAndRemoveCurrentCombination();
                console.log(true);
            }
            else {
                this.counterWrongAnswers.tick();
                console.log(false);
            }
            this.currentTest.nextCombination();
            this.updateElements();
        };
        testPage.prototype.giveFocusInput = function () {
            this.inputAnswer.focus();
        };
        testPage.prototype.isAnswerCorrectly = function () {
            return this.currentTest.checkAnswer(this.inputAnswer.value);
        };
        testPage.prototype.incCorrectAnswersAndRemoveCurrentCombination = function () {
            this.counterCorrectlyAnswers.tick();
            this.currentTest.removeCurrentCombinationFromArray();
        };
        testPage.prototype.updateElements = function () {
            this.updateInputAnswer();
            this.updateTextQuestion();
            this.updateTextQuantityCorrectlyAnswers();
            this.updateTextQuantityWrongAnswers();
            this.updateCountSuccessAnswerFromAll();
            this.updateCountAllAnswer();
        };
        testPage.prototype.updateInputAnswer = function () {
            this.inputAnswer.value = '';
        };
        testPage.prototype.updateTextQuestion = function () {
            this.textQuestion.innerHTML = this.currentTest.getQuestion();
        };
        testPage.prototype.updateTextQuantityCorrectlyAnswers = function () {
            this.textQuantityCorrectlyAnswers.innerHTML = String(this.counterCorrectlyAnswers.getCount());
        };
        testPage.prototype.updateTextQuantityWrongAnswers = function () {
            this.textQuantityWrongAnswers.innerHTML = String(this.counterWrongAnswers.getCount());
        };
        testPage.prototype.updateCountSuccessAnswerFromAll = function () {
            this.textQuantityCorrectlyAnswersFromAll.innerText = String(this.counterCorrectlyAnswers.getCount());
        };
        testPage.prototype.updateCountAllAnswer = function () {
            this.textQuantityAllAnswersAtAll.innerHTML = this.currentTest.getMaxLength();
        };
        return testPage;
    }());
    // start is here
    var jsonData;
    var defaultJSONString = './js/basicLine.json';
    getResultOfRequest(defaultJSONString, function (result) { return jsonData = result; });
    var elements = {
        inputAnswer: document.querySelector('.input_answer'),
        buttonCheck: document.querySelector('.btn_check_word'),
        textQuestion: document.querySelector('.text_question'),
        textQuantityCorrectlyAnswers: document.querySelector('#plus_text'),
        textQuantityWrongAnswers: document.querySelector('#minus_text'),
        textCountSuccessAnswersFromAll: document.querySelector('.quantity__success'),
        textCountAllAnswers: document.querySelector('.quantity__all')
    };
    var myTestPage = new testPage(jsonData);
    myTestPage.init(elements);
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