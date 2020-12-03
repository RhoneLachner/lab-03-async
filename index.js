// const { mainModule } = require('process');

const fs = require('fs').promises;


// fs.readFile('./README.md', 'utf-8')
// .then(data => {
//     console.log(data);
// })

// fs.writeFile('./example.txt', 'hello i am a random string')
// console.log('file written')


// fs.readFile('./README.md', 'utf-8')
// .then(data => {
//     fs.writeFile('./READMEcopy2.txt', data)  
// })
// .then(() => console.log('DONE!'))


const copy = (src, dst) => {
    return fs.readFile(src, 'utf-8')
        .then(data => {
            fs.writeFile(dst, data)
        })
}
//TEST THIS FUNCTION USING NODE INDEX.JS
// copy('./README.md', 'thirdcopytest.txt')

mainModule.exports = copy;
