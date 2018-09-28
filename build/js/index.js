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

const rand = function(min, max) {
    return index = Math.floor(Math.random() * (max - min) + min);
};

class Counter {
    constructor(start) {
        this.count = start || 0;
    }
    tick() {
        this.count++;
    }
    set(time, callback) {
        const f = callback || function(){};
        setInterval(fun, f);
    }
    get() {
        return this.count;
    }
}
const counterSuccess = new Counter();

const counterError = new Counter();

const increaseNumber = function(inputNumber, range) {
    let number = inputNumber || 0;
    return function() {
        return number++;
    }
};

const getRequest = function(url, callback) {
    const f = callback || function(data) {}; 
    const request = new XMLHttpRequest ();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            f(this.response);
        }
    };

    request.open('GET', url, false);
    request.send();
};

const openJSON = function(fileName) {
    /*let xhr = new XMLHttpRequest();
    xhr.open('GET', '/js/' + fileName);

    let currentStringJSON = getJSON (xhr);
    xhr.send();
    return currentStringJSON;
*/
    let jsonString = fetch('/' + fileName) 
        .then(function(response) {
            console.log(response.headers.get('Content-type'));
            console.log(response.status);
            return response.json();
        });
    return jsonString;
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
        let listContainer   =   document.querySelector('.select_level__container'),
            svgOpenList     =   document.getElementById('Capa_1');

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
        let listContainer   =   document.querySelector('.select_level__container'),
            svgOpenList     =   document.getElementById('Capa_1');
        hideElement (listContainer);
        svgOpenList.classList.remove('svg-open');
    };

    const getNewJSON = function(currentJSON) {
        wordsAndPhrases     =   JSON.parse(currentJSON),
        currentEl           =   pickRandWord (wordsAndPhrases),
        currentQuestion     =   currentEl['question'],
        currentAnswer       =   currentEl['answer'];
    };

    const selectNewJSON = function() {
        var currentStringJSON;

        switch(this.innerHTML) {
            case 'Main phrases': {
                currentStringJSON = openJSON('basicLine.json'); 
                break;
            };
            case 'Special questions': {
                currentStringJSON = openJSON('questionsLine.json');
                break;
            };
            case 'New words': {
                currentStringJSON = openJSON('newWordsLine.json');
                break;
            };
            case 'Antonyms': {
                currentStringJSON = openJSON('antonymsLine.json');
                break;
            };
        }
        
        getNewJSON (currentStringJSON);
        toggleContainer ();
    };

    console.log('Тут будет код');

    let requestData;

    getRequest('./js/listData.json', function(result){ requestData = result; });

    console.log(JSON.parse(requestData));

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