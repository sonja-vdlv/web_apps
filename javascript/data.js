import { User } from './entities/User.js'


const fetchData = () => {
    // new User 
    const dataRequestUrl = 'https://randomuser.me/api?results=15';

    $.get(dataRequestUrl, function (usersArray) {
        const myUsers = usersArray
    })
}

export {
    fetchData
}
