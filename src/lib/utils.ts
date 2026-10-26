export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]) {
  const classes = inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string") return input.split(" ");
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([, val]) => Boolean(val))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean);

  if (classes.includes("hidden")) {
    return classes
      .filter(
        (cls) =>
          cls !== "inline-flex" &&
          cls !== "flex" &&
          cls !== "block" &&
          cls !== "inline-block"
      )
      .join(" ");
  }

  return classes.join(" ");
}
