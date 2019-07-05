let creditLimit = 5000;


/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit. 
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanPlease = function(amount) {
    return new Promise((resolve, reject) => {
      if (creditLimit === 0) {
        reject("Insufficient Funds!");
      } else if (creditLimit - amount < 0){ 
          var i = creditLimit;
        creditLimit = 0;
        resolve(i);
      }else{
          creditLimit -= amount;
          resolve(amount)
      }
    });
  };

console.log(loanPlease(4999));