describe('isFromBellville()', function () {
	it('should return "true" when called with "CY 123"', function () {
		assert.equal(isFromBellville('CY 123'), true);
	});

	it('should return "false" when called with "CJ 123"', function () {
		assert.equal(isFromBellville('CJ 123'), false);
	});

});
