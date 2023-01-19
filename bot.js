const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
let init = 0


const botsay = (data) => {
    return [
        " perkenalkan nama saya irfan. siapa nama kamu ?",
        `Halo ${data?.nama}, berapa usia kamu ?`,
        `ohhh ${data?.usia}, hobi kamu apa ya ?`,
        `waww sama dong aku juga hobi ${data?.hobi}, apa status kamu ?`,
        `ohhh ${data?.status}, ya udah kalau gitu.senang berbincang denganmu !`,
    ]
}

pertanyaan.innerHTML = botsay()[0]

function botstart() {
    init++
    if (init === 1) {
        setTimeout(botDelay({nama :jawaban.value}),1500)
    } else if (init === 2) {
        setTimeout(botDelay({usia :jawaban.value}),1500)
    } else if ( init ===3) {
        setTimeout(botDelay({hobi :jawaban.value}),1500)
    }   else if ( init ===4) {
        setTimeout(botDelay({status :jawaban.value}),1500)
    }   else if ( init ===5) {
        finishing()
    }   else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    pertanyaan.innerHTML = botsay(jawabanUser)[init]
    jawaban.value = ""
}

function finishing() {
   pertanyaan.innerHTML = `Terima Kasih sudah main ke bot ini`
}

function botEnd() {
    window.location.reload()
}