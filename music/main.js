var yes=false
var volume = document.getElementById("range_volume");
var duration = document.getElementById("duration_music");
var music=document.getElementById('music')
const start=document.getElementById('btn_play')
start.addEventListener('click',function(){
    if(yes){
        yes=false
        start.innerHTML = '<i class="fas fa-play"></i>';
        music.pause();
    }
    else{
        yes=true
        start.innerHTML = '<i class="fas fa-stop"></i>';
        music.play();
    }
})

function volume_change() {
    track.volume=volume.value/100
}

function duration_music(){
    track.currentTime=duration.value
}