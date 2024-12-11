import Card from "@/components/Card";

export default async function ProjectList() {
  const data = await fetch("http://localhost:3001/repos");
  const repos = await data.json();

  throw new Error("💣 I'm broken!");

  return (
    <div className="mt-4 text-lg text-gray-500 dark:text-gray-400">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <li key={repo.id} className="mb-4">
            <Card className="font-mono bg-gray-100 dark:bg-gray-900 h-full">
              <div className="mb-4">
                <span className="font-bold text-orange-100 font-mono text-sm bg-orange-500 p-1 px-2 rounded-full">
                  {repo.id}
                </span>
                <span className="font-bold ml-2">{repo.title}</span>
                <span className="font-mono text-xs align-super ml-1">
                  (<span className="mr-1">⭐</span>
                  {repo.stargazers_count})
                </span>
              </div>
              <div className="ml-2">{repo.description}</div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
