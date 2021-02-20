let button = document.getElementById('auth');

button.onclick = login;

function login(){
    mailru.connect.login();
  
}
    mailru.loader.require('api', function(){
        mailru.connect.init('783362', '7220a61182dfa95a75746551733ed1f1');
        // mailru.common.users.getInfo(function(result) {
        //     console.log(result);
        //   });
    });

    mailru.events.listen(mailru.connect.events.login, function(session) {
        // эта функция будет вызвана при логине
        console.log(session.ext_perm); // показывает привилегии залогиненного пользователя
      });
      mailru.connect.login(['widget', 'photos']);



console.log('version 0.6');

