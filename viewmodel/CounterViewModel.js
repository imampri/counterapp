import CounterModel from '../model/CounterModel';

class CounterViewModel {
    model = new CounterModel();

    increment() {
        this.model.increment();
    }

    decrement() {
        this.model.decrement();
    }

    reset() {
        this.model.reset();
    }

    get count() {
        return this.model.getCount();
    }
}

const counterViewModel = new CounterViewModel();
export default counterViewModel;