from app import create_app
from app.admin import init_admin

app = create_app()
init_admin(app)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)