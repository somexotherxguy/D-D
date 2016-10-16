#!/usr/bin/python
import http.server
import socketserver
from os import curdir, sep

PORT_NUMBER = 5000


character_file = 'object.json'
user_tag = 'user'
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
    print( '\t'.join(("GET",self.path)) )
    check_path = self.path.split('/')
    serve_file = ''
    serve_path = ''
    
    #clean any final '/'
    """if( len(check_path) > 2 and check_path[len(check_path) - 1] == ''):
      check_path = check_path[:len(check_path) - 1]
      self.path = self.path[:len(self.path) - 1]"""
    print(check_path) #DEBUG
    
    #check for 
    user_name = ''
    character_name = ''
    long_enough = len(check_path) >= 5
    is_character_file = check_path[ len(check_path) - 1 ] == character_file
    if( long_enough ):
      if( is_character_file ):
        print('unique') # # debug
        user_name = check_path[2]
        character_name = check_path[3]
        
        #Use a single dot here; asecond dot is added later to all paths.
        serve_path = '/'.join(['.', user_tag, user_name, character_name + '.json'])
      else:
        serve_path = '/' + check_path[ len(check_path) - 1 ]
      print(serve_path) #DEBUG
    
    if(serve_path == ''):
      serve_path = '/'.join(check_path)
    
    #ensure proper root folder resolution
    if serve_path.endswith("/"):
      serve_path="/index.html"
      
      
      
    #####
    #make the serve_path relative
    serve_path = '.' + serve_path
    print('file:',serve_path,'opening') #DEBUG
    #Check that the user file exists
    if( is_character_file):
      try:
        serve_file = open(serve_path, 'rb')
        serve_file.close()
      except:
        #ALWAYS RETURN A CHARACTER JSON
        serve_path = './' + character_file
      #serve_file = open(serve_path, 'rb')
    
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
        #Send the headers
        self.send_response(200)
        self.send_header('Content-type',mimetype)
        self.end_headers()
        #Open the static file requested and send it
        serve_file = open(serve_path, 'rb')
        self.copyfile(serve_file, self.wfile)
        #Only run the format command for index.html
        #self.wfile.write( (f.read()).format(user = userName) )
        #self.wfile.write(f.read())
        serve_file.close()
      return

    except IOError:
      self.send_error(404,'File not found: %s' % self.path)


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
  print( '^C received, shutting down the web server')
"""
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
import cgi


# # # # #
  
  
  #future: character without user
  #GET: <urlbase> / character / [<character name>] / <character id>
  save_token = "/save"
  user_token = "/user"
  user_data_token = "char_data.json"
  
  
  
  #Handler for the GET requests
  def do_GET(self):
    #Handle GET requests for user files
    user_name = ''
    character_name = ''
    character_tag = '/character'
    print(self.path)
    response = "<html><head><title>test</title></head><body>best test</body></html>"
    self.wfile.write( response )
    return
"""
"""
    if self.path.find(character_tag) != 0:
      #The format for user's URLs is '/' + user_name + '/' + character_name.
      #This means a split on '/' would start with ''.
      #The next item will be the user_name and the next will be character_name.
      user_name = self.path.split('/')[1]
      character_name = self.path.split('/')[2]
      #The +2 here represents the first and middle '/' in the path.
      self.path = self.path[len(user_name)+len(character_name)+2:]
    
# # #
    
    #Check to see if it was the user data being requested.
    if self.path == '/default.json':
      if userName == '':
        userName = 'default'
      pathToUserFile = '/'.join(['..', character_tag[1:], userName + '.json'])
      try:
        userFile = open(pathToUserFile, 'r')
      except:
        pathToUserFile = '../user/default.json'
        userFile = open(pathToUserFile,'r')
      userFile.close()
      self.path = '/' + pathToUserFile
        

# # #
"""
"""
  #Handler for the POST requests
  def do_POST(self):
    if self.path.endswith("/save"):
      form = cgi.FieldStorage(
        fp=self.rfile, 
        headers=self.headers,
        environ={'REQUEST_METHOD':'POST',
                     'CONTENT_TYPE':self.headers['Content-Type'],
      })

      
      pathToUserFile = ''
      #Determine the user name
      userName = ''
      try:
        userName = form["user"].value
      except:
        print('DEBUG1')
        #The user files are in an outside folder so only the server can see them.
        pathToUserFile = self.path
        #This is for the default page.
        if pathToUserFile[:len('/user')] != '/user':
          pathToUserFile = '/user' + pathToUserFile
        #This prepends the folder ascension to the path.
        pathToUserFile = '..' + pathToUserFile
        #Split up the string.
        pathToUserFile = pathToUserFile.split('/')
        #Get rid of the '/send' on the end.
        pathToUserFile = pathToUserFile[:len(pathToUserFile)-1]
        #Put it back into a string.
        pathToUserFile = '/'.join(pathToUserFile)
        ####These two sections should be combined neatly: FIX LATER
        #This gets the username part of the URL with the '.json' at the end.
        userName = '/'.join(pathToUserFile.split('/')[2:]).split('.')
        #This gets rid of the last '.*' which should be '.json'.
        userName = '.'.join(userName[:len(userName)-1])
        ####This one, too: FIX LATER
        if pathToUserFile == '../user':
          pathToUserFile += '/temp'
        pathToUserFile += '.json'
      if userName == 'default':
        userName = 'temp'
      
      pathToUserFile = '../user/' + userName + '.json'
      
      try:
        #Open, write, and close the user's data file.
        userFile = open(pathToUserFile, 'w')
        userFile.write(form["jsonArea"].value)
        userFile.close()
      except:
        pass
"""
"""
      #send the response
      userFile = open(pathToUserFile, 'r')
      self.wfile.write(userFile.read())
      userFile.close()
"""
"""
      #print "Your name is: %s" % form["jsonArea"].value
      self.send_response(200)
      self.end_headers()
      #self.wfile.write("Thanks %s !" % form["jsonArea"].value)
"""
"""
      #Determine the user name
      userName = form["user"]
      #This gets the username part of the URL with the '.json' at the end.
      userName = '/'.join(pathToUserFile.split('/')[2:]).split('.')
      #This gets rid of the last '.*' which should be '.json'.
      userName = '.'.join(userName[:len(UserName)-1])
"""
"""
      # redirect browser to the user page to test that the file saved
      self.send_response(301)
      self.send_header("Location", '/user/' + userName + "/")
      self.end_headers()
      return None
      return      
      
  
"""
