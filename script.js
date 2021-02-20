var check = null;

let button = document.getElementById('button');

var user_list = [];

button.onclick = function data(){
    mailru.loader.require('api', function(){
        mailru.connect.init('783362', '7220a61182dfa95a75746551733ed1f1');
        mailru.common.users.getInfo(function(user_list) {
            alert(user_list[0].first_name); // выведет имя пользователя с uid 123
          }, '2363859530532777729');
    });
};



console.log('version 0.4');

