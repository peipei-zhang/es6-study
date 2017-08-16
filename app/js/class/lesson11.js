{
	let obj={
		time:'2017-06-15',
		name:'evan',
		_r:123
	}
	console.log(obj)
	let monitor=new Proxy(obj,{
		 //拦截对象属性的读取
          get(target,key){
             return target[key].replace('2017','2018')
          },
          //拦截对象设置属性
          set(target,key,value){
          	if(key=='name'){
          		return target[key]=value
          	}else{
          		return target[key]
          	}
          },
          //拦截key in object
          has(target,key){
          	if(key==='name'){
          		return target[key];
          	}else{
          		return false;
          	}
          },
          deleteProperty(target,key){
               if(key.indexOf('_')>-1){
               	delete target[key];
               	return true;
               }else{
               	return target[key]
               }
          },
          //拦截object.keys/getOwnPropertySymbols/getOwnPropertyName
          ownKeys(target){
             return Object.keys(target).filter((item)=>item!='time')
          }
	});
	console.log(monitor);
	console.log(monitor.time);
	monitor.time='2018';
	console.log(monitor.time);
	monitor.name='lee';
	console.log(monitor);
	console.log('name' in monitor);
	console.log('time' in monitor);
	console.log(Object.keys(monitor));
}
{
	let obj={
		time:'2017-06-15',
		name:'evan',
		_r:123
	};
	console.log("R",Reflect.get(obj,'time'))
}
{
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va=this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy)
					}else{
						throw Error(`不能设置${key}为${value}`)
					}
				}else{
					throw Error(`${key}不存在`)
				}
			}
		})
	}

   //
	const personValidators={
		name(val){
			return typeof val==='string';
		},
		age(val){
			return typeof val==='number'&&val>18;
		}
	}
	class Person{
		constructor(name,age){
			this.name=name;
			this.age=age;
			return validator(this,personValidators)
		}
	}
	const person=new Person('evan',30);
	console.info(person);
}