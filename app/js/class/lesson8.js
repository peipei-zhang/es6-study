{
	let o=1;
	let k=2;
	let es5={
		o:o,
		k:k
	};
	// 简洁表达
	let es6={
		o,
		k
	}
	console.log(es5,es6);

	let es5_method={
		hello:function(){
			console.log('hello')
		}
	}

	let es6_method={
		hello(){
			console.log('hello')
		}
	}
	es5_method.hello();
	es6_method.hello();
}

{
	// 属性表达式   变量可做obj 的key
	let a='b';
	let es5_obj={
		a:"c"
	}
	let es6_obj={
		[a]:"c"
	}
	console.log(es5_obj,es6_obj)
}
{
	console.log(Object.is("abc","abc"));
	console.log(Object.is([1],[1]));

	let test={k:123,o:456}
	for(let [key,value] of Object.entries(test)){
	     console.log(key,value)
	}
}
// {
// 	let {a,b,...c}=[a:'test',b:'evan',c:'lee',d:'love']
// 	console.log(a,b.c)
// }