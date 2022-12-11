const body = document.querySelector("body");
let c = 0;

const animate = function(){
    c++;
    if (c <= 255){
        body.style.backgroundColor = 'rgb(' + c + ',' + c + ',' + c + ')';
        requestAnimationFrame( animate )
    }
    else
    alert('done')
}
requestAnimationFrame(animate)

