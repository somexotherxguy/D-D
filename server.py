#!/usr/bin/python
import http.server
import socketserver
from os import curdir, sep
import subprocess
import sqlite3
import io

dbaseFile = '../' + 'DnD.db'
character_file = 'new_object.json'
user_tag = 'user'

PORT_NUMBER = 5000

def dbase(sql_string, dbaseFile = dbaseFile):
  conn = sqlite3.connect(dbaseFile)

  c = conn.cursor()

  #Enable foreign key support
  c.execute("PRAGMA foreign_keys = ON")

  #Insert table values
  c.execute(sql_string)
  #GIVE ME YOUR DUMMY VALUES

  #commit changes to database
  conn.commit()

  #close connection to database, creation completed
  conn.close()

def readAction(stripped_path, user_name, character_name):
  check_path = stripped_path.split('/')
  is_character_file = check_path[ len(check_path) - 1 ] == character_file
  if( is_character_file ):
    serve_path = '/'.join(['..', user_tag, user_name, character_name + '.json'])
  else:
    serve_path = stripped_path
  try:
    serve_file = open(serve_path, 'rb')
    serve_file.close()
  except:
    if( is_character_file ):
      #ALWAYS RETURN A CHARACTER JSON
      serve_path = './' + character_file
      #serve_file = open(serve_path, 'rb')
  #make the serve_path relative
  return 'Read File', serve_path
def readCSheet(user_name, character_name):
  char_json = readChar(user_name, character_name)
  return io.BytesIO( char_json.encode() )

def writeCSheet():
  return ""

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

    #clean any final '/'
    """if( len(check_path) > 2 and check_path[len(check_path) - 1] == ''):
    check_path = check_path[:len(check_path) - 1]
    self.path = self.path[:len(self.path) - 1]"""

    #check for
    user_name, character_name, stripped_url = parse_url(self.path)
    long_enough = len(check_path) >= 5
    is_character_file = check_path[ len(check_path) - 1 ] == character_file

    #####
    #print('file:',serve_path,'opening') #DEBUG
    #Check that the user file exists
    serve_action, serve_path = readAction(stripped_url, user_name, character_name)
    #make the serve_path relative
    #serve_path = '.' + serve_path

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
        if( 'Read File' == serve_action ):
          serve_file = open(serve_path, 'rb')
        else:
          serve_file = readCSheet(user_name, character_name)
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
    check_path = self.path.split('/')
    serve_path = ''
    #check for
    long_enough = len(check_path) >= 5
    is_character_file = check_path[ len(check_path) - 1 ] == character_file
    if( long_enough ):
      if( is_character_file ):
        user_name = check_path[2]
        character_name = check_path[3]

        #Use a single dot here; asecond dot is added later to all paths.
        serve_path = '/'.join(['.', user_tag, user_name, character_name + '.json'])

        #make the serve_path relative
        serve_path = '.' + serve_path
        check_path = serve_path.split('/')

        #Ensure the directory tree exists
        file_make = ["mkdir", '-p', '/'.join(check_path[: len(check_path) - 1])]
        aarg = subprocess.check_output(file_make).decode()
        #print(aarg) #DEBUG

        #print(self.rfile)
        out_file = open(serve_path, 'w')

        length = self.headers['content-length']
        data = self.rfile.read(int(length))

        out_file.write( data.decode() )
        out_file.close()
        """
        with open(self.store_path, 'w') as fh:
        fh.write(data.decode())
        """
        self.send_response(200)
    else:
      self.send_response(400)


try:
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
