from flask import Blueprint, jsonify
from flask_graphql import GraphQLView
from app.graphql.schema import schema

bp = Blueprint('routes', __name__)

# Endpoint GraphQL
bp.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True  # Interface web GraphiQL activée pour tester les requêtes
    )
)