let kobe = document.getElementById("kobe")

let isGone = true

kobe.onmouseover = function() {
    if (isGone === true) {
        kobe.classList.remove("animate__fadeInDown")
        kobe.classList.add("animate__animated");
        kobe.classList.add("animate__fadeOut");
        isGone = true
    }
}
kobe.onmouseleave = function() {
    if (isGone === false) {
        kobe.classList.remove("animate__fadeOutUp")
        kobe.classList.add("animate__fadeIn")
        isGone = false
    }
}