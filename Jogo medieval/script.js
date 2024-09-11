console.log('Fortal city é um barato')

function gerarMonstroAvancado() {
    const tipos = ["Ogro", "Dragão", "Goblin"];
    const imagens = {
        "Ogro": "https://hekelotia-rpgii.weebly.com/uploads/1/0/3/3/10333055/ogre-hekelotiahk22_orig.jpg",
        "Dragão": "https://i.etsystatic.com/15374976/r/il/d93fad/1323124374/il_570xN.1323124374_la1x.jpg",
        "Goblin": "https://img.artpal.com/028562/43-22-12-25-12-39-22m.jpg"
    };
    const habilidades = {
        "Ogro": "regenerar vida",
        "Dragão": "fogo",
        "Goblin": "furtividade"
    };

    let tipo = tipos[Math.floor(Math.random() * tipos.length)];
    let monstro = {
        tipo: tipo,
        hp: 0,
        ataque: 0,
        defesa: 0,
        habilidade: ""
    };

    switch(tipo) {
        case "Ogro":
            monstro.hp = 120;
            monstro.ataque = 15;
            monstro.defesa = 20;
            monstro.habilidade = habilidades[tipo];
            break;
        case "Dragão":
            monstro.hp = 150;
            monstro.ataque = 30;
            monstro.defesa = 10;
            monstro.habilidade = habilidades[tipo];
            break;
        case "Goblin":
            monstro.hp = 70;
            monstro.ataque = 10;
            monstro.defesa = 5;
            monstro.habilidade = habilidades[tipo];
            break;
    }

    // Informações do monstro
    document.getElementById('monstro-imagem').src = imagens[tipo];
    document.getElementById('monstro-tipo').textContent = `Tipo: ${monstro.tipo}`;
    document.getElementById('monstro-hp').textContent = `HP: ${monstro.hp}`;
    document.getElementById('monstro-ataque').textContent = `Ataque: ${monstro.ataque}`;
    document.getElementById('monstro-defesa').textContent = `Defesa: ${monstro.defesa}`;
    document.getElementById('monstro-habilidade').textContent = `Habilidade: ${monstro.habilidade}`;
}
