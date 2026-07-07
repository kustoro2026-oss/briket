import { redirect } from "next/navigation";
import { getProducts } from "@/lib/data";

export default function OurProductsPage() {
  const products = getProducts();
  if (products.length > 0) {
    redirect(`/our-products/${products[0].slug}`);
  }
  return null;
}
