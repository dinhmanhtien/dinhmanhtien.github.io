"use strict";

class SavingsAccount extends Account{
    constructor(interest){
        this.interest = interest;
    }

    get interest(){
        return this._interest;
    }

    set interest(value){
        this._interest = value;
    }

    adInterest(){
        this._balance = (this._balance * this._interest)/100 + this._balance;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

}