import Card from "./Card";
import { fetchCardData } from "@/services/data";

async function CardsWrapper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title={"users"} value={numberOfUsers} type="users" />
      <Card title={"posts"} value={numberOfPosts} type="posts" />
      <Card title={"comments"} value={numberOfComments} type="comments" />
    </div>
  );
}

export default CardsWrapper;
