const requestPoke = async pokemon => {
    try {
        const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
        const query = `${pokemon}`;
        const response = await fetch(baseURL + query);
        const data = await response.json();

        return data;
    } catch {


    }
};

const requesAll = async b => {
    const baseURL = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`;
    const response = await fetch(baseURL);
    const all = await response.json();
    return all
}

const requestAbility = async a => {
    const baseURL = a;
    const response = await fetch(baseURL);
    const ab = await response.json();
    return ab;
};

const requestAbility2 = async a2 => {
    try {
        const baseURL = a2;
        const response = await fetch(baseURL);
        const ab2 = await response.json();
        return ab2;
    } catch {
        alert('no tiene mas habilidades')
    }
};