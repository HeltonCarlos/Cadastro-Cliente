document.querySelector('#enviar').addEventListener('click',e=>{
   var nome =document.querySelector('#nome').value
   var telefone =document.querySelector('#telefone').value
   var cep =document.querySelector('#cep').value
   var lograduro = document.querySelector('#logradouro').value
   var bairro =document.querySelector('#bairro').value
   var localidade =document.querySelector('#localidade').value

  function renderCli(){
    var cli=getCli();
    cli.forEach(c=>ClienteGrava(c))
  }

  function ClienteGrava(cliente){
    var linha = document.createElement("tr")
    linha.innerHTML+=`
    <td>${cliente.nome}</td>
    <td>${cliente.telefone}</td>
    <td>${cliente.cep}</td>
    <td>${cliente.lograduro}</td>
    <td>${cliente.bairro}</td>
    <td>${cliente.localidade}</td>
    `
    document.querySelector('#clientes').appendChild(linha)
  }

   if (!nome || !telefone || !cep || !lograduro|| !bairro || !localidade){
    alert('*Preencha o campo!')}

  const cliente = {nome,telefone,cep,lograduro,bairro,localidade}

  const getCli =() =>localStorage.cli ? JSON.parse(localStorage.cli):[]

  var cli=getCli();

  cli.push(cliente);
  renderCli();
  ClienteGrava(cliente);
   
  localStorage.cli=JSON.stringify(cli);

  document.querySelector('#nome').value =""
  document.querySelector('#telefone').value=""
  document.querySelector('#cep').value=""
  document.querySelector('#logradouro').value=""
  document.querySelector('#bairro').value=""
  document.querySelector('#localidade').value=""
 })