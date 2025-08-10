import { Suspense } from "react";
import PostsTable from "./-/components/PostsTable";
import queryString from "query-string";
import Search from "@/components/ui/Search";
import { Spinner } from "@/components/ui/Spinner";
import { getPosts } from "@/services/postServices";
import Pagination from "@/components/ui/Pagination";
import { CreatePost } from "./-/components/Buttons";

async function Page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(query);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">Posts List</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />}>
        <PostsTable query={query} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Page;
