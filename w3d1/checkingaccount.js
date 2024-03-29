class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this.overdraft = overdraft;
    }
    get overdraft(){
        return this._overdraft;
    }

    set overdraft(value){
        this._overdraft = value;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this.overdraft)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking " + super.toString() + ": overdraft " + this._overdraft;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraft;
        } else {
            return ""; // does nothing
        }
    }

}