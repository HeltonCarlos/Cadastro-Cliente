const cep =document.querySelector('#cep');

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value=result[campo]
        }
    }
}

cep.addEventListener('blur', (e)=>{
   let procurar = cep.value.replace("-","");
   const opcao ={
       method:'GET',
       mode:'cors',
       cache:'default'
   }
   fetch(`https://viacep.com.br/ws/${procurar}/json/`,opcao)
   .then(Response=>{Response.json()
    .then(data=>showData(data))
})

.catch(e=>console.log('ERRO'+e,message))
});

