from flask import Blueprint, render_template, request


views = Blueprint('views', __name__)

@views.route('/')
def home():
    return ''
@views.route('/tracker') # Flask route to tracker page
def tracker(): # methods=['POST', 'GET'] 
    return render_template('index.html') 
# return rendered website 