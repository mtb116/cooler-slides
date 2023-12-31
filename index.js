//fake database
let database = [
    {
        img: "./database/worm1.jpg",
        sound: ""
    },
    {
        img: "./database/worm2.jpg",
        sound: "./database/greetings.ogg"
    },
    {
        img: "./database/worm3.jpg",
        sound: "./database/LevelUp.ogg"
    },
    {
        img: "./database/worm4.jpg",
        sound: "./database/greetings.ogg"
    }
]


//code that gets info from the database


function changeSlide(i) {
    const coolest = document.getElementById("firstimg");
    coolest.setAttribute("src", database[i].img);
}

function playSound(i) {
    const coolsound = document.getElementById("firstsound");
    coolsound.setAttribute("src", database[i].sound);

    const myAudio = document.getElementById("myAudio");
    myAudio.load();
    myAudio.play();
}

function disablePrevButton(i) {
    if (i === 0) {
        prevSlide.setAttribute("disabled", "");
    } else {
        console.log("hey")
        prevSlide.removeAttribute("disabled");
    }
}

function changeNextButtonLabel(i, nextSlide) {
    if (i === (database.length - 1)) {
        nextSlide.innerHTML = "Start Slides OVer";
    } else {
        nextSlide.innerHTML = "Next Slide";
    }
}


window.onload = function () {
    //set first slide
    let i = 0;
    const coolest = document.getElementById("firstimg");
    coolest.setAttribute("src", database[i].img);

    disablePrevButton(i);

    const prevSlide = document.getElementById("prevSlide");
    const nextSlide = document.getElementById("nextSlide");
    
    nextSlide.onclick = function () {
        i++
        if(i === database.length) {
            i = 0
        }
        changeSlide(i);
        playSound(i);
        disablePrevButton(i);
        changeNextButtonLabel(i, nextSlide);
    }

    prevSlide.onclick = function () {
        i--
        if (i < 0) {
            i = 0
        }
        changeSlide(i);
        playSound(i);
        disablePrevButton(i);
        changeNextButtonLabel(i, nextSlide);
    }

};