#!/usr/bin/python
import http.server
import socketserver
from os import curdir, sep
import subprocess
import sqlite3
import io
import json
import ast

dbaseFile = '../db/' + 'DnD.db'
character_file = 'new_object.json'
user_tag = 'user'
id_tag = 'id'

PORT_NUMBER = 5000

#Given an input string 'id_token' representing the user, and character name, output a json formatted string
#containing all data relevant to that id_token/character combo.
def db_char_pull(id_token, char_name):
	#conn = sqlite3.connect(dbaseFile)
	#conn = sqlite3.connect('DnD.db')#DEBUG
	conn.row_factory = sqlite3.Row
	c = conn.cursor()

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	c.execute("SELECT * FROM char_info WHERE id_token=? AND char_name=?", (id_token, char_name))
	char_data = c.fetchone()
	#print('CCC HHH AAA RRR:',id_token,char_name,'aaaaa',char_data)#DEBUG

	#Make dictionary
	char_obj = {
		'Str': char_data['str'],
		'Con': char_data['con'],
		'Wis': char_data['wis'],
		'Dex': char_data['dex'],
		'Int': char_data['intel'],
		'Chr': char_data['chr'],
		'HP': char_data['hp'],
		'Level': char_data['level'],
		'Languages': char_data['languages'],
		'Feats': char_data['feats'],
		'Spells': char_data['spells'],
		'Abilities': char_data['abilities'],
		'Tool Proficiencies': char_data['tool_prof'],
		'Weapon Proficiencies': char_data['weapon_prof'],
		'Name': char_name,
		'Age': char_data['age'],
		'Height': char_data['height'],
		'Weight': char_data['weight'],
		'Gender': char_data['gender'],
		'Race': char_data['race'],
		'Class': char_data['class'],
		'Archetype': char_data['archetype'],
		'Fighting Style': char_data['fighting_style'],
		'Background': char_data['background'],
		'Traits': char_data['traits'],
		'Bonds': char_data['bonds'],
		'Physical Description': char_data['description'],
		'Miscellaneous Notes': char_data['notes'],
		'Armor': char_data['armor'],
		'Weapons': char_data['weapons'],
		'Tools': char_data['tools'],
		'Platinum': char_data['platinum'],
		'Gold': char_data['gold'],
		'Electrum': char_data['electrum'],
		'Silver': char_data['silver'],
		'Copper': char_data['copper'],
		'Alignment': char_data['alignment']
		
		#'ideal': char_data['ideal'],
		#'flaw': char_data['flaw'],
		#'story': char_data['story'],
		#'proficiency_mod': char_data['proficiency_mod'],
		#'spellcasting': char_data['spellcasting'],
		#'char_name': char_name,
		#'notable_traits': char_data['notable_traits'],
		#'sub_race': char_data['sub_race'],
		#'exp': char_data['exp'],
		#'skills': char_data['skills'],
		#'saves': char_data['saves'],
		#'equipment': char_data['equipment'],
	}
	
	#export data as json
	#with open('object.json', 'w') as outfile:
	#	json.dump(char_obj, outfile)
		
	#test
	#with open('test.json', 'w') as outfile:
	#	json.dump(char_obj, outfile)


	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	#conn.close()
	
	#return json
	#char_obj = str(char_obj)
	return json.dumps(char_obj)



#Given string 'id_token' representing a user, and input json formatted string, pull information into the database.
def db_char_push(id_token, char_name, info_string):
	#print(type(info_string),'aaaaaaaaaaaaaaaa',info_string)#DEBUG
	#conn = sqlite3.connect(dbaseFile)
	#conn = sqlite3.connect('DnD.db')#DEBUG
	c = conn.cursor()
	data = ast.literal_eval(info_string)
	#data = json.loads(info_string)

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")
	#print(c.exexute("SELECT * FROM users"))

	#If new user, add to table of user id_tokens
	#print('eeeeeeeee',data['Str'])#DEBUG
	#id_token = 'D'#DEBUG
	c.execute("SELECT * FROM users WHERE id_token=?", (id_token,))
	#print('bbbb')#DEBUG
	check = c.fetchall()
	#print('ccc',check) #DEBUG
	if not check:
		c.execute('''REPLACE INTO users 
			(id_token)
			VALUES
			(?)''',
			(id_token,))

	#If new character, add to character table
	c.execute('''REPLACE INTO characters 
		(char_name, id_token)
		VALUES
		(?,?)''',
		(char_name, id_token))

	#Update or create entry in char_entry table
	c.execute('''REPLACE INTO char_info(
		id_token,
		str,
		con,
		wis,
		dex,
		intel,
		chr,
		hp,
		level,
		languages,
		feats,
		spells,
		abilities,
		tool_prof,
		weapon_prof,
		char_name,
		age,
		height,
		weight,
		gender,
		race,
		class,
		archetype,
		fighting_style,
		background,
		traits,
		bonds,
		description,
		notes,
		armor,
		weapons,
		tools,
		platinum,
		gold,
		electrum,
		silver,
		copper,
		alignment

		--ideals,
		--flaws,
		--backstory,
		--alignment,
		--exp,
		--sub-race,
		--prof_mod
		)
		VALUES
		(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)''',
		(
		id_token,
		data['Str'],
		data['Con'],
		data['Wis'],
		data['Dex'],
		data['Int'],
		data['Char'],
		data['HP'],
		data['Level'],
		data['Languages'],
		data['Feats'],
		data['Spells'],
		data['Abilities'],
		data['Tool Proficiencies'],
		data['Weapon Proficiencies'],
		char_name,
		data['Age'],
		data['Height'],
		data['Weight'],
		data['Gender'],
		data['Race'],
		data['Class'],
		data['Archetype'],
		data['Fighting Style'],
		data['Background'],
		data['Traits'],
		data['Bonds'],
		data['Physical Description'],
		data['Miscellaneous Notes'],
		data['Armor'],
		data['Weapons'],
		data['Tools'],
		data['Platinum'],
		data['Gold'],
		data['Electrum'],
		data['Silver'],
		data['Copper'],
		data['Alignment']
		))
	#commit changes to database
	#print(data,'fffffffffffffffffffff',type(data))#DEBUG
	conn.commit()



