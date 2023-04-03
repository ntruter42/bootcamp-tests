describe('countRegNumber', function () {
	it('should return "3" when called with "CA 182736,CY 523519,CJ 812328"', function () {
		assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
	});

	it('should return "1" when called with "CA 182736"', function () {
		assert.equal(countRegNumber('CA 182736'), 1);
	});

	it('should return "3" when called with "    CA 182.736,CY 523519    ,CJ    81 23 28"', function () {
		assert.equal(countRegNumber('    CA 182.736,CY 523519    ,CJ    81 23 28'), 3);
	});

	it('should return "2" when called with "CA182736, 5555-555-555"', function () {
		assert.equal(countRegNumber('CA182736, 5555-555-555'), 2);
	});
});
