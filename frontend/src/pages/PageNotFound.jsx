
import { Link, useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Home01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="max-w-xl w-full text-center">

        {/* 404 Illustration */}
        <div className="relative mb-8">

          <h1 className="text-[140px] sm:text-[180px] font-extrabold
          leading-none tracking-tighter text-blue-600/10 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white shadow-xl shadow-blue-100
            rounded-2xl p-5 border border-slate-100">

              <HugeiconsIcon
                icon={Search01Icon}
                size={48}
                color="#2563eb"
                strokeWidth={1.5}
              />

            </div>
          </div>

        </div>

        {/* Message */}
        <div className="space-y-4">

          <span className="inline-flex items-center rounded-full
          bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
            Page Not Found
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold
          tracking-tight text-slate-900">
            Oops! You've lost your way.
          </h2>

          <p className="text-base text-slate-500 leading-7 max-w-md mx-auto">
            The page you're looking for doesn't exist, has been moved,
            or the URL might be incorrect.
          </p>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center
        justify-center gap-4 mt-9">

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center
            justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5
            text-sm font-semibold text-white shadow-lg shadow-blue-200
            hover:bg-blue-700 hover:-translate-y-0.5
            transition-all duration-200"
          >
            <HugeiconsIcon icon={Home01Icon} size={19} />
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center
            justify-center gap-2 rounded-xl border border-slate-200
            bg-white px-7 py-3.5 text-sm font-semibold text-slate-700
            hover:bg-slate-100 transition-all duration-200"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={19} />
            Go Back
          </button>

        </div>

        {/* Footer Text */}
        <p className="mt-12 text-sm text-slate-400">
          Need help? Contact our support team.
        </p>

      </div>

    </div>
  );
}

export default PageNotFound;