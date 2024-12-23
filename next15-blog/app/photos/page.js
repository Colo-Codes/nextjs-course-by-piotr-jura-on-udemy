import Image from "next/image";
import dog1 from "@/public/images/dog1.png";
import dog2 from "@/public/images/dog2.png";
import dog3 from "@/public/images/dog3.png";
import dog4 from "@/public/images/dog4.png";

export const metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Photos!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            src={dog1}
            className="object-cover w-full h-full"
            alt="Picture of a dog"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            priority
            quality={100}
          />
        </div>
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            src={dog2}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Picture of a dog"
            placeholder="blur"
            priority
            quality={10}
          />
        </div>
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            src={dog3}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Picture of a dog"
            placeholder="blur"
          />
        </div>
        <div className="h-60 overflow-hidden relative">
          <Image
            fill
            src={dog4}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Picture of a dog"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
