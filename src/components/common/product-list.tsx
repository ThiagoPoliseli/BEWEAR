"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";
interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          200: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="max-w-[500px] md:max-w-none">
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
