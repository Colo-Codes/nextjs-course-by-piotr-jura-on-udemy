export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Loading...
      </h1>
      <div className="mt-4 text-lg text-gray-500 dark:text-gray-400">
        <div className="animate-pulse flex space-x-4 w-[500px]">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-gray-300 rounded col-span-2"></div>
                <div className="h-4 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
