describe('fromWhere', function () {
	it('should return "Bellville" when called with "CY 567489"', function () {
		assert.equal(fromWhere('CY 567489'), 'Bellville'); 
	});

	it('should return "Paarl" when called with "CJ 343502"', function () {
		assert.equal(fromWhere('CJ 343502'), 'Paarl');
	});

	it('should return "Cape Town" when called with "CA 987504"', function () {
		assert.equal(fromWhere('CA 987504'), 'Cape Town');
	});

	it('should return "Some other place!" when called with "ZN 568593"', function () {
		assert.equal(fromWhere('ZN 568593'), 'Some other place!');
	});
});
