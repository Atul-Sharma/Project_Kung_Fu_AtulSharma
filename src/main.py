import webapp2
from controllers.index import Index


application = webapp2.WSGIApplication([('/',Index)],debug=True)