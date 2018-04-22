import "./normalize.css";
import "./index.scss";
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
        return number++;
    }
};

const openJSON = function(fileName) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/js/' + fileName, false);

    xhr.send();

    if (xhr.status != 200) {
        console.log('ERROR: ' + xhr.status + ': ' + xhr.statusText);
    } else {
        return JSON.parse(xhr.responseText);
    }
};

const speakText = function(textForSpeak) {
    responsiveVoice.speak(textForSpeak);
}

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
            
            speakText(currentAnswer);
            nextWord();
            clearInputVal();
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
        wordsAndPhrases     =   currentJSON,
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

    var 
        wordsAndPhrases     =   openJSON('basicLine.json'),
        buttonOpenList      =   document.querySelector('.btn__show_select_line'),
        inputEl             =   document.querySelector('.input_answer'),
        currentEl           =   pickRandWord (wordsAndPhrases),
        currentQuestion     =   currentEl['question'],
        currentAnswer       =   currentEl['answer'],
        plusText            =   document.querySelector('#plus_text'),
        minusText           =   document.querySelector('#minus_text');

    let textEl = document.querySelector('.text_question');
    textEl.innerHTML = currentQuestion;
    inputEl.focus();

    let countSuccess = counterSuccess(1);
    let countError = counterError(1);

    let buttonEl = document.querySelector('.btn_check_word')
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
