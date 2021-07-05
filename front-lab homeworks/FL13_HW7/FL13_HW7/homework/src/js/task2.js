let userStart;
let userNum;
let userConfirm;
let totalPrize = 0;
let maxPrize = 100;

let finishNum = 5;
let random = Math.floor(Math.random() * finishNum + 1);

userStart = confirm('Do you want to play a game?')
if (userStart === false) {
    alert('You did not become a billionaire, but can.')
} else {
    random;
    game(userNum);
}


function game(userNum) {


    for (let i = 3; i > 0;) {
        userNum = Number(prompt('Choose a roulette pocket number from 0 to 5' +
            '\n Attempts left:' + i + '\n Total prize:' + totalPrize + '$' +
            '\n Possible prize on current attempt:' + maxPrize + '$', ''));

        if (userNum === random) {
            userConfirm = confirm('Congratulation, you won!' + '\n' +
                '   Your prize is:' + maxPrize + '$.' + '\n' + 'Do you want to continue?', '')
            if (userConfirm === false) {
                totalPrize = totalPrize + maxPrize;
                alert('Thank you for your participation.' + '\n Your prize is:' + totalPrize + '$')
                userConfirm = confirm('Do you want to play again?')
                if (userConfirm === true) {
                    maxPrize = maxPrize * 2;
                    finishNum = finishNum * 2;
                    random = Math.floor(Math.random() * finishNum + 1);
                    random;

                } else {
                    alert('You did not become a billionaire, but can.')
                }

            }

        }
        if (userNum !== random) {
            i--;
            maxPrize = maxPrize / 2;


        } else if (i > 0) {
            while (userNum !== random && i > 0 && i <= 3) {
                userNum = Number(prompt('Choose a roulette pocket number from 0 to ' + finishNum +
                    '\n Attempts left:' + i + '\n Total prize:' + totalPrize + '$' +
                    '\n Possible prize on current attempt:' + maxPrize / 2 + '$', ''));
                game(userNum);

            }
        }

    }
}