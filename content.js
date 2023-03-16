const playButton = document.getElementsByClassName("ytp-play-button")
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        if (playButton[0].style.display == "none") {
            playButton[1].click();
        } else {
            playButton[0].click();
        }
    }
});