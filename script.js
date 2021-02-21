mailru.loader.require('api', function () {
    mailru.connect.init('783362', '7220a61182dfa95a75746551733ed1f1');
});

let authButton = document.getElementById('auth');
let deAuthButton = document.getElementById('deAuth');

authButton.onclick = login;
deAuthButton.onclick = leave;

function login() {
    mailru.events.listen(mailru.connect.events.login, function (session) {
        // эта функция будет вызвана при логине
        console.log('session stuff', session.ext_perm);
        mailru.connect.getLoginStatus(function (session) {
            console.log('is auth', session.ext_perm);
        });
        if (mailru.session) {
            mailru.common.users.getInfo(function (result) {
                console.log(result);
            });
        }

    });
    mailru.connect.login(['widget', 'photos']);
}

function leave() {
    mailru.connect.logout();
}

console.log('version 0.6');