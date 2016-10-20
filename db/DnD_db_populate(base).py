#Update based on how we format database, which will be based on the values that the website handles.

import sqlite3
conn = sqlite3.connect('DnD.db')

c = conn.cursor()

#Enable foreign key support
c.execute("PRAGMA foreign_keys = ON")

#Insert table values
#GIVE ME YOUR DUMMY VALUES

#commit changes to database
conn.commit()

#close connection to database, creation completed
conn.close()