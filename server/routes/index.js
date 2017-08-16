var express = require('express');
var mockjs=require('mockjs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

var makeIssue=funtion(){
	var date=new Date();
	var first_issue_date=new Date();
	first_issue_date.setHours(9);
	first_issue_date.setMinutes(10);
	first_issue_date.setSeconds(0);
	var last_issue_date=new Date(first_issue_date.getTime()+77*10*60*1000);

	var cur_issue,end_time,state;
	if(date.getTime()-first_issue_date.getTime()>0&&last_issue_date.getTime()-date.getTime()>0){
		// 正常销售
		var cur_issue_date=new Date();
		cur_issue_date.setHours(9);
		cur_issue_date.setMinutes(0);
		cur_issue_date.setSeconds(0);

		var minus_time=date.getTime()-cur_issue_date.getTime();
		var h=Math.ceil(minus_time/1000/60/10);
		var end_date=new Date(cur_issue_date.getTime()+1000*60*10*h);
		end_time=end_date.getTime;
		cur_issue=[end_date.getFullYear(),('0'+(end_date.getMonth()+1)).slice(-2),('0'+end_date.getDate()).slice(-2),(0+h).slice(-2)].join('')
	}else{
		end_time=first_issue_date.getDate();
		cur_issue=[first_issue_date.getFullYear(),('0'+(first_issue_date.getMonth()+1)).slice(-2),('0'+first_issue_date.getDate()).slice(-2),'01'].join('')
	}

	var cur_date=new Date();
	if(end_time-cur_date.getTime()>1000*60*2){
		state='正在销售';
	}else{
		state='开奖中';
	}


	return {
		issue:cur_issue,
		state:state,
		end_time:end_time
	}
} 

module.exports = router;
