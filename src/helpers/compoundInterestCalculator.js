function calculateCompoundInterest(capital = 0, months = 0, interest = 0) {
  const finalCompoundInterest = [];
  console.log("Interest:", interest);
  console.log("Capital:", capital);
  console.log("Months:", months);
  /*if (capital === 0 || months === 0 || interest === 0 || isNaN(interest)) {
    return [];
  }*/

  for (var i = 1; i <= months; i++) {
    let tax = 1 + interest / 100;
    let compoundTax = Math.pow(tax, i);
    let total = capital * compoundTax;
    let percentage = (((total - capital) * 100) / capital).toFixed(2);

    let obj = {
      totalValue: total.toFixed(2),
      month: i,
      dividends: (total - capital).toFixed(2),
      percentage,
    };

    finalCompoundInterest.push(obj);
  }

  return finalCompoundInterest;
}

export { calculateCompoundInterest };
