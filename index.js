const textureBackground = document.getElementsByTagName('body')[0];
const textureSelection = document.getElementById("texture-selector");
const collapse = document.getElementsByClassName("collapse")[0];
const title = document.getElementsByClassName("title")[0];

collapse.style.display = 'none';

textureSelection.addEventListener('change', () => textureBackground.style.backgroundImage = `url(${event.target.value})`);

title.addEventListener('click', () => {
    if (collapse.style.display === 'none' ) {
        collapse.style.display = 'block'
    } else {
        collapse.style.display = 'none'
    }
});