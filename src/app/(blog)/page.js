import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        manage blogs app
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          Where you can manage a complete blog application!
          <br /> You can create a blog - leave comments and monitor everything
          that happens in your panel!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline">
            <Link href="/blogs">read blogs</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile">manage blogs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
