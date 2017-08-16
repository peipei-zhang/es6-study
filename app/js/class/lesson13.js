{
	//异步 回调
	let ajax=function(cb){
		console.log('on')
		setTimeout(function(){
			cb&&cb.call()
		},1000)  
	};
	ajax(function(){
		console.log("timeout1");
	});
}
{
	let ajax=function(){
		console.log('on again');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000)
		})
	};
	ajax()
	.then(function(){
		console.log('promise','timeout2')
	})
}
{
	let ajax=function(){
		console.log('on again again');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000)
		})
	};
	ajax()
	.then(function(){
		console.log("1")
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},2000)
		})
	})
	.then(function(){
		console.log("2")
	})
}
{
	let ajax=function(num){
		console.log('again')
		return new Promise(function(resolve,reject){
			if(num>5){
				resolve()
			}else{
				throw new Error('出错了惹')
			}
		})
	}	
	ajax(6)
	.then(function(){
		console.log('log',6)
	})
	.catch(function(err){
		console.log('catch',err)
	})

	ajax(3)
	.then(function(){
		console.log('log',3)
	})
	.catch(function(err){
		console.log('catch',err)
	})
}

{
	//所有图片加载完再添加到页面
	function loadImg(src){
		return new Promise((resolve,reeject)=>{
			let img=document.createElement('img');
			img.src=src;
			img.onload=function(){
				resolve(img);
			}
			img.onerror=function(err){
				reject(err);
			}
		})
	}
	function showImg(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img)
		})
	}
	// Promise.all([
	// 	loadImg("https://img3.doubanio.com\/spic\/s1747553.jpg"),
	// 	loadImg('http://i4.piimg.com/597032/e3e0515c37f99948.jpg'),
	// 	loadImg('https://img3.doubanio.com\/spic\/s1747553.jpg')
	// 	]).then(showImg)
}
{   
	//一个图片加载完就
	function loadImg(src){
		return new Promise((resolve,reeject)=>{
			let img=document.createElement('img');
			img.src=src;
			img.onload=function(){
				resolve(img);
			}
			img.onerror=function(err){
				reject(err);
			}
		})
	}
	function showImgs(img){
		let p=document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}
	Promise.race([
		loadImg('http://i4.piimg.com/597032/e3e0515c37f99948.jpg'),
		loadImg("https://img3.doubanio.com\/spic\/s1747553.jpg"),
		loadImg('https://img3.doubanio.com\/spic\/s174755.jpg')
		]).then(showImgs)
}