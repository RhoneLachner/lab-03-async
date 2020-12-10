const { default: fetch } = require('node-fetch');
// const mockApiResponse = require('./mockApiResponse.json');
const { getCharacter, getManyCharacters } = require('./rickandmorty.js');


// jest.mock('node-fetch');

describe('getCharacter fn', () => {
  it('fetches single character using its id', async () => {

    // fetch.mockResolvedValue({
    //   json: () => Promise.resolve(mockApiResponse)
    // })
      const result = await getCharacter(1);

      expect(result).toEqual({  name: 'Rick Sanchez', status: 'Alive', species: 'Human' })


  });
})


describe('Rick and Morty API fetching', () => {
  it('fetches several characters from the api', async() => {
      // fetch.mockResolvedValue({
      //   json: () => Promise.resolve(mockApiResponse)
      // });
      const characters = await getManyCharacters([1, 2, 5]);
  
      expect(characters).toEqual([
        { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
        { name: 'Morty Smith', species: 'Human', status: 'Alive' },
        { name: 'Jerry Smith', species: 'Human', status: 'Alive' }
        
      ]);
    });
  });
