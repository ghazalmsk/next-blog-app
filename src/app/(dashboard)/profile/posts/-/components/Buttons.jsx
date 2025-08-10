"use client";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-1 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <PlusIcon className="w-5" />
      <span className="hidden md:block">create post</span>{" "}
    </Link>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export function DeletePost() {
  return (
    <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
      <TrashIcon className="text-error" />
    </ButtonIcon>
  );
}
