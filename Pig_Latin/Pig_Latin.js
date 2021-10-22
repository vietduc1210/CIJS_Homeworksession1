function translatePigLatin(word){
    // let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","k","r","s","t","v","w","x","y","z"];
    // let vowel = ["e","u","a","o","i"];
    let arr = word.split("");
    let new_word = "";
    if(arr[0]=="e"||arr[0]=="u"||arr[0]=="a"||arr[0]=="o"||arr[0]=="i"){
        for(let i=0;i<arr.length;i++){
            new_word = new_word + arr[i];
        }
        new_word = new_word + "way";
    }
    else{
        for(let i=1;i<arr.length;i++){
            new_word = new_word + arr[i];
        }
        new_word = new_word + arr[0];
        new_word = new_word + "ay"; 
    }
    console.log(new_word);
}

translatePigLatin("paragraphs");