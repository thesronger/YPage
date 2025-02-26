from flask import redirect, session, url_for
from flask_admin import Admin, AdminIndexView, expose
from flask_admin.contrib.sqla import ModelView
from app.models import db, Book, AdminUser

# 🔴 Classe Admin Sécurisée (bloque l'accès à /admin/)
class SecureAdminIndexView(AdminIndexView):
    @expose('/')
    def index(self):
        if not session.get("admin_id"):
            return redirect(url_for("routes.login"))  # Redirige si pas admin
        return super().index()

# 🔴 Bloquer l'accès aux modèles (ex: /admin/book/)
class SecureModelView(ModelView):
    def is_accessible(self):
        return session.get("admin_id") is not None

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for("routes.login"))

# 🔴 Initialisation unique de Flask-Admin
admin = Admin(name="Admin Panel", template_mode="bootstrap3", index_view=SecureAdminIndexView())

def init_admin(app):
    if not hasattr(app, "flask_admin_initialized"):
        app.flask_admin_initialized = True  # Marquer l'initialisation

        admin.init_app(app)

        # Ajouter les modèles sécurisés
        admin.add_view(SecureModelView(Book, db.session))