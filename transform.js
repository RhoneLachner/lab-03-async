const fs = require('fs').promises;

const transform = (src) => {
    const readResult = fs.readFile(src, 'utf-8')
    return readResult
    .then(noCaps => 
        noCaps.replace(/[^a-z\s]/g, '')
    )
    .then(allCaps => 
        allCaps.toUpperCase()
        )
        .then(booger => 
            booger.split('').reverse().join('')          
            )
     
}

transform(`${__dirname}/READMEcopy.txt`)

module.exports = {
    transform,
    
}
