const fetch = require('node-fetch');

// const getQuote = () => {

// fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
// .then(res => res.json())
// .then(json => console.log(json))
// };
// getQuote()

const getCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {return res.json()})
    .then(({ name, species, status }) => ({ name: name, species: species, status: status }))
    // .then(result => console.log(result))
    };
    // getCharacter(1)
   
    const getManyCharacters = (ids) => {
        return Promise.all(ids.map(id => getCharacter(id)));
    };

 getManyCharacters([1, 2, 5])


module.exports = {
    getCharacter,
    getManyCharacters
  };
