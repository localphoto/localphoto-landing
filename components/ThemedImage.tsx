"use client";

import Image, { ImageProps } from "next/image";
import { useTheme } from "next-themes";

type ThemedImageProps = {
  lightSrc: string;
  darkSrc: string;
};

export default function ThemedImage({
  lightSrc,
  darkSrc,
  ...props
}: ThemedImageProps & Omit<ImageProps, "src">) {
  const { resolvedTheme } = useTheme();
  return (
    <Image src={resolvedTheme === "dark" ? darkSrc : lightSrc} {...props} />
  );
}
