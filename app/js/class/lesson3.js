{
	 //es5写法
	let reg=new RegExp('xyz','i');
	let reg2=new RegExp(/xyz/i);

	let reg3=new RegExp(/xyz/ig,'i')
}
// y,g修饰符
{
	let s='bbb_bb_b';
	let a1=/b+/g;
	let a2=/b+/y;
	console.log('one',a1.exec(s),a2.exec(s))
	console.log('two',a1.exec(s),a2.exec(s))
	console.log(a1.sticky,a2.sticky)
}
{
	//unicode
	console.log('u1',/^\uD83D/.test('\uD83D\uDC2A'))
	console.log('u2',/^\uD83D/u.test('\uD83D\uDC2A'))

	console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true

}