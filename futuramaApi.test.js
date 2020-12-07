const fetch = require('node-fetch');
// const mockResponse = require('./api-response.json');
const { getManyCharacters } = require('./futuramaApi.js');


// jest.mock('node-fetch');

describe('getManyCharacters', () => {
    it.only('fetches several characters from the api', async() => {
    //   fetch.mockResolvedValue({
    //     json: () => Promise.resolve(mockResponse)
    //   });
      const characters = await getManyCharacters([1, 2, 5]);
  
      expect(characters).toEqual([
        { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
        { name: 'Morty Smith', species: 'Human', status: 'Alive' },
        { name: 'Jerry Smith', species: 'Human', status: 'Alive' }
        
      ]);
    });
  });
