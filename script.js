document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', function() {
        var initialInvestment = parseFloat(document.getElementById('initial_investment').value);
        var monthlyContribution = parseFloat(document.getElementById('monthly_contribution').value);
        var lengthOfTime = parseFloat(document.getElementById('length_of_time').value);

        console.log('Initial Investment:', initialInvestment);
        console.log('Monthly Contribution:', monthlyContribution);
        console.log('Length of Time:', lengthOfTime);

        // Assuming a simple addition for demonstration 321
        var totalAmount = initialInvestment + monthlyContribution + lengthOfTime;

        document.getElementById('total_amount').textContent = totalAmount.toFixed(2);
    });
});
