import PostsTable from "./posts/-/components/PostsTable";
import { Suspense } from "react";
import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/components/ui/Fallback";

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">dashboard</h1>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>
      <h1 className="text-xl mb-8 text-secondary-700">latest posts</h1>
      <Suspense fallback={<Fallback />}>
        <PostsTable query="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
}
export default Profile;
