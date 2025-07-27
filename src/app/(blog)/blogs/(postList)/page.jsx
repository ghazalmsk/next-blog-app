import PostList from "@/components/blog/PostList";
import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  const { q } = searchParams;
  const resultText = posts.length > 1 ? "results" : "result";

  // export const revalidate = 3600;
  // export const experimental_ppr = true;

  return (
    <>
      {q ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "Nothing matches your search!"
            : `showing ${posts.length} ${resultText} for`}
          <span className="mx-1">&quot;{q}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />

      {/* <p className="text-secondary-500 mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nulla
        porro sunt, vel nostrum eius iure possimus laboriosam quisquam velit
        voluptatibus numquam minima suscipit voluptatum dolor cumque
        exercitationem nesciunt voluptatem?
      </p> */}
      {/* <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense> */}
    </>
  );
}

export default BlogPage;
