const body = document.getElementsByTagName('body')[0];

function setColor(name) {
    body.style.backgroundColor = name;
}
function setRandom(){
    let a = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let c = Math.round(Math.random()*255);
    const color = `rgb(${a},${b},${c})`;
    body.style.backgroundColor = color;
    
}

