import "./normalize.css";
import "./index.scss"; 'use strict';

window.onload = function () {
    // help functions
    const getRandomIndexArray = function(arr: any[]): number {
        return getRandomNumberOfRande(0, arr.length);
    };
    const getRandomNumberOfRande = function(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const getResultOfRequest = function(URL: string, callback: (data: any) => any): void  {
        const f = callback || function(data) {}; 

        const request = new XMLHttpRequest();
        const checkRequest = function () {
            if (isRequestPostedWithoutErrors(this)) {
                f(this.response);
            }
        }

        request.onreadystatechange = checkRequest;
        request.open('GET', URL, false);
        request.send();
    };
    const isRequestPostedWithoutErrors = function(request: XMLHttpRequest) {
        return request.readyState === 4 && request.status === 200;
    };

    const hideElement = function() {
        this.classList.add('hide');
        this.removeEventListener('transitionend', hideElement);
    };
    const showElement = function(el: HTMLElement) {
        el.classList.remove('hide');
    };

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

    const setNewJSON = function(inputJSONName: string) {
        let newJSONName: string;

        switch(inputJSONName) {
            case 'Main phrases': {
                getResultOfRequest('basicLine.json', (result: any) => jsonData = result); 
                break;
            };
            case 'Special questions': {
                getResultOfRequest('questionsLine.json', (result: any) => jsonData = result); 
                break;
            };
            case 'New words': {
                getResultOfRequest('newWordsLine.json', (result: any) => jsonData = result); 
                break;
            };
            case 'Antonyms': {
                getResultOfRequest('antonymsLine.json', (result: any) => jsonData = result); 
                break;
            };
        }
    };

    class Counter {
        private count: number;
        constructor(start: number) {
            this.count = start || 0;
        }
        tick(): void {
            this.count++;
        }
        setTimer(time: number, callback: () => any): void {
            const f = callback || function() {};
            setInterval(f, time);
        }
        getCount() {
            return this.count;
        }
    }
    class Test {
        private allCombinations: any[];
        private currentCombination: any;
        private question: string;
        private answer: string;
        private currentIndex: number;
        private maxLength: number;

        constructor(JSONString: object[]) {
            this.allCombinations = JSONString;
            this.maxLength = this.allCombinations.length;
        }
        getQuestion(): string {
            return this.question;
        }
        getAnswer(): string {
            return this.answer;
        }
        getMaxLength(): number {
            return this.maxLength;
        }
        setCombination(JSONString: any) {
            this.currentCombination = JSONString;
        }
        nextCombination(): void {
            this.nextIndex();
            this.nextCurrentCombination();
            this.nextQuestion();
            this.nextAnswer();
        }
        nextIndex(): void {
            this.currentIndex = getRandomIndexArray(this.allCombinations);
        }
        nextCurrentCombination(): void {
            this.currentCombination = this.allCombinations[this.currentIndex];
        }
        nextQuestion(): void {
            this.question = this.currentCombination['question'];
        }
        nextAnswer(): void {
            this.answer = this.currentCombination['answer'];
        }
        removeCurrentCombinationFromArray(): void  {
            this.allCombinations.splice(this.currentIndex, 1);
        }
        checkAnswer(userAnswer: string): boolean {
            return userAnswer.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
        }
    }

    class testPage {
        private jsonData: any;
        private defaultJSONString: string;

        private inputAnswer: HTMLInputElement;
        private buttonCheck: HTMLElement;
        private textQuestion: HTMLElement;
        private textQuantityCorrectlyAnswers: HTMLElement;
        private textQuantityWrongAnswers: HTMLElement; 
        private textQuantityCorrectlyAnswersFromAll: HTMLElement;
        private textQuantityAllAnswersAtAll: HTMLElement;
        private currentTest: any;

        private counterCorrectlyAnswers: any;
        private counterWrongAnswers: any;
        constructor(JSONData: any) {
            this.currentTest = new Test(JSON.parse(JSONData));
            this.currentTest.nextCombination();
            this.counterCorrectlyAnswers = new Counter(0);
            this.counterWrongAnswers = new Counter(0);
        }
        init(elements: any): void {
            this.setElements(elements);
            this.followToEventEnter();
        }
        setElements(elements: any) {
            this.setInputAnswer(elements.inputAnswer);
            this.setButtonCheck(elements.buttonCheck);
            this.setTextQuestion(elements.textQuestion);
            this.setTextQuantityCorrectlyAnswers(elements.textQuantityCorrectlyAnswers);
            this.setTextQuantityWrongAnswers(elements.textQuantityWrongAnswers);
            this.setTextQuantityCorrectlyAnswersFromAll(elements.textQuantityCorrectlyAnswersFromAll);
            this.setTextQuantityAllAnswersAtAll(elements.textQuantityAllAnswersAtAll);
        }
        setInputAnswer(element: HTMLInputElement): void {
            this.inputAnswer = element;
        }
        setButtonCheck(element: HTMLElement): void {
            this.buttonCheck = element;
        }
        setTextQuestion(element: HTMLElement): void {
            this.textQuestion = element;
        }
        setTextQuantityCorrectlyAnswers(element: HTMLElement): void {
            this.counterCorrectlyAnswers = element;
        }
        setTextQuantityWrongAnswers(element: HTMLElement): void {
            this.counterWrongAnswers = element;
        }
        setTextQuantityCorrectlyAnswersFromAll(element: HTMLElement): void {
            this.textQuantityCorrectlyAnswersFromAll = element; }
        setTextQuantityAllAnswersAtAll(element: HTMLElement): void {
            this.textQuantityAllAnswersAtAll = element;
        }
        followToEventEnter () {
            this.buttonCheck.addEventListener('click', this.checkAnswerEventAfterButtonClick);
            addEventListener('keydown', (e) => {
                this.giveFocusInput();
                if (e.keyCode === 13) {
                    if (this.isAnswerCorrectly()) {
                        this.incCorrectAnswersAndRemoveCurrentCombination();
                    } else {
                        this.counterWrongAnswers.tick();
                    }
                    this.currentTest.nextCombination();
                    this.updateElements();
                }
            });
        }
        checkAnswerEventAfterButtonClick(): void {
            if (this.isAnswerCorrectly()) {
                this.incCorrectAnswersAndRemoveCurrentCombination();
            } else {
                this.counterWrongAnswers.tick();
            }
            this.currentTest.nextCombination();
            this.updateElements();
        }
        giveFocusInput() {
            this.inputAnswer.focus();
        }
        isAnswerCorrectly(): boolean {
            return this.currentTest.checkAnswer(this.inputAnswer.value);
        }
        incCorrectAnswersAndRemoveCurrentCombination(): void {
            this.counterCorrectlyAnswers.tick();
            this.currentTest.removeCurrentCombinationFromArray();
        }
        updateElements() {
            this.updateInputAnswer();
            this.updateTextQuestion();
            this.updateTextQuantityCorrectlyAnswers();
            this.updateTextQuantityWrongAnswers();
            this.updateCountSuccessAnswerFromAll();
            this.updateCountAllAnswer();
        }
        updateInputAnswer() {
            this.inputAnswer.value = '';
        }
        updateTextQuestion() {
            this.textQuestion.innerHTML = this.currentTest.getQuestion();
        }
        updateTextQuantityCorrectlyAnswers() {
            this.textQuantityCorrectlyAnswers.innerHTML = this.counterCorrectlyAnswers.getCount();
        }
        updateTextQuantityWrongAnswers() {
            this.textQuantityWrongAnswers.innerHTML = this.counterWrongAnswers.getCount();
        }
        updateCountSuccessAnswerFromAll() {
            this.textQuantityCorrectlyAnswersFromAll.innerHTML = this.counterCorrectlyAnswers.getCount();
        }
        updateCountAllAnswer() {
            this.textQuantityAllAnswersAtAll.innerHTML = this.currentTest.getMaxLength();
        }
    }

    // start is here
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