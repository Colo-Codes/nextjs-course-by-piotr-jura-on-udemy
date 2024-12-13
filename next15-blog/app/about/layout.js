export default function AboutLayout({ children }) {
  //   throw new Error("Error on About Layout");

  return (
    <>
      {children}

      <div className="mt-8">
        <h2 className="mb-4 text-xl">You might also like</h2>
        <ul>
          <li>A blog post</li>
          <li>Another blog post</li>
          <li>One last blog post</li>
        </ul>
      </div>
    </>
  );
}
