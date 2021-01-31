import os
from flask import Flask
from flask import request
from flask_cors import CORS

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    CORS(app)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/trial', methods=['GET'])
    def trial():
        console.log("api worked!")

        return "hello"

    @app.route('/gate', methods=['POST'])
    def log_gate_collision():
        print(request.json)
        gate_type = request.json['gate_type']

        return gate_type

    return app