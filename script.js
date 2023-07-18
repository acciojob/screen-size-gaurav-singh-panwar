//your JS code here. If required.
//your JS code here. If required.
let div=document.createElement('div');
div.id="sizeInfo";
let h1=document.createElement('h1');
h1.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

// console.log(h1.innerText);
document.body.append(div);
div.append(h1);


window.onresize=function(){
    h1.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
};
