import Americano from "../pages/cafe/assets/Americano.png";
import bagel from "../pages/cafe/assets/bagel.png";
import chestnutLatte from "../pages/cafe/assets/chestnutLatte.png";
import coldBrew from "../pages/cafe/assets/coldBrew.png";
import icedTea from "../pages/cafe/assets/icedTea.png";
import saltBread from "../pages/cafe/assets/saltBread.png";
import strawberryJuice from "../pages/cafe/assets/strawberryJuice.png";
import strawberryLatte from "../pages/cafe/assets/strawberryLatte.png";

const cafe = {
  coffee: [
    {
      image: Americano,
      name: "아메리카노",
      price: 1700,
      isSoldOut: false,
    },
    {
      image: coldBrew,
      name: "콜드브루",
      price: 2800,
      isSoldOut: false,
    },
  ],
  noncoffee: [
    {
      image: icedTea,
      name: "아이스티",
      price: 2100,
      isSoldOut: false,
    },
  ],
  dessert: [
    {
      image: saltBread,
      name: "소금빵",
      price: 5100,
      isSoldOut: false,
    },
    {
      image: bagel,
      name: "베이글",
      price: 6000,
      isSoldOut: false,
    },
  ],
  season: [
    {
      image: strawberryJuice,
      name: "딸기주스",
      price: 6000,
      isSoldOut: false,
    },
    {
      image: strawberryLatte,
      name: "딸기라떼",
      price: 7000,
      isSoldOut: false,
    },
    {
      image: chestnutLatte,
      name: "꿀밤라떼",
      price: 7500,
      isSoldOut: true,
    },
  ],
};

const beverageOptions = [
  {
    option: "무료 옵션",
    info: [
      {
        name: "얼음 적게",
        price: 0,
      },
      {
        name: "얼음 많이",
        price: 0,
      },
      {
        name: "덜 달게",
        price: 0,
      },
    ],
  },
  {
    option: "유료 옵션",
    info: [
      {
        name: "샷 추가",
        price: 300,
      },
      {
        name: "휘핑 추가",
        price: 500,
      },
    ],
  },
];
const dessertOptions = [
  {
    option: "무료 옵션",
    info: [
      {
        name: "뜨겁게 (10분 소요)",
        price: 0,
      },
    ],
  },
];

export { cafe, beverageOptions, dessertOptions };
