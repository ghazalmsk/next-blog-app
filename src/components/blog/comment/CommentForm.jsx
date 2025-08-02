"use client";
import SubmitButton from "@/components/ui/SubmitButton";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);
  const ref = useRef(null);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-md  w-full">
        <form
          ref={ref}
          className="space-y-7"
          action={async (formData) => {
            await formAction({ formData, postId, parentId });
            ref?.current?.reset();
          }}
        >
          <TextArea
            name="text"
            label="Your comment"
            value={text}
            isRequired
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mt-8">
            <SubmitButton type="submit" className="w-full">
              {parentId ? "Submit Reply" : "Submit Comment"}
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CommentForm;
