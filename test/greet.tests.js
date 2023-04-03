describe('greet', function () {
	it('should return "Hello, Nicholas" when called with "Nicholas"', function () {
		assert.equal("Hello, Nicholas", greet("Nicholas"));
	});

	it('should return "Hello, Mthunzi." when called with "    Mthunzi."', function () {
		assert.equal("Hello, Mthunzi", greet("    Mthunzi."));
	});

	it('should return "Hello, Mal ebo" when called with "Mal, ..ebo,"', function () {
		assert.equal("Hello, Mal ebo", greet("Mal, ..ebo,"));
	});

	it('should return "Hello, " when called with ""', function () {
		assert.equal("Argument must be a string and not empty.", greet(""));
	});
});
