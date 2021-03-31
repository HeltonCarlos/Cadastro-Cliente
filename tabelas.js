document.querySelector('#enviar').addEventListener('click',e=>{
   var nome =document.querySelector('#nome').value
   var telefone =document.querySelector('#telefone').value
   var cep =document.querySelector('#cep').value
   var bairro =document.querySelector('#bairro').value
   var localidade =document.querySelector('#localidade').value

   if (!nome || !telefone || !cep || !bairro || !localidade){
    alert('*Preencha o campo!')}

   var cliente = {nome,telefone,cep,bairro,localidade}

   var cli=localStorage.cli ? JSON.parse(localStorage.cli):[]
   cli.push(cliente);
   localStorage.cli=JSON.stringify(cli);
 })