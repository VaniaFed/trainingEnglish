import "./normalize.css";
import "./index.scss";

import "./helpFunctions.ts";

import "./counter.ts";
import "./moduleTest.ts";
import "./moduleTestPage"

'use strict';

window.onload = function () {
    let jsonData: any;
    let defaultJSONString: string = './js/basicLine.json';

    getResultOfRequest(defaultJSONString, (result: any) => jsonData = result);

    const elements: any = {
        inputAnswer: document.querySelector('.input_answer'),
        buttonCheck: document.querySelector('.btn_check_word'),
        textQuestion: document.querySelector('.text_question'),
        textQuantityCorrectlyAnswers: document.querySelector('#plus_text'),
        textQuantityWrongAnswers: document.querySelector('#minus_text'),
        textCountSuccessAnswersFromAll: document.querySelector('.quantity__success'),
        textCountAllAnswers: document.querySelector('.quantity__all')
    };

    const myTestPage = new testPage(jsonData);
    myTestPage.init(elements);
};