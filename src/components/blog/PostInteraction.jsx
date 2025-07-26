import ButtonIcon from "@/components/ui/ButtonIcon";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function PostInteraction({ post }) {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{post.commentsCount}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
