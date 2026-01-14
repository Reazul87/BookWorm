import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="min-h-[calc(100vh-295px)] flex flex-col items-center justify-center gap-2 md:gap-4 text-center px-4">
      <MdOutlineReportGmailerrorred
        size={64}
        className="text-error animate-pulse"
      />

      <h2 className="text-2xl md:text-4xl font-semibold">Page Not Found</h2>
      <p className="text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>

      <Link href="/" className="btn btn-primary btn-outline mt-2">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
