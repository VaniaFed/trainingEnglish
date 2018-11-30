webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomIndexArray; });
/* unused harmony export getRandomNumberOfRande */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getResultOfRequest; });
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



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_normalize_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_index_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testPage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpFunctions__ = __webpack_require__(0);





var getResultOfRequest = __WEBPACK_IMPORTED_MODULE_3__helpFunctions__["b" /* getResultOfRequest */];
window.onload = function () {
    var jsonData;
    var defaultJSONString = './json/basicLine.json';
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
    var myTestPage = new __WEBPACK_IMPORTED_MODULE_2__testPage__["a" /* default */](jsonData, elements);
    myTestPage.init();
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testHTMLElements__ = __webpack_require__(8);
/*
const toggleVisibleOfContainer = function() {
    let menuContainer: HTMLElement = document.querySelector('.select_level__container'),
        imgOpenMenu: HTMLElement = document.getElementById('Capa_1');
    toggleVisibleOfElement(menuContainer);
    imgOpenMenu.classList.toggle('svg-open');
};

const toggleVisibleOfElement = function(el: HTMLElement) {
    if (el.classList.contains('hide')) {
        showElement(el);
    } else {
        el.addEventListener('transitionend', hideElement);
    }
};

const closeContainer = function() {
    let menuContainer: HTMLElement = document.querySelector('.select_level__container'),
        imgOpenMenu: HTMLElement = document.getElementById('Capa_1');
    hideElement.call(menuContainer);
    imgOpenMenu.classList.remove('svg-open');
};
*/



var TestPage = /** @class */ (function () {
    function TestPage(JSONData, elements) {
        this.test = new __WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */](JSON.parse(JSONData));
        this.test.nextCombination();
        this.htmlElements = new __WEBPACK_IMPORTED_MODULE_2__testHTMLElements__["a" /* default */](elements);
        this.counterCorrectlyAnswers = new __WEBPACK_IMPORTED_MODULE_1__counter__["a" /* default */](0);
        this.counterWrongAnswers = new __WEBPACK_IMPORTED_MODULE_1__counter__["a" /* default */](0);
    }
    TestPage.prototype.init = function () {
        this.setNewValueElements();
        this.followToEventEnter();
    };
    TestPage.prototype.setNewValueElements = function () {
        this.htmlElements.setNewValueTextQuestion(this.test.getQuestion());
        this.htmlElements.setNewValueTextQuantityCorrectlyAnswers(String(this.counterCorrectlyAnswers.getCount()));
        this.htmlElements.setNewValueTextQuantityWrongAnswers(String(this.counterWrongAnswers.getCount()));
        this.htmlElements.setNewValueCountAllAnswer((String(this.test.getStartValueQuantityCombinations())));
        this.htmlElements.setNewValueCountSuccessAnswerFromAll((String(this.counterCorrectlyAnswers.getCount())));
    };
    TestPage.prototype.followToEventEnter = function () {
        var _this_1 = this;
        var _this = this;
        this.htmlElements.getButtonCheck().addEventListener('click', function () { return _this.checkAnswerAndNextLevel; });
        addEventListener('keydown', function (e) {
            _this_1.giveFocusInput();
            if (_this_1.isPressedEnter(e)) {
                _this_1.checkAnswerAndNextLevel();
            }
        });
    };
    TestPage.prototype.isPressedEnter = function (e) {
        return e.keyCode === 13;
    };
    TestPage.prototype.checkAnswerAndNextLevel = function () {
        if (this.isAnswerCorrectly()) {
            this.incCorrectAnswersAndRemoveCurrentCombination();
        }
        else {
            this.counterWrongAnswers.tick();
            console.log(this.test.getAnswer());
        }
        this.test.nextCombination();
        this.setNewValueElements();
        this.htmlElements.clearFieldElements();
    };
    TestPage.prototype.giveFocusInput = function () {
        this.htmlElements.getInputText().focus();
    };
    TestPage.prototype.isAnswerCorrectly = function () {
        return this.test.checkAnswer(this.htmlElements.getInputText().value);
    };
    TestPage.prototype.incCorrectAnswersAndRemoveCurrentCombination = function () {
        this.counterCorrectlyAnswers.tick();
        this.test.removeCurrentCombination();
    };
    return TestPage;
}());
/* harmony default export */ __webpack_exports__["a"] = (TestPage);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpFunctions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combinations__ = __webpack_require__(6);


