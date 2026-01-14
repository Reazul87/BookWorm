import Link from "next/link";
import { BookOpen, Star } from "lucide-react";

export default function BookCard({ book }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-stone-200 overflow-hidden flex flex-col">
      {/* Book Cover */}
      <div className="relative aspect-[2/3] overflow-hidden bg-stone-100">
        <img
          src={book.coverImage || "/placeholder-book.jpg"}
          alt={book.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          {book.averageRating || "N/A"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit mb-2">
          {book.genre}
        </span>
        <h3 className="font-bold text-stone-800 line-clamp-1 group-hover:text-emerald-700">
          {book.title}
        </h3>
        <p className="text-sm text-stone-500 mb-4 italic">by {book.author}</p>

        <div className="mt-auto">
          <Link
            href={`/books/${book._id}`}
            className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-emerald-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
