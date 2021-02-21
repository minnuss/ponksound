const audioBoxes = document.querySelectorAll('.audioBoxes');
const songs = document.querySelectorAll('.song');
const btnsStop = document.querySelectorAll('.btnStop');
const btnSwitches = document.querySelectorAll('.btnSwitch');



// START PLAYING BOTH SONG SAMPLES AT THE SAME TIME
// RECORDING SAMPLES
// AUDIO SAMPLE 1
const btnPlay11 = document.querySelector('.btnPlay11');
const songs11 = document.querySelectorAll('.songs11');
btnPlay11.addEventListener('click', () => {
    songs11.forEach(song => {
        song.play();
        songs[1].muted = true;
    });
});
// AUDIO SAMPLE 2
const btnPlay12 = document.querySelector('.btnPlay12');
const songs12 = document.querySelectorAll('.songs12');
btnPlay12.addEventListener('click', () => {
    songs12.forEach(song => {
        song.play();
        songs[3].muted = true;
    });
});
// AUDIO SAMPLE 3
const btnPlay13 = document.querySelector('.btnPlay13');
const songs13 = document.querySelectorAll('.songs13');
btnPlay13.addEventListener('click', () => {
    songs13.forEach(song => {
        song.play();
        songs[5].muted = true;
    });
});


// AUDIO EDITING SAMPLES
// AUDIO SAMPLE 1
const btnPlay21 = document.querySelector('.btnPlay21');
const songs21 = document.querySelectorAll('.songs21');
btnPlay21.addEventListener('click', () => {
    songs21.forEach(song => {
        song.play();
        songs[7].muted = true;
    });
});
// AUDIO SAMPLE 2
const btnPlay22 = document.querySelector('.btnPlay22');
const songs22 = document.querySelectorAll('.songs22');
btnPlay22.addEventListener('click', () => {
    songs22.forEach(song => {
        song.play();
        songs[9].muted = true;
    });
});
// AUDIO SAMPLE 3
const btnPlay23 = document.querySelector('.btnPlay23');
const songs23 = document.querySelectorAll('.songs23');
btnPlay23.addEventListener('click', () => {
    songs23.forEach(song => {
        song.play();
        songs[11].muted = true;
    });
});

// MIXING SAMPLES
// AUDIO SAMPLE 1
const btnPlay31 = document.querySelector('.btnPlay31');
const songs31 = document.querySelectorAll('.songs31');
btnPlay31.addEventListener('click', () => {
    songs31.forEach(song => {
        song.play();
        songs[13].muted = true;
    });
});
// AUDIO SAMPLE 2
const btnPlay32 = document.querySelector('.btnPlay32');
const songs32 = document.querySelectorAll('.songs32');
btnPlay32.addEventListener('click', () => {
    songs32.forEach(song => {
        song.play();
        songs[15].muted = true;
    });
});
// AUDIO SAMPLE 3
const btnPlay33 = document.querySelector('.btnPlay33');
const songs33 = document.querySelectorAll('.songs33');
btnPlay33.addEventListener('click', () => {
    songs33.forEach(song => {
        song.play();
        songs[17].muted = true;
    });
});

// MASTERING SAMPLES
// AUDIO SAMPLE 1
const btnPlay41 = document.querySelector('.btnPlay41');
const songs41 = document.querySelectorAll('.songs41');
btnPlay41.addEventListener('click', () => {
    songs41.forEach(song => {
        song.play();
        songs[19].muted = true;
    });
});
// AUDIO SAMPLE 2
const btnPlay42 = document.querySelector('.btnPlay42');
const songs42 = document.querySelectorAll('.songs42');
btnPlay42.addEventListener('click', () => {
    songs42.forEach(song => {
        song.play();
        songs[21].muted = true;
    });
});
// AUDIO SAMPLE 3
const btnPlay43 = document.querySelector('.btnPlay43');
const songs43 = document.querySelectorAll('.songs43');
btnPlay43.addEventListener('click', () => {
    songs43.forEach(song => {
        song.play();
        songs[23].muted = true;
    });
});

// PODCAST EDITING SAMPLES
// AUDIO SAMPLE 1
const btnPlay51 = document.querySelector('.btnPlay51');
const songs51 = document.querySelectorAll('.songs51');
btnPlay51.addEventListener('click', () => {
    songs51.forEach(song => {
        song.play();
        songs[25].muted = true;
    });
});
// AUDIO SAMPLE 2
const btnPlay52 = document.querySelector('.btnPlay52');
const songs52 = document.querySelectorAll('.songs52');
btnPlay52.addEventListener('click', () => {
    songs52.forEach(song => {
        song.play();
        songs[27].muted = true;
    });
});

// AUDIO SAMPLE 3
const btnPlay53 = document.querySelector('.btnPlay53');
const songs53 = document.querySelectorAll('.songs53');
btnPlay53.addEventListener('click', () => {
    songs53.forEach(song => {
        song.play();
        songs[29].muted = true;
    });
});

// // BEATS ARRANGING SAMPLES
// // AUDIO SAMPLE 1
// const btnPlay51 = document.querySelector('.btnPlay51');
// const songs51 = document.querySelectorAll('.songs51');
// btnPlay51.addEventListener('click', () => {
//     songs51.forEach(song => {
//         song.play();
//         songs[25].muted = true;
//     });
// });
// // AUDIO SAMPLE 2
// const btnPlay52 = document.querySelector('.btnPlay52');
// const songs52 = document.querySelectorAll('.songs52');
// btnPlay52.addEventListener('click', () => {
//     songs52.forEach(song => {
//         song.play();
//         songs[27].muted = true;
//     });
// });
// // AUDIO SAMPLE 3
// const btnPlay53 = document.querySelector('.btnPlay53');
// const songs53 = document.querySelectorAll('.songs53');
// btnPlay53.addEventListener('click', () => {
//     songs53.forEach(song => {
//         song.play();
//         songs[29].muted = true;
//     });
// });

