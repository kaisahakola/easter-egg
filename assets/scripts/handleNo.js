function handleNo() {
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const yesBtnWidth = yesBtn.clientWidth;
    const yesBtnHeight = yesBtn.clientHeight;
    const noBtnWidth = noBtn.clientWidth;

    if (yesBtnWidth < 200 || noBtnWidth > 50) {
        yesBtn.style.width = (yesBtnWidth + 30) + "px";
        yesBtn.style.height = (yesBtnHeight + 30) + "px";
        noBtn.style.width = (noBtnWidth - 10) + "px";
    }

    const sadEggs = [
        "../assets/images/egg-sad.jpeg",
        "../assets/images/egg-rip.jpeg",
        "../assets/images/egg-crying.jpeg",
        "../assets/images/egg-ugly.jpeg",
    ];

    const sadEggNumber = Math.floor(Math.random() * sadEggs.length);
    const image = document.getElementById("easter-egg-image");
    image.src = sadEggs[sadEggNumber];
}
