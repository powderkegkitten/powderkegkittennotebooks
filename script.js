let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
    if (numButtonClicks == 8) {
        document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks +
            " (my favorite number!)";
    }
}

function xClicked() {
    if (on_index) {
        document.getElementById("mainDiv").textContent =
        "WHAT? WHY ARE yOu LEAVinG?";
    } else {
        window.location = "index.html";  
    }
}
