function pad_pos(n){
    let pad0 = 1;
    let pad1 = 1;
    let pad2 = 1;
    let a = 1;
    for(let i=3;i<=n;i++){
        a= pad1+pad0;
        pad0 = pad1;
        pad1 = pad2;
        pad2 = a;
    }
    return a;
}
function pad_neg(m){
    let pad0 = 1;
    let pad1 = 0;
    let pad2 = 1;
    let a = 1;
    for(let i=-3;i>=m;i--){
        a= pad0-pad2;
        pad0 = pad1;
        pad1 = pad2;
        pad2 = a;
    }
    return a;
}

function padovan(m,n){
    let padovan_arr=[];
    for(let i=m;i<=n;i++){
        if(i<=-3){
            a = pad_neg(i);
            padovan_arr.push(a);
        }
        else if(i===-2||i===0||i===1||i===2){
            padovan_arr.push(1);
        }
        else if(i===-1){
            padovan_arr.push(0);
        }
        else{
            a = pad_pos(i);
            padovan_arr.push(a);
        }
    }
    return padovan_arr;
}
padovan(-10,10);