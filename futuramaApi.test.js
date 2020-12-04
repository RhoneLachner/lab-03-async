const fetch = require('node-fetch');
const mockResponse = require('./api-response.json');
const { getCharacters } = require('./futuramaApi.js');

jest.mock('node-fetch');


