
export function getRandomThrow(num) {
    if (num === 1) {
        return 'rock';
    }
    else if (num === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function doesUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'win';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'loss';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'loss';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'loss';
    }
}