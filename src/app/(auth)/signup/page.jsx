"use client";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { SpinnerMini } from "@/components/ui/Spinner";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است.")
      .max(30)
      .required("نام و نام خانوادگی الزامی است."),
    email: yup
      .string()
      .email("ایمیل نامعتبر است.")
      .required(".ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است."),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label={"نام و نام خانوادگی"}
          name={"name"}
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label={"ایمیل"}
          name={"email"}
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label={"رمز عبور"}
          name={"password"}
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Button type="submit" variant="primary" className={"w-full"}>
            تایید
          </Button>
        )}
        
      </form>
      <Link href="/signin" className="text-secondary-400 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
}

export default Signup;
