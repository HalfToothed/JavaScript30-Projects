window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    btn.classList.add("playing");
});

function remove(e){
  
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".btn");
keys.forEach(btn=>btn.addEventListener("transitionend", remove));
