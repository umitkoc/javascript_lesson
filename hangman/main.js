const ul=document.getElementById('ul')
const wordlist=document.getElementById('word')
const list=wordlist.childNodes
const items=document.querySelectorAll('.item')
var step=0
var data=[
    'java','python','javascript','dart'
]
var copyword=[]
const letters=['a','b','c','d','e','f','g','i','ı','j','k','l','m','n','o','ö','p','r','s','ş','t','u','ğ','h','ü','v','y','z','w','q']
const keys=[]
function Random(){
    return data[Math.floor(Math.random()*data.length)]
}
function Start(){
    let word=Random()
    copyword=word=word.split('')
    word.forEach(element => {
        var li=document.createElement('li')
        if(word[word.length-1]==element || word[word.length-3]==element ){
             li.innerText=element
        }else{
            li.innerHTML='&nbsp'
        }
        wordlist.appendChild(li)
    });
    items.forEach(item => {
        item.style.display='none'
    });
}


 function Answer(event){
    const next=keys.filter(i=>i==event.key)
    const letter=letters.filter(i=>i==event.key)
    if(next.length==0 && letter.length==1){
        keys.push(event.key)
        var li=document.createElement('li')
        li.innerText=event.key
        ul.appendChild(li)
        Analysis(event.key)
    }
}

function Analysis(key){
    var dead=true
    var win=2
    for(var i=0;i<list.length-1;i++){
        if(copyword[i]==key){
            list[i+1].innerHTML=key
            dead=false
            break
        }
        if(list[i+1].innerText!=''){
            win++
        }
        
        
    }
    if(dead){
        items[step].style.display='block'
        step++
        if(step==10){
            console.log('kaybettiniz')
        }
    }
    if(copyword.length==win){
        console.log('kazandınız')
    }
}

Start()

