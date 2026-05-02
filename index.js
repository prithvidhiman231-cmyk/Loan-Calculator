/*LOAN CALCULATION */
function calculateLoan() {
    const loanAmount = document.getElementById("loan-amount").value;
    const interestRate = document.getElementById("interest-rate").value;
    const monthsToPay = document.getElementById("months-to-pay").value;

    const monthlyInterest = interestRate / 100 / 12;

    const monthlyPayment =
        (loanAmount * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -monthsToPay));

    document.getElementById("payment").innerText =
        "Monthly Payment ($): " + monthlyPayment.toFixed(2);
}

/* ABOUT SECTION TOGGLE*/
const aboutBtn = document.getElementById("about-btn");
const aboutSection = document.getElementById("about-section");

aboutBtn.addEventListener("click", () => {
    if (aboutSection.style.display === "block") {
        aboutSection.style.display = "none";
    } else {
        aboutSection.style.display = "block";
    }
});
