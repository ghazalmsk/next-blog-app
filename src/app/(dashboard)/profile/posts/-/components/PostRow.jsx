import Table from "@/components/ui/Table";
import truncateText from "@/utils/trancateText";
import { DeletePost, UpdatePost } from "./Buttons";

const statusStyle = {
  free: {
    label: "free",
    className: "badge--success",
  },
  premium: {
    label: "premium",
    className: "badge--secondary",
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{createdAt}</td>
      <td>
        <span className={`badge ${statusStyle[type].className}`}>
          {statusStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdatePost id={post._id} />
          {/* <DeletePost /> */}
        </div>
      </td>
    </Table.Row>
  );
}
export default PostRow;
