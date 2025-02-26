from flask import jsonify
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
import psutil
from app.models import db, Book

admin = None  # Global variable to avoid duplication

# Custom Admin View for Monitoring
class SecureMonitorView(BaseView):
    @expose('/')
    def index(self):
        if not self.is_accessible():
            return "Accès interdit", 403
        system_info = {
            "status": "running",
            "cpu_usage": psutil.cpu_percent(),
            "memory_usage": psutil.virtual_memory().percent
        }
        return self.render("admin/monitor.html", system_info=system_info)

    def is_accessible(self):
        # Ajoutez ici une vérification d'utilisateur (session, token, etc.)
        return True  # Modifier pour une vraie vérification

# Initializing Flask-Admin
def init_admin(app):
    global admin
    if not admin:
        admin = Admin(app, name="Admin Panel", template_mode="bootstrap3")

        # Add Book template in admin
        admin.add_view(ModelView(Book, db.session))

        # Monitoring page added
        admin.add_view(SecureMonitorView(name="Monitoring", endpoint="monitor"))