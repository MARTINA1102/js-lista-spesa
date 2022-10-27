const listaSpesa=[
    'finocchi',
    'pasta',
    'carne',
    'pesce',
    'zucchine',
    'acqua',
];
const eleListaSpesa=document.querySelector('.spesalista');

let i=0;
while(listaSpesa[i]){
    eleListaSpesa.innerHTML += `<li>${listaSpesa[i]}</li>`;
    console.log([i]);
    i++;

}