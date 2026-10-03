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


    /* خاموش شدن شعله */

    flame.classList.add("off");


    /* نمایش دود */

    smoke.classList.add("show");


    /* پخش شدن ذرات */

    particles.classList.add("show");


    /* رفتن به صفحه بعد */

    setTimeout(() => {

        showScene(2);

    }, 1500);

}


/* =========================
   رفتن به Scene بعد
   ========================= */

function nextScene(number) {

    showScene(number);

}


/* =========================
   پخش / توقف آهنگ
   ========================= */

function playMusic() {

    const music =
        document.getElementById("birthdayMusic");


    const button =
        document.getElementById("musicButton");


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

    } else {

        music.pause();


        button.innerHTML =
            "🎧 بزن گوش کنم";

    }

}


/* =========================
   شروع دوباره سایت
   ========================= */

function restartSite() {

    const music =
        document.getElementById("birthdayMusic");


    if (music) {

        music.pause();

        music.currentTime = 0;

    }


    /* برگرداندن شمع */

    const flame =
        document.getElementById("flame");


    if (flame) {

        flame.classList.remove("off");

    }


    /* حذف دود */

    const smoke =
        document.getElementById("smoke");


    if (smoke) {

        smoke.classList.remove("show");

    }


    /* حذف ذرات */

    const particles =
        document.getElementById("particles");


    if (particles) {

        particles.classList.remove("show");

    }


    /* اجازه خاموش کردن دوباره */

    candleBlown = false;


    /* ریست دکمه آهنگ */

    const button =
        document.getElementById("musicButton");


    if (button) {

        button.innerHTML =
            "🎧 بزن گوش کنم";

    }


    /* بازگشت به اول */

    showScene(1);

}
