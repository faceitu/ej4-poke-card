const conteinerCard = document.querySelector('.card-container');
const inputSearch = document.querySelector('.input-search');
const formSearch = document.getElementById('form-search');
const footer = document.querySelector('.footer')



const typeSearch = (type) => {
    switch (type) {
        case 'fire':
            return 'tipo-fuego.png';
        case 'grass':
            return 'tipo-planta.png'
        case 'water':
            return 'tipo-agua.png'
        case 'bug':
            return 'tipo-insecto.png'
        case 'normal':
            return 'tipo-normal.png'
        case 'electric':
            return 'tipo-electro.png'
        case 'fairy':
            return 'tipo-fairy.png'
        case 'psychic':
            return 'tipo-psiq.png'
        case 'rock':
            return 'tipo-tierra.png'
        case 'fighting':
            return 'tipo-fight.png'
        case 'poison':
            return 'tipo-poison.png'
        case 'ground':
            return 'tipo-tierra.png'
        case 'dragon':
            return 'tipo-fuego.png';
    }
}

const fondoSearch = (type) => {
    switch (type) {
        case 'fire':
            return 'card-fire';
        case 'grass':
            return 'card-plant'
        case 'water':
            return 'card-water'
        case 'bug':
            return 'card-insecto'
        case 'normal':
            return 'card-normal'
        case 'electric':
            return 'card-electric'
        case 'fairy':
            return 'card-fairy'
        case 'psychic':
            return 'card-psico'
        case 'rock':
            return 'card-earth'
        case 'fighting':
            return 'card-fight'
        case 'poison':
            return 'card-posion'
        case 'ground':
            return 'card-earth'
        case 'dragon':
            return 'card-fire';
    }
}

const weaknessSearch = (t) => {
    switch (t) {
        case 'fire':
            return ['tipo-agua.png', 'tipo-tierra.png', 'tipo-normal.png']
        case 'grass':
            return ['tipo-fuego.png', 'tipo-fight.png', 'tipo-normal.png']
        case 'water':
            return ['tipo-planta.png', 'tipo-psiq.png', 'tipo-normal.png']
        case 'bug':
            return ['tipo-fight.png', 'tipo-poison.png', 'tipo-normal.png']
        case 'normal':
            return ['tipo-insecto.png', 'tipo-fuego.png', 'tipo-normal.png']
        case 'electric':
            return ['tipo-aire.png', 'tipo-agua.png', 'tipo-normal.png']
        case 'fairy':
            return ['tipo-tierra.png', 'tipo-fairy.png', 'tipo-normal.png']
        case 'psychic':
            return ['tipo-fairy.png', 'tipo-electro.png', 'tipo-normal.png']
        case 'rock':
            return ['tipo-electro.png', 'tipo-aire.png', 'tipo-normal.png']
        case 'fighting':
            return ['tipo-aire.png', 'tipo-agua.png', 'tipo-normal.png']
        case 'poison':
            return ['tipo-electro.png', 'tipo-agua.png', 'tipo-normal.png']
        case 'ground':
            return ['tipo-electro.png', 'tipo-aire.png', 'tipo-normal.png']
        case 'dragon':
            return ['tipo-agua.png', 'tipo-tierra.png', 'tipo-normal.png']

    }

}
const showmehability2 = (hability) => {
    if (!hability) {
        return " no tiene"
    } else
        return hability.effect_entries[1].effect
}
const imageViewer = (image) => {
    if (!image) {
        return './img/pokeball.png'
    } else
        return image
}
const showmehability2Name = (hability) => {
    if (!hability) {
        return "no tiene"
    } else
        return hability.name
}



const rendercard = (pokemon, habilidad, habilidad2) => {

    const weakness = weaknessSearch(pokemon.types[0].type.name);
    conteinerCard.classList.replace(conteinerCard.className, fondoSearch(pokemon.types[0].type.name))
    conteinerCard.innerHTML = `
    <div class="card">
    <div class="pokemon-name-hp">
        <h2 class="name-pokemon">${(pokemon.forms[0].name).toUpperCase()}</h2>
        <div class="pokemon-type">
            <h2 class="hp-pokemon">HP ${(pokemon.height * 7)}</h2>
            <img src="./img/${typeSearch(pokemon.types[0].type.name)}" alt="" class="icon-type">
        </div>
    </div>
    <div class="img-pokemon-container">
        <img src="${imageViewer(pokemon.sprites.other.dream_world.front_default)}" alt="" class="img-pokemon">
    </div>
    <div class="pokemon-description">
        <span class="description-first">${(pokemon.types[0].type.name).toUpperCase()} Pokemon</span>
        <span class="power-description"> XP: ${pokemon.base_experience} , Weight: ${pokemon.weight}</span>
    </div>
    <div class="one-ability">
        <span class="name-ability">${pokemon.abilities[0].ability.name}:</span>
        <span class="description-ability">${habilidad.effect_entries[1].effect}</span>
    </div>
    <div class="active-ability">
        <div class="consumo">
            <img src="./img/${typeSearch(pokemon.types[0].type.name)}" alt="" class="icon-type2">
            <img src="./img/${typeSearch(pokemon.types[0].type.name)}" alt="" class="icon-type2">
            <img src="./img/${typeSearch(pokemon.types[0].type.name)}" alt="" class="icon-type2">
        </div>
        <div class="ability-box">
            <span class="name-ability">${showmehability2Name(habilidad2)}:</span>
            <span class="description-ability">${showmehability2(habilidad2)}</span>
        </div>

    </div>
    <div class="strong-tittle">
        <span>Weakness</span>
        <span>Resistance</span>
        <span>Retreat cost</span>
    </div>
    <div class="strong">
        <img src="./img/${weakness[0]}" alt="" class="icon-type2">
        <img src="./img/${weakness[1]}" alt="" class="icon-type2">
        <img src="./img/${weakness[2]}" alt="" class="icon-type2">
    </div>

    <div class="capacity">
        <p>Spits fire that\nis hot enough to\nmelt boulders.\fKnown to cause\nforest fires\nunintentionally</p>
    </div>


</div>
</div> `
    inputSearch.value = '';
}
const renderSinpoke = () => {
    conteinerCard.innerHTML = `
    
    <div class="sinpokemon">
            <h1>No existe el pokemon</h1>
            <img src="./img/sinpoke.png" alt="">
        </div>

    `
}


const searchPokemon = async e => {

    e.preventDefault();

    const idPokemon = inputSearch.value.trim();
    if (isNaN(idPokemon)) {
        alert('Debe ingresar un numero')
        inputSearch.value = '';

        return
    }
    const fetchPokemon = await requestPoke(idPokemon);
    if (fetchPokemon) {
        const fetchAbility = await requestAbility(fetchPokemon.abilities[0].ability.url);

        if ((fetchPokemon.abilities.length) > 1) {
            const fetchAbility2 = await requestAbility2(fetchPokemon.abilities[1].ability.url);
            rendercard(fetchPokemon, fetchAbility, fetchAbility2);
        } else {
            const sinhabilidad = ''
            rendercard(fetchPokemon, fetchAbility, sinhabilidad);
        }

    } else {
        renderSinpoke()
        inputSearch.value = '';
    }

};








const init = () => {

    formSearch.addEventListener('submit', searchPokemon);





}

init();