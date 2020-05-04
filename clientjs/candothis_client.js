var net = require('net')
const { PythonShell } = require('python-shell');

var client = new net.Socket();
const ip = '127.0.0.1';
client.connect(1337,ip,function(){
  console.log('connected to server');
});

client.on('data',function(result){
  console.log('in on data');
  console.log('recevie from server : '+result);
  PythonShell.run('../문서/recog.py', null, (err, results) => {
    if (err) throw err;
    console.log(`results: ${results}`);
    results = String(results)
    var date = new Date();
    date = String(date.getFullYear())+'-'+String(date.getMonth()+1)+'-'+String(date.getDate())+'-'+String(date.getHours())+'-'+String(date.getMinutes());
    results = results + ', '+date;
    client.write(results);
  });
});

client.on('end',function(){
  console.log('disconnected');
});
client.on('error',function(err){
  console.log(err);
});
client.on('timeout',function(){
  console.log('connection timeout');
});
