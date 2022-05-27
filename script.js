const selectedPalette = document.getElementById('color-palette').children;

function selectedAllColor(event) {
  const selectedRandom = document.querySelector('.selected');
  selectedRandom.classList.remove('selected');
  event.target.classList.add('selected');

  
}

for (let index = 0; index < selectedPalette.length; index += 1) {
  selectedPalette[index].addEventListener('click', selectedAllColor);

}