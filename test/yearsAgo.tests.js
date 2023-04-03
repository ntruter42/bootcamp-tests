describe('yearsAgo', function () {
	it('should return "47" when called with "1976"', function () {
		assert.equal(yearsAgo('1976'), 47);
	});

	it('should return "23" when called with "2000"', function () {
		assert.equal(yearsAgo('2000'), 23);
	});
});
