from app.models import db, AdminUser
from app import create_app

app = create_app()
with app.app_context():
    db.create_all()

    # 🔴 Vérifier s'il y a déjà un admin
    if not AdminUser.query.first():
        admin = AdminUser(username="admin")
        admin.set_password("YPage06!")  # 🔴 Modifier le mot de passe !
        db.session.add(admin)
        db.session.commit()
        print("✅ Admin créé avec succès !")

print("✅ Base de données initialisée.")