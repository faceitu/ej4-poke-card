const requestPoke = async pokemon => {

    const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
    const query = `${pokemon}`;
    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;
};

const requestAbility = async a => {
    const baseURL = a;
    const response = await fetch(baseURL);
    const ab = await response.json();
    return ab;
};

const requestAbility2 = async a2 => {
    const baseURL = a2;
    const response = await fetch(baseURL);
    const ab2 = await response.json();
    return ab2;
};