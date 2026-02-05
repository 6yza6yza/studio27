import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatArea(area: string | undefined): string {
  if (!area) return "";
  return area;
}
