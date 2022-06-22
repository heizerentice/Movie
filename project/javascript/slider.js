
var i = 0;
var images = [];
var time = 4000;

// Image list
images[0] = 'https://f17-zpc.zdn.vn/6410298270456398391/d0c19905c54a34146d5b.jpg';
images[1] = 'https://f19-zpc.zdn.vn/8470138729509434497/21fcca39967667283e67.jpg';
images[2] = 'https://f3.photo.talk.zdn.vn/3206700421726679601/1b6b2faf73e082bedbf1.jpg';
images[3] = 'https://f10.photo.talk.zdn.vn/1038484155170394315/9d3e26c97d868cd8d597.jpg';

// Change image
function changeImage() 
{
    document.slide.src = images[i];
    if (i < images.length - 1) 
    {
        i++;
    }
    else 
    {
        i = 0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;
