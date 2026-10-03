let currentScene = 1;

let candleBlown = false;


/* =====================================================
   ELEMENTS
   ===================================================== */

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const musicCard =
    document.querySelector(".music-card");

const musicPlayIcon =
    document.getElementById("musicPlayIcon");

const musicProgressBar =
    document.getElementById("musicProgressBar");

const musicCurrentTime =
    document.getElementById("musicCurrentTime");

const musicDuration =
    document.getElementById("musicDuration");


/* =====================================================
   CHANGE SCENE
   ===================================================== */

function showScene(number) {

    document
        .querySelectorAll(".scene")
        .forEach(scene => {

            scene.classList.remove("active");

        });


    const selectedScene =
        document.getElementById("scene" + number);


    if (selectedScene) {

        selectedScene.classList.add("active");

        currentScene = number;

        window.scrollTo(0, 0);

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


    if (flame) {

        flame.classList.add("off");

    }


    if (smoke) {

        smoke.classList.add("show");

    }


    if (particles) {

        particles.classList.add("show");

    }


    setTimeout(() => {

        showScene(2);

    }, 1500);

}


/* =====================================================
   MUSIC PLAY / PAUSE
   ===================================================== */

function playMusic() {

    const audio =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");

    const icon =
        document.getElementById("musicPlayIcon");

    const card =
        document.querySelector(".music-card");


    if (!audio || !button) {

        return;

    }


    if (audio.paused) {

        audio
            .play()
            .then(() => {

                if (icon) {

                    icon.innerHTML = "⏸";

                }


                if (card) {

                    card.classList.add("playing");

                }

            })
            .catch(error => {

                console.log(
                    "Music playback error:",
                    error
                );

            });

    }

    else {

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

    if (
        !seconds ||
        isNaN(seconds)
    ) {

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


    if (!audio) {

        return;

    }


    if (audio.duration) {

        const percentage =
            (audio.currentTime / audio.duration) * 100;


        if (musicProgressBar) {

            musicProgressBar.style.width =
                percentage + "%";

        }

    }


    if (musicCurrentTime) {

        musicCurrentTime.innerHTML =
            formatTime(audio.currentTime);

    }

}


/* =====================================================
   MUSIC LOADED
   ===================================================== */

function musicLoaded() {

    const audio =
        document.getElementById("birthdayMusic");


    if (!audio) {

        return;

    }


    if (musicDuration) {

        musicDuration.innerHTML =
            formatTime(audio.duration);

    }

}


/* =====================================================
   MUSIC ENDED
   ===================================================== */

function musicEnded() {

    const icon =
        document.getElementById("musicPlayIcon");

    const card =
        document.querySelector(".music-card");


    if (icon) {

        icon.innerHTML = "▶";

    }


    if (card) {

        card.classList.remove("playing");

    }


    if (musicProgressBar) {

        musicProgressBar.style.width = "0%";

    }

}


/* =====================================================
   RESET SITE
   ===================================================== */

function restartSite() {

    const audio =
        document.getElementById("birthdayMusic");


    if (audio) {

        audio.pause();

        audio.currentTime = 0;

    }


    /* شمع */

    const flame =
        document.getElementById("flame");


    if (flame) {

        flame.classList.remove("off");

    }


    /* دود */

    const smoke =
        document.getElementById("smoke");


    if (smoke) {

        smoke.classList.remove("show");

    }


    /* ذرات */

    const particles =
        document.getElementById("particles");


    if (particles) {

        particles.classList.remove("show");

    }


    /* پلیر */

    const icon =
        document.getElementById("musicPlayIcon");


    if (icon) {

        icon.innerHTML = "▶";

    }


    if (musicProgressBar) {

        musicProgressBar.style.width = "0%";

    }


    if (musicCurrentTime) {

        musicCurrentTime.innerHTML = "0:00";

    }


    if (musicDuration) {

        musicDuration.innerHTML = "0:00";

    }


    if (musicCard) {

        musicCard.classList.remove("playing");

    }


    candleBlown = false;


    showScene(1);

}


/* =====================================================
   MUSIC EVENTS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

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
