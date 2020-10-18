import pandas as pd
from sklearn.linear_model import LogisticRegression

df = pd.read_csv('multipleExampleInsertsCSV.csv')

x  = df.iloc[:, 0:10]
y = df.iloc[:, 11]

log_model = LogisticRegression().fit(x, y)

