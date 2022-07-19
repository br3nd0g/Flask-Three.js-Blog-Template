# Flask Three.js Blog Template

This is a template for a personal blog website built upon the Python Flask library, along with Three.js used to render 3D graphics on the webpage.

The owner of the page/Repl, can make their own posts on the page from the website itself, with a password. An example of the page can be found [here](https://flask-threejs-blog-template-example.brendawg.repl.co/).

The template contains four different pages, each with their own purpose. All pages except for the post creation page contain a sidebar, that allows the user to click on a link to view all posts, or click on one of the three most recent posts to specifically view it.

All the code is commented apart from the HTML and 3DSetup Javascript files, so that you can understand what most things are doing.

If any errors are encountered, or anything goes wrong - leave a comment or contact me on discord at **brendan#8362**

## Pages Entailed

The template containes four pages.
- The home page
- The post viewing page
- The page for viewing a specific post
- The create post page

---

The home page, contains space for the owner to write an intro and description of their blog/themselves. A 3D dodecahedron is displayed for extra *styleeeee*, which is rendered using Three.JS.

---

The post viewing page shows all posts that have been posted from newest to oldest, displayed respectively from top to bottom. A 3D dodecahedron is also displayed, which is interactive to scrolling on the page.

---

The page for viewing a specific post displays one specific post, clicked on from the page's sidebar. This page also contains the 3D dodecahedron.

---

Lastly, the create post page contains a form for the owner(s) to enter a new post title, write the text, and enter their password to publish the post.

## How To Set It Up

A few things have to be changed for the blog to work in your repl. The first thing you need to do is go into the secret environment variables, usually found in the lock icon on the left. Add a secret variable called *postingPassword*, and of course make the value the password you will use to post on the website.

You're now going to have to change the value of the website's url in a few places, as it is currently the url of my repl. You can get your repl's url from running the repl and seeing the url that way (the easier option), or from getting the name of your repl and putting it in to the form of the url below this, without symbols and dashes for spaces, as well as changing the "NAME" to your replit username, in lowercase.

https://blog-name-with-no-symbols.NAME.repl.co/

Now head in to **main.py**, and change the *baseURL* variable to the url, remember the slash on the end (if it is not already there).

Secondly, head in to the **static** folder, then in to the **js** folder, and go into **sideboxFunctionality.js**. Again, change the url variable to your url, remembering the slash at the end.

That is the links on your page set up and working, great! :)

---

Time to set up your homepage, this is a lot more simple than the previous instruction. Simply go in to the **tempaltes** folder and go in to **index.html**. You can change the website title in the header, and also change the text in the explanation, probably explaining what your blog is for, and a bit about yourself too - whatever suits your needs/purpose.

--- 

That should be everything set up, and ready for you to use! Click on create post, write your post, enter your password, and you're already going! :)

## Personalisation

There is lots of room for personalisation on this template. You can change the 
- CSS
- Background
- Favicon & Page Pitle (The icon and text shown in the tab) on your browser

I am going to assume you know how to change those, other than the background. (If not, try google it, W3Schools will have good explanations :) )

The background can be changed by adding an image to the repl (try use a large resolution image), and putting it in to static --> images. rename/delete the existing background, and rename yours to "3bg.jpg"

---

## How the Blog works, and deletion of posts.

The blog is using flask, a python library which handles and renders webpages, adding in extra functionality, and allowing python to be integrated.

Core functionality done by Flask includes 
- Rendering the pages when requested
- Receiving form inputs when a post request is made on the create post page

---

The other python file gets the date when a post is made, and adds the title, text, date and ID of a post into the posts array in the json file.

The ID is used to let the javaScript know which page has been clicked and requested to display on the page for viewing a specific post.

---

The two 3dSetup javascript files are essentially the same, as they render the background and the 3D Graphic using Three.Js

The scroll one adds the functionality of the user being able to move the 3d Object when scrolling on the post viewing page.

---

The sidebox functionality javaScript program adds the three lates posts into the sidebox.

The post viewing page has a script in the HTML that gets all the posts from the JSON array, and inserts them into the HTML DOM.

### Deleting Posts

If you have made a mistake in a post, or wish to delete it. You will need to do so manually, which is can be kind of annoying. Go in to posts.json.

From here, remove the object of your post from the array. It is good practice to lower the idCount by one, and lower the id of all posts made after the post you are deleting (if there are any). If you are editing a post, edit the part you need to edit in the JSON, so either the title or the text. I hope this helps :)

---

Lastly, again if any errors are found, or anything goes wrong, comment or contact me on discord at **brendan#8362** :) I hope you enjoy my template!