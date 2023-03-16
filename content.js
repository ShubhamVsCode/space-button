const playButton = document.getElementsByClassName("ytp-play-button")
const forwardBotton = document.getElementsByClassName("ytp-forward-button")
const backBotton = document.getElementsByClassName("ytp-replay-button")
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        const videoScrollingDiv = document.getElementsByTagName("div")[4]
        videoScrollingDiv?.style?.overflowY = "hidden"
        if (playButton[0]?.style?.display == "none") {
            playButton[1]?.click();
        } else {
            playButton[0]?.click();
        }
    }
    if (event.code === "ArrowLeft") {
        backBotton[0]?.click();
    } else if (event.code === "ArrowRight") {
        forwardBotton[0]?.click();
    }
});