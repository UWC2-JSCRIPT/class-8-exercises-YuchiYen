const body = document.querySelector("body");
let c = 255;
let countDownInterval = setInterval(() => {
    if (c > 0) {
        c--;
        body.style.backgroundColor = 'rgb(' + c + ',' + c + ',' + c + ')'
    } else {
        clearInterval(countDownInterval);
        alert('done');
    }
}, 500);