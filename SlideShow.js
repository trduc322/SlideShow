var imglist = [];
window.onload = function()
{
    var links = document.getElementsByTagName("a");
    var count = 0;
    for(let item of links){
        let img = new Image();
        img.src = item.href;
        

        imglist.push(img);
    }
    
    var myVar = setInterval(function(){
        count = ++count;
        document.getElementById("img-show").src = imglist[count%4].src;
        
    }, 1000);
}