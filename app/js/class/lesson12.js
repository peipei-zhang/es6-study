{
	//基本定义和实例
	class Parent{
		constructor(name='zhangpeipei'){
			this.name=name;
		}
	}
	let v_parent=new Parent('v')
	console.log(v_parent)

}

{
	class Parent{
		constructor(name='zhangpeipei'){
			this.name=name;
		}
	}
	class Child extends Parent{
		constructor(name='child'){
			super(name)
			this.type='child'
		}
	}
	console.log('jicheng',new Child('hello'))
}
{
	//getter setter
	class Parent{
		constructor(name='zhangpeipei'){
			this.name=name;
		}
		get longName(){
             return 'mk'+this.name
		}
		set longName(value){
			this.name=value
		}
	}
     let v=new Parent();
     console.log('getter',v.longName)
     v.longName='hello'
}
{
	// 静态方法
	class Parent{
		constructor(name='pero'){
			this.name=name
		}
		static tell(){
			console.log('tell')
		}
	}
	Parent.tell()
}
{
	//静态属性
	class Parent{
		constructor(name='pero'){
			this.name=name
		}
		static tell(){
			console.log('tell')
		}
	}
	Parent.type='test'
	console.log('静态属性',Parent.type)
}