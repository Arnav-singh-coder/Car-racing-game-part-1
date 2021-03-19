canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var c1_width=120;
var c1_height=70;
var c1_x=10;
var c1_y=10;
var c1_image="https://i.postimg.cc/YqdnnNX1/car1.png";
var background_image="https://i.postimg.cc/bv5d35nK/racing.jpg"

var c2_width=120;
var c2_height=70;
var c2_x=10;
var c2_y=100;
var c2_image="https://i.postimg.cc/wM0VrHk6/car2.png";



function add(){
    bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;

    c1_img=new Image();
    c1_img.onload=uploadc1;
    c1_img.src=c1_image;
    

    c2_img=new Image();
    c2_img.onload=uploadc2;
    c2_img.src=c2_image;
     
    
}

function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
    
}

function uploadc1(){
    ctx.drawImage(c1_img,c1_x,c1_y,c1_width,c1_height);
}
function uploadc2(){
        ctx.drawImage(c2_img,c2_x,c2_y,c2_width,c2_height);
    
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

