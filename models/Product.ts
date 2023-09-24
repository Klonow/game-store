import type { Tag } from "~/components/ui/BaseTags.vue";

export interface PopularProduct {
  title: string
  discount: string
  tags: Tag[],
  imageSrc: string,
  oldPrice: string,
  price: string
}
