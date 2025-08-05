import { fetchCardData } from "@/services/data";
import Card from "./_components/Card";

async function Profile() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title={"users"} value={numberOfUsers} type="users" />
        <Card title={"posts"} value={numberOfPosts} type="posts" />
        <Card title={"comments"} value={numberOfComments} type="comments" />
      </div>
    </div>
  );
}
export default Profile;
