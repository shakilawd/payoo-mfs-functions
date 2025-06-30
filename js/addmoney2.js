document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }

        // console.log('add money inside addMoney2.js', addMoney, pinNumber)
        
        // wrong way to varify.do not try it at your serious websides
        if(pinNumber === 1234){
           const balance = getTextFieldValueById('account-balance');
        //    console.log(balance, addMoney);
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
        console.log(p);
        // showld  be a common function
        document.getElementById('transaction-container').appendChild(p);

        }
         else{
                alert('Failed to add money.')
            }

    })