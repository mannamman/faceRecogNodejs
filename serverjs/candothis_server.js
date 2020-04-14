var net = require('net')
const { PythonShell } = require('python-shell');


var server = net.createServer(function(socket){
  console.log(socket.address().address+" connected.");
  socket.on('data',function(data){
    console.log("recevie from client : "+data);
    var option={
      mode : 'text',
      pythonPath : '',
      pythonOptions :['-u'],
      scriptPath : '',
      args : [data]
    };
    PythonShell.run('save_csv.py',option,(err,result)=>{
      if(err){
        throw err;
      };
    });
    socket.write('recevie success');
  });
  socket.on('close',function(){
    console.log('client disconnected');
  });
  socket.write('welcome to server')
});

server.on('error',function(err){
  console.log('error '+err);
});
server.listen(1337,function(){
  console.log('listening on 1337');
});
