let str = String(prompt('Input string', ''));
const magicNum = 2;
let len;
let pos;
if (str === '') {
    alert('Invalid input')
} else if (str.length % magicNum === 0) {
    pos = str.length / magicNum - 1;
    len = magicNum;
} else {
    pos = (str.length - 1) / magicNum;
    len = 1;
}
alert(str.substring(pos, pos + len));