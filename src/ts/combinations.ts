export default class TestData {

    constructor(JSONString: object[]) {
        this.setCombinations(JSONString);
    }

    public getCombitanions(): any {
        return this.combinations;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getCombinationWithIndex(index: number): void {
        return this.combinations[index];
    }

    public removeCombinationWithIndex(index: number): void {
        this.combinations.splice(index, 1);
    }


    private setCombinations(combination: any[]): void {
        this.combinations = combination;

        let newStartValue = combination.length;
        this.setStartValue(newStartValue);
    }

    private setStartValue(startValue: number): void {
        this.quantity = startValue;
    }

    private combinations: any[];
    private quantity: number;
}