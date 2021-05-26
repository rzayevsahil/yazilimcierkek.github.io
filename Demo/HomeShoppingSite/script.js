//Navbar start
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
});

//Navbar end

//section 2 start
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () =>{
    if(video.paused){
        video.play();
        btn.className ='far fa-pause-circle';
        video.style.opacity ='.7';
    }else{
        video.pause();
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.3';
    }
}
btn.addEventListener('click',()=>{
    playPause();
});
video.addEventListener('timeupdate',()=>{
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`
    if(video.ended){
        btn.className= 'far fa-play-circle';
        video.style.opacity ='.3';
    }
});
//section 2 end
