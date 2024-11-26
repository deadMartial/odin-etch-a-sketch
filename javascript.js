createTiles();


const btn=document.querySelector("button");
btn.addEventListener("click", createTiles);

function createTiles(){
    const len=document.querySelector("input").value;
    // console.log(getle);
    const containar=document.querySelector(".containar");
    containar.innerHTML="";
for(let i=0;i<len;i++) {
    const crrdiv=document.createElement("div")
    crrdiv.classList.add("row");
    for(let j=0;j<len;j++) {
        const div=document.createElement("div");
        // div.textContent="[ "+i+", "+j+" ] ";
        div.classList.add("box");
        div.addEventListener("mouseenter", cngcolor)
        crrdiv.appendChild(div);
    }
    containar.appendChild(crrdiv);
}
}



function cngcolor(e) {
    
    const now=e.target;
    const computedStyle=getComputedStyle(now);
    // let col=(computedStyle.backgroundColor=="rgb(0, 0, 0)")?"white":"black";

    let col=rngColor();

    // console.log(computedStyle.backgroundColor);
    // console.log(col);
    let op=parseFloat(now.style["opacity"])-0.1;
    now.style["opacity"]=(now.style["opacity"]==="")?"1":op;
    if(op<0){op=0;}
    console.log(now.style["opacity"]);
    now.style["background-color"]=col;
}

function rngColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgba(${r}, ${g}, ${b}, 1.00)`;
}