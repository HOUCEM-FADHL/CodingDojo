class User {
  constructor(username, emailAddress) {
    this.name = username;
    this.email = emailAddress;
    this.accountBalance = 0;
  }
  makeDeposit(amount) {
    this.accountBalance += amount; // the specific user's account increases by the amount of the value received
  }
  makeWithdrawal(amount) {
    this.accountBalance -= amount; // the specific user's account decreases by the amount of the value received
  }
  displayBalance() {
     console.log("User:", this.name,", Balance: $",this.accountBalance);
  }
  transferMoney(amount, user) {
    this.makeWithdrawal(amount);
    user.makeDeposit(amount);
    this.displayBalance();
    user.displayBalance();
  }
}
const user1 = new User("user1", "user1@js.com");
const user2 = new User("user2", "user2@js.com");
const user3 = new User("user3", "user3@js.com");
user1.makeDeposit(100);
user1.makeDeposit(100);
user1.makeDeposit(100);
user1.makeWithdrawal(50);
user1.displayBalance();

user2.makeDeposit(50);
user2.makeDeposit(50);
user2.makeWithdrawal(100);
user2.makeWithdrawal(100);
user2.displayBalance();

user3.makeDeposit(100);
user3.makeWithdrawal(30);
user3.makeWithdrawal(30);
user3.makeWithdrawal(30);
user3.displayBalance();

user1.transferMoney(100, user2);