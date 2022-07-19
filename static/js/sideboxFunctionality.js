//This gets the json data from an invisible element in the HTML, added in by flask.
data = document.getElementById("dataElement").innerHTML;
dataParsed = JSON.parse(data);

//Specifies the url, gets the amount of times it must loop and specifies the sidebar element to add in to
const sideBar = document.getElementsByClassName("otherPosts")[0];
const amountOfPosts = dataParsed.idCount;
const url = "https://flask-threejs-blog-template.brendawg.repl.co/"


//this adds the three most recent posts in to the sidebar, with a try/catch statement incase there are less than three posts.
try {  
  for (let i = (amountOfPosts - 1); i > (amountOfPosts - 4); i--) {

    post = dataParsed.posts[i];
  
    var htmlString = `
    <a class="previewLink" href="${url}view-specified-post" onclick="defineLocalVariable(${post.id})">
      <div class="postPreview">
        <h2 class="previewTitle">${post.title}</h2>
        <p class="previewDate">${post.date}</p>
      </div>
    </a>`;
        
    sideBar.insertAdjacentHTML('beforeend', htmlString);
  }
} catch (err) {}

//This adds the the link for the post viewing page in.

const pageLink = `<a class="siteLink" href="${url}view-posts"><b><i>View all posts here...</i></b></a>`;

sideBar.insertAdjacentHTML('beforeend', pageLink);

//If a certain post is clicked, this gets the post's id and puts it in the page's local storage.
function defineLocalVariable(postID) {
  localStorage.setItem("requestedPostID", postID);
}