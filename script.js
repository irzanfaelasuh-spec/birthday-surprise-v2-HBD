/* =====================================================
   ELEMENTS
===================================================== */

const screens = {
    cake: document.getElementById("cakeScreen"),
    name: document.getElementById("nameScreen"),
    age: document.getElementById("ageScreen"),
    envelope: document.getElementById("envelopeScreen"),
    letter: document.getElementById("letterScreen")
};


const cakeButton =
    document.getElementById("cakeButton");

const nameInput =
    document.getElementById("nameInput");

const nameNext =
    document.getElementById("nameNext");

const nameError =
    document.getElementById("nameError");

const ageNumber =
    document.getElementById("ageNumber");

const ageUp =
    document.getElementById("ageUp");

const ageDown =
    document.getElementById("ageDown");

const ageNext =
    document.getElementById("ageNext");

const envelopeButton =
    document.getElementById("envelopeButton");

const envelope =
    document.querySelector(".envelope");

const envelopeName =
    document.getElementById("envelopeName");

const letterName =
    document.getElementById("letterName");

const letterText =
    document.getElementById("letterText");

const replayButton =
    document.getElementById("replayButton");

const flash =
    document.getElementById("flash");


/* =====================================================
   DATA
===================================================== */

let userName = "";

let userAge = 0;

let envelopeOpened = false;

let audioContext = null;


/* =====================================================
   SCREEN SWITCH
===================================================== */

function showScreen(screen){

    Object.values(screens).forEach(item => {

        item.classList.remove("active");

    });

    requestAnimationFrame(() => {

        screen.classList.add("active");

    });

}


/* =====================================================
   STARS
===================================================== */

const starsContainer =
    document.getElementById("stars");


for(let i = 0; i < 100; i++){

    const star =
        document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.setProperty(
        "--duration",
        (1.2 + Math.random() * 3) + "s"
    );

    star.style.animationDelay =
        Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


/* =====================================================
   RANDOM COLOR
===================================================== */

function randomColor(){

    return `hsl(
        ${Math.floor(Math.random() * 360)},
        100%,
        70%
    )`;

}


/* =====================================================
   PARTICLE EXPLOSION
===================================================== */

function particleExplosion(
    x,
    y,
    amount = 100
){

    const container =
        document.getElementById("particles");


    for(let i = 0; i < amount; i++){

        const particle =
            document.createElement("div");

        particle.className =
            "vfx-particle";

        particle.style.left =
            x + "px";

        particle.style.top =
            y + "px";

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            80 +
            Math.random() * 420;

        particle.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );

        particle.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );

        particle.style.color =
            randomColor();

        particle.style.background =
            "currentColor";

        particle.style.width =
            (3 + Math.random() * 7) +
            "px";

        particle.style.height =
            particle.style.width;

        container.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 1500);

    }

}


/* =====================================================
   CONFETTI
===================================================== */

function confettiExplosion(
    amount = 150
){

    const container =
        document.getElementById("confetti");


    const symbols = [
        "◆",
        "●",
        "■",
        "✦",
        "★"
    ];


    for(let i = 0; i < amount; i++){

        const confetti =
            document.createElement("div");

        confetti.className =
            "vfx-confetti";

        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        confetti.style.left =
            "50vw";

        confetti.style.top =
            "48vh";

        confetti.style.color =
            randomColor();

        confetti.style.fontSize =
            (8 + Math.random() * 13) +
            "px";

        confetti.style.setProperty(
            "--x",
            ((Math.random() - .5) * 120) +
            "vw"
        );

        confetti.style.setProperty(
            "--y",
            (30 + Math.random() * 90) +
            "vh"
        );

        confetti.style.setProperty(
            "--rotation",
            ((Math.random() - .5) * 1800) +
            "deg"
        );

        confetti.style.setProperty(
            "--duration",
            (1.8 + Math.random() * 2.5) +
            "s"
        );

        container.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


/* =====================================================
   FIREWORK
===================================================== */

function firework(
    x,
    y
){

    const container =
        document.getElementById("fireworks");


    const amount = 55;


    for(let i = 0; i < amount; i++){

        const particle =
            document.createElement("div");

        particle.className =
            "firework-particle";

        particle.style.left =
            x + "px";

        particle.style.top =
            y + "px";

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            70 +
            Math.random() * 180;

        particle.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );

        particle.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );

        particle.style.color =
            randomColor();

        particle.style.background =
            "currentColor";

        container.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 1500);

    }

}


/* =====================================================
   CAKE CLICK
===================================================== */

