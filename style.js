/* function ok(){
    let phrase="";
    let lettre =["A","d","e","m","a","i","n"];
for(let i=0; i<lettre.length;i++){
    lettre[0]*5;
    lettre[1]*3;
    lettre[0]*3;
    lettre[0]*3;
    lettre[0]*1;
    lettre[0]*4;
return phrase;


}
}
console.log(ok(phrase)); */

/* function genererPhrase() {
    let phrase = "";
    let segments = [
        { char: 'A', count: 5 },
        { char: ' ', count: 1 },
        { char: 'd', count: 3 },
        { char: 'e', count: 3 },
        { char: 'm', count: 3 },
        { char: 'a', count: 3 },
        { char: 'i', count: 1 },
        { char: 'n', count: 4 }
    ];

    for (let i = 0; i < segments.length; i++) {
        phrase += segments[i].char.repeat(segments[i].count);
    }

    return phrase;
}

console.log(genererPhrase()); */


function ADemainQuiCoule() {
    let phrase = "";
    lettre="";
    nombre="";
    let tableau = [
        { lettre: 'A', nombre: 5 },
        { lettre: ' ', nombre: 1 },
        { lettre: 'd', nombre: 3 },
        { lettre: 'e', nombre: 3 },
        { lettre: 'm', nombre: 3 },
        { lettre: 'a', nombre: 3 },
        { lettre: 'i', nombre: 1 },
        { lettre: 'n', nombre: 4 }
    ];

    for (let i = 0; i < tableau.length; i++) {
        phrase += tableau[i].lettre .repeat (tableau[i].nombre);
    }

    return phrase;
}

console.log(ADemainQuiCoule());