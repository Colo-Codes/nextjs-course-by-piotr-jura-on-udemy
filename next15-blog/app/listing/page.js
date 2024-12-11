export default function ListingPage() {
  if (process.browser) {
    console.log(">>> 🍏 app/listing/page (server component) - on CLIENT side");
  } else {
    console.log(">>> 🍎 app/listing/page (server component) - on SERVER side");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Listing
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </p>
    </div>
  );
}
