import { Search, Filter } from "lucide-react";

export default function BookFilters({ genres, onSearch, onFilter }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 bg-stone-50 p-4 rounded-xl border border-stone-200">
      {/* Search Input */}
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Genre Filter */}
      <div className="flex items-center gap-2 min-w-[200px]">
        <Filter className="text-stone-500 w-5 h-5" />
        <select
          className="w-full p-2 rounded-lg border border-stone-300 bg-white outline-none focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g._id} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
