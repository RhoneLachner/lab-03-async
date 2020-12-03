const fs = require('fs').promises;
const { transform } = require ('./transform.js');


describe ('transform fn', () => {

    it('removes capital letters(and spaces), make remaining letters capital, and reverse string', () => {
    
         return transform(`${__dirname}/READMEcopy.txt`).then(
             transformedFile => {
                 expect(transformedFile).toEqual('\nGNIRTS MODNAR A MA I ')
             }
         )
    })
})


