function getElement(user) {
    const userDeposit = document.getElementById(user);
    const depositAmountString = userDeposit.value;
    const depositAmount = parseFloat(depositAmountString);
    userDeposit.value = '';
    return depositAmount;
}
function getTotal(total) {
    const totalDipositElement = document.getElementById(total);
    const totalDipositString = totalDipositElement.innerText;
    const previousTotalDiposit = parseFloat(totalDipositString);

    return previousTotalDiposit;
}

function getValue(total, newDiposit) {
    const totalDipositElement = document.getElementById(total);
    // const totalDipositString = totalDipositElement.innerText;
    totalDipositElement.innerText = newDiposit;

}