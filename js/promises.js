let getDataLastCommit = (user) => {
    let url = `https://api.github.com/users/${user}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${GITHUB_API_TOKEN}`}})
        .then(res => res.json())
        .then(data => data.filter(event => event.type === "PushEvent"))
        .then(event => event[0].created_at)
        .catch(err => console.log(err));
}

console.log(getDataLastCommit('liliwang1'));

// use DOM events to display on page
document.getElementById('btn').addEventListener('click',
    (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    getDataLastCommit('username')
        .then(date => {
            document.getElementById('output').innerText = date;
        })
})


fetch('https://api.github.com/users', {
    headers: {
        'Authorization': `token ${GITHUB_API_TOKEN}`
    }
}).then(response => response.json())
    .then(users => {
    users.forEach( userObj => {
        lastCommit(userObj);
        console.log(userObj);
    })})
    .catch(error => console.error(error));

function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events/public`)
        .then(res => res.json())
        .then(data => data)
    // let newPromise = new Promise((resolve, reject) => {
    //    resolve(user.login);
    // });
    // newPromise.then((res) => console.log(res));
}



function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
        }, num)
    })
}

wait(1000).then((mesg) => console.log('You\'ll see this after 1 second' + mesg));
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

let randomNum = Math.floor(Math.random() * 8000);
wait1(randomNum).then((mesg) => console.log(mesg));