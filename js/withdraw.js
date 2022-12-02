document.getElementById("withdraw-btn").addEventListener("click", function () {
    // const userWithdraw = document.getElementById("user-withdraw");
    // const withdrawAmountString = userWithdraw.value;
    // const withdrawAmount = parseFloat(withdrawAmountString);
    // userWithdraw.value = '';
    const withdrawAmount = getElement("user-withdraw");

    if (withdrawAmount < 0 || withdrawAmount == "") {
        alert("you cannot add nagative value");
        return;
    }
    if (withdrawAmount > 0) {

        const previousTotalWithdraw = getTotal("total-withdaw");


        // const totalBalance = document.getElementById("total-balance");
        // const previousTotalBalanceString = totalBalance.innerText;
        // const previousTotalBalance = parseFloat(previousTotalBalanceString);

        const previousTotalBalance = getTotal("total-balance");

        if (withdrawAmount > previousTotalBalance) {
            alert("You dont have enough balance, Please diposit then withdraw.");
            return;
        }


        const currentTotalWithdraw = previousTotalWithdraw + withdrawAmount;
        // totalWithdraw.innerText = currentTotalWithdraw;
        getValue("total-withdaw", currentTotalWithdraw);

        const currentTotalBalance = previousTotalBalance - withdrawAmount;
        // totalBalance.innerText = currentTotalBalance;
        getValue('total-balance', currentTotalBalance);
    }
    else {
        alert("enter a value");
    }

    // const totalWithdraw = document.getElementById("total-withdaw");
    // const previousTotalWithdrawString = totalWithdraw.innerText;
    // const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);


})