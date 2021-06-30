
var test = document.getElementById('test');
var secNum = document.getElementById('secNum');
var secNumT = document.getElementById('secNumT');
var secNumB = document.getElementById('secNumB');
var timeNum = document.getElementById('timeNum');
var B = false;
var i = 0;
function demo () {
    test.className = 'time-container animation-middle';
    // let num = Number(secNum.innerText);
    // setTimeout(() => {
    //     // test.className = 'time-container animation-middle';
    //     // secNum.innerText = num + 1;
    //     // secNumT.innerText = num + 1;
    //     // secNumB = num;
    // }, 1000);
}
// for (let i = 0; i < 10; i++) {
    var timer = setInterval(() => {
        
        if (i > 20) {
            clearInterval(timer)
        }
        test.className = '';
        timeNum.className = 'seconds background--ui-mono-7 flip-clock';
        if(i % 2) {
            test.className = 'time-container animation-middle';
        } else {
            test.className = 'time-container';
        }
        timeNum.className = 'time-number seconds background--ui-mono-7 flip-clock';
        i++;
    }, 1000);
// }

