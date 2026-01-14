import BookCard from "@/components/books/BookCard";
import BookFilters from "@/components/books/BookFilters";
import { books } from "@/data/Books";
// import clientPromise from "@/lib/mongodb";

// async function getBooks() {
//   const client = await clientPromise;
//   const db = client.db();
//   // Fetch books and genres in parallel
//   const [books, genres] = await Promise.all([
//     db.collection("books").find({}).toArray(),
//     db.collection("genres").find({}).toArray(),
//   ]);
//   return { books, genres };
// }

export default async function BrowseBooks() {
  // const { books, genres } = await getBooks();

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">
          Explore the Library
        </h1>
        <p className="text-stone-600 font-medium">
          Discover your next favorite story
        </p>
      </div>

      {/* Filters (In a real app, you'd make this a client component or use query params) */}
      {/* <BookFilters genres={genres} /> */}

      {/* Books Grid */}
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
          <p className="text-stone-500">
            No books found matching your criteria.
          </p>
        </div>
      )}
    </main>
  );
}
