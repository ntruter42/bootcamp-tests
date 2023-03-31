describe('greet()', function () {
	it('should return "Hello, Nicholas" when called with "Nicholas"', function () {
		assert.equal("Hello, Nicholas", greet("Nicholas"));
	});

	it('should return "Hello, Malebo" when called with "Malebo"', function () {
		assert.equal("Hello, Malebo", greet("Malebo"));
	});

	it('should return "Hello, Mthunzi" when called with "Mthunzi"', function () {
		assert.equal("Hello, Mthunzi", greet("Mthunzi"));
	});

	it('should return "Hello, Katleho" when called with "Katleho"', function () {
		assert.equal("Hello, Katleho", greet("Katleho"));
	});
});
