let cpf = '15898524760';
let cnpj = '22558154000120';



if( cnpj.length === 14){
console.log(cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"));
}else{
    console.log("CNPJ invalido !");
}

if( cpf.length === 11){
    console.log(cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"));
    }else{
        console.log("CPF invalido !");
    }