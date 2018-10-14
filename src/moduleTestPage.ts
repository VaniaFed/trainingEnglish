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

    private counterCorrectlyAnswers: Counter;
    private counterWrongAnswers: Counter;

    constructor(JSONData: any) {
        this.currentTest = new Test(JSON.parse(JSONData));
        this.currentTest.nextCombination();
        this.counterCorrectlyAnswers = new Counter(0);
        this.counterWrongAnswers = new Counter(0);
    }
    init(elements: any): void {
        this.setElements(elements);
        this.updateElements();
        this.followToEventEnter();
    }
    setElements(elements: any) {
        this.setInputAnswer(elements.inputAnswer);
        this.setButtonCheck(elements.buttonCheck);
        this.setTextQuestion(elements.textQuestion);
        this.setTextQuantityCorrectlyAnswers(elements.textQuantityCorrectlyAnswers);
        this.setTextQuantityWrongAnswers(elements.textQuantityWrongAnswers);
        this.setTextQuantityCorrectlyAnswersFromAll(elements.textCountSuccessAnswersFromAll);
        this.setTextQuantityAllAnswersAtAll(elements.textCountAllAnswers);
        console.log(this);
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
        this.textQuantityCorrectlyAnswers = element;
    }
    setTextQuantityWrongAnswers(element: HTMLElement): void {
        this.textQuantityWrongAnswers = element;
    }
    setTextQuantityCorrectlyAnswersFromAll(element: HTMLElement): void {
        this.textQuantityCorrectlyAnswersFromAll = element;
    }
    setTextQuantityAllAnswersAtAll(element: HTMLElement): void {
        this.textQuantityAllAnswersAtAll = element;
    }
    followToEventEnter () {
        let _this = this;
        this.buttonCheck.addEventListener('click', () => _this.checkAnswerEventAfterButtonClick);
        addEventListener('keydown', (e) => {
            this.giveFocusInput();
            if (e.keyCode === 13) {
                console.log(this.currentTest.getAnswer());
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
            console.log(true);
        } else {
            this.counterWrongAnswers.tick();
            console.log(false);
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
        this.textQuantityCorrectlyAnswers.innerHTML = String(this.counterCorrectlyAnswers.getCount());
    }
    updateTextQuantityWrongAnswers() {
        this.textQuantityWrongAnswers.innerHTML = String(this.counterWrongAnswers.getCount());
    }
    updateCountSuccessAnswerFromAll() {
        this.textQuantityCorrectlyAnswersFromAll.innerText = String(this.counterCorrectlyAnswers.getCount());
    }
    updateCountAllAnswer() {
        this.textQuantityAllAnswersAtAll.innerHTML = this.currentTest.getMaxLength();
    }
}