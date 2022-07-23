const getUsers = async () => {
    const response = await fetch('http://localhost:3001/login', {
        method: 'GET'
    });
    return response.json();
};

const checkUser = async (username, password) => {
    const response = await fetch('http://localhost:3001/login/auth/'+username +"/"+ password, {
        method: 'GET'
    });
    return response.json();
};

const checkUsernameTaken = async (username) => {
    const response = await fetch('http://localhost:3001/login/auth/'+username, {
        method: 'GET'
    });
    return response.json();
};

const loginUser = async (userName, password) => {

    const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([userName, password])
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getFriends = async (username) => {
    const response = await fetch('http://localhost:3001/friends/'+username, {
      method: 'GET'
    });
    return response.json();
};

const addFriend = async (user, newFriend) => {
    const response = await fetch('http://localhost:3001/friends/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([user, newFriend])
    });

    const data = await response.text();
    console.log(data)
    if (!response.ok) {
        const tempVar = {message:"Not working"}
        return tempVar
    }
    console.log(data)
    return {data};
};

export default {
    getUsers,
    checkUser,
    checkUsernameTaken,
    loginUser,
    getFriends, 
    addFriend
};