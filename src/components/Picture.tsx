import type { ImgHTMLAttributes } from "react";

// Descriptor produced by a `?as=picture` import (vite-imagetools).
export type PictureData = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

export type ImgSrc = string | PictureData;

const isPicture = (s: ImgSrc): s is PictureData =>
  typeof s === "object" && s !== null && "img" in s;

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  data: ImgSrc;
  alt: string;
}

/**
 * Renders a responsive <picture> (AVIF → WebP → original) with intrinsic
 * width/height when given a `?as=picture` descriptor; falls back to a plain
 * <img> for legacy string URLs, so call sites can migrate incrementally.
 * className / loading / style etc. land on the inner <img>.
 */
const Picture = ({ data, alt, className, ...rest }: Props) => {
  if (!isPicture(data)) {
    return <img src={data} alt={alt} className={className} {...rest} />;
  }
  const { img, sources } = data;
  return (
    <picture>
      {Object.entries(sources).map(([fmt, srcSet]) => (
        // imagetools keys sources by bare format ("avif"/"webp"); browsers need
        // a full MIME type to honour the <source>.
        <source key={fmt} srcSet={srcSet} type={fmt.includes("/") ? fmt : `image/${fmt}`} />
      ))}
      <img src={img.src} width={img.w} height={img.h} alt={alt} className={className} {...rest} />
    </picture>
  );
};

export default Picture;
