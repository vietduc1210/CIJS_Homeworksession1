function rot13 (code) {
    let rot13_code ="";
    for(let i =0;i<code.length;i++){
        if(code.charCodeAt(i)<=77){
            rot13_code = rot13_code + String.fromCharCode(code.charCodeAt(i)+13);
        }
        else if(code.charCodeAt(i)>77){
            rot13_code = rot13_code + String.fromCharCode(code.charCodeAt(i)+13-26);
        }
    }
    return rot13_code;
}

rot13("PUNEVMNEQ")