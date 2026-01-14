import Link from "next/link";
import { SiBookstack } from "react-icons/si";
import { FaUserGraduate, FaRegLightbulb, FaStar } from "react-icons/fa";
import Logo from "@/components/Layouts/Logo";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-50">
        <Logo />
        <h1 className="text-5xl sm:text-6xl font-bold mt-6">
          Discover. Track. Enjoy.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl">
          BookWorm helps you find books you'll love, track your reading
          progress, and get personalized recommendations tailored to your taste.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="/register"
            className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <SiBookstack className="text-4xl text-primary" />
            <h3 className="font-semibold text-lg">Explore Books</h3>
            <p className="text-gray-500 text-sm">
              Browse thousands of books across all genres and create your
              personal library.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <FaUserGraduate className="text-4xl text-primary" />
            <h3 className="font-semibold text-lg">Track Progress</h3>
            <p className="text-gray-500 text-sm">
              Track your reading goals, pages, and progress across all your
              favorite books.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <FaRegLightbulb className="text-4xl text-primary" />
            <h3 className="font-semibold text-lg">Personalized Suggestions</h3>
            <p className="text-gray-500 text-sm">
              Receive recommendations based on your reading history and
              preferences.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <FaStar className="text-4xl text-primary" />
            <h3 className="font-semibold text-lg">Review & Rate</h3>
            <p className="text-gray-500 text-sm">
              Share your thoughts and rate books for others to discover great
              reads.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Ready to start your reading journey?
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
          Join BookWorm today and transform how you read, track, and discover
          books.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="px-6 py-3 rounded-md bg-white text-primary font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            href="/books"
            className="px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-primary transition"
          >
            Browse Books
          </Link>
        </div>
      </section>
    </div>
  );
}
