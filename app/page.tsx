/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "./action";
import FeaturedProducts from "./featured-products";
import { ProductType } from "./utils";
import Image from "next/image";
import monitor from "@/public/samsung-monitor.png";
import Link from "next/link";
import male from "@/public/male.webp";
import female from "@/public/female.png";

export default async function Page() {
  const products: ProductType[] = await getFeaturedProducts();

  return (
    <main>
      <section className="grid md:grid-cols-2 bg-homepage bg-cover bg-center p-5 md:px-16 md:py-8">
        <div className="space-y-6 flex flex-col py-20 justify-between h-full">
          <div className="space-y-2 text-center md:text-start">
            <h1 className="font-bold text-3xl">
              Get The New QLED Gaming Monitor
            </h1>
            <h1 className="font-bold text-3xl">For True Gamers</h1>
            <p className="text-muted-foreground uppercase">
              even better than it's looks
            </p>
          </div>
          <Link className="mx-auto md:mx-0" href="/product/14">
            <Button size={"lg"} className="rounded-full text-lg">
              View Now
            </Button>
          </Link>
        </div>
        <div>
          <Image src={monitor} alt="Samsung Monitor" />
        </div>
      </section>
      <section className="grid md:grid-cols-2 md:my-16 mb-8 md:mb-0">
        <div className="bg-sky-500 flex h-[30dvh] items-center px-16 py-4 gap-10 text-white text-center md:text-start">
          <div className="space-y-2">
            <h2 className="text-lg">
              Find The Best Men Clothing In The World!
            </h2>
            <p className="text-sm">
              From t-shirt to the best leather jackets, in the cheapest cost
            </p>
            <Link href="/category/men's%20clothing">
              <Button className="mt-4 rounded-full">Shop Now</Button>
            </Link>
          </div>
          <div className="md:block hidden">
            <Image
              className="bg-contain h-full w-full my-auto"
              src={male}
              alt="male"
            />
          </div>
        </div>
        <div className="bg-pink-300 h-[30dvh] flex items-center px-16 py-4 text-white text-center md:text-start">
          <div className="space-y-2">
            <h2 className="text-lg">
              Find The Best Women Clothing In The World!
            </h2>
            <p className="text-sm">
              From beauty bags to the best leather jackets, in the cheapest cost
            </p>
            <Link href="/category/women's%20clothing">
              <Button className="rounded-full mt-4">Shop Now</Button>
            </Link>
          </div>
          <div className="md:block hidden">
            <Image
              className="w-full h-full bg-contain my-auto"
              src={female}
              alt="female"
            />
          </div>
        </div>
      </section>
      <section className="p-5 md:px-16 md:py-8">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <FeaturedProducts products={products} />
      </section>
    </main>
  );
}
