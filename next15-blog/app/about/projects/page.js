// export const dynamic = "force-dynamic"; // Prevents static generation

import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
