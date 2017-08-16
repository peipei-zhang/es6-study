{
	let arr=Array.of(3,'zhang',7,3,4)
	console.log("arr",arr)
}
{
	let p=document.querySelectorAll('p');
	console.log(p)
	let pArr=Array.from(p)
	console.log(pArr)
	p.forEach(function(item){
		console.log(item.textContent)
	})
	console.log(Array.from([1,2,3],function(item){return item*2}))
}
{
	console.log("fill,pos",["a","b","c"].fill(4,0,1))
}
{
	for(let index of ['1',"2",'3'].keys()){
		console.log(index)
	}
	for(let [index,val] of ['1',"2",'3'].entries()){
		console.log("index",index)
		console.log("val",val)
	}
}
{
	console.log([1,2,3,4,5].copyWithin(0,3,4))
}
{
	console.log([1,2,3,4,5,6].find(function(item){
		return item>3
	}))
}
{
	console.log([1,2,NaN].includes(1));
	console.log([1,2,NaN].includes(NaN));
}