const amqp = require('amqplib/callback_api');

amqp
  .connect('amqp://rabbitmq:rabbitmq@localhost', function(err, conn) {
    if (err != null) bail(err);
    SendMsg(conn);
  });

  function SendMsg(conn){
    const channel = conn.createChannel();

    setInterval(function(){
        channel.sendToQueue('mensagens',new Buffer("Hello"));
    }, 1000);
};