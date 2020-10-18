import json
import pandas as pd
from sklearn.linear_model import LogisticRegression
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

HOST_IP = "localhost"
HOST_PORT = "4040"

app = Flask(__name__)
sio = SocketIO(app, cors_allowed_origins="*")

df = pd.read_csv('multipleExampleInsertsCSV.csv')

x  = df.iloc[:, 0:10]
y = df.iloc[:, 11]

log_model = LogisticRegression().fit(x, y)

@sio.on("Send Form")
def send_command(form):
    print(form)

if __name__ == '__main__':
	sio.run(app, host=HOST_IP, port=HOST_PORT)
