"use strict";

class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this.interest = interest;
    }

    get interest(){
        return this._interest;
    }

    set interest(value){
        this._interest = value;
    }
    

    adInterest(){
        return this._balance = (this._balance * this._interest)/100 + this._balance;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving " + super.toString() + ": interest " + this._interest;
    }

    endOfMonth() {
        let calcInterest = this.adInterest();

        let msg = "Interest added SavingsAccount "+this._number+ ": balance: "+calcInterest+" interest: "+ this._interest;
        return msg; // does nothing
    }

}