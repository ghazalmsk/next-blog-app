import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-red-600 mb-8">
              nothing post
            </h1>
            <Link href="/blogs" className="text-secondary-500">
              go to posts page?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
