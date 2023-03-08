var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("touchstart", my_touchstart);
canvas.addEventListener("touchmove", my_touchmove);
function my_mousedown(e) {
    last_position_of_x = e.clientX - canvas.offsetLeft;
    last_position_of_y = e.clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    console.log(last_position_of_x + " , " + last_position_of_y);
    //circulo(last_position_of_x, last_position_of_y)
    mouseEvent="mousedown"
}
function my_mousemove(e){
    current_positon_of_x = e.clientX - canvas.offsetLeft;
    current_positon_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent =="mousedown"){
        linea(current_positon_of_x,current_positon_of_y,last_position_of_x,last_position_of_y)
    }
    last_position_of_x = current_positon_of_x;
    last_position_of_y = current_positon_of_y;
}
function my_mouseup(e){
    mouseEvent="mouseup";
}
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function my_touchstart(e) {
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
}
function my_touchmove(e){
    current_positon_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_positon_of_y = e.touches[0].clientY - canvas.offsetTop;
    
        linea(current_positon_of_x,current_positon_of_y,last_position_of_x,last_position_of_y)
    
    last_position_of_x = current_positon_of_x;
    last_position_of_y = current_positon_of_y;
}
function circulo(x, y) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);//
    ctx.stroke();
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function linea(xInicio, yInicio,xFin, yFin) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.beginPath();
    ctx.moveTo(xFin, yFin);
    ctx.lineTo(xInicio,yInicio);
    ctx.stroke();
}
if(screen.width<992){
    canvas.width=screen.width-100;
    canvas.height=screen.height-200;
    document.body.style.overflow="hidden"
}