const keyQ = document.querySelector("#keyQ");
const keyW = document.querySelector("#keyW");
const keyE = document.querySelector("#keyE");
const keyA = document.querySelector("#keyA");
const keyS = document.querySelector("#keyS");
const keyD = document.querySelector("#keyD");
const keyZ = document.querySelector("#keyZ");
const keyX = document.querySelector("#keyX");
const keyC = document.querySelector("#keyC");


document.addEventListener("keypress", (e) => {
    if(e.key == "q") {
        playSound("../sounds/keyq.wav")
        keyQ.classList.add("active")
        setTimeout(() => {
            keyQ.classList.remove("active")
        }, 100);

    }
    if(e.key == "w") {
        playSound("../sounds/keyw.wav")
        keyW.classList.add("active")
        setTimeout(() => {
            keyW.classList.remove("active")
        }, 100);
    }
    if(e.key == "e") {
        playSound("../sounds/keye.wav")
        keyE.classList.add("active")
        setTimeout(() => {
            keyE.classList.remove("active")
        }, 100);
    }
    if(e.key == "a") {
        playSound("../sounds/keya.wav")
        keyA.classList.add("active")
        setTimeout(() => {
            keyA.classList.remove("active")
        }, 100);
    }
    if(e.key == "s") {
        playSound("../sounds/keys.wav")
        keyS.classList.add("active")
        setTimeout(() => {
            keyS.classList.remove("active")
        }, 100);
    }
    if(e.key == "d") {
        playSound("../sounds/keyd.wav")
        keyD.classList.add("active")
        setTimeout(() => {
            keyD.classList.remove("active")
        }, 100);
    }
    if(e.key == "z") {
        playSound("../sounds/keyz.wav")
        keyZ.classList.add("active")
        setTimeout(() => {
            keyZ.classList.remove("active")
        }, 100);
    }
    if(e.key == "x") {
        playSound("../sounds/keyx.wav")
        keyX.classList.add("active")
        setTimeout(() => {
            keyX.classList.remove("active")
        }, 100);
    }
    if(e.key == "c") {
        playSound("../sounds/keyc.wav")
        keyC.classList.add("active")
        setTimeout(() => {
            keyC.classList.remove("active")
        }, 100);
    }
})

keyQ.addEventListener("click", () => {
    playSound("../sounds/keyq.wav")
        keyQ.classList.add("active")
        setTimeout(() => {
            keyQ.classList.remove("active")
        }, 100);
})
keyW.addEventListener("click", () => {
    playSound("../sounds/keyw.wav")
        keyW.classList.add("active")
        setTimeout(() => {
            keyW.classList.remove("active")
        }, 100);
    })
keyE.addEventListener("click", () => {
    playSound("../sounds/keye.wav")
        keyE.classList.add("active")
        setTimeout(() => {
            keyE.classList.remove("active")
        }, 100);
    })
keyA.addEventListener("click", () => {
    playSound("../sounds/keya.wav")
        keyA.classList.add("active")
        setTimeout(() => {
            keyA.classList.remove("active")
        }, 100);
})
keyS.addEventListener("click", () => {
    playSound("../sounds/keys.wav")
        keyS.classList.add("active")
        setTimeout(() => {
            keyS.classList.remove("active")
        }, 100);
})
keyD.addEventListener("click", () => {
    playSound("../sounds/keyd.wav")
        keyD.classList.add("active")
        setTimeout(() => {
            keyD.classList.remove("active")
        }, 100);
})
keyZ.addEventListener("click", () => {
    playSound("../sounds/keyz.wav")
        keyZ.classList.add("active")
        setTimeout(() => {
            keyZ.classList.remove("active")
        }, 100);
})
keyX.addEventListener("click", () => {
    playSound("../sounds/keyx.wav")
        keyX.classList.add("active")
        setTimeout(() => {
            keyX.classList.remove("active")
        }, 100);
})
keyC.addEventListener("click", () => {
    playSound("../sounds/keyc.wav")
        keyC.classList.add("active")
        setTimeout(() => {
            keyC.classList.remove("active")
        }, 100);
})

function playSound(sound) {
    const Sound = new Audio(sound)
    Sound.play()
}