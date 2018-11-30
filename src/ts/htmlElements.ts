export default class HtmlElements {
    constructor() {
        this.inputAnswer = document.querySelector('.input_answer');
        this.buttonCheck = document.querySelector('.btn_check_word');
        this.question = document.querySelector('.text_question');
        this.quantityCorrectAnswers = document.querySelector('#plus_text');
        this.quantityIncorrectAnswers = document.querySelector('#minus_text');
        this.quantityCorrectAnswered = document.querySelector('.quantity__success');
        this.quantityAllQuestions = document.querySelector('.quantity__all');
    }

    public getButtonCheck(): HTMLElement {
        return this.buttonCheck;
    }

    public getInputAnswer(): HTMLInputElement {
        return this.inputAnswer;
    }

    public clearFieldElements(): void {
        this.clearFieldInputAnswer();
    }
    public clearFieldInputAnswer(): void {
        this.inputAnswer.value = '';
    }

    public setQuestion(value: string): void {
        this.question.innerHTML = value;
    }
    public setQuantityCorrectAnswers(value: string): void {
        this.quantityCorrectAnswers.innerHTML = value;
    }
    public setQuantityIncorrectAnswers(value: string): void {
        this.quantityIncorrectAnswers.innerHTML = value;
    }
    public setQuantityCorrectAnswered(value: string): void {
        this.quantityCorrectAnswered.innerText = value;
    }
    public setQuantityAllQuestions(value: string): void {
        this.quantityAllQuestions.innerHTML = value;
    }

    private inputAnswer: HTMLInputElement;
    private buttonCheck: HTMLElement;
    private question: HTMLElement;
    private quantityCorrectAnswers: HTMLElement;
    private quantityIncorrectAnswers: HTMLElement;
    private quantityCorrectAnswered: HTMLElement;
    private quantityAllQuestions: HTMLElement;
}