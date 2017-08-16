{
	let list=new Set();
	list.add(5);
	list.add(7);
	console.log(list,list.size)
}
{
	//默认值
	let arr=[1,2,3,4,5];
	let list=new Set(arr);
	console.log(list,list.size)
}
{
	let list=new Set();
	list.add(1)
	list.add(2)
	list.add(1)
	console.log(list);

	let arr=[1,2,3,1,1,3,4];
	let list2=new Set(arr);
	console.log('list2',list2)
}
{
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);
	console.log('has',list.has('add'));
	console.log('delete',list.delete('add'),list);
	list.clear()//清空
	console.log(list)
}
{
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);
	//遍历
	for(let val of list){
		console.log(val)
	}//keys values
	list.forEach(function(item){
		console.log(item)
	})
}
{
	let weakList=new WeakSet();
	let arg={a:1};
	weakList.add(arg);
	console.log(weakList);
}
//map
{
	let map=new Map();
	let arr=['123'];
	map.set(arr,456)
	console.log('map',map,map.get(arr))
}
{
	let map=new Map([['a',123],['b',456]]);
	console.log('default',map);
	console.log(map.size);
	console.log('delete',map.delete('a'),map)
	console.log('clear',map.clear(),map)
}
{
	let weakMap=new WeakMap();
	let o={};
	weakMap.set(o,123);	
	console.log(weakMap)
}

{
	// map
	// 数据结构横向对比说
	let map=new Map();
	let array=[];
	//增
	map.set("t",1);
	array.push({t:1});
    //查
    let map_exist=map.has('t');
    let array_exist=array.find((item)=>item.t)
    console.log(map_exist,array_exist)
    //改
    map.set('t',2);
    array.forEach((item)=>item.t?item.t=2:"");
    console.log(map,array);
    //删
    map.delete('t');
    let Index=array.findIndex(item=>item.t);
    array.splice(Index,1)
    console.log(map,array);
}
{
	//set

}
{
	//obj
    let obj={};
    obj['t']=1;
    console.log(obj);
    console.log('t' in obj);
    delete obj['t'];
    console.log(obj);
}