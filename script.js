    mailru.loader.require('api', function(){
        mailru.connect.init('783362', '7220a61182dfa95a75746551733ed1f1');
        mailru.common.users.getInfo(function(result) {
            console.log(result);
          });
    });



console.log('version 0.5');

