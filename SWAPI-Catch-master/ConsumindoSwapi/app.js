let button =document.querySelector('#button');
let name =document.querySelector('#nome');
let  AnoDenascimento =document.querySelector('#AnoNasc');
let  massa =document.querySelector('#mass');
let  altura =document.querySelector('#height');
function pegaInfo() {
    upgradeInfoComCarregamento()
    let NumPers =document.getElementById('NumPers').value;
    let ApiUrl= 'https://swapi.co/api/people/'+NumPers;
    axios.get(ApiUrl).then(function(response){
        upgradeInfo(response.data);
    })
}
function upgradeInfo(data){
 name.innerText = `Nome: ${data.name}`;
 AnoDenascimento.innerText =`Data Nascimento: ${ data.birth_year}`;
 massa.innerText = `Peso: ${data.mass} Kg`;
 altura.innerText = `Altura: ${data.height} cm`;
}
function upgradeInfoComCarregamento(){
    name.innerHTML='<i class="fa fa-circle-o-notch fa-spin  fa-fw"></i>'
    AnoDenascimento.innerText =''
    massa.innerText = ''
   }
button.addEventListener('click',pegaInfo);