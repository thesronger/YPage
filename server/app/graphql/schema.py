import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models import Book, db

# Set the GraphQL type for the Book template
class BookType(SQLAlchemyObjectType):
    class Meta:
        model = Book
        interfaces = (graphene.relay.Node,)

# Requests (queries)
class Query(graphene.ObjectType):
    all_books = graphene.List(BookType)

    def resolve_all_books(self, info):
        # Recover all books
        query = Book.query.all()
        return query

# Mutation (example: addition of a book)
class CreateBook(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        genre = graphene.String(required=True)
        popularity = graphene.Int()

    book = graphene.Field(lambda: BookType)

    def mutate(self, info, title, genre, popularity=0):
        new_book = Book(title=title, genre=genre, popularity=popularity)
        db.session.add(new_book)
        db.session.commit()
        return CreateBook(book=new_book)

class Mutation(graphene.ObjectType):
    create_book = CreateBook.Field()

# GraphQL diagram
schema = graphene.Schema(query=Query, mutation=Mutation)
