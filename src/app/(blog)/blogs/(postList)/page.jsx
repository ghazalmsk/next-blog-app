import { Suspense } from "react";
import { Spinner } from "@/components/ui/Spinner";
import PostList from "@/components/blog/PostList";

// export const revalidate = 3600;
export const experimental_ppr = true;

function BlogPage() {
  return (
    <div>
      <p className="text-secondary-500 mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nulla
        porro sunt, vel nostrum eius iure possimus laboriosam quisquam velit
        voluptatibus numquam minima suscipit voluptatum dolor cumque
        exercitationem nesciunt voluptatem?
      </p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
