export default class Counter {
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