"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p className="p-1 my-1 bg-red-900 text-red-100">{error.message}</p>
      <button
        className="p-2 border rounded-md mt-2 hover:bg-slate-600 active:bg-slate-500"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }
        }
      >
        Try again
      </button>
    </div>
  );
}
