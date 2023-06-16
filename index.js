//fake database
let database = [
    {
        img: "./worm1.jpg",
        sound: "./LevelUp.ogg"
    },
    {
        img: "./worm2.jpg",
        sound: "./greetings.ogg"
    },
    {
        img: "./worm3.jpg",
        sound: "./LevelUp.ogg"
    },
    {
        img: "https://picsum.photos/250/310",
        sound: "./greetings.ogg"
    }
]


//code that gets info from the database


window.onload = function () {
    const coolest = document.getElementById("firstimg");
    const coolsound = document.getElementById("firstsound");
    const myAudio = document.getElementById("myAudio")

    let i = 0
    coolest.setAttribute("src", database[i].img)

    coolest.onclick = function () {
        myAudio.load()
        myAudio.play();
        i++
        if (i < database.length) {
            coolest.setAttribute("src", database[i].img)
            coolsound.setAttribute("src", database[i].sound)
        } else {
            i = 0
            coolest.setAttribute("src", database[0].img)
            coolsound.setAttribute("src", "")
        }
    }

};