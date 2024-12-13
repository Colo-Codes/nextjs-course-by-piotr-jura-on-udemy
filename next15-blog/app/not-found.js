import Link from "next/link";
import { Frown, Home, RotateCcw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-gray-100">404</h1>
          <h2 className="text-3xl font-bold text-gray-400">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-200">
            Looks like this page went BOOM!
          </p>
        </div>

        <div className="w-64 h-64 mx-auto">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            aria-label="Cartoon bomb with lit fuse"
          >
            {/* Fuse */}
            <path
              d="M100 40 Q120 20 140 40"
              fill="none"
              stroke="#8B4513"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                values="M100 40 Q120 20 140 40;M100 40 Q120 60 140 40;M100 40 Q120 20 140 40"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
            {/* Spark */}
            <circle cx="142" cy="40" r="3" fill="#FFD700">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Bomb body */}
            <circle cx="100" cy="120" r="70" fill="#000000" />
            {/* Bomb highlight */}
            <circle cx="80" cy="100" r="10" fill="#FFFFFF" opacity="0.5" />
            {/* Bomb cap */}
            <rect x="85" y="40" width="30" height="20" fill="#444444" />
          </svg>
        </div>

        <p className="text-gray-400 italic">
          "Looks like our page is having an explosive identity crisis!"
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button asChild>
            <Link href="/" className="flex items-center justify-center">
              <Home className="mr-2" size={20} />
              Defuse the Situation
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
