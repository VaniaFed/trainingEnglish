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
/*
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
*/

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
