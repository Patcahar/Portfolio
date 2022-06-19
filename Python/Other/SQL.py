import mysql.connector;

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd = "Patchara147",
    database = "myproject"
)

mycursor = db.cursor()
mycursor.execute("SELECT * FROM person2")
db.commit()
for x in mycursor:
    print(x)

    # mycursor.execute("INSERT INTO person2(name,age) VALUES (%s,%s)",("Jack",25))



# NOT USE ZONE
# mycursor.execute("CREATE TABLE person2(name VARCHAR(50),age INT,PersonID INT PRIMARY KEY AUTO_INCREMENT)")
# mycursor.execute("CREATE DATABASE myproject")
# mycursor.execute("INSERT INTO person2 (name,age) VALUES (%s,%s)",("Tim",19))