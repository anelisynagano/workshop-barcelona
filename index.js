const textureBackground = document.getElementsByTagName('body');
console.log(textureBackground);
const textureSelection = document.getElementById("texture-selector");

textureSelection.addEventListener('change', () => textureBackground[0].style.backgroundImage = `url(${event.target.value})`);