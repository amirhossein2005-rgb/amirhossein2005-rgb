let currentScene = 1;

let candleBlown = false;


/* =========================
   تغییر صفحه
   ========================= */

function showScene(number) {

    document.querySelectorAll(".scene").forEach(scene => {

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


/* =========================
   خاموش کردن شمع
   ========================= */

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


/* =========================
   رفتن به صفحه بعد
   ========================= */

function nextScene(number) {

    showScene(number);

}


/* =========================
   پخش آهنگ
   ========================= */

function playMusic() {

    const music =
        document.getElementById("birthdayMusic");


    const button =
        document.getElementById("musicButton");


    if (!music || !button) {
        return;
    }


    if (music.paused) {

        music.play()
            .then(() => {

                button.innerHTML =
                    "⏸ توقف آهنگ";

            })
            .catch(error => {

                console.log(
                    "Music could not be played:",
                    error
                );

            });

    }

    else {

        music.pause();

        button.innerHTML =
            "🎧 بزن گوش کنم";

    }

}


/* =========================
   شروع دوباره
   ========================= */

function restartSite() {

    const music =
        document.getElementById("birthdayMusic");


    if (music) {

        music.pause();

        music.currentTime = 0;

    }


    const flame =
        document.getElementById("flame");


    if (flame) {

        flame.classList.remove("off");

    }


    const smoke =
        document.getElementById("smoke");


    if (smoke) {

        smoke.classList.remove("show");

    }


    const particles =
        document.getElementById("particles");


    if (particles) {

        particles.classList.remove("show");

    }


    const musicButton =
        document.getElementById("musicButton");


    if (musicButton) {

        musicButton.innerHTML =
            "🎧 بزن گوش کنم";

    }


    candleBlown = false;


    showScene(1);

}
