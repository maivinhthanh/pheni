const colorName = {
  Secondary: "gray",
  Primary: "sky",
  Error: "rose",
  Warning: "amber",
  Info: "green",
  Default: "Slate",
};

export const getColor = (
  color: "Secondary" | "Primary" | "Error" | "Warning" | "Info" | "Default"
) => {
  return colorName[color];
};
