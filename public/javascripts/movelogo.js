var userid;
var pic_id;
if (userid==null) userid="";
_dw('<img WIDTH=0 HEIGHT=0  border=0>');
_dw('<div id=dd style=position:absolute; left:297px; top:114px; width:100px; height:100px; z-index:1><object classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0 width=100 height=100> ')
_dw('    <param name=movie value=' + pic_id + '> ')
_dw('    <param name=quality value=high>')
_dw('    <param name=wmode value=transparent>')
_dw('  </object>')
_dw(' </div>')
function _dw(string) {document.write(string);}
<!-- Begin

var xPos = 20;

var yPos = document.body.clientHeight;

var step = 1;

var delay = 30; 

var height = 0;

var Hoffset = 0;

var Woffset = 0;

var yon = 0;

var xon = 0;

var pause = true;

var interval;

dd.style.top = yPos;

function changePos() {

width = document.body.clientWidth;

height = document.body.clientHeight;

Hoffset = dd.offsetHeight;

Woffset = dd.offsetWidth;

dd.style.left = xPos + document.body.scrollLeft;

dd.style.top = yPos + document.body.scrollTop;

if (yon) {

yPos = yPos + step;

}

else {

yPos = yPos - step;

}

if (yPos < 0) {

yon = 1;

yPos = 0;

}

if (yPos >= (height - Hoffset)) {

yon = 0;

yPos = (height - Hoffset);

}

if (xon) {

xPos = xPos + step;

}

else {

xPos = xPos - step;

}

if (xPos < 0) {

xon = 1;

xPos = 0;

}

if (xPos >= (width - Woffset)) {

xon = 0;

xPos = (width - Woffset);

   }

}

function start() {

dd.visibility = 'visible';

interval = setInterval('changePos()', delay);

}

function pause_resume() {

if(pause) {

clearInterval(interval);

pause = false;

}

else {

interval = setInterval('changePos()',delay);

pause = true;

   }

}

start();

//  End -->

