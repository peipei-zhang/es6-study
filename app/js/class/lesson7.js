{
	function test(x,y="world"){
		console.log("默认值",x,y)

	}
	test("hello")
}
//作用域
{
	let x="test";
	function test1(x,y=x){
	   console.log("作用域",x,y);
	}

	test1("lee");//lee lee  注意作用域
}

{
	function test2(a,...args){
		console.log(a)
        for(let v of args){
        	console.log(v)
        }
	}
	test2(1,2,3,4,"a")
}
{
	console.log(...[1,2,4])
}
{
	let arrow=v => v*2;
	console.log(arrow(5));
	let arrow2=()=>5;
	console.log(arrow2())
	let arrow3=(x)=>{
       console.log(x);
	}
	arrow3(3)
}
//伪调用
{
	function tail(x){
		console.log(x)
	}
	//函数的最后一步调用函数
	function fx(x){
		return tail(x)
	}
	fx("abc")
}