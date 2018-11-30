import * as help from './helpFunctions';
import TestData from './combinations';

const getRandomIndexArray = help.getRandomIndexArray;

export default class TestLogic {

    constructor(JSONString: object[]) {
        this.newTest(JSONString);
        this.nextCombination();
    }

    public newTest(JSONString: object[]): void {
        this.combinations = new TestData(JSONString);
    }

    public getQuestion(): string {
        return this.question;
    }
    public getAnswer(): string {
        return this.answer;
    }
    public getQuantityCombinations(): number {
        return this.combinations.getQuantity();
    }

    public nextCombination(): void {
        this.nextIndex();
        this.nextCurrentCombination();
        this.nextQuestion();
        this.nextAnswer();
    }

    public removeCurrentCombination(): void {
        this.combinations.removeCombinationWithIndex(this.index);
    }

    public isAnswerCorrect(userAnswer: string): boolean {
        return userAnswer.toLowerCase().indexOf(this.answer.toLowerCase(), 0) !== -1;
    }


    private nextIndex(): void {
        this.index = getRandomIndexArray(this.combinations.getCombitanions());
    }
    private nextCurrentCombination(): void {
        this.currentCombination = this.combinations.getCombinationWithIndex(this.index);
    }
    private nextQuestion(): void {
        this.question = this.currentCombination['question'];
    }
    private nextAnswer(): void {
        this.answer = this.currentCombination['answer'];
    }


    private combinations: TestData;
    private currentCombination: any;
    private question: string;
    private answer: string;
    private index: number;
}