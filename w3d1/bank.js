"use strict";

class Bank{
    constructor(){
        this._accounts = [];
    }
    static nextNumber = 1;

    addAccount(){
        let acct = new Account(Bank.nextNumber);
        this._accounts.push(acct);
        Bank.nextNumber = Bank.nextNumber + 1;
    }

    addCheckingAccount(){
        let acct = new CheckingAccount(Bank.nextNumber);
        this._accounts.push(acct);
        Bank.nextNumber = Bank.nextNumber + 1;
    }

    addSavingsAccount(interest){
        let acct = new SavingsAccount(Bank.nextNumber, interest);
        this._accounts.push(acct);
        Bank.nextNumber = Bank.nextNumber + 1;
        return acct;
    }

    addCheckingAccount(overdraft){
        let acct = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accounts.push(acct);
        Bank.nextNumber = Bank.nextNumber + 1;
        return acct;
    }

    closeAccount(num){
        console.log("before "+this._accounts);
        this._accounts = this._accounts.filter(x => x.getNumber() !== num);
        console.log("after "+this._accounts);
    }

    accountReport(){
        console.log('-------- account report --------');
        for(let i=0; i<this._accounts.length; i++){
            console.log(this._accounts[i].toString());
        }
        console.log('--------------------------------');
    }

    getAccounts(){
        return this._accounts;
    }
    
    endOfMonth() {
        for(let i=0; i<this._accounts.length; i++){
            console.log(this._accounts[i].endOfMonth());
        }

    }

}