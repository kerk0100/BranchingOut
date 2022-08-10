# Project Progress <br />
## Project Description <br />

Our project is a web application for the coffee enthusiasts of Vancouver. It provides a platform for people to discuss, review and recommend coffee shops and to keep tabs on the places their friends review. <br />

## Project Task Requirement

Minimal requirements: <br />
* Ability to add friends [YES]<br />
* Ability to post reviews [YES]<br />
* Ability to view other friends’ reviews (on the feed)[YES] <br />
* User has the ability to log into/create an account [YES]<br />
* Ability to view a map of Vancouver with all coffee shops [YES]<br />

Standard requirements: <br />
* Find cafes within a certain radius of an inputted location (on the map)<br />
* Ability to edit review after it’s been posted (on your profile) [YES] <br />
* Users can upload pictures (part of the review) [YES]<br />
* Ability to see the history of all the reviews you’ve written (on your profile) [YES]<br />

Stretch requirements: <br />
* Machine learning to analyze reviews [NO]<br />
* Integration with third-party apps/social media [NO]<br />
* Add friends to the review → tagging friends [NO]<br /> <br />

## How tech from Units 1-5 are used in the project:

* Consistent styling with CSS is used throughout the project. We used plain CSS to style everything in the project. We used HTML and JSX within our React components.(Unit 1)<br />
* Our project is split into many different functional components and both React and Redux states are used throughout the application to manage state. For example, we use Redux to keep track of information regarding the currently logged in user and React state to manage visibility of components (such as reviews) based on the permissions of the user (for example, the edit/delete buttons on a review are only rendered on the frontend if the current user is also the author of the review) (Unit 2)<br />
* We use Express and routing in order to issue REST commands such as GET/POST/etc.. to read, update, and delete data accordingly. When rendering the main feed, we use a GET request with parameters to filter the returned content based on the user. Users can also create reviews, which uses POST to store the review and the accompanying image in the MongoDB backend.  This allows us to keep the frontend and the backend as seperate functional components. (Unit 3)<br />
* We store all our data in a persisting MongoDB database, using different collections for storing Cafe information, Review data, Review images, and User information. Each of these collections store data used throughout the project and are retrieved, updated, or deleted based on user actions on the frontend. We used the mongoose package to manage our data models and the schemas used throughout the code, allowing us to have consistently formatted data in our database. We also took advantage of the MongoDB operations $set and $filter to tailor the information returned from our database (for example, we filtered reviews such that only those written by a user's friends are returned) (Unit 4)<br />
* We have deployed our project with Heroku, and it can be accessed [here](coffee-brewsters-app.herokuapp.com). We changed the project structure such that our backend/server code is now in the root of our project and all of our frontend code is in a folder that serves up static files upon build. This allows up to have the backend and the frontend code in the same repo without the need to break up and deploy the backend and the frontend on two different instances. (Unit 5)<br /><br />

## Above and Beyond

* Our group had never worked with web development technologies before, so the teachings in this course were completely new to us. For this reason, we made the decision to manually style our project using CSS, as we felt that it would better build up our foundation if compared to using a styling library or framework. It was a challenge at times, but our team collectively agreed that this choice gave us a deeper understanding and appreciation of the work that goes into styling a front end. Furthermore, we made use of OpenStreetMap to enhance the usability of our product, as it allows users to interact with our data in a more visual manner. We also experimented with different types of data, allowing users to upload both text and image data when creating a review. Furthermore, we all took great care to put in extra time and detail when debugging and designing our application. We did this by creating lo-fi prototypes, having team brainstorming sessions, and frequent pair-programming sessions.  <br /> <br />

## Description of Next Steps

* To improve the app, we would add more functionality to the map component, and make the app more robust. There are a few UX issues that can be improved. For example, we choose a colour scheme that might not be ideal for someone with certain colour perception issues. We could implement a colour-blindness mode/button that would automatically convert the colour styling of the app. Furthermore, the way that the user posts a review could be moved to a different page, perhaps as a popup on the main feed page as this would increase the findability of our app. Also, the map needs to respond to where the user is located to provide a better experience of discovering local cafes. <br /> <br />

## List of contributions

**Amy:** Implemented the login component. Implemented user authentication and profile page, as well as the ability to create a new account. Worked to allow users to add personal photos to their reviews.
<br />
<br />

**Ben:** Implemented the friends component. Users can add friends to their account to view their reviews. Also created templates that were used throughout the project, for example, the list framework. Worked to deploy our app on Heroku.
<br />
<br />

**Olivia:** Did styling for the app. Worked on the feed and review components. Gave users the ability to add, edit and delete reviews. 
<br />
<br />

**Lauren:** Worked on the map component. Worked with cafe data from Vancouver. Added reviews to the map for each specific cafe. 




