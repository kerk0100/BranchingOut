const createReview = async (review) => {
    const response = await fetch('http://localhost:3001/mapReviews', {
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

const getReviews = async () => {
    const response = await fetch('http://localhost:3001/mapReviews', {
      method: 'GET'
    });
    let res = await response.json();
    return res;
  };

export default {
   createReview,
   getReviews
};