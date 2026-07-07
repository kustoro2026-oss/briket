import productsData from "@/data/products.json";
import blogData from "@/data/blog.json";
import faqData from "@/data/faq.json";
import teamData from "@/data/team.json";
import certificatesData from "@/data/certificates.json";
import packagingData from "@/data/packaging.json";
import productionStepsData from "@/data/production-steps.json";

export function getProducts() {
  return productsData;
}

export function getProductBySlug(slug: string) {
  return productsData.find((p) => p.slug === slug) || null;
}

export function getBlogPosts() {
  return blogData;
}

export function getBlogPostBySlug(slug: string) {
  return blogData.find((p) => p.slug === slug) || null;
}

export function getRecentBlogPosts(count: number = 5) {
  return [...blogData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getFaqs() {
  return faqData;
}

export function getTeamMembers() {
  return teamData;
}

export function getCertificates() {
  return certificatesData;
}

export function getPackaging() {
  return packagingData;
}

export function getProductionSteps() {
  return productionStepsData;
}
