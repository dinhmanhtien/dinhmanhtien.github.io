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
    it("Add deposit 10% for $1000", () => {
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