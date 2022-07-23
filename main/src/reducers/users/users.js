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
<<<<<<< HEAD
    const response = await fetch('http://localhost:3001/friends', {
=======
    const response = await fetch('http://localhost:3001/friends/add', {
>>>>>>> Trying to get my stuff working :(
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([user, newFriend])
    });

<<<<<<< HEAD
    if (response.status == 404) {
        return {message:"User cannot be found :("}
    } else if (response.status == 405){
        return {message:"User is already your friend :)"}
    }else {
        return {message:"Friend added!"}
    }
=======
    const data = await response.text();
    console.log(data)
    if (!response.ok) {
        const tempVar = {message:"Not working"}
        return tempVar
    }
    console.log(data)
    return {data};
>>>>>>> Trying to get my stuff working :(
};

export default {
    getUsers,
    checkUser,
    checkUsernameTaken,
    loginUser,
    getFriends, 
    addFriend
};