#Given a string 'id_token' representing the user, return a json formatted string containing a list of that user's characters
def db_get_char_list(id_token):
	#conn = sqlite3.connect(dbaseFile)
	#conn = sqlite3.connect('DnD.db')#DEBUG
	c = conn.cursor()

	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")

	c.execute("SELECT char_name FROM characters WHERE id_token=?", (id_token,))
	char_list = c.fetchall()

	#export data
	#with open('char_list.json', 'w') as outfile:
	#	json.dump(char_list, outfile)

	#commit changes to database
	conn.commit()

	#close connection to database, creation completed
	#conn.close()
	
	return json.dumps(char_list)



def make_db():
  #conn = sqlite3.connect(dbaseFile)
  #conn = sqlite3.connect('DnD.db')#DEBUG
  c = conn.cursor()

  #Enable foreign key support
  c.execute("PRAGMA foreign_keys = ON")

  c.execute('''CREATE TABLE IF NOT EXISTS users(
    id_token TEXT NOT NULL,

    PRIMARY KEY (id_token)
  )''')

  c.execute('''CREATE TABLE IF NOT EXISTS characters(
    char_name TEXT NOT NULL,
    id_token TEXT NOT NULL,

    PRIMARY KEY (char_name),
    FOREIGN KEY (id_token) REFERENCES users(id_token) ON DELETE CASCADE
  )''')

  c.execute('''CREATE TABLE IF NOT EXISTS char_info(
    id_token TEXT NOT NULL,
    str INTEGER,
    con INTEGER,
    wis INTEGER,
    dex INTEGER,
    intel INTEGER,
    chr INTEGER,
    hp INTEGER,
    level INTEGER,
    languages TEXT,
    feats TEXT,
    spells TEXT,
    abilities TEXT,
    tool_prof TEXT,
    weapon_prof TEXT,
    char_name TEXT NOT NULL,
    age INTEGER,
    height INTEGER,
    weight INTEGER,
    gender TEXT,
    race TEXT,
    class TEXT,
    archetype TEXT,
    fighting_style TEXT,
    background TEXT,
    traits TEXT,
    bonds TEXT,
    description TEXT,
    notes TEXT,
    armor TEXT,
    weapons TEXT,
    tools TEXT,
    platinum INTEGER,
    gold INTEGER,
    electrum INTEGER,
    silver INTEGER,
    copper INTEGER,
    alignment TEXT,

    FOREIGN KEY (char_name) REFERENCES characters(char_name) ON DELETE CASCADE
    --FOREIGN KEY (id_token) REFERENCES users(id_token) ON DELETE CASCADE
  )''')

  #commit changes to database
  #c.execute("INSERT INTO users (id_token ) values (?)",('D'))#DEBUG
  conn.commit()


def db_char_delete(id_token, char_name):
	#conn = sqlite3.connect(dbaseFile)
	c = conn.cursor()
	
	#Enable foreign key support
	c.execute("PRAGMA foreign_keys = ON")
	
	#delete char from both tables
	c.execute("DELETE FROM char_info WHERE id_token=? AND char_name=?", (id_token, char_name))
	c.execute("DELETE FROM characters WHERE id_token=? AND char_name=?", (id_token, char_name))
	
	#commit changes to database
	conn.commit()



