const colorThief = new ColorThief();

function setAvatarBanner () {
    const img = document.getElementById('avatar');
    const color = colorThief.getColor(img);
    console.log(`Red: ${color[0]} Blue: ${color[1]} Green: ${color[2]}`);
    return color;
}

setAvatarBanner();



