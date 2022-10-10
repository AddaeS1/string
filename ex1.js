const comentario = "Esse lixo é muito perigoso!";

if(comentario.includes("covid") === true||comentario.includes("Covid") === true||comentario.includes("COVID") === true||comentario.includes("pandemia") === true||comentario.includes("Pandemia") === true||comentario.includes("covid") === true){
    console.log("Comentário bloqueado por conter palavras proibidas.");
}else{
    console.log("Comentário autorizado.");
}