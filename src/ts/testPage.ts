import TestLogic from './testLogic';
import Counter from './counter';
import HtmlElements from './htmlElements';

export default class TestPage {
    constructor(inputJSONData: any) {
        this.test = new TestLogic(JSON.parse(inputJSONData));
        this.htmlElements = new HtmlElements();
        this.counterCorrectAnswers = new Counter(0);
        this.counterIncorrectAnswers = new Counter(0);
    }

    public init(): void {
        this.updateValueElements();
        this.followToEventEnter();
    }

    private updateValueElements(): void {
        this.htmlElements.setQuestion(this.test.getQuestion());
        this.htmlElements.setQuantityCorrectAnswers(String(this.counterCorrectAnswers.getCount()));
        this.htmlElements.setQuantityIncorrectAnswers(String(this.counterIncorrectAnswers.getCount()));
        this.htmlElements.setQuantityCorrectAnswered((String(this.test.getQuantityCombinations())));
        this.htmlElements.setQuantityAllQuestions((String(this.counterCorrectAnswers.getCount())));
    }
    private followToEventEnter () {
        addEventListener('keydown', (e) => {
            this.giveFocusInput();
            if (this.isPressedEnter(e)) {
                this.checkAnswerAndNextLevel();
            }
        });
    }

    private isPressedEnter (e: any) {
        return e.keyCode === 13;
    }

    private checkAnswerAndNextLevel () {
        if (this.isAnswerCorrect()) {
            this.removeCombination();
            this.increaseCounterCorrect();
        } else {
            this.increaseCounterIncorrect();
        }
        this.test.nextCombination();
        this.updateValueElements();
        this.htmlElements.clearFieldElements();
    }

    private giveFocusInput() {
        this.htmlElements.getInputAnswer().focus();
    }

    private isAnswerCorrect(): boolean {
        return this.test.isAnswerCorrect(this.htmlElements.getInputAnswer().value);
    }

    private removeCombination (): void {
        this.test.removeCurrentCombination();
    }
    private increaseCounterCorrect(): void {
        this.counterCorrectAnswers.tick();
    }
    private increaseCounterIncorrect(): void {
        this.counterIncorrectAnswers.tick();
    }

    private counterCorrectAnswers: Counter;
    private counterIncorrectAnswers: Counter;
    private test: TestLogic;
    private htmlElements: HtmlElements;
}