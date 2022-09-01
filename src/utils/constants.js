import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Chillwave magna taiyaki ea, activated charcoal aesthetic vegan lomo jean shorts authentic listicle elit sint. Marfa pickled distillery, selvage id edison bulb excepteur tacos raclette woke. ",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Single-origin coffee affogato cliche franzen praxis godard sartorial, deep v tbh big mood you probably haven't heard of them church-key fashion axe cornhole marfa.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Vegan woke beard cronut vape austin etsy literally elit roof party yuccie fit. Tumeric cronut consequat, sus whatever raw denim kale chips aesthetic live-edge vaporware unicorn fixie narwhal.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
