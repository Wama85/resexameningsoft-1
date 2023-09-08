function contartexto(texto) {
  let resultado={};
  
  if (texto.length>0)  {
    let listapalabras=texto.split(" ");
   // resultado[texto]=1;
   listapalabras.forEach((palabra) =>{
    if(resultado[palabra]){
      resultado [palabra]+=1;
    }
    else {
      resultado[palabra]=1;
    }
    
   });
  }

   
  
  return resultado;
}

export default contartexto;
