from flask import Blueprint, jsonify, render_template, session
from flask_graphql import GraphQLView
from app.graphql.schema import schema

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

# Debug route
#--------------------------------------------------------------#
    # Route to activate admin mode
@bp.route('/set_admin')
def set_admin():
    session["is_admin"] = True
    return "✅ Mode administrateur activé."

    # Route to disable admin mode
@bp.route('/unset_admin')
def unset_admin():
    session["is_admin"] = False
    return "❌ Mode administrateur désactivé."

    # Test route to see user status
@bp.route('/is_admin')
def check_admin():
    return f"Admin : {session.get('is_admin', False)}"

#--------------------------------------------------------------#

# Route to display a message when the user is not authorized
@bp.route('/not_authorized')
def not_authorized():
    return render_template("not_authorized.html"), 403