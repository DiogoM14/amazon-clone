import React from "react";

import { Container, HomeContainer, HomeRow } from "./styles";

import Product from "../Product";

import HomeBanner from "../../assets/home-banner.jpg";

export default function index() {
  return (
    <Container>
      <HomeContainer>
        <img src={HomeBanner} alt="" />

        <HomeRow>
          <Product
            id="35235543"
            title="Dell XPS 15 7590 Home and Business Laptop (Intel i7-9750H 6-Core, 32GB RAM, 512GB PCIe SSD, NVIDIA GTX 1650, 15.6 4K UHD (3840x2160), Wifi, Bluetooth, 2xUSB 3.1, 1xHDMI, Backlit Keyboard, Win 10 Pro)"
            price={2094.99}
            image="https://m.media-amazon.com/images/I/71yT4xJt8JL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="3523125635"
            title="48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={15.49}
            image="https://m.media-amazon.com/images/I/71UyNLSv2mL._AC_UY218_.jpg"
            rating={4}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="3523512312"
            title="MFi-Certified Lightning to USB A Cable for Apple iPhone and iPad - 6 Feet (1.8 Meters) - 2 -Pack - White"
            price={17.99}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="3523509675"
            title="Non-Stick Cookware Set, Pots, Pans and Utensils - 15-Piece Set"
            price={51.99}
            image="https://m.media-amazon.com/images/I/61x-NhdKBmL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="3523835235"
            title="Down Alternative Bed Comforter, Full / Queen, White, Light"
            price={36.07}
            image="https://m.media-amazon.com/images/I/71q-QpZdqqL._AC_UY218_.jpg"
            rating={3}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="3514046235"
            title="Blue, White, and Yellow Microfiber Cleaning Cloth - Pack of 24"
            price={16.03}
            image="https://m.media-amazon.com/images/I/81wUWVAiWDL._AC_UY218_.jpg"
            rating={4}
          />
        </HomeRow>
      </HomeContainer>
    </Container>
  );
}
