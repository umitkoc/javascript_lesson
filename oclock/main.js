input=document.querySelector('input')
function Time(){
    var date=new Date()
    input.value=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}
setInterval(Time,1000)