// fetch-dev-posts.js

async function fetchDevtoPosts() {
  const username = 'vctrsmelo';
  const apiUrl = `https://dev.to/api/articles?username=${username}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const posts = await response.json();
    return posts.slice(0, 5); // Get the first 5 posts
  } catch (error) {
    console.error('Error fetching DEV.to posts:', error);
    return [];
  }
}

// Example of how to use it
// fetchDevtoPosts().then(posts => {
//   console.log('Fetched posts:', posts);
//   // Now you can manipulate the DOM to display these posts
// });