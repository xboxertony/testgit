from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://www.example.com"]}}) 

@app.route("/")
def helloWorld():
  return "Hello"

@app.route("/api")
def helloWorld1():
  return "Hello1"


if __name__ == "__main__":
    app.run(debug=True)