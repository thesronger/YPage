from flask import Blueprint, flash, jsonify, redirect, render_template, request, session, url_for
from flask_graphql import GraphQLView
from app.graphql.schema import schema
from app.models import AdminUser

bp = Blueprint('routes', __name__)

# Endpoint GraphQL
bp.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True  # GraphiQL web interface enabled for query testing
    )
)

# Login & logout routes
#--------------------------------------------------------------#
@bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Check if the user exists in the database
        admin = AdminUser.query.filter_by(username=username).first()
        if admin and admin.check_password(password):
            session['admin_id'] = admin.id
            flash("Successfuly login!", "success")
            return redirect(url_for('admin.index'))
        else:
            flash("Incorrect username or password", "danger")

    return render_template("login.html")

@bp.route('/logout')
def logout():
    session.pop('admin_id', None)
    flash("Successfuly logout", "success")
    return redirect(url_for('routes.login'))


#--------------------------------------------------------------#

# Route to display a message when the user is not authorized
@bp.route('/not_authorized')
def not_authorized():
    return render_template("not_authorized.html"), 403