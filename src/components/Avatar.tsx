import { useMemo } from "react";
import { Image, ImageProps } from "react-native";
import clsx from "clsx";

type AvatarProps = ImageProps & {
  size?: "small" | "medium";
};

export const Avatar = ({ size = "medium", ...props }: AvatarProps) => {
  const classes = useMemo(
    () => ({
      "w-8 h-8": size === "small",
      "w-10 h-10": size === "medium",
    }),
    [size]
  );

  return <Image className={clsx("rounded-full", classes)} {...props} />;
};
