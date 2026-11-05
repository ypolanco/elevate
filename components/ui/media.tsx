import Image from "next/image";

import type { SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";

type MediaProps = {
  image: SiteImage;
  className?: string;
  imageClassName?: string;
  sizes: string;
  preload?: boolean;
  /** Pass true when the image is decorative alongside equivalent text. */
  decorative?: boolean;
};

/** Fill-mode photo inside a sized frame, with blur placeholder from static import. */
export function Media({ image, className, imageClassName, sizes, preload, decorative }: MediaProps) {
  return (
    <div className={cn("relative overflow-hidden bg-slate-200", className)}>
      <Image
        src={image.src}
        alt={decorative ? "" : image.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        preload={preload}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
