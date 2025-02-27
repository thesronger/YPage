from app.models import db, AdminUser
from app import create_app

app = create_app()
with app.app_context():
    db.create_all()

    # 🔴 Check if there's already an admin
    if not AdminUser.query.first():
        admin = AdminUser(username="admin")
        admin.set_password("YPage06!")
        db.session.add(admin)
        db.session.commit()
        print("✅ Admin créé avec succès !")

print("✅ Base de données initialisée.")