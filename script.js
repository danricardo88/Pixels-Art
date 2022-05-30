// Criando a troca de selected nas paletas de cores
const selectedPalette = document.getElementById('color-palette').children;

function selectedAllColor(event) {
  const selectedRandom = document.querySelector('.selected');
  selectedRandom.classList.remove('selected');
  var test = event.target.getAttribute('id');
  event.target.setAttribute('cor', `${test}-cor`);
  
  event.target.classList.add('selected');
}

for (let index = 0; index < selectedPalette.length; index += 1) {
  selectedPalette[index].addEventListener('click', selectedAllColor);
}

//criando as div's para o bloco a ser colorido com a paleta
let pixelsBloco = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

function addPixels() {
  const itemPixel = document.querySelector('#pixel-board');
  let numerosDeElementos = pixelsBloco;

  for (let index = 0; index < numerosDeElementos.length; index += 1) {
    if (numerosDeElementos.length > index) {
      let pixelsCreate = document.createElement('div');
      pixelsCreate.className = 'pixel';
      itemPixel.appendChild(pixelsCreate);
    }
  }
}
addPixels();

//Criando a função de selecionar cor e pintar os pixels

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', function (e) {
    let pallet = document.querySelector('.selected');
    let cor = pallet.getAttribute('cor');
    this.setAttribute('class', `pixel ${cor}`);
  });
});

