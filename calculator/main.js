const keys = document.querySelector('.calculator-keys')
var input = document.querySelector('.calculator-input')
var secondkeys = 0
var double=true
var data=[]
keys.addEventListener('click', function (e) {
    var result = e.target.value
    if (e.target.classList.contains('num') && input.value < 99999999) {
        if (input.value==0 && double) {
            input.value = result
        } else {
            input.value += result
        }
    }
    else if (e.target.classList.contains('operator')) {
        secondkeys=input.value
        input.value=0
        data.push(result)
    }
    else {
        if (result == 'clear') {
            input.value = 0
            secondkeys = 0
        }else if(result=='='){
            input.value+=secondkeys
            double=true
        }else if(result=='.' && double){
            input.value+=result
            double=false
        }
    }

})