let currentScene = 1;

function showScene(number) {

    document.querySelectorAll(".scene").forEach(scene => {
        scene.classList.remove("active");
    });

    const selectedScene =
        document.getElementById("scene" + number);

    if (selectedScene) {
        selectedScene.classList.add("active");
        currentScene = number;
    }
}


function blowCandle() {

    const flame =
        document.getElementById("flame");

    flame.classList.add("off");

    setTimeout(() => {

        showScene(2);

    }, 1000);
}


function nextScene(number) {

    showScene(number);
}


function playMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.innerHTML =
            "⏸ توقف آهنگ";

    } else {

        music.pause();

        button.innerHTML =
            "🎧 بزن گوش کنم";

    }
}


function restartSite() {

    const music =
        document.getElementById("birthdayMusic");

    music.pause();

    music.currentTime = 0;

    const flame =
        document.getElementById("flame");

    flame.classList.remove("off");

    const button =
        document.getElementById("musicButton");

    button.innerHTML =
        "🎧 بزن گوش کنم";

    showScene(1);
}
