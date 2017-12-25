var express = require('express');
var app = express();
var port = 8080;

var cors = require('cors');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/*', function (req, res, next) {
  res.header("authentication", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDg0NzMzNzcsIm5hbWUiOiJ6aGFuZ3lvbmdfbmV3IiwidXNlcl9pZCI6MX0.1dc_hmifgwd0kDMdZXiPbO82wlbCwSHBj7dv07mz-xk");
  next();
})

//登录
app.post('/dashboard/usercentre/login',function(req, res){
  var result = {
      "code": 0,
      "detail": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDg0NzMzNzcsIm5hbWUiOiJ6aGFuZ3lvbmdfbmV3IiwidXNlcl9pZCI6MX0.1dc_hmifgwd0kDMdZXiPbO82wlbCwSHBj7dv07mz-xk"
  }
  res.json(result);
})

//登出
app.post('/dashboard/usercentre/logout',function(req, res){
  var result = {
    "code": 0,
    "detail": "logout success"
  }
  res.json(result);
})



//添加新用户
app.post('/dashboard/user/add',function(req, res){
  var result = {
    "code": 0,
    "detail": "ADD SUCCESS"
  };
  res.json(result);
});


//删除新用户
app.post('/dashboard/user/remove',function(req, res){
  var result = {
    "code": 0,
    "detail": "REMOVE SUCCESS"
  };
  res.json(result);
});



//锁定用户
app.post('/dashboard/user/lock',function(req, res){
  var result = {
    "Errcode": 0,
    "detail": "REMOVE SUCCESS"
  };
  res.json(result);
});


//解锁用户
app.post('/dashboard/user/unlock',function(req, res){
  var result = {
    "Errcode": 0,
    "detail": "REMOVE SUCCESS"
  };
  res.json(result);
});



//获取用户列表
app.get('/dashboard/user/list', function(req, res){
    var table01Data=[
        {
            "UserName": '18133446655',
            "NickName": 'test',
            "ObdMacAddr":'dizhidizh地址',
            "HomeAddr":'dizhidizh地址',
            "CompanyAddr":'dizhidizh地址',
            "SchoolAddr":'dizhidizh地址',
            "ActivateTime":'2017年09月01号 10:30am',
            "ActivateFlag":true,
            "DetectTimes" :45,
            "GoldCoins" :'',
            "Locked" :true,
            "Role" :0
        }
    ];
    for (var i = 0; i < 30; i++) {
       table01Data.push({
           "UserName": '18133446655',
           "NickName": '小赵',
           "ObdMacAddr":'dizhidizh地址',
           "HomeAddr":'dizhidizh地址',
           "CompanyAddr":'dizhidizh地址',
           "SchoolAddr":'dizhidizh地址',
           "ActivateTime":'2017年09月01号 10:30am',
           "ActivateFlag":true,
           "DetectTimes" :45,
           "GoldCoins" :'',
           "Locked" :false,
           "Role" :0
        });
    }
  var result = {
      "Errcode":   null,
      "Total":	30,
      "List": table01Data

  };
  res.json(result);
});



app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  var error = {
    errorCode: "500",
    errorMessage: "call api error"
  }
  res.status(500);
  res.json(error);
}

app.listen(port, function () {
  console.log('server start, listen on port ' + port);
});
