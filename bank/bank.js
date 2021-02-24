var money=5000
var moneys=document.getElementById('money')

function Add(){
    moneys.innerHTML=''
    var addmoney=prompt('TL')
    try{
        money+=Number(addmoney)
    }catch{
        alert('error money because is not number')
    }
}
function Remove(){
    moneys.innerHTML=''
    var removemoney=prompt('TL')
    if(removemoney<0){
        alert('money not positive')
    }else if(removemoney>money){
        alert('insufficient balance')
    }else{
        try{
            money-=Number(removemoney)
        }catch{
            alert('error money because is not number')
        }
    }
}
function About(){
    moneys.innerHTML=money+' TL'
}


