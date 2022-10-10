let identificador = 123;

function zeroEsq(value, totalWidth, paddingChar) {
    let length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  };
console.log(zeroEsq(identificador, 6));


let nomeMaiu = "";
let nome = "Addae simeao";
let arrayNome = nome.split(" ");
for(let nome of arrayNome){
    let primeiraLetra = nome.slice( 0,1);
    let restanteNome = nome.slice(1);
    nomeMaiu += primeiraLetra.toUpperCase() + restanteNome + " ";
    
}
console.log(nomeMaiu);

let email = "      jose@email.com  ";
let emailFormat = email.trim();
console.log(emailFormat);

