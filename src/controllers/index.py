import webapp2
import os
from google.appengine.ext.webapp import template
class Index(webapp2.RequestHandler):
	def get(self):
		template_values={}
		path = os.path.join(os.path.dirname(__file__), '../views/index.html')
		self.response.out.write(template.render(path, template_values))