function handleNo() {
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    var yesBtnWidth = yesBtn.clientWidth;
    var yesBtnHeight = yesBtn.clientHeight;
    var noBtnWidth = noBtn.clientWidth;

    if (yesBtnWidth < 200 || noBtnWidth > 50) {
        yesBtn.style.width = (yesBtnWidth + 30) + "px";
        yesBtn.style.height = (yesBtnHeight + 30) + "px";
        noBtn.style.width = (noBtnWidth - 10) + "px";
    }

}
