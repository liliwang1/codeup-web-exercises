function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function wait1(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 1000) resolve(`You\'ll see this after ${num / 1000} second`)
            else resolve(`You\'ll see this after ${num / 1000} seconds`);
        }, num)
    })
}

wait1(4000).then((mesg) => console.log(mesg));
wait1(600).then((mesg) => console.log(mesg));
// wait1(3000).then(() => console.log('You\'ll see this after 3 seconds'));