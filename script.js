// Variáveis e constantes globais:
const colorPaletteId = document.getElementById('color-palette');
const pixelBoardId = document.getElementById('pixel-board');
const selectedMove = document.getElementById('color-palette').children;
const inputValor = document.getElementById('board-size');
const buttonInput = document.getElementById('generate-board');

// criando as class 'color e selected' as divs e dando cor.
const gerandoCor = () => {
  return (
    '#' +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
  );
};

const divDefine = (classe, color) => {
  const criandoDivs = document.createElement('div');
  criandoDivs.className = classe;
  criandoDivs.style.backgroundColor = color;
  return criandoDivs;
};

const addPaiDaDiv = (pai, filho) => {
  pai.appendChild(filho);
};

const divsColorCreator = (number) => {
  for (let i = 0; i < number; i += 1) {
    if (i === 0) {
      addPaiDaDiv(colorPaletteId, divDefine('color selected', 'black'));
    } else {
      addPaiDaDiv(colorPaletteId, divDefine('color', gerandoCor()));
    }
  }
};
divsColorCreator(4);

// criando bloco de pixels brancos.

const divsPixelsCreator = (numero = 5) => {
  const qtdPixels = numero * numero;
  pixelBoardId.style.gridTemplateColumns = `repeat(${numero}, 1fr)`;

  for (let i = 0; i < qtdPixels; i += 1) {
    addPaiDaDiv(pixelBoardId, divDefine('pixel', 'white'));
  }
};
divsPixelsCreator();

// criando função que movimenta o selected em uma color por vez.
const moveSelected = (event) => {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
};
for (let i = 0; i < selectedMove.length; i += 1) {
  selectedMove[i].addEventListener('click', moveSelected);
}

// pintando os pixels branco - ESSA FOI TENSA.
const colorir = (paint) => {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    if (color[i].classList.contains('selected')) {
      paint.target.style.backgroundColor = color[i].style.backgroundColor;
    }
  }
};
pixelBoardId.addEventListener('click', colorir);

// criando botão de limpar
const clearBtn = (limpar) => {
  const buttonClass = document.querySelector('.button-container');
  const clearButton = document.createElement('button');
  const buttonId = 'clear-board';

  clearButton.innerHTML = limpar;
  clearButton.id = buttonId;
  buttonClass.appendChild(clearButton);
};
clearBtn('Limpar');
const btn = document.querySelector('#clear-board');

const clear = () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
};

btn.addEventListener('click', clear);

// checando as exigencias para add pixel
const pixelsChecagem = () => {
  if (inputValor.value === '') {
    alert('Board inválido!');
    inputValor.value = 5;
  } else if (inputValor.value < 5) {
    inputValor.value = 5;
  } else if (inputValor.value > 50) {
    inputValor.value = 50;
  }
  return inputValor.value;
};

// chamando e add os pixels
const pixelsAdd = () => {
  buttonInput.addEventListener('click', () => {
    delDivsPixel();
    numero = pixelsChecagem();
    divsPixelsCreator(numero);
  });
};
pixelsAdd();

const delDivsPixel = () => {
  const deletPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < deletPixel.length; i += 1) {
    deletPixel[i].remove();
  }
};
