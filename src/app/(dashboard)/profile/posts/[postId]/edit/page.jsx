import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId);
 
  if (!post) {
    notFound();
  }
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "posts", href: "/profile/posts" },
          {
            label: "edit post",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        create new post
      </h1>
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPage;
