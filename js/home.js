/**
 * 1. add money to the account
 * 2.get money to added balance account
 * 
 */
// step-1. add EventHandler add money button
document.getElementById('addMoney-btn').addEventListener('click', 
    function(event){
        // prevent page reload
        event.preventDefault()
   
        // get money added to be balance account
        const addMoneyInput = document.getElementById('inputAdd-money').value

        // get the pin provide number
        const pinNumberInput = document.getElementById('input-password').value
        console.log(addMoneyInput,pinNumberInput)
})