"use client";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const schema = yup
  .object({
    email: yup.string().email().required(".ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است."),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-center">ورود</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" variant="primary" className="w-full mt-4">
          submit
        </Button>
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        ایجاد حساب کاربری
      </Link>
    </div>
  );
}

export default Signin;
