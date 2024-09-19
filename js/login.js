
// // step 1. set eventHandler

// document.getElementById('login=btn').addEventListener('click', function(event){

//     // step 2. prevent Default bebohar kora hoy (prevent reloading browser) 
//     event.preventDefault()

//     // step-3 get the phone number
//    const phoneNumber =  document.getElementById('phone-number').value
//    const pinNumber = document.getElementById('pin-number').value
//    console.log(phoneNumber,pinNumber)
//    phoneNumber.value = ''
//    pinNumber.value = ''

// //    validate phone and pin 
//    if(phoneNumber === '01645733049' && pinNumber === '!@#$1234'){
//     console.log('you are logged in')
//     // allow use to user website

//    }else{
//     alert('phone number or pin number is invalid')
//    }
// })

document.getElementById('login=btn').addEventListener('click', function(event){
        event.preventDefault()

        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value
        const pinNumber = document.getElementById('pin-number').value
        console.log(phoneNumber,pinNumber)

        if(phoneNumber === '01645733049' && pinNumber === '!@#$'){
            window.location.href = 'home.html'
        }else{
            alert('wrong phone number and password')
        }
})