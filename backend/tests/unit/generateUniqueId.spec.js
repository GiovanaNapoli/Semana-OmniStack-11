const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Generare Unique ID', () =>{
    it('should generate an unique ID', () =>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
})