# Reign Test

## Description

The test is is as follows:

### CHALLENGE

Context: We would like you to build a small responsive web application to test your
knowledge of Front End Development and related technologies.

Please refer to the attached document for an understanding of what the finished app
should look like.

### STACK

You must use the following technologies to build the app:

- The latest version of the frameworks: React or Angular
- HTML/CSS only for building the UI components
- Deployment of the web app on Netlify from your Git repository using the New Site
  from Git workflow

### API

The web application must request data to the Hackers News public API. The dropdown
selector component should use the URL parameter “query” from the “search by date”
API in order to filter the posts, for example:

- Angular: https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0
- React: https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0
- Vuejs: https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0

The pagination should be implemented using the “page” URL parameter from this API.
The attributes to use for the post UI are author, story_title, story_url, created_at.
If any of these attributes are not present in the object response, the post should be
discarded from the data.

### FUNCTIONALITY

- The selected filter should persist on the local storage
- The favorited posts should persist on the local storage
- The web app is expected to work as a responsive web application
- If you decide to implement the pagination component, it should behave like this
  one: https://material-ui.com/components/pagination/
- When clicking on the row, a new tab should be open with the link of the post
  (story_url)
- Clicking on the “like button” should not trigger the opening of the post URL link
- When hovering on the row, apply opacity to the entire row and its children (texts,
  icons, like button, etc)
  BONUS
- Implement unit testing
- Good use of Typescript
- Pagination as infinite scroll

### WHAT WILL BE EVALUATED?

- Documentation
- Testing
- Clean code
- Software design
- Git history
- Solution deployed

## Solution

The project is made with Create React App, using Craco to override default settings, specifically the typescript alias configuration.
For routing, the app uses the react-router-dom version 6. With this, the app is using a main layout, which contains the common components, in this case, the header and navbar.
For the pages, I've created two of them, one for the news, and other for the favorites.

### News Page

The news page is the main page of the app, where the user can see the news. This page contains 2 main components, the filter component and the news container.
The filter select component is made with the use of the react-select component, simply because it allowed me to customize the content of the options and insert images in them. This component also tracks the current value of the filter.
The news container has every post component in a grid of two columns, and one for screens with max width of 768px, which it has these elements:

- Timestamp with author. For the timestamp I've used moment.js to format the date with `fromNow` and display it with the relative time.
- The title of the story. This two elements open a new tab with the story url.
- The favorite button, which toggles the state of the post.

Each page of the news is requested using Axios, and they are filtered to check if the post should be rendered in the UI.

### Favorites Page

The favorites page is the page where the user can see the favorites. This page only renders the user favorites posts, which is the same news container as the news page.

### Notes

#### Unit testing

This is the first time that I've used unit testing. I've had an idea of how to do them, but I've never really used them, so I studied unit and integration testing. I implemented a couple of them for the first time, but I wouldn't consider what is done here for the bonus, but I will certainly love to study more and integrate them in my projects with Test Driven Development.

#### Folder structure

I've tried to organize my projects better, so I'm constantly trying to keep them organized, I've seen boilerplates for projects like this, and taken inspiration from them, still would love to improve this.

#### Infinite scrolling

For the infinite scrolling, I had an idea on how to do it, but the implementation of it was followed from [this video](https://www.youtube.com/watch?v=NZKUirTtxcg)

#### Styling

I avoided using too much use of the sizes provided in the Zeplin project, because it had mainly pixel values, and it would be hard to scale them for different devices.

#### Posts

The posts sometimes had the same story id and story url but with different author, so when a duplicated post is favorited, the app will show the clicked one.

## Deployment

Read [README.CRA.md](README.CRA.md) for more information.
