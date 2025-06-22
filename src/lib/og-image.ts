export interface OGImageParams {
  title?: string;
  description?: string;
  type?: "website" | "article" | "portfolio" | "service";
}

export function generateOGImageURL({
  title,
  description,
  type = "website",
}: OGImageParams): string {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://paskomichal.pl";

  const params = new URLSearchParams();
  if (title) params.append("title", title);
  if (description) params.append("description", description);
  params.append("type", type);

  return `${baseUrl}/api/og?${params.toString()}`;
}