def readAction(stripped_path, user_name, character_name):
  check_path = stripped_path.split('/')
  is_character_file = check_path[ -1 ] == character_file
  action = 'Read File'
  serve_path = ''
  if( is_character_file ):
    if( character_name ):
      action = 'Read Character'
    else:
      action = 'List User'
  else:
    serve_path = stripped_path
  return action, serve_path

def readCSheet(user_name, character_name):
  return strtofile( db_char_pull(user_name, character_name) )

def strtofile(thestring):
  return io.BytesIO( thestring.encode() )

#input url
#returns: 'user_name','character_name','stripped_url'
def parse_url(url):
  user_name, character_name, stripped_url = '','',''
  check_path = url.split('/')
  try:
    tag_start = check_path.index(user_tag)
    user_name = check_path[tag_start + 1]
    character_name = check_path[tag_start + 2]
    check_path = check_path[tag_start + 3:]
  except:
    try:
      tag_start = check_path.index(id_tag)
      user_name = check_path[tag_start + 1]
      check_path = check_path[tag_start + 2:]
    except:
      pass
  #The path should start with the './'
  stripped_url = '/'.join( ['.'] + check_path )
  return user_name, character_name, stripped_url

#This class will handles any incoming request from
#the browser
class myHandler(http.server.SimpleHTTPRequestHandler):
  #to load
  #GET: / user / <username> / <character name> /

  #to save
  #POST: / user / <username> / <character name> /
  #Handler for the GET requests
  def do_GET(self):
    #Handle GET requests for user files
    #print( '\t'.join(("GET",self.path)) ) #DEBUG
    check_path = self.path.split('/')
    serve_file = ''
    serve_path = ''
    serve_action = ''

    #check for
    user_name, character_name, stripped_url = parse_url(self.path)
    serve_action, serve_path = readAction(stripped_url, user_name, character_name)

    #ensure proper root folder resolution
    if serve_path.endswith("/"):
      serve_path="./index.html"

    #####
    try:
      #Check the file extension required and
      #set the right mime type

      #Fix these two things later
      sendReply = True#False
      #This is just for a decent default
      mimetype='text/html'#''
      if serve_path.endswith(".html"):
        mimetype='text/html'
        sendReply = True
      if serve_path.endswith(".jpg"):
        mimetype='image/jpg'
        sendReply = True
      if serve_path.endswith(".gif"):
        mimetype='image/gif'
        sendReply = True
      if serve_path.endswith(".js"):
        mimetype='application/javascript'
        sendReply = True
      if serve_path.endswith(".css"):
        mimetype='text/css'
        sendReply = True

      if sendReply == True:
        #Open the static file requested
        print(serve_path)
        serve_file = ''
        print(serve_action)#DEBUG
        if( 'Read File' == serve_action ):
          serve_file = open(serve_path, 'rb')
        elif('Read Character' == serve_action):
          serve_file = readCSheet(user_name, character_name)
        else:
          serve_file = strtofile(db_get_char_list(user_name))
          print(user_name,db_get_char_list(user_name))#DEBUG
        #Send the headers
        self.send_response(200)
        self.send_header('Content-type',mimetype)
        self.end_headers()
        #Send the static file requested
        self.copyfile(serve_file, self.wfile)
        #Only run the format command for index.html
        #self.wfile.write( (f.read()).format(user = userName) )
        #self.wfile.write(f.read())
        serve_file.close()
        return

    except IOError:
      print(serve_file)
      self.send_error(404,'File not found: %s' % self.path)

  def do_POST(self):
    print( '\t'.join(("POST",self.path)) )
    user_name, character_name, stripped_url = parse_url(self.path)
    length = self.headers['content-length']
    data = self.rfile.read(int(length))
    print(data.decode(),length)
    try:
      #print(user_name)#DEBUG
      db_char_push(user_name, character_name, data.decode())
      self.send_response(200)
    except Exception as theProblem:
      print(theProblem)#DEBUG
      self.send_response(400)


try:
  #ensure database exists
  conn = sqlite3.connect(dbaseFile)
  make_db()
  #Create a web server and define the handler to manage the
  #incoming request
  #Handler = http.server.SimpleHTTPRequestHandler
  server_address=('',PORT_NUMBER)
  httpd = socketserver.TCPServer(server_address, myHandler)
  #httpd = socketserver.TCPServer(server_address, Handler)
  #Wait forever for incoming http requests
  print( 'Started httpserver on port ' , PORT_NUMBER)
  httpd.serve_forever()

except KeyboardInterrupt:
  httpd.socket.close()
  print( '^C received, shutting down')
  conn.close()



"""
get url
parse
  input url
  return username, charactername, stripped_url
read file
  input stripped_url, username, charactername
  read data

post url
parse
  input url
  return username, charactername, stripped_url
write file
  input username, charactername, characterdata
  write data

#input url
#returns: 'user_name','character_name','stripped_url'
parse
"""
