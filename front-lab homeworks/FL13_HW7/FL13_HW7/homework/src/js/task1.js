let loginAnsw = String(prompt('Input your login', ''));
let userPasswod = String(prompt('Input your password'))
let userName = 'User';
let adminName = 'Admin';
let correctUserPass = 'UserPass';
let correctAdminPass = 'RootPass';
let currentHours = new Date().getHours();
const MAGIC_NUM = 4;
const HOUR = 20;
if (loginAnsw === '' || userPasswod === '') {
    alert('Canceled');
} else if (loginAnsw.length < MAGIC_NUM) {
    alert('I don\'t know any users having name length less than 4 symbols')
}
if (loginAnsw === userName || loginAnsw === adminName) {
    userPasswod;
} else {
    alert('I don\'t know you');
}
if (userPasswod === correctUserPass && currentHours < HOUR ) {
    alert('Good day, dear User!');
} else if (userPasswod === correctUserPass && currentHours >= HOUR) {
    alert('Good evening, dear User!');
}
if (userPasswod === correctAdminPass && currentHours < HOUR) {
    alert('Good day, dear Admin!');
} else if (userPasswod === correctAdminPass && currentHours >= HOUR) {
    alert('Good evening, dear Admin!');
} else {
    alert('Wrong password!');
}