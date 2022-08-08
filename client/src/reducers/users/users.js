const getUsers = async () => {
    const response = await fetch('/login', {
        method: 'GET'
    });
    return response.json();
};

const checkUser = async (username, password) => {
    const response = await fetch('/login/auth/'+username +"/"+ password, {
        method: 'GET'
    });
    return response.json();
};

const checkUsernameTaken = async (username) => {
    const response = await fetch('/login/auth/'+username, {
        method: 'GET'
    });
    return response.json();
};

const loginUser = async (userName, password) => {

    const response = await fetch('/login', {
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
    const response = await fetch('/friends/'+username, {
      method: 'GET'
    });
    return response.json();
};

const addFriend = async (user, newFriend) => {
    const response = await fetch('/friends', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([user, newFriend])
    });

    if (response.status == 404) {
        return {message:"User cannot be found :("}
    } else if (response.status == 405){
        return {message:"User is already your friend :)"}
    }else {
        return {message:"Friend added!"}
    }
};

const removeFriend = async (user, exitFriend) => {
    const response = await fetch('/friends/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([user, exitFriend])
    });

    if (response.status == 404) {
        return {message:"User cannot be found :("}
    } else if (response.status == 405){
        return {message:"You are not friends with that user"}
    }else {
        return {message:"Friend removed!"}
    }
};

export default {
    getUsers,
    checkUser,
    checkUsernameTaken,
    loginUser,
    getFriends, 
    addFriend,
    removeFriend
};