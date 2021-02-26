const container=document.querySelector('.container')
var money=document.getElementById('money')
var count=document.getElementById('count')
var movie=document.getElementById('movie')
const button=document.getElementById('sell')
button.addEventListener('click',SellAfter)
container.addEventListener('click',function(e){

    if(e.target.classList.contains('empty')){
        e.target.classList.toggle('selected')
        SellBefore()
    }

})
function SellBefore(){
    let selected=container.querySelectorAll('.container .selected').length
    count.innerText=selected
    let addmoney=selected*movie.value
    money.innerText=addmoney
}
function SellAfter(){
    console.log()

}