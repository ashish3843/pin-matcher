function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    
    if (pin.length === 4) {
        return pin
    } else {
       return getPin()
    }
};
// generate pin
function pinGenerate() {
    const pin = document.getElementById('pin');
    pin.value = getPin();
};

//digite btn

document.getElementById('continer-btn').addEventListener('click', function (event) {
    const alldegite = event.target.innerText;
    const inputArea = document.getElementById('input-area');
    if (isNaN(alldegite)) {  
        if (alldegite === "C"){
            inputArea.value = '';
        }
        // if (alldegite === "<"){
        //     inputArea.value = alldegite - ; 
        // }

    } else {      
        inputArea.value = inputArea.value + alldegite;
    }
});

function verifyPin() {
    const pin = document.getElementById('input-area').value;
    const typedPin = document.getElementById('pin').value;
    if (pin == typedPin) {

        confirmationMassage('block', 'none')
        // document.getElementById('correct-pin').style.display = 'block';
        // document.getElementById('wrong-pin').style.display = 'none';
    }else{
        confirmationMassage('none', 'block')
        // document.getElementById('wrong-pin').style.display = 'block';
        // document.getElementById('correct-pin').style.display = 'none';
    }
    
};

function confirmationMassage(correct, incorrect) {
    document.getElementById('correct-pin').style.display = correct;
    document.getElementById('wrong-pin').style.display = incorrect;
}
