function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        newOperationTime = new Date().toLocaleString('en-GB');
    
    function fnHistoryLogs(operationType, credits, date) {
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            date: date
        });
    }
    
    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        },
        
        putCredits(amount) {
            if (validLog(credits, userCredits, transactionLimit)) {
                return;
              }
              userCredits += credits;
              trackHistoryLogs('Withdrawal of credits', credits);
        },
        
        takeCredits(amount) {
            if (!validLog(credits, userCredits, transactionLimit)) {
                return;
              }
              userCredits -= credits;
              trackHistoryLogs('Withdrawal of credits', credits);
        },
        
        setTransactionLimit(amount) {
            transactionLimit = amount;
            
            fnHistoryLogs('Transaction limit change', amount, newOperationTime);
        },
        
        transferCredits(amount, usersCard) {
            const tax = 0.005,
                  amountAndTax = amount * tax + amount;
            
            if (amountTax > balance) {
                console.log('You can not transfer credits, because balance exceeded');
            } else if (amountTax > transactionLimit) {
                console.log('You can not transfer credits, because transaction limit exceeded');
            } else {
                this.takeCredits(amountTax);
                usersCard.putCredits(amount);
            }
        }
    };
} 

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.limitCards = 3;
    }
    
    addCard() {
        if (this.cards.length < this.max) {
          this.cards.push(userCard(this.cards.length + 1));
        } else {
          console.error(`You can not have more than 3 cards`);
        }
      }
    getCardByKey(key) {
        return this.cards[key-1];
    }
}