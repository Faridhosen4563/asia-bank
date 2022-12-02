document.getElementById("diposit-btn").addEventListener("click", function () {
    // const userDeposit = document.getElementById("user-deposit");
    // const depositAmountString = userDeposit.value;
    // const depositAmount = parseFloat(depositAmountString);
    // userDeposit.value = '';
    const dipositAmount = getElement("user-deposit");

    if (dipositAmount < 0 || dipositAmount === "") {
        alert("you cannot add nagative value");
        return;
    }
    if (dipositAmount > 0) {
        const previousTotalDiposit = getTotal("total-diposit");

        const currentTotalDiposit = previousTotalDiposit + dipositAmount;

        getValue("total-diposit", currentTotalDiposit);


        // const totalBalance = document.getElementById("total-balance");
        // const previousTotalBalanceString = totalBalance.innerText;
        // const previousTotalBalance = parseFloat(previousTotalBalanceString);

        const previousTotalBalance = getTotal("total-balance");

        const currentTotalBalance = previousTotalBalance + dipositAmount;

        getValue("total-balance", currentTotalBalance);


    }
    else {
        alert("enter value");
    }

    // // const totalDipositElement = document.getElementById("total-diposit");
    // // const totalDipositString = totalDipositElement.innerText;
    // // const previousTotalDiposit = parseFloat(totalDipositString);
    // const previousTotalDiposit = getTotal("total-diposit");

    // const currentTotalDiposit = previousTotalDiposit + dipositAmount;

    // getValue("total-diposit", currentTotalDiposit);


    // // const totalBalance = document.getElementById("total-balance");
    // // const previousTotalBalanceString = totalBalance.innerText;
    // // const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // const previousTotalBalance = getTotal("total-balance");

    // const currentTotalBalance = previousTotalBalance + dipositAmount;

    // getValue("total-balance", currentTotalBalance);
})