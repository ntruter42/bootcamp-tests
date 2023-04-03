describe('isFromBellville', function () {
	it('should return "true" when called with "CY 123000"', function () {
		assert.equal(isFromBellville('CY 123'), true);
	});

	it('should return "true" when called with "CJ 234JC  "', function () {
		assert.equal(isFromBellville('    CY 234JC  '), true);
	});

	it('should return "false" when called with "23 .CJ 123"', function () {
		assert.equal(isFromBellville('23 CJ 123'), false);
	});

	it('should return "false" when called with ""', function () {
		assert.equal(isFromBellville(''), false);
	});
});
