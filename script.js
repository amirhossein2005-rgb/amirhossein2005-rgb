let currentScene = 1;
let candleBlown = false;


/* =====================================================
   CHANGE SCENE
   ===================================================== */

function showScene(number) {

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const selectedScene = document.getElementById("scene" + number);

    if (selectedScene) {

        selectedScene.classList.add("active");

        currentScene = number;

        window.scrollTo(0, 0);

    } else {

        console.log("Scene پیدا نشد: scene" + number);

    }
}


/* =====================================================
   NEXT SCENE
   ===================================================== */

function nextScene(number) {

    showScene(number);

}


/* =====================================================
   CANDLE
   ===================================================== */

function blowCandle() {

    console.log("CANDLE CLICKED");

    if (candleBlown) {
        return;
    }

    candleBlown = true;


    const flame =
        document.getElementById("flame");

    const smoke =
        document.getElementById("smoke");

    const particles =
        document.getElementById("particles");


    /* خاموش کردن شعله */

    if (flame) {
        flame.classList.add("off");
    }


    /* نمایش دود */

    if (smoke) {
        smoke.classList.add("show");
    }


    /* نمایش ذرات */

    if (particles) {
        particles.classList.add("show");
    }


    /* رفتن به Scene 2 */

    setTimeout(function () {

        showScene(2);

    }, 1500);

}


/* =====================================================
   MUSIC PLAY / PAUSE
   ===================================================== */

function playMusic() {

    const audio =
        document.getElementById("birthdayMusic");

    const icon =
        document.getElementById("musicPlayIcon");

    const card =
        document.querySelector(".music-card");


    if (!audio) {
        console.log("Audio پیدا نشد!");
        return;
    }


    if (audio.paused) {

        audio.play()
            .then(function () {

                if (icon) {
                    icon.innerHTML = "⏸";
                }

                if (card) {
                    card.classList.add("playing");
                }

            })
            .catch(function (error) {

                console.log(
                    "Music playback error:",
                    error
                );

            });

    } else {

        audio.pause();

        if (icon) {
            icon.innerHTML = "▶";
        }

        if (card) {
            card.classList.remove("playing");
        }

    }

}


/* =====================================================
   FORMAT TIME
   ===================================================== */

function formatTime(seconds) {

    if (!seconds || isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


/* =====================================================
   MUSIC PROGRESS
   ===================================================== */

function updateMusicProgress() {

    const audio =
        document.getElementById("birthdayMusic");

    const progressBar =
        document.getElementById("musicProgressBar");

    const currentTime =
        document.getElementById("musicCurrentTime");


    if (!audio) {
        return;
    }


    if (
        audio.duration &&
        !isNaN(audio.duration)
    ) {

        const percentage =
            (audio.currentTime / audio.duration) * 100;

        if (progressBar) {

            progressBar.style.width =
                percentage + "%";

        }

    }


    if (currentTime) {

        currentTime.innerHTML =
            formatTime(audio.currentTime);

    }

}


/* =====================================================
   MUSIC LOADED
   ===================================================== */

function musicLoaded() {

    const audio =
        document.getElementById("birthdayMusic");

    const duration =
        document.getElementById("musicDuration");


    if (!audio || !duration) {
        return;
    }


    duration.innerHTML =
        formatTime(audio.duration);

}


/* =====================================================
   MUSIC ENDED
   ===================================================== */

function musicEnded() {

    const icon =
        document.getElementById("musicPlayIcon");

    const card =
        document.querySelector(".music-card");

    const progressBar =
        document.getElementById("musicProgressBar");


    if (icon) {
        icon.innerHTML = "▶";
    }


    if (card) {
        card.classList.remove("playing");
    }


    if (progressBar) {
        progressBar.style.width = "0%";
    }

}


/* =====================================================
   RESET SITE
   ===================================================== */

function restartSite() {

    const audio =
        document.getElementById("birthdayMusic");

    const flame =
        document.getElementById("flame");

    const smoke =
        document.getElementById("smoke");

    const particles =
        document.getElementById("particles");

    const icon =
        document.getElementById("musicPlayIcon");

    const progressBar =
        document.getElementById("musicProgressBar");

    const currentTime =
        document.getElementById("musicCurrentTime");

    const duration =
        document.getElementById("musicDuration");

    const card =
        document.querySelector(".music-card");


    /* موسیقی */

    if (audio) {

        audio.pause();

        audio.currentTime = 0;

    }


    /* شعله */

    if (flame) {
        flame.classList.remove("off");
    }


    /* دود */

    if (smoke) {
        smoke.classList.remove("show");
    }


    /* ذرات */

    if (particles) {
        particles.classList.remove("show");
    }


    /* موزیک پلیر */

    if (icon) {
        icon.innerHTML = "▶";
    }


    if (progressBar) {
        progressBar.style.width = "0%";
    }


    if (currentTime) {
        currentTime.innerHTML = "0:00";
    }


    if (duration) {
        duration.innerHTML = "0:00";
    }


    if (card) {
        card.classList.remove("playing");
    }


    /* ریست شمع */

    candleBlown = false;


    /* برگشت به اول */

    showScene(1);

}


/* =====================================================
   PAGE LOADED
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const audio =
            document.getElementById("birthdayMusic");


        if (!audio) {
            return;
        }


        audio.addEventListener(
            "loadedmetadata",
            musicLoaded
        );


        audio.addEventListener(
            "timeupdate",
            updateMusicProgress
        );


        audio.addEventListener(
            "ended",
            musicEnded
        );

    }
);
