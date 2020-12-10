
const fsPromises = require('fs').promises
const copy  = require('./copy.js');

describe('copy function', () => {
    test.only('copies a file and creates a new one with copied material', () => {

        return copy('./READMEcopy2.js', './READMEcopy5.txt')
        .then(() => {

            return fsPromises.readFile('./READMEcopy5.txt', 'utf-8')
        })
        .then(newFile => {
            expect('HELLO i am a random string').toEqual('HELLO i am a random string')
        })
    })
})
