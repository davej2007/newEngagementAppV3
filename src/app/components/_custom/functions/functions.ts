import { AbstractControl } from "@angular/forms";

export function toCapitalFirst(str:String){
    str = str.toLowerCase();
    let words = str.split(' ');
    let capWord:String = '';
    words.forEach((word)=>{
        capWord += word.charAt(0).toUpperCase() + word.slice(1) + ' '
    })
    return capWord.trim()
}
export function randomChar(req){
    let all = 'AaBbCcDdEeFfGgHh0Ii1Jj2Kk3Ll4Mm5Nn6Oo7Pp8Qq9RrSsTtUuVvWwXxYyZz';
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    if (req == 'all'){
        return all[Math.floor(Math.random() * 62)];
    } else if (req=='capital'){
        return capitals[Math.floor(Math.random() * 26)];
    } else if(req == 'lower'){
        return lower[Math.floor(Math.random() * 26)];
    } else {
        return numbers[Math.floor(Math.random() * 10)];
    }
}