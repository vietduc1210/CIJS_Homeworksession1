function Random_Hex () {
    let list = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let Color_Hex = "#";
    for(let i=0;i<6;i++){
        let random_number = Math.floor(Math.random()*16);
        Color_Hex = Color_Hex + list[random_number];
    }
    return Color_Hex;
}

let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
button1.addEventListener("click", ()=>{
    button1.style.backgroundColor = Random_Hex();
})
button2.addEventListener("click", ()=>{
    button2.style.backgroundColor = Random_Hex();
})
button3.addEventListener("click", ()=>{
    button3.style.backgroundColor = Random_Hex();
})
button4.addEventListener("click", ()=>{
    button4.style.backgroundColor = Random_Hex();
})