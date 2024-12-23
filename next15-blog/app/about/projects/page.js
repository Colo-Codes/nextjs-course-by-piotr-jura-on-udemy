// export const dynamic = "force-dynamic"; // Prevents static generation

import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import { ErrorBoundary } from "react-error-boundary";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <ErrorBoundary fallback={<div>😓 Can&apos;t load projects</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
