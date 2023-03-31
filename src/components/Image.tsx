type ImageProps = {
  id?: string;
  className?: string;
  src: string;
  alt: string;
};

export default function Image({ id, className, src, alt }: ImageProps) {
  return (
    <img
      id={id || ""}
      className={className || ""}
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt}
    />
  );
}
