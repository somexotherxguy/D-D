#!/usr/bin/python
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
from os import curdir, sep
import cgi

PORT_NUMBER = 5000

#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
  #to load
  #GET: <urlbase> / user / <username> / <character name> /
  #to save
  #POST: <urlbase> / <username> / <character name> / save
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
    if self.path.find(character_tag) != 0:
      #The format for user's URLs is '/' + user_name + '/' + character_name.
      #This means a split on '/' would start with ''.
      #The next item will be the user_name and the next will be character_name.
      user_name = self.path.split('/')[1]
      character_name = self.path.split('/')[2]
      #The +2 here represents the first and middle '/' in the path.
      self.path = self.path[len(user_name)+len(character_name)+2:]
    
    if self.path=="/":
      self.path="/index.html"
    
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
        

    try:
      #Check the file extension required and
      #set the right mime type

      #Fix these two things later
      sendReply = True#False
      #This is just for a decent default
      mimetype='text/html'#''
      if self.path.endswith(".html"):
        mimetype='text/html'
        sendReply = True
      if self.path.endswith(".jpg"):
        mimetype='image/jpg'
        sendReply = True
      if self.path.endswith(".gif"):
        mimetype='image/gif'
        sendReply = True
      if self.path.endswith(".js"):
        mimetype='application/javascript'
        sendReply = True
      if self.path.endswith(".css"):
        mimetype='text/css'
        sendReply = True

      if sendReply == True:
        #Open the static file requested and send it
        f = open(self.path[1:])
        self.send_response(200)
        self.send_header('Content-type',mimetype)
        self.end_headers()
        #Only run the format command for index.html
        if self.path == '/index.html':
          if userName == '':
            userName = 'temp'
          self.wfile.write( (f.read()).format(user = userName) )
        else:
          self.wfile.write(f.read())
        f.close()
      return

    except IOError:
      self.send_error(404,'File Not Found: %s' % self.path)
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
        """These two sections should be combined neatly: FIX LATER"""
        #This gets the username part of the URL with the '.json' at the end.
        userName = '/'.join(pathToUserFile.split('/')[2:]).split('.')
        #This gets rid of the last '.*' which should be '.json'.
        userName = '.'.join(userName[:len(userName)-1])
        """This one, too: FIX LATER"""
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
      # redirect browser to the user page to test that the file saved
      self.send_response(301)
      self.send_header("Location", '/user/' + userName + "/")
      self.end_headers()
      return None
      return      
      
      
try:
  #Create a web server and define the handler to manage the
  #incoming request
  server = HTTPServer(('', PORT_NUMBER), myHandler)
  print( 'Started httpserver on port ' , PORT_NUMBER)
  
  #Wait forever for incoming htto requests
  server.serve_forever()

except KeyboardInterrupt:
  print( '^C received, shutting down the web server')
  server.socket.close()
  
