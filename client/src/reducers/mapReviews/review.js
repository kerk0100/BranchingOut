const createReview = async (review) => {
    const response = await fetch('/mapReviews', {
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
    const response = await fetch('/mapReviews', {
      method: 'GET'
    });

    let res = await response.json();
    return res;
  };

const getAddressReviews = async (address) => {
    const response = await fetch('/mapReviews/'+ address, {
        method: 'GET'
    });
    let res = await response.json();
    return res;
};

const getFilteredCafes = async (filter) => {
    console.log(filter)
    const response = await fetch('/mapReviews/' + filter.name, {
    method: 'GET'
    });

    let res = await response.json();
    return res;
};

export default {
   createReview,
   getReviews, 
   getAddressReviews,
   getFilteredCafes
};