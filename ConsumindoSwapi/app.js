let button =document.querySelector('#button');
let name =document.querySelector('#nome');
let  AnoDenascimento =document.querySelector('#AnoNasc');
let  massa =document.querySelector('#mass');
function pegaInfo() {
    upgradeInfoComCarregamento()
    let ApiUrl= 'https://swapi.co/api/people/1';
    axios.get(ApiUrl).then(function(response){
        upgradeInfo(response.data);
    })
}
function upgradeInfo(data){
 name.innerText = `Nome: ${data.name}`;
 AnoDenascimento.innerText =`Data Nascimento: ${ data.birth_year}`;
 massa.innerText = `Peso: ${data.mass} Kg`;
}
function upgradeInfoComCarregamento(){
    name.innerText ='Loading...';
    AnoDenascimento.innerText ='';
    massa.innerText = '';
   }
button.addEventListener('click',pegaInfo);