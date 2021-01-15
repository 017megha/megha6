var mouseEvent = "empty";
canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color="red"
var last_postion_of_x, last_postion_of_y;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mouseEvent= "mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    current_postion_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postion_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=5;
        ctx.moveTo(last_postion_of_x , last_postion_of_y);
        ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
        ctx.stroke();
    }
    last_postion_of_x=current_postion_of_mouse_x;
    last_postion_of_y=current_postion_of_mouse_y;
}

canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e)
{
    mouseEvent= "mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup";
}