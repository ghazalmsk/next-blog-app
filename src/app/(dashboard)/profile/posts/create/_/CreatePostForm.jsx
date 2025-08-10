"use client";
import { Controller, set, useForm } from "react-hook-form";
import RHFTextField from "@/components/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/ui/Button";
import RHFSelect from "@/components/ui/RHFSelect";
import * as yup from "yup";
import useCategories from "@/hook/useCategory";
import TextField from "@/components/ui/TextField";
import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useCreatePost from "./useCreatePost";
import useEditPost from "./useEditPost";
import { useRouter } from "next/navigation";
import FileInput from "@/components/ui/FileInput";
import { SpinnerMini } from "@/components/ui/Spinner";
import { imageUrlToFile } from "@/utils/fileFormatter";
// import { imageUrlToFile } from "@/utils/fileFormatter";
// import { revalidatePath } from "next/cache";
// import Loading from "@/components/ui/Loading";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "Please enter at least 5 characters")
      .required("Title is required"),
    briefText: yup
      .string()
      .min(10, "Please enter at least 10 characters")
      .required("Brief description is required"),
    text: yup
      .string()
      .min(10, "Please enter at least 10 characters")
      .required("Description is required"),
    slug: yup.string().required("Slug is required"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("Reading time is required")
      .typeError("Please enter a valid number"),
    category: yup.string().required("Category is required"),
  })
  .required();

function CreatePostForm({ postToEdit = {} }) {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    briefText,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevPostCoverImageUrl,
  } = postToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      briefText,
      slug,
      readingTime,
      category: category._id,
      coverImage,
    };
  }

  const { categories } = useCategories();
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const [coverImageUrl, setCoverImageUrl] = useState(
    prevPostCoverImageUrl || null
  );
  const router = useRouter();

  const {
    control,
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevPostCoverImageUrl) {
      async function fetchMyAPI() {
        const file = await imageUrlToFile(prevPostCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyAPI();
    }
  }, [editId]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts");
            // revalidatePath(`/profile/posts/${editId}/edit`, "page");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
          // revalidatePath("/profile/posts");
          reset();
        },
      });
    }
  };

  return (
    <form
      className="bg-secondary-0 p-5 rounded-lg "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RHFTextField
          label="title"
          name="title"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="brief text"
          name="briefText"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="text"
          name="text"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="slug"
          name="slug"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="reading time"
          name="readingTime"
          register={register}
          required
          errors={errors}
        />
        <RHFSelect
          label="category"
          required
          name="category"
          register={register}
          options={categories}
        />
        <Controller
          control={control}
          name="coverImage"
          rules={{ required: "Post cover photo is required." }}
          render={({ field: { value, onChange, ...rest } }) => {
            return (
              <FileInput
                {...rest}
                value={value?.fileName}
                isRequired
                errors={errors}
                onChange={(event) => {
                  const file = event.target.files[0];
                  onChange(file);
                  setCoverImageUrl(URL.createObjectURL(file));
                  event.target.value = null;
                }}
                label="post cover"
                type="file"
                name="coverImage"
              />
            );
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {coverImageUrl && (
          <div className="relative aspect-video aspect-h-9 overflow-hidden rounded-lg">
            <Image
              className="object-cover object-center"
              fill
              alt="cover-iamge"
              src={coverImageUrl}
            />
            <ButtonIcon
              type="button"
              onClick={() => {
                setCoverImageUrl(null);
                setValue("coverImage", null);
              }}
              variant="red"
              className="w-6 h-6 absolute !left-0"
            >
              <XMarkIcon />
            </ButtonIcon>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        {isCreating || isEditing ? (
          <SpinnerMini />
        ) : (
          <Button
            variant="primary"
            type="submit"
            className="w-full lg:max-w-32 "
          >
            submit
          </Button>
        )}
      </div>
    </form>
  );
}
export default CreatePostForm;
