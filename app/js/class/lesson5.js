{
	console.log(0b010100011);
	console.log(0o754);
}
{
	console.log('15',Number.isFinite(15))
	console.log('NaN',Number.isFinite(NaN))
	console.log('1/0',Number.isFinite(1/0))
}
{
	console.log(Number.isInteger(25/5));
	console.log("25.0",Number.isInteger(25.0));
	console.log("25.1",Number.isInteger(25.1))
}
{
	console.log('4.1',Math.trunc(4.1))
	console.log('4.9',Math.trunc(4.9))
}
{
	console.log("-5",Math.sign(-5))
	console.log("0",Math.sign(0))
	console.log("5",Math.sign(5))
}
{
   console.log("-8",Math.cbrt(-8))
}