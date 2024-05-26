const { expect } = require('chai');
const { getname } = require('../helloworld');

describe('helloworld.js', function() {
    describe('getname', function() {
        it('should return "Hello Matias" when the name is Matias', function() {
            const firstName = "Matias";
            const result = getname(firstName);
            expect(result).to.equal("Hello Matias");
        });

        it('should return "Hello [name]" for any provided name', function() {
            const firstName = "Alice";
            const result = getname(firstName);
            expect(result).to.equal("Hello Alice");
        });
    });
});