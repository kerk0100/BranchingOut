const createReview = async (review) => {
    //console.log(review)
    const response = await fetch('http://localhost:3001/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getReviews = async (filter) => {
    const response = await fetch('http://localhost:3001/reviews', {
      method: 'GET', 
      body: JSON.stringify(filter)
    });
    let res = await response.json();
    return res;
  };

const getUserReviews = async (username) => {
    const response = await fetch('http://localhost:3001/reviews/'+ username, {
        method: 'GET'
    });
    let res = await response.json();
    return res;
};

const getReviewCount = async (username) => {
    const response = await fetch('http://localhost:3001/reviews/count/'+ username, {
        method: 'GET'
    });
    return response.json();
};


const deleteReview = async (id) => {
    const response = await fetch('http://localhost:3001/reviews/' + id, {
      method: 'DELETE'
    });
    let res = await response.json();
    return res;
  };


const uploadImageReview = async (image, id) => {
    //console.log(review)
    const response = await fetch('http://localhost:3001/reviews/image/' + id, {
        method: 'POST',
        body: image
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

  const putReview = async (review) => {
    console.log(review)
    const response = await fetch(('http://localhost:3001/reviews/' + review.id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    });
   let res = await response.json();
   return res;
  };



export default {
    createReview,
    getReviews,
    getReviewCount,
    deleteReview,
    getUserReviews,
    uploadImageReview,
    putReview
};