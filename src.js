

function monitorMouse(e){
    let  x=e.clientX;
    let y=e.clientY;

    let element=document.querySelector('.cursor-box')
    element.style.left=x+'px';
    element.style.top=y+'px';
}

window.onload=function (){
    window.addEventListener('mousemove', monitorMouse)
}