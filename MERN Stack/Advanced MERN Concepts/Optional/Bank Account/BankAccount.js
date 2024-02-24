class BankAccount {
  constructor(intRate, balance) {
    this.accountBalance = balance;
    this.interestRate = intRate;
  }

  deposit(amount) {
    this.accountBalance += amount;
    return this;
  }
  withdraw(amount) {
    this.accountBalance>=amount?this.accountBalance-=amount+5:console.log("Insufficient funds: Charging $5 fee");
    return this;
  }
  displayAccountInfo() {
    console.log(`Balance: $${this.accountBalance}`);
    return this;
  }
  yieldInterest() {
    this.accountBalance>=0?this.accountBalance+=(this.accountBalance*this.interestRate):console.log("Insufficient funds: Charging $5 fee");
    return this;
  }

}
const user1 = new BankAccount(0.01,100);
const user2 = new BankAccount(0.01,100);
user1.deposit(100).deposit(100).deposit(100).withdraw(50).yieldInterest().displayAccountInfo();
user2.deposit(100).deposit(100).withdraw(100).withdraw(50).withdraw(50).withdraw(50).yieldInterest().displayAccountInfo();
// user1.withdraw(95).yieldInterest().displayAccountInfo();

