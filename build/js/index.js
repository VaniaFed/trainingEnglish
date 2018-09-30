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
    const getRandomNumberOfRande = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const getRandomElementArray = function(arr) {
        let randomIndex = getRandomNumberOfRande(0, arr.length);
        return arr[randomIndex];
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
        nextCombination() {
            this.currentCombination = getRandomElementArray(this.allCombinations);
            console.log(this.currentCombination);
            this.question = this.currentCombination['question'];
            this.answer = this.currentCombination['answer'];
        }
        checkAnswer(userAnswer) {
            return userAnswer.value.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
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

    const
            elInputAnswer = document.querySelector('.input_answer'),
            elButtonCheck = document.querySelector('.btn_check_word');

    const checkAnswerEvent = function() {
        if (test1.checkAnswer()) {
            console.log('Answer is correctly');
        } else {
            console.log('Answer isn\'t correctly');
        }
    };
    elButtonCheck.addEventListener('click', checkAnswerEvent);
            
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