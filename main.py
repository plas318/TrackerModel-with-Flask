from flask import Flask
from tracker import create_app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True) # run debug mode of tracker app
    