

async function playSound() {
    var oneAudio = document.getElementById('one');
    var twoAudio = document.getElementById('two');
    var threeAudio = document.getElementById('three');
    var fourAudio = document.getElementById('four');
    var fiveAudio = document.getElementById('five');
    var sixAudio = document.getElementById('six');
    var sevenAudio = document.getElementById('seven');
    var eightAudio = document.getElementById('eight');
    var nineAudio = document.getElementById('nine');
    var thousandsAudio = document.getElementById('thousands');
    var hundredsAudio = document.getElementById('hundreds');
    var tensAudio = document.getElementById('tens');

    var intro = document.getElementById('intro');
    var outro = document.getElementById('outro');

    var date1 = new Date("06/08/2018");
    var date2 = new Date();
    var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    var ones = Difference_In_Days % 10;
    var tens = ((Difference_In_Days % 100) - ones) / 10;
    var hundreds = ((Difference_In_Days % 1000) - tens * 10 - ones) / 100;
    var thousands = (Difference_In_Days - hundreds * 100 - tens * 10 - ones) / 1000;

    console.log(thousands);
    console.log(hundreds);
    console.log(tens);
    console.log(ones);


    intro.play();
    await delay(3300).then(() => console.log('ran after 3.5 seconds passed'));
    
    playNumber(thousands);
    await delay(800).then(() => console.log('ran after 1 second passed'));
    thousandsAudio.play();
    await delay(1000).then(() => console.log('ran after 1 second passed'));
    if (hundreds > 0) {
        playNumber(hundreds);
        await delay(800).then(() => console.log('ran after 1 second passed'));
        hundredsAudio.play();
        await delay(1000).then(() => console.log('ran after 1 second passed'));
    }
    if (tens > 0) {
        playNumber(tens);
        await delay(800).then(() => console.log('ran after 1 second passed'));
        tensAudio.play();
        await delay(1000).then(() => console.log('ran after 1 second passed'));
    }
    if (ones > 0) {
        playNumber(ones);
        await delay(800).then(() => console.log('ran after 1 second passed'));
    }
    outro.play();

    
    function playNumber(num) {
        switch(num) {
        case 1:
            oneAudio.play();
            break;
        case 2:
            twoAudio.play();
            break;
        case 3:
            threeAudio.play();
            break;
        case 4:
            fourAudio.play();
            break;
        case 5:
            fiveAudio.play();
            break;
        case 6:
            sixAudio.play();
            break;
        case 7:
            sevenAudio.play();
            break;
        case 8:
            eightAudio.play();
            break;
        case 9:
            nineAudio.play();
            break;
        default:
            break;
    }

    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


