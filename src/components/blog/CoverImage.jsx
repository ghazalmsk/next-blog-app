import Image from "next/image";
import Link from "next/link";

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-110 translate-all duration-300 ease-out"
          quality={90}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
