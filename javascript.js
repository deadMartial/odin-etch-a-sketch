let len=8

const containar=document.querySelector(".containar");
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

function cngcolor(e) {
    
    const now=e.target;
    const computedStyle=getComputedStyle(now);
    let col=(computedStyle.backgroundColor=="rgb(0, 0, 0)")?"white":"black";
    console.log(computedStyle.backgroundColor);
    console.log(col);
    now.style["background-color"]=col;
}