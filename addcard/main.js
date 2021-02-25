

function Add(){
    let text=document.getElementById('text')
    let addcard=document.getElementById('addcard')
    
    text.value==''?alert('please text write'):addcard.appendChild(Col())
}
function Col(){
    let col=document.createElement('div')
    col.className='col-md-3'
    col.appendChild(Card())
    return col
}

function Card(){
    let card=document.createElement('div')
    card.className='card my-2 text-center'
    card.appendChild(Cardbody())
    card.appendChild(Cardfooter())
    return card
}
function H1(){
    let text=document.getElementById('text')
    let h1=document.createElement('h1')
    h1.className='display-2 my-5'
    h1.innerHTML=text.value
    text.value=''
    return h1
}
function Cardbody(){
    let cardbody=document.createElement('div')
    cardbody.className='card-body'
    cardbody.appendChild(H1())
    cardbody.style.height='200px'
    return cardbody
}

function Cardfooter(){
    let cardfooter=document.createElement('div')
    cardfooter.className='card-footer'
    cardfooter.appendChild(Btndelete())
    return cardfooter
}

function Btndelete(){
    var btn=document.createElement('button')
    btn.className='btn btn-danger'
    btn.innerHTML='Delete'
    btn.setAttribute('onclick','Delete(event)')
    return btn
}
function Delete(e){
    console.log(e.target.parentElement.parentElement.parentElement.remove())
    e.preventDefault()
}
function Deleteall(){
    let addcard=document.getElementById('addcard')
    addcard.innerHTML=''
}