cakeButton.addEventListener(
    "click",
    function(){

        const rect =
            cakeButton.getBoundingClientRect();

        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;


        flash.classList.remove("active");

        void flash.offsetWidth;

        flash.classList.add("active");


        particleExplosion(
            centerX,
            centerY,
            130
        );


        confettiExplosion(200);


        firework(
            centerX,
            centerY
        );


        firework(
            Math.random() *
            window.innerWidth,
            window.innerHeight *
            .25
        );


        cakeButton.style.transition =
            "all .7s cubic-bezier(.2,.8,.2,1)";

        cakeButton.style.transform =
            "scale(1.8) rotate(12deg)";

        cakeButton.style.opacity =
            "0";


        playTone(
            392,
            .2
        );


        setTimeout(() => {

            showScreen(
                screens.name
            );

            setTimeout(() => {

                nameInput.focus();

            }, 600);

        }, 700);

    }
);


/* =====================================================
   NAME
===================================================== */

nameNext.addEventListener(
    "click",
    function(){

        const value =
            nameInput.value.trim();


        if(!value){

            nameError.classList.add(
                "show"
            );


            nameInput.animate(
                [
                    {
                        transform:
                            "translateX(-8px)"
                    },

                    {
                        transform:
                            "translateX(8px)"
                    },

                    {
                        transform:
                            "translateX(-5px)"
                    },

                    {
                        transform:
                            "translateX(5px)"
                    },

                    {
                        transform:
                            "translateX(0)"
                    }
                ],
                {
                    duration:350
                }
            );

            return;
        }


        nameError.classList.remove(
            "show"
        );


        userName = value;


        playTone(
            523.25,
            .15
        );


        showScreen(
            screens.age
        );

    }
);


nameInput.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Enter"){

            nameNext.click();

        }

    }
);


/* =====================================================
   AGE UPDATE
===================================================== */

function updateAge(){

    ageNumber.textContent =
        userAge;


    ageNumber.animate(
        [
            {
                transform:
                    "scale(.65)",
                opacity:.2
            },

            {
                transform:
                    "scale(1.15)",
                opacity:1
            },

            {
                transform:
                    "scale(1)"
            }
        ],
        {
            duration:220,
            easing:"ease-out"
        }
    );


    playTone(
        userAge % 2 === 0
            ? 392
            : 440,
        .07
    );

}


/* =====================================================
   AGE UP
===================================================== */

ageUp.addEventListener(
    "click",
    function(){

        if(userAge >= 100){

            return;

        }


        userAge++;

        updateAge();

    }
);


/* =====================================================
   AGE DOWN
===================================================== */

ageDown.addEventListener(
    "click",
    function(){

        if(userAge <= 0){

            return;

        }


        userAge--;

        updateAge();

    }
);


/* =====================================================
   AGE COMPLETE
===================================================== */

ageNext.addEventListener(
    "click",
    function(){

        envelopeName.textContent =
            userName;


        showScreen(
            screens.envelope
        );

    }
);


/* =====================================================
   ENVELOPE
===================================================== */

envelopeButton.addEventListener(
    "click",
    function(){

        if(envelopeOpened){

            return;

        }


        envelopeOpened = true;


        envelope.classList.add(
            "open"
        );


        const rect =
            envelopeButton.getBoundingClientRect();


        confettiExplosion(80);


        firework(
            rect.left +
            rect.width / 2,

            rect.top +
            rect.height / 2
        );


        playTone(
            523.25,
            .18
        );


        setTimeout(() => {

            playTone(
                659.25,
                .2
            );

        }, 200);


        setTimeout(() => {

            prepareLetter();

            showScreen(
                screens.letter
            );

        }, 1200);

    }
);


/* =====================================================
   LETTER CONTENT
===================================================== */

function prepareLetter(){

    document.getElementById(
        "letterName"
    ).textContent =
        userName;


    letterText.innerHTML = "";


    const paragraphs = [

        `Hari ini bukan sekadar hari biasa. 
        Hari ini adalah hari ketika seseorang yang
        sangat berharga datang ke dunia — dan orang itu
        adalah kamu, <span class="highlight">${userName}</span>.`,

        `Sekarang kamu sudah berusia
        <span class="highlight">${userAge} tahun</span>.
        Mungkin angka itu terlihat sederhana,
        tetapi di balik angka tersebut ada begitu banyak
        cerita yang sudah kamu lalui.`,

        `Ada tawa yang mungkin masih kamu ingat,
        ada kejadian yang membuatmu belajar,
        ada orang-orang yang pernah datang dan pergi,
        dan ada begitu banyak hal yang membuatmu
        menjadi dirimu yang sekarang.`,

        `Tidak semua hari akan terasa mudah.
        Akan ada hari ketika semuanya berjalan sesuai
        harapan, tetapi mungkin juga ada hari ketika
        semuanya terasa berantakan.`,

        `Kalau suatu hari kamu merasa seperti itu,
        jangan terlalu keras kepada dirimu sendiri.
        Kamu tidak harus selalu sempurna.
        Kamu tidak harus selalu tahu jawabannya.`,

        `Tidak apa-apa berjalan perlahan.
        Tidak apa-apa beristirahat.
        Tidak apa-apa melakukan kesalahan.
        Yang penting adalah kamu tetap mencoba
        untuk melangkah lagi.`,

        `Di usia
        <span class="highlight">${userAge} tahun</span>
        ini, semoga kamu menemukan lebih banyak alasan
        untuk tersenyum, lebih banyak keberanian untuk
        mencoba hal baru, dan lebih banyak momen yang
        membuatmu merasa bangga terhadap dirimu sendiri.`,

        `Masih ada banyak tempat yang belum kamu lihat,
        banyak mimpi yang belum tercapai,
        banyak orang yang belum kamu temui,
        dan banyak kenangan indah yang bahkan belum
        terjadi.`,

        `Jadi jangan buru-buru merasa bahwa semuanya
        harus sudah selesai sekarang. Hidup bukan
        perlombaan. Setiap orang punya waktunya sendiri.`,

        `Dan kalau suatu hari nanti kamu kembali membuka
        halaman kecil ini, semoga kamu bisa tersenyum
        dan mengingat bahwa pernah ada seseorang yang
        berharap agar hari ulang tahunmu terasa sedikit
        lebih spesial.`,

        `<span class="highlight">
        Happy Birthday, ${userName}. ✦
        </span>`,

        `Semoga di usia ${userAge} tahun ini,
        hal-hal baik perlahan menemukan jalannya
        menuju kepadamu.`

    ];


    typeParagraphs(
        paragraphs,
        0
    );

}


