// Task #0

const player1 = {
    name: 'SCORPION ',
    hp: '100',
    img: 'https://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['glock'],
    attack: function () {
        console.log(player1.name + 'Fight');
    }
};

const player2 = {
    name: 'SUB-ZERO ',
    hp: '80',
    img: 'https://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['glock'],
    attack: function () {
        console.log(player2.name + 'Fight');
    }
};

player1.attack ();
player2.attack ();

// Task #1

function createPlayer(classPlayer, paramPlayer) {
    const player = document.createElement('div');
    player.className = 'classPlayer';

    const progressbar = document.createElement('div');
    progressbar.className = 'progressbar';
   
    const life = document.createElement('div');
    life.className = 'life';
    life.style.width = paramPlayer.hp;

    const name = document.createElement('div');
    name.className = 'name';
    name.innerText = paramPlayer.name;

    const character = document.createElement('div');
    character.className = 'character';

    const img = document.createElement('img');
    img.src = paramPlayer.img;

   
    player.appendChild(character);
    player.appendChild(progressbar);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    
    const arenas = document.querySelector('.arenas');
    arenas.appendChild(player);
}
createPlayer('player1', player1);
createPlayer('player2', player2);