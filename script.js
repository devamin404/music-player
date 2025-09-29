let progress = document.querySelector("#range-selector");
let ctrl = document.querySelector("#ctrl-icon");
let song = document.querySelector("#song");


song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
})

ctrl.addEventListener("click", () => {
    if(ctrl.classList.contains("fa-pause")){
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }
    else{
        song.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
})

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.addEventListener("input", () => {
    song.play();
    song.currentTime = progress.value;
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
})



