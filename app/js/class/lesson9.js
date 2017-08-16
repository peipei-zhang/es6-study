{
   let a1=Symbol();	
   let a2=Symbol();//a1和a2永远不相等
   console.log(a1===a2);
   let a3=Symbol.for('a3');
   let a4=Symbol.for('a3')
   console.log(a3===a4)
}
{
	let a1=Symbol.for('abc');
	let obj={
		[a1]:'123',
		'abc':345,
		'c':456
	}
	console.log(obj)// [a1]  Symbol(abc):"123"

	for(let [key,val] of Object.entries(obj)){
		console.log(key,val)
	}//拿不到Symbol对应的值
	//=====>去Symbol作为key值的属性
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item])
	})
    Reflect.ownKeys(obj).forEach(function(item){
       console.log('own',item,obj[item])
    })
}