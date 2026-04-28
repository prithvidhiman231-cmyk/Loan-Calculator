function calculateLoan() {
    const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    const MonthsToPayValue = parseFloat(document.getElementById("months-to-pay").value);

    const interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

    const monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}