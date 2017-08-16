{
	let readOnly=function(target,name,descriptor){
		descriptor.writable=false;
		return descriptor;
	}

	class Test{
		@readOnly
		time(){
			return '2017-03-11'
		}
	}
	let test=new Test()
	// test.time=function(){
	// 	console.log('reset')
	// };
	console.log(test.time())
}

{
	let typename=function(target,name,descriptor){
		target.myname='hello'
	}
	@typename
	class Test{
	}
	console.log(Test.myname)
}
{
	let log=(type)=>{
		return function(target,name,descriptor){
			let src_method=descriptor.value;
			descriptor.value=(...arg)=>{
				src_method.apply(target,arg);
				console.log(`log ${type}`)
			}
		}
	}
	class AD{
		@log('show')
		show(){
			console.log('ad is show')
		}
		@log('click')
		click(){
			console.log('ad is click')
		}
	}
	let ad=new AD();
	ad.show();
	ad.click();
}