// SWITCH SOUND BUTTON
btnSwitches.forEach(btnSwitch => {
    btnSwitch.addEventListener('click', () => {
        switchSound();
    });
});

// SWITCH SOUND, TOGGLE SOUND FUNCTION
let muteToggle = true;
function switchSound() {
    if (muteToggle) {
        muteToggle = false;
        songs[0].muted = true;
        songs[1].muted = false;
        songs[2].muted = true;
        songs[3].muted = false;
        songs[4].muted = true;
        songs[5].muted = false;
        songs[6].muted = true;
        songs[7].muted = false;
        songs[8].muted = true;
        songs[9].muted = false;
        songs[10].muted = true;
        songs[11].muted = false;
        songs[12].muted = true;
        songs[13].muted = false;
        songs[14].muted = true;
        songs[15].muted = false;
        songs[16].muted = true;
        songs[17].muted = false;
        songs[18].muted = true;
        songs[19].muted = false;
        songs[20].muted = true;
        songs[21].muted = false;
        songs[22].muted = true;
        songs[23].muted = false;
        songs[24].muted = true;
        songs[25].muted = false;
        songs[26].muted = true;
        songs[27].muted = false;
        songs[28].muted = true;
        songs[29].muted = false;
        // songs[30].muted = true;
        // songs[31].muted = false;
        // songs[32].muted = true;
        // songs[33].muted = false;
        // songs[34].muted = true;
        // songs[35].muted = false;
    } else {
        muteToggle = true;
        songs[1].muted = true;
        songs[0].muted = false;
        songs[3].muted = true;
        songs[2].muted = false;
        songs[5].muted = true;
        songs[4].muted = false;
        songs[7].muted = true;
        songs[6].muted = false;
        songs[9].muted = true;
        songs[8].muted = false;
        songs[11].muted = true;
        songs[10].muted = false;
        songs[13].muted = true;
        songs[12].muted = false;
        songs[15].muted = true;
        songs[14].muted = false;
        songs[17].muted = true;
        songs[16].muted = false;
        songs[19].muted = true;
        songs[18].muted = false;
        songs[21].muted = true;
        songs[20].muted = false;
        songs[23].muted = true;
        songs[22].muted = false;
        songs[25].muted = true;
        songs[24].muted = false;
        songs[27].muted = true;
        songs[26].muted = false;
        songs[29].muted = true;
        songs[28].muted = false;
        // songs[31].muted = true;
        // songs[30].muted = false;
        // songs[33].muted = true;
        // songs[32].muted = false;
        // songs[35].muted = true;
        // songs[34].muted = false;
    }
};

// DISABLE AUDIO SEEKING
let supposedCurrentTime = 0;
songs.forEach(song => {
    song.addEventListener('timeupdate', function () {
        if (!song.seeking) {
            supposedCurrentTime = song.currentTime;
        }
    });
});

// prevent user from seeking

songs.forEach(song => {
    song.addEventListener('seeking', function () {
        // guard agains infinite recursion:
        // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
        let delta = song.currentTime - supposedCurrentTime;
        if (Math.abs(delta) > 0.01) {
            console.log("Seeking is disabled");
            song.currentTime = supposedCurrentTime;
        }
    });
});

// delete the following event handler if rewind is not required

songs.forEach(song => {
    song.addEventListener('ended', function () {
        // reset state in order to allow for rewind
        supposedCurrentTime = 0;
    });
});

// STOP BUTTON - STOPS MUSIC AND RESET TO START
btnsStop.forEach(btnStop => {
    btnStop.addEventListener('click', () => {
        songs.forEach((song, idx) => {
            song.pause();
            song.currentTime = 0;
            supposedCurrentTime = 0;
            // MUTE SECONG SAMPLE AGAIN WHEN STOPPED
            muteToggle = true;
            songs[1].muted = true;
            songs[0].muted = false;
            songs[3].muted = true;
            songs[2].muted = false;
            songs[5].muted = true;
            songs[4].muted = false;
            songs[7].muted = true;
            songs[6].muted = false;
            songs[9].muted = true;
            songs[8].muted = false;
            songs[11].muted = true;
            songs[10].muted = false;
            songs[13].muted = true;
            songs[12].muted = false;
            songs[15].muted = true;
            songs[14].muted = false;
            songs[17].muted = true;
            songs[16].muted = false;
            songs[19].muted = true;
            songs[18].muted = false;
            songs[21].muted = true;
            songs[20].muted = false;
            songs[23].muted = true;
            songs[22].muted = false;
            songs[25].muted = true;
            songs[24].muted = false;
            songs[27].muted = true;
            songs[26].muted = false;
            songs[29].muted = true;
            songs[28].muted = false;
        });
    });
});

/*****************SHOW BACK TO TOP ARROW ON SCROLL*************** */

// Back to top arrow
const arrowUp = document.querySelector('.arrowUp');

window.onscroll = function () {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        arrowUp.classList.add('arrowShow');
    } else {
        arrowUp.classList.remove('arrowShow');
    }
};

// document.body.addEventListener('click', (e) => {
//     console.log(e.target);
// })
