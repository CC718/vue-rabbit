import httpInstance from "@/utils/http";

export function getCategory() {
 return httpInstance({
  url: "home/categpry/head",
 });
}
