from flask import jsonify
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
import psutil
from app.models import db, Book

admin = None  # Variable globale pour éviter les doublons

# Vue Admin Personnalisée pour le Monitoring
class MonitorView(BaseView):
    @expose('/')
    def index(self):
        # Collecte des informations système
        system_info = {
            "status": "running",
            "cpu_usage": psutil.cpu_percent(),
            "memory_usage": psutil.virtual_memory().percent
        }
        return self.render("admin/monitor.html", system_info=system_info)

# Initialisation de Flask-Admin
def init_admin(app):
    global admin
    if not admin:
        admin = Admin(app, name="Admin Panel", template_mode="bootstrap3")

        # Ajout du modèle Book dans l'admin
        admin.add_view(ModelView(Book, db.session))

        # Ajout de la page Monitoring
        admin.add_view(MonitorView(name="Monitoring", endpoint="monitor"))