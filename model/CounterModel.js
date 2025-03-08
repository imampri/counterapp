import { makeAutoObservable } from "mobx";

class CounterModel {
    count = 0;

    constructor() {
      makeAutoObservable(this);
    }

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    reset() {
        this.count = 0;
    }

    getCount() {
        return this.count;
    }
}

export default CounterModel;