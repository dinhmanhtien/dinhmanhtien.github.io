describe('Test Account', () => {
    //Write it functions here
    let account = new Account(12345);
    it("Get Account number", () => {
        assert.equal(account.getNumber(), 12345);
    });

    it("Get Empty Balance", () => {
        assert.equal(account.getBalance(), 0.0);
    });

    it("Deposit negative amount throws error", () => {
        // account.deposit(-100);
        assert.throws(
            () => account.deposit(-100),
            RangeError
        );
    });

    it("Deposit positive $100 ok", () => {
        account.deposit(100);
        assert.equal(account.getBalance(), 100.0);
    });

    it("Withdaw negative amount throws error", () => {
        // account.deposit(-100);
        assert.throws(
            () => account.withdraw(-100),
            RangeError
        );
    });

    it("Withdaw amount greater than account balance", () => {
        // account.deposit(-100);
        assert.throws(
            () => account.withdraw(900),
            Error
        );
    });

    it("Withdraw $50 ok", () => {
        account.withdraw(50);
        assert.equal(account.getBalance(), 50.0);
    });

    it("Test toString", () => {
        assert.equal(account.toString(), "Account 12345: balance 50");
    });
});

describe('Test Saving Account', () => {
    //Write it functions here
    let saving = new SavingsAccount(123456, 10);
    saving.deposit(1000);
    it("Add interest 10% for $1000", () => {
        assert.equal(saving.adInterest(), 1100);
    });
    it("Test toString", () => {
        assert.equal(saving.toString(), "Saving Account 123456: balance 1100: interest 10");
    });

});

describe('Test Checking Account', () => {
    //Write it functions here
    let checking = new CheckingAccount(123456, 100);
    checking.deposit(1000);
    it("Test toString", () => {
        assert.equal(checking.toString(), "Checking Account 123456: balance 1000: overdraft 100");
    });

    it("Withdaw negative amount throws error", () => {
        // account.deposit(-100);
        assert.throws(
            () => checking.withdraw(-100),
            RangeError
        );
    });

    it("Withdaw amount greater than account balance", () => {
        assert.throws(
            () => checking.withdraw(1101),
            Error
        );
    });

    it("Withdaw overdraft OK", () => {
        checking.withdraw(1100);
        assert.equal(checking.getBalance(), -100.0);
    });

});

describe('Test Bank', () => {
    //Write it functions here
    let bank = new Bank();

    it("Starting nextNumber = 1", () => {
        assert.equal(Bank.nextNumber, 1);
    });

    it("nextNumber = 2 after adding an account", () => {
        bank.addAccount();
        assert.equal(Bank.nextNumber, 2);
    });

    it("After adding an account, accounts array has 1 account", () => {
        assert.equal(bank.getAccounts().length, 1);
    });

    it("nextNumber = 3 after adding a savings account", () => {
        var acct = bank.addSavingsAccount(15);
        acct.deposit(1000);
        assert.equal(Bank.nextNumber, 3);
    });

    it("nextNumber = 4 after adding a checking account", () => {
        var acct = bank.addCheckingAccount(200);
        acct.withdraw(100);
        assert.equal(Bank.nextNumber, 4);
    });

    it("Close account #2", () => {
        // var acct = bank.addCheckingAccount(200);
        // acct.withdraw(100);
        bank.closeAccount(2);
        assert.equal(bank.getAccounts().length, 2);
    });

    it("Test print account report on console log", () => {
        var acct = bank.addSavingsAccount(15);
        acct.deposit(1000);
        bank.accountReport();
        assert.equal(1, 1);
        
    });

    it("End of month (see console log)", () => {
        bank.endOfMonth();
        assert.equal(1, 1);

    });

    

});