var getRandomIndexArray = __WEBPACK_IMPORTED_MODULE_0__helpFunctions__["a" /* getRandomIndexArray */];
var Test = /** @class */ (function () {
    function Test(JSONString) {
        this.combinations = new __WEBPACK_IMPORTED_MODULE_1__combinations__["a" /* default */](JSONString);
    }
    Test.prototype.getQuestion = function () {
        return this.question;
    };
    Test.prototype.getAnswer = function () {
        return this.answer;
    };
    Test.prototype.getStartValueQuantityCombinations = function () {
        return this.combinations.getStartValue();
    };
    Test.prototype.nextCombination = function () {
        this.nextIndex();
        this.nextCurrentCombination();
        this.nextQuestion();
        this.nextAnswer();
    };
    Test.prototype.nextIndex = function () {
        this.index = getRandomIndexArray(this.combinations.getCombitanions());
    };
    Test.prototype.nextCurrentCombination = function () {
        this.currentCombination = this.combinations.getCombinationWithIndex(this.index);
    };
    Test.prototype.nextQuestion = function () {
        this.question = this.currentCombination['question'];
    };
    Test.prototype.nextAnswer = function () {
        this.answer = this.currentCombination['answer'];
    };
    Test.prototype.removeCurrentCombination = function () {
        this.combinations.removeCombinationWithIndex(this.index);
    };
    Test.prototype.checkAnswer = function (userAnswer) {
        return userAnswer.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
    };
    return Test;
}());
/* harmony default export */ __webpack_exports__["a"] = (Test);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Combinations = /** @class */ (function () {
    function Combinations(JSONString) {
        this.setCombinations(JSONString);
    }
    Combinations.prototype.setCombinations = function (combination) {
        this.combinations = combination;
        var newStartValue = combination.length;
        this.setStartValue(newStartValue);
    };
    Combinations.prototype.setStartValue = function (startValue) {
        this.startValue = startValue;
    };
    Combinations.prototype.getCombitanions = function () {
        return this.combinations;
    };
    Combinations.prototype.getStartValue = function () {
        return this.startValue;
    };
    Combinations.prototype.getCombinationWithIndex = function (index) {
        return this.combinations[index];
    };
    Combinations.prototype.removeCombinationWithIndex = function (index) {
        this.combinations.splice(index, 1);
    };
    return Combinations;
}());
/* harmony default export */ __webpack_exports__["a"] = (Combinations);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (Counter);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var TestHTMLElements = /** @class */ (function () {
    function TestHTMLElements(elements) {
        this.setElements(elements);
    }
    TestHTMLElements.prototype.getButtonCheck = function () {
        return this.buttonCheck;
    };
    TestHTMLElements.prototype.getInputText = function () {
        return this.inputAnswer;
    };
    TestHTMLElements.prototype.setElements = function (elements) {
        this.setInputAnswer(elements.inputAnswer);
        this.setButtonCheck(elements.buttonCheck);
        this.setTextQuestion(elements.textQuestion);
        this.setTextQuantityCorrectlyAnswers(elements.textQuantityCorrectlyAnswers);
        this.setTextQuantityWrongAnswers(elements.textQuantityWrongAnswers);
        this.setTextQuantityCorrectlyAnswersFromAll(elements.textCountSuccessAnswersFromAll);
        this.setTextQuantityAllAnswersAtAll(elements.textCountAllAnswers);
    };
    TestHTMLElements.prototype.setInputAnswer = function (element) {
        this.inputAnswer = element;
    };
    TestHTMLElements.prototype.setButtonCheck = function (element) {
        this.buttonCheck = element;
    };
    TestHTMLElements.prototype.setTextQuestion = function (element) {
        this.textQuestion = element;
    };
    TestHTMLElements.prototype.setTextQuantityCorrectlyAnswers = function (element) {
        this.textQuantityCorrectlyAnswers = element;
    };
    TestHTMLElements.prototype.setTextQuantityWrongAnswers = function (element) {
        this.textQuantityWrongAnswers = element;
    };
    TestHTMLElements.prototype.setTextQuantityCorrectlyAnswersFromAll = function (element) {
        this.textQuantityCorrectlyAnswersFromAll = element;
    };
    TestHTMLElements.prototype.setTextQuantityAllAnswersAtAll = function (element) {
        this.textQuantityAllAnswersAtAll = element;
    };
    TestHTMLElements.prototype.clearFieldElements = function () {
        this.clearFieldInputAnswer();
    };
    TestHTMLElements.prototype.clearFieldInputAnswer = function () {
        this.inputAnswer.value = '';
    };
    TestHTMLElements.prototype.setNewValueTextQuestion = function (value) {
        this.textQuestion.innerHTML = value;
    };
    TestHTMLElements.prototype.setNewValueTextQuantityCorrectlyAnswers = function (value) {
        this.textQuantityCorrectlyAnswers.innerHTML = value;
    };
    TestHTMLElements.prototype.setNewValueTextQuantityWrongAnswers = function (value) {
        this.textQuantityWrongAnswers.innerHTML = value;
    };
    TestHTMLElements.prototype.setNewValueCountSuccessAnswerFromAll = function (value) {
        this.textQuantityCorrectlyAnswersFromAll.innerText = value;
    };
    TestHTMLElements.prototype.setNewValueCountAllAnswer = function (value) {
        this.textQuantityAllAnswersAtAll.innerHTML = value;
    };
    return TestHTMLElements;
}());
/* harmony default export */ __webpack_exports__["a"] = (TestHTMLElements);


/***/ })
],[1]);