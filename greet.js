function greet(name) {
	if (typeof name === "string" && name !== "")
		return "Hello, " + name.replace(/[,.]/g,'').trim();
	return "Argument must be a string and not empty.";
}
console.log(greet("hello, ..world"));
