from flask import Flask, render_template, request
import storageInteraction as stIn

passw = "yourPassword"

# Please change this to your URL
baseURL = 'https://flask-threejs-blog-template.brendawg.repl.co/'

#This uses Flask to initialise the flask application, and designates the static folder as -  well, the static folder
app = Flask('app')
app.static_folder = 'static'


#This renders the homepage, the base request for the URL when no specific page is defined.
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':

        data = stIn.getData()
      
        return render_template('index.html', data=data, url=baseURL)

#This renders the upload page. If it receives a post request, it gets the form's text input value, title input value and password value. If the password is correct, it calls the updateData function in the other python file. If it is wrong, it renders the page again showing an error message for a wrong password
@app.route('/upload', methods=['GET', 'POST'])
def uploadpage():
    if request.method == 'GET':
        return render_template('postBlog.html', url=baseURL)
    if request.method == 'POST':

        text = request.form['text']
        title = request.form['title']
        formPassw = request.form['password']
        if formPassw == passw:
          stIn.updateData(title, text)

          return f"<script>window.location.href = '{baseURL}';</script>"
        else:

          wrong = True
          return render_template('postBlog.html', wrong=wrong, url=baseURL)

#This gets the post data and simply renders the post viewing page
@app.route('/view-posts', methods=['GET', 'POST'])
def viewPosts():
    if request.method == 'GET':

        data = stIn.getData()
        return render_template('allPosts.html', data=data, url=baseURL)

#This gets the post data and renders the specific post viewing page
@app.route('/view-specified-post', methods=['GET', 'POST'])
def viewSingularPost():
    if request.method == 'GET':

        data = stIn.getData()
        return render_template('viewBlogPost.html', data=data, url=baseURL)
          
  

#this runs the application
app.run(host='0.0.0.0', port=8080)
