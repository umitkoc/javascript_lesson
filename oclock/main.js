input=document.querySelector('input')
input.value='20:00:00'
function Time(){
    var date=new Date()
    input.value=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}
setInterval(Time,1000)