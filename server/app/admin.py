from flask import redirect, session, url_for
from flask_admin import Admin, AdminIndexView, expose
from flask_admin.contrib.sqla import ModelView
from app.models import db, Book, AdminUser

# 🔴 Secure Admin class (blocks access to /admin/)
class SecureAdminIndexView(AdminIndexView):
    @expose('/')
    def index(self):
        if not session.get("admin_id"):
            return redirect(url_for("routes.login"))  # Redirects if not admin
        return super().index()

# 🔴 Block access to templates (e.g. /admin/book/)
class SecureModelView(ModelView):
    def is_accessible(self):
        return session.get("admin_id") is not None

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for("routes.login"))

# 🔴 One-time initialization of Flask-Admin
admin = Admin(name="Admin Panel", template_mode="bootstrap3", index_view=SecureAdminIndexView())

def init_admin(app):
    if not hasattr(app, "flask_admin_initialized"):
        app.flask_admin_initialized = True  # Mark initialization

        admin.init_app(app)

        # Add secure templates
        admin.add_view(SecureModelView(Book, db.session))