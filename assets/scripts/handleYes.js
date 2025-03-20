function handleYes() {
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const yesText = document.getElementById("she-said-yes");

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    yesText.style.display = "block";

    const image = document.getElementById("easter-egg-image");
    image.src = "../assets/images/egg-heart.jpeg";
}
