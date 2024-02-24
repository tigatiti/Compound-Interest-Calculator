function Calculate_Function(){
    const initialInvestment = parseFloat(document.getElementById('Initial_Investment').value)
    const monthlyContribution = parseFloat(document.getElementById('Monthly_Contribution').value)
    const lenghtOfTime = parseFloat(document.getElementById('Lenght_Of_Time').value)

    return initialInvestment+monthlyContribution+lenghtOfTime;
}






document.getElementById('calculate').addEventListener('click', function() {
    document.getElementById('total_amount').textContent = Calculate_Function();
});

