const conteinerCard = document.querySelector('.card-container');
const inputSearch = document.querySelector('.input-search');
const formSearch = document.getElementById('form-search');



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
            return ['tipo-fight.png', 'tipo-posion.png', 'tipo-normal.png']
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
    }
}


const rendercard = (pokemon, habilidad, habilidad2) => {
    console.log(pokemon.id)

    const weakness = weaknessSearch(pokemon.types[0].type.name);
    console.log(weakness)
    conteinerCard.classList.replace(conteinerCard.className, fondoSearch(pokemon.types[0].type.name))
    conteinerCard.innerHTML = `
    
    <div class="card">
    <div class="pokemon-name-hp">
        <h2 class="name-pokemon">${pokemon.forms[0].name}</h2>
        <div class="pokemon-type">
            <h2 class="hp-pokemon">HP ${(pokemon.height * 7)}</h2>
            <img src="./img/${typeSearch(pokemon.types[0].type.name)}" alt="" class="icon-type">
        </div>
    </div>
    <div class="img-pokemon-container">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="" class="img-pokemon">
    </div>
    <div class="pokemon-description">
        <span class="description-first">${pokemon.types[0].type.name} Pokemon</span>
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
            <span class="name-ability">${pokemon.abilities[1].ability.name}:</span>
            <span class="description-ability">${habilidad2.effect_entries[1].effect}</span>
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
}



const searchPokemon = async e => {

    e.preventDefault();
    const idPokemon = inputSearch.value.trim();
    const fetchPokemon = await requestPoke(idPokemon);
    const fetchAbility = await requestAbility(fetchPokemon.abilities[0].ability.url);
    const fetchAbility2 = await requestAbility2(fetchPokemon.abilities[1].ability.url);
    rendercard(fetchPokemon, fetchAbility, fetchAbility2);



}



const init = () => {
    formSearch.addEventListener('submit', searchPokemon);





}

init();