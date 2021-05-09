const audioBoxes = document.querySelectorAll('.audioBoxes');
let songMuted = true

audioBoxes.forEach(audioBox => {

    const songOne = audioBox.querySelector('.songOne')
    const songTwo = audioBox.querySelector('.songTwo')
    const btnPlay = audioBox.querySelector('.btnPlay')
    const btnSwitch = audioBox.querySelector('.btnSwitch')
    const btnStop = audioBox.querySelector('.btnStop')

    audioBox.addEventListener('click', (e) => {

        // console.log(e.target)

        if (!e.target.classList.contains('btnPlay')) return

        // console.log(e.target)

        btnPlay.addEventListener('click', (e) => {

            // check if song is already playing - stop and reset all
            audioBoxes.forEach(box => {
                const songOne = box.querySelector('.songOne')
                const songTwo = box.querySelector('.songTwo')
                songOne.currentTime = 0
                songTwo.currentTime = 0
                songOne.pause()
                songTwo.pause()
                songOne.muted = false
                songTwo.muted = true
                songMuted = true
            })
            e.stopPropagation()
            console.log('ja sam play')
            songPlay(songOne, songTwo)

        })

        btnStop.addEventListener('click', (e) => {
            e.stopPropagation()
            console.log('ja sam stop')
            stopSong(songOne, songTwo)

        })

        btnSwitch.addEventListener('click', (e) => {
            e.stopPropagation()
            console.log('ja sam switch')
            switchSong(songOne, songTwo)

        })

        // call click on all btnPlay and btnStop so all variables are called 
        btnPlay.click()

    })
})

// PLAY SONG
function songPlay(songOne, songTwo) {
    songOne.muted = false
    songOne.play()
    songTwo.muted = true
    songTwo.play()
}
// STOP SONG
function stopSong(songOne, songTwo) {
    songOne.currentTime = 0
    songTwo.currentTime = 0

    songOne.pause()
    songTwo.pause()

    songOne.muted = false
    songTwo.muted = true
}
// SWTICH SONG
function switchSong(songOne, songTwo) {
    if (songMuted) {
        songMuted = false
        songOne.muted = true
        songTwo.muted = false
    } else {
        songMuted = true
        songOne.muted = false
        songTwo.muted = true
    }
}