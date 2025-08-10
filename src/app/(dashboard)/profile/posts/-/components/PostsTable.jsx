import Empty from "@/components/ui/Empty";
import Table from "@/components/ui/Table";
import { getPosts } from "@/services/postServices";
import PostRow from "./PostRow";

async function PostsTable({ query = "" }) {
  const { posts } = await getPosts(query);

  if (!posts.length) return <Empty resourceName={"Posts"} />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>subject</th>
        <th>category</th>
        <th>author</th>
        <th>create date</th>
        <th>type</th>
        <th>action</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PostsTable;
