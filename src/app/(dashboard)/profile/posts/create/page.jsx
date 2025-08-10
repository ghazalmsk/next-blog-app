import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CreatePostForm from "./_/CreatePostForm";

function CreatePostPage() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "posts", href: "/profile/posts" },
          {
            label: "create post",
            href: `/profile/posts/create`,
            active: true,
          },
        ]}
      />
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        create new post
      </h1>
      <CreatePostForm />
    </div>
  );
}
export default CreatePostPage;
