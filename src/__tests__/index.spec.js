const describe = require('jest');
const expect = require('jest');



describe("Testing app in Node", () => {
    test("block of code is valid", () => {
        expect(2+4).toEqual(6);
    });
    
});