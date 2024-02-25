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
      this.accountBalance >= amount ? (this.accountBalance -= amount + 5) : console.log("Insufficient funds: Charging $5 fee");
      return this;
    }
  
    displayAccountInfo() {
      console.log(`Balance: $${this.accountBalance}`);
      return this;
    }
  
    yieldInterest() {
      this.accountBalance >= 0 ? (this.accountBalance += this.accountBalance * this.interestRate) : console.log("Insufficient funds: Charging $5 fee");
      return this;
    }
  }
  
  class User {
    constructor(username, emailAddress) {
      this.name = username;
      this.email = emailAddress;
      this.accounts = {}; // Use an object to store multiple accounts
    }
  
    createAccount(accountNumber, intRate, initialBalance) {
      this.accounts[accountNumber] = new BankAccount(intRate, initialBalance);
      return this;
    }
  
    selectAccount(accountNumber) {
      if (this.accounts.hasOwnProperty(accountNumber)) {
        this.currentAccount = this.accounts[accountNumber];
      } else {
        console.log("Account not found.");
      }
      return this;
    }
  
    makeDeposit(amount) {
      if (this.currentAccount) {
        this.currentAccount.deposit(amount);
      } else {
        console.log("Please select an account first.");
      }
      return this;
    }
  
    makeWithdrawal(amount) {
      if (this.currentAccount) {
        this.currentAccount.withdraw(amount);
      } else {
        console.log("Please select an account first.");
      }
      return this;
    }
  
    displayBalance() {
      if (this.currentAccount) {
        this.currentAccount.displayAccountInfo();
      } else {
        console.log("Please select an account first.");
      }
      return this;
    }
  }
  
  const user1 = new User("user1", "user1@js.com");
  user1.createAccount("account1", 0.02, 0);
  user1.createAccount("account2", 0.02, 100);
  user1.selectAccount("account1").makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(50).displayBalance();
  user1.selectAccount("account2").makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(50).displayBalance();
  
// class BankAccount {
//     constructor(intRate, balance) {
//       this.accountBalance = balance;
//       this.interestRate = intRate;
//     }
  
//     deposit(amount) {
//       this.accountBalance += amount;
//       return this;
//     }
//     withdraw(amount) {
//       this.accountBalance>=amount?this.accountBalance-=amount+5:console.log("Insufficient funds: Charging $5 fee");
//       return this;
//     }
//     displayAccountInfo() {
//       console.log(`Balance: $${this.accountBalance}`);
//       return this;
//     }
//     yieldInterest() {
//       this.accountBalance>=0?this.accountBalance+=(this.accountBalance*this.interestRate):console.log("Insufficient funds: Charging $5 fee");
//       return this;
//     }
  
//   }
// class User {
//     constructor(username, emailAddress, accountNumber ) {
//       this.name = username;
//       this.email = emailAddress;
//       this.account = new BankAccount(0.02,0);
//     }
//     makeDeposit(amount) {
//       this.account.deposit(amount);
//       return this;
//   }
//     makeWithdrawal(amount) {
//       this.account.withdraw(amount);
//       return this;
//     }
//     displayBalance() {
//         this.account.displayAccountInfo();
//        return this;
//     }
// }

// const user1 = new User("user1", "user1@js.com", "account1");
// user1.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(50).displayBalance()
