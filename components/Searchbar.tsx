"use clinet"
import { useState } from "react";
import { Search, X } from "lucide-react";



interface SearchBarProps {
    onSearch: (query: string) => void;
  }

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
      };
    
      const handleClear = () => {
        setQuery("");
        onSearch("");
      };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search destination..."
        className="w-full px-2 py-2.5 pl-3 text-md bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white/60 placeholder:text-md focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}