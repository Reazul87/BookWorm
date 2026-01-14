import BookCard from "@/components/books/BookCard";
import { books } from "@/data/Books";

export default async function BrowseBooks() {

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