/* =====================================================
   TYPING LETTER
===================================================== */

function typeParagraphs(
    paragraphs,
    index
){

    if(index >= paragraphs.length){

        launchFinalFireworks();

        return;

    }


    const p =
        document.createElement("p");


    letterText.appendChild(p);


    const html =
        paragraphs[index];


    typeHTML(
        p,
        html,
        0,
        function(){

            setTimeout(() => {

                typeParagraphs(
                    paragraphs,
                    index + 1
                );

            }, 250);

        }
    );

}


/*
    Typewriter sederhana
    yang tetap mempertahankan HTML
*/

function typeHTML(
    element,
    html,
    index,
    done
){

    if(index >= html.length){

        done();

        return;

    }


    const char =
        html[index];


    element.innerHTML =
        html.slice(
            0,
            index + 1
        );


    index++;


    setTimeout(
        () => {

            typeHTML(
                element,
                html,
                index,
                done
            );

        },

        char === " "
            ? 4
            : 12
    );

}


/* =====================================================
   FINAL FIREWORKS
===================================================== */

function launchFinalFireworks(){

    setTimeout(() => {

        firework(
            window.innerWidth * .2,
            window.innerHeight * .25
        );

    }, 300);


    setTimeout(() => {

        firework(
            window.innerWidth * .8,
            window.innerHeight * .3
        );

    }, 700);


    setTimeout(() => {

        firework(
            window.innerWidth * .5,
            window.innerHeight * .18
        );

    }, 1100);

}


/* =====================================================
   REPLAY
===================================================== */

replayButton.addEventListener(
    "click",
    function(){

        userName = "";

        userAge = 0;

        envelopeOpened = false;


        ageNumber.textContent =
            "0";

        nameInput.value =
            "";


        envelope.classList.remove(
            "open"
        );


        cakeButton.style.opacity =
            "1";

        cakeButton.style.transform =
            "";


        letterText.innerHTML =
            "";


        showScreen(
            screens.cake
        );

    }
);


/* =====================================================
   AUDIO
===================================================== */

function initAudio(){

    if(!audioContext){

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if(
        audioContext.state ===
        "suspended"
    ){

        audioContext.resume();

    }

}


function playTone(
    frequency,
    duration
){

    try{

        initAudio();


        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type =
            "sine";

        oscillator.frequency.value =
            frequency;


        gain.gain.setValueAtTime(
            .0001,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            .06,
            audioContext.currentTime + .03
        );


        gain.gain.exponentialRampToValueAtTime(
            .0001,
            audioContext.currentTime +
            duration
        );


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime +
            duration
        );

    }catch(error){

        console.log(
            "Audio unavailable"
        );

    }

}


/* =====================================================
   MUSIC BUTTON
===================================================== */

document
    .getElementById("musicButton")
    .addEventListener(
        "click",
        function(){

            initAudio();


            playTone(
                261.63,
                .2
            );


            setTimeout(
                () => playTone(
                    329.63,
                    .2
                ),
                180
            );


            setTimeout(
                () => playTone(
                    392,
                    .3
                ),
                360
            );

        }
    );


/* =====================================================
   TOUCH VFX
===================================================== */

document.addEventListener(
    "pointerdown",
    function(event){

        /*
            Jangan bikin particle terlalu banyak
            pada setiap sentuhan.
        */

        if(
            event.target.closest(
                ".cake-container"
            ) ||
            event.target.closest(
                ".envelope-wrapper"
            )
        ){

            return;

        }


        particleExplosion(
            event.clientX,
            event.clientY,
            8
        );

    }
);
