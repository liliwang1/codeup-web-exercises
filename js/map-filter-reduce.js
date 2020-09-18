"use strict";
{
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// Bonus
// Use .reduce to get the unique list of languages from the list of users.

    const threeLanguageUsers = users.filter(user => user.languages.length >= 3);
    const emailListArray = users.map(user => user.email);
    const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);

    const longestEmail = users.reduce((acc, user) => {
        if (acc <= user.email.length) acc = user.email.length;
        return acc;
    }, 0)
    const longestEmail1 = users.reduce((acc, user) => {
        return acc <= user.email.length ? user.email.length : acc;
    }, 0)
    const longestEmail2 = users.reduce((acc, user) => acc <= user.email.length ? user.email.length : acc, 0)
    const longestEmail3 = users.reduce((acc, {email}) => acc <= email.length ? email.length : acc, 0)

    const userList = users.reduce((acc, user) => {
        return acc + `${user.name}, `
    }, 'Your instructors are: ')
        .slice(0, -2)
        .concat('.');
    const userList1 = users.reduce((acc, user) => acc + `${user.name}, `, 'Your instructors are: ').slice(0, -2).concat('.');
    const userList2 = users.reduce((acc, {name}) => acc + `${name}, `, 'Your instructors are: ').slice(0, -2).concat('.');

    const languageArr = users.reduce((acc, user) => {
        return acc + `${user.languages.toString()},`;
    }, '')
        .slice(0, -1)
        .split(',')
        .reduce((acc, ele) => {
            if (!acc.includes(ele)) acc.push(ele);
            // if (acc.indexOf(ele) < 0) acc.push(ele);
            return acc;
        }, [])
        .join()

    //["clojure", "javascript", "java", "scala", "php", "javascript", "bash", "java", "php", "sql", "html", "css", "javascript", "php"]

    const languageArr1 = users.reduce((acc, { languages }) => {
        console.log(acc, languages);
        return acc.concat(languages);
    }, [])
        .flat(5)
        .reduce((acc, ele) => {
            if (!acc.includes(ele)) acc.push(ele);
            return acc;
        }, [])
        .join()

}