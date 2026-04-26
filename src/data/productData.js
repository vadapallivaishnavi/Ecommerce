const products = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "indoor",
    price: 349,
    rating: 4.3,
    description:
      "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    image:
      "/public/images/Aloe Vera.webp",
    images: [
      "/public/images/Aloe Vera.webp",
      "https://m.media-amazon.com/images/I/91pX+J55JdL._AC_UF894,1000_QL80_.jpg",
    ],
    reviews: [
      {
        user: "Anu",
        text: "Aloe Vera is beautiful and arrived in great condition.",
      },
      {
        user: "Meera",
        text: "Really happy with Aloe Vera. Looks premium and healthy.",
      },
    ],
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "indoor",
    price: 399,
    rating: 4.4,
    description:
      "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    image:
      "/public/images/snake.jpg",
    images: [
      "/public/images/snake.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFbD-qYRYvMu0hubBbyMbe09gMQH0G9F0BV5ZletWH1TeUTvrVoihtQgUkuK5CPUKPNmCk30UWuhZSv9Cg3cca5BmPn_47OKshfDwV61-&s=10",
    ],
    reviews: [
      {
        user: "Anu",
        text: "Snake Plant is beautiful and arrived in great condition.",
      },
      {
        user: "Meera",
        text: "Really happy with Snake Plant. Looks premium and healthy.",
      },
    ],
  },
  {
    "id": 3,
    "name": "Peace Lily",
    "category": "indoor",
    "price": 449,
    "rating": 4.5,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "/public/images/peacelily.jpg",
    "images": [
      "/public/images/peacelily.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6nqQvmYlR7OTESZdUH6ZFejNzqATfKkgPw&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Peace Lily is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Peace Lily. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 4,
    "name": "Areca Palm",
    "category": "indoor",
    "price": 499,
    "rating": 4.6,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "/public/images/Areca.jpg",
    "images": [
      "/public/images/Areca.jpg",
      "https://www.dekorcompany.com/cdn/shop/files/DEKO0867.jpg?v=1747037676"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Areca Palm is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Areca Palm. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 5,
    "name": "Jade Plant",
    "category": "indoor",
    "price": 299,
    "rating": 4.7,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "/public/images/jade.jpg",
    "images": [
      "/public/images/jade.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPTdlvkEXipToAXORDuT7LVQla3QzALMdYfXzm2nC4CyNeHBeFGnqZ01gCSjnX2k2AFojHKBbPecTuI33gGGDNpNMudj-qRiQczgOckt9&s=10"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Jade Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Jade Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 6,
    "name": "ZZ Plant",
    "category": "indoor",
    "price": 349,
    "rating": 4.8,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "/public/images/ZZplant.webp",
    "images": [
      "/public/images/ZZplant.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNC-sCI-KDiqmJ3BnVZ3O2OcC2ziASh5sxJdoDxvcz5ksIH53Pl7006CQi09ASa_LjdIJDIm4_J6ZC9fuswcPdiOlZVmAiPzhFluC0pAI&s=10"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "ZZ Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with ZZ Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 7,
    "name": "Pothos",
    "category": "indoor",
    "price": 399,
    "rating": 4.2,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzHfh6o4i8WF48_FEzWAobUgzDAGTvDMGL8IXRA4qs8rrpJHY4wKmyBRguNlpsWK8GJeoz9HULE6uVvQLFBDsDGoAGvuc4kY38u3mhAC98g&s=10"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Pothos is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Pothos. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 8,
    "name": "Rubber Plant",
    "category": "indoor",
    "price": 449,
    "rating": 4.3,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "public/images/Rubberplant.jpg",
    "images": [
      "public/images/Rubberplant.jpg",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQO7gayuvIQ8Z8gu0m3Odp4uISIePBShi1KSdHGWfYv14XoknCuwhbg21fhYFoa8MMyQBHnzy-rB3BgMXa__NEeZSKM39i1"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Rubber Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Rubber Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 9,
    "name": "Philodendron",
    "category": "indoor",
    "price": 499,
    "rating": 4.4,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "public/images/philodendron-monstera-bananier.jpg",
    "images": [
      "public/images/philodendron-monstera-bananier.jpg",
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Philodendron is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Philodendron. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 10,
    "name": "Anthurium",
    "category": "indoor",
    "price": 299,
    "rating": 4.5,
    "description": "Beautiful low-maintenance indoor plant ideal for homes, bedrooms, living rooms, and workspaces.",
    "image": "https://rootsraja.in/cdn/shop/files/94384af5-11c0-4982-a936-fb84b5131b48.png?v=1755170909",
    "images": [
      "https://rootsraja.in/cdn/shop/files/94384af5-11c0-4982-a936-fb84b5131b48.png?v=1755170909",
      "https://greenkin.in/cdn/shop/files/anthurium-mini-pink-plant-small-eco-pot-red-greenkin.webp?v=1728273817"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Anthurium is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Anthurium. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 11,
    "name": "Rose Plant",
    "category": "outdoor",
    "price": 399,
    "rating": 4.3,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://bouqs.com/blog/wp-content/uploads/2018/08/shutterstock_1662182848-min-1080x719.jpg",
    "images": [
      "https://bouqs.com/blog/wp-content/uploads/2018/08/shutterstock_1662182848-min-1080x719.jpg",
      "public/images/rose.jpeg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Rose Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Rose Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 12,
    "name": "Lavender Plant",
    "category": "outdoor",
    "price": 449,
    "rating": 4.4,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=900&q=80",
      "public/images/lavendar.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Lavender Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Lavender Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 13,
    "name": "Hibiscus Plant",
    "category": "outdoor",
    "price": 499,
    "rating": 4.5,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://trexplants.com/wp-content/uploads/2020/12/sidewinder-dec-small.jpg",
    "images": [
      "https://trexplants.com/wp-content/uploads/2020/12/sidewinder-dec-small.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/504137643/MS/PV/ID/232166916/red-hibiscus-flower-plant-500x500.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Hibiscus Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Hibiscus Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 14,
    "name": "Jasmine Plant",
    "category": "outdoor",
    "price": 549,
    "rating": 4.6,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "public/images/jasmine.jpg",
    "images": [
      "public/images/jasmine.jpg",
      "https://m.media-amazon.com/images/I/61xreWtQL6L._AC_UF1000,1000_QL80_.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Jasmine Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Jasmine Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 15,
    "name": "Marigold Plant",
    "category": "outdoor",
    "price": 349,
    "rating": 4.7,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "public/images/marigold.jpg",
    "images": [
      "public/images/marigold.jpg",
      "https://rukminim2.flixcart.com/image/480/640/xif0q/plant-sapling/m/b/n/-original-imahk548rfzsz9wd.jpeg?q=90"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Marigold Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Marigold Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 16,
    "name": "Bougainvillea",
    "category": "outdoor",
    "price": 399,
    "rating": 4.8,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://media.istockphoto.com/id/1159409933/photo/a-bonsai-bougainvillea-with-lilac-flowers.jpg?s=612x612&w=0&k=20&c=IsbuOcqG6RcdD-RZd9FC9kBGP6X-0F4vYtUassBiDZU=",
    "images": [
      "https://media.istockphoto.com/id/1159409933/photo/a-bonsai-bougainvillea-with-lilac-flowers.jpg?s=612x612&w=0&k=20&c=IsbuOcqG6RcdD-RZd9FC9kBGP6X-0F4vYtUassBiDZU=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vOaXpKDDa132OVsKzv5R0rwDRLr-vqAOnw&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bougainvillea is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bougainvillea. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 17,
    "name": "Ixora Plant",
    "category": "outdoor",
    "price": 449,
    "rating": 4.2,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "public/images/Ixora.png",
    "images": [
      "public/images/Ixora.png",
      "https://vgrgardens.com/wp-content/uploads/2022/10/singapuri-ixora-red-plant-vgr-gardens.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Ixora Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Ixora Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 18,
    "name": "Mogra Plant",
    "category": "outdoor",
    "price": 499,
    "rating": 4.3,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://i0.wp.com/buygreen.in/wp-content/uploads/2023/05/beli-flower.jpg?fit=425%2C319&ssl=1",
    "images": [
      "https://i0.wp.com/buygreen.in/wp-content/uploads/2023/05/beli-flower.jpg?fit=425%2C319&ssl=1",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/475823496/JM/OX/FU/155352174/51dbz6npd4l-1099x1113-500x500.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Mogra Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Mogra Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 19,
    "name": "Chrysanthemum",
    "category": "outdoor",
    "price": 549,
    "rating": 4.4,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://www.rhs.org.uk/getmedia/c329fdec-166b-48d7-8bd7-bd089c46fccc/chrysanthemum-desktop-hero-1920x978.jpg",
    "images": [
      "https://www.rhs.org.uk/getmedia/c329fdec-166b-48d7-8bd7-bd089c46fccc/chrysanthemum-desktop-hero-1920x978.jpg",
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-shevanti-chrysanthemum-wine-color-plant.jpg?v=1670229498"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Chrysanthemum is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Chrysanthemum. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 20,
    "name": "Sunflower Plant",
    "category": "outdoor",
    "price": 349,
    "rating": 4.5,
    "description": "Healthy outdoor plant perfect for balconies, terraces, and gardens with vibrant natural appeal.",
    "image": "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=900&q=80",
      "https://rukminim2.flixcart.com/image/480/640/kql8sy80/plant-sapling/m/m/w/sunflower-plant-01-01-click-to-buy-original-imag4kgvhveacsgb.jpeg?q=90"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Sunflower Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Sunflower Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 21,
    "name": "Money Plant",
    "category": "air",
    "price": 329,
    "rating": 4.3,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rQ7_ynX3OgXHkBgsmncws-wrXgJnIvPpA&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rQ7_ynX3OgXHkBgsmncws-wrXgJnIvPpA&s",
      "https://jm.com.sg/cdn/shop/articles/article-image_7_0fc6d135-1200-4ac4-807d-bc5060ded1ae.png?crop=center&height=1200&v=1727082580&width=1200"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Money Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Money Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 22,
    "name": "Hanging Spider Plant",
    "category": "air",
    "price": 379,
    "rating": 4.4,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://i.pinimg.com/736x/8e/cd/45/8ecd4531bded3d951799f66217c2b87d.jpg",
    "images": [
      "https://i.pinimg.com/736x/8e/cd/45/8ecd4531bded3d951799f66217c2b87d.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/8/441646784/TN/OK/IC/3674107/6355cb1fcfc50848b23b4c98-ocean-spider-plant-easy-to-grow-photoroom-1.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Hanging Spider Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Hanging Spider Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 23,
    "name": "English Ivy",
    "category": "air",
    "price": 429,
    "rating": 4.5,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "public/images/english ivy.jpg",
    "images": [
      "public/images/english ivy.jpg",
      "https://www.hariththarang.com/cdn/shop/files/english-ivy-variegated-in-hanging-planter-31808834109572_1024x1024.webp?v=1703662012"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "English Ivy is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with English Ivy. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 24,
    "name": "Bamboo Palm",
    "category": "air",
    "price": 479,
    "rating": 4.6,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://nestreeo.com/wp-content/uploads/2024/08/Bamboo_Plant_2.jpg",
    "images": [
      "https://nestreeo.com/wp-content/uploads/2024/08/Bamboo_Plant_2.jpg",
      "https://dreamgreen.in/cdn/shop/products/image_4817d147-7162-4d33-8d18-f2c5d2a0810f.heic?v=1658948116&width=416"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bamboo Palm is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bamboo Palm. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 25,
    "name": "Peace Lily Air",
    "category": "air",
    "price": 279,
    "rating": 4.7,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "public/images/peacelily.jpg",
    "images": [
      "public/images/peacelily.jpg",
      "https://stacyling.com/wp-content/uploads/2024/11/peace-lily-plant-2.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Peace Lily Air is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Peace Lily Air. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 26,
    "name": "Golden Pothos",
    "category": "air",
    "price": 329,
    "rating": 4.8,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "public/images/GOLDEN MONEY.jpeg",
    "images": [
        "public/images/GOLDEN MONEY.jpeg",
      "https://mybageecha.com/cdn/shop/files/marblequeenpothos_1024x.png?v=1751106110"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Golden Pothos is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Golden Pothos. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 27,
    "name": "Heartleaf Philodendron",
    "category": "air",
    "price": 379,
    "rating": 4.2,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://thumbs.dreamstime.com/b/vertical-shot-potted-heartleaf-philodendron-plant-inside-house-vertical-shot-potted-heartleaf-philodendron-plant-256779828.jpg",
    "images": [
      "https://thumbs.dreamstime.com/b/vertical-shot-potted-heartleaf-philodendron-plant-inside-house-vertical-shot-potted-heartleaf-philodendron-plant-256779828.jpg",
      "https://thumbs.dreamstime.com/b/vertical-shot-potted-heartleaf-philodendron-plant-inside-house-vertical-shot-potted-heartleaf-philodendron-plant-256779828.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Heartleaf Philodendron is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Heartleaf Philodendron. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 28,
    "name": "Bird's Nest Fern",
    "category": "air",
    "price": 429,
    "rating": 4.3,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://i.pinimg.com/736x/a1/65/86/a165863cbecad8d13c1abb2cc0d03315.jpg",
    "images": [
      "https://i.pinimg.com/736x/a1/65/86/a165863cbecad8d13c1abb2cc0d03315.jpg",
      "https://i.pinimg.com/736x/a1/65/86/a165863cbecad8d13c1abb2cc0d03315.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bird's Nest Fern is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bird's Nest Fern. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 29,
    "name": "Chinese Money Plant",
    "category": "air",
    "price": 479,
    "rating": 4.4,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rQ7_ynX3OgXHkBgsmncws-wrXgJnIvPpA&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rQ7_ynX3OgXHkBgsmncws-wrXgJnIvPpA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rQ7_ynX3OgXHkBgsmncws-wrXgJnIvPpA&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Chinese Money Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Chinese Money Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 30,
    "name": "Swiss Cheese Vine",
    "category": "air",
    "price": 279,
    "rating": 4.5,
    "description": "Air-purifying decorative plant that enhances freshness and greenery in your home.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyW0v8d831ya-vErz6N1Wj2xCBtA8JxXJ5A&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyW0v8d831ya-vErz6N1Wj2xCBtA8JxXJ5A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyW0v8d831ya-vErz6N1Wj2xCBtA8JxXJ5A&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Swiss Cheese Vine is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Swiss Cheese Vine. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 31,
    "name": "Cactus Mini",
    "category": "cactus",
    "price": 249,
    "rating": 4.3,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://m.media-amazon.com/images/I/91pX+J55JdL._AC_UF894,1000_QL80_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/91pX+J55JdL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/91pX+J55JdL._AC_UF894,1000_QL80_.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Cactus Mini is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Cactus Mini. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 32,
    "name": "Mini Succulent Set",
    "category": "cactus",
    "price": 1999,
    "rating": 4.4,
    "description": "10 Pack Stylish low-water succulent Set perfect for desks, shelves, and minimal decor.",
    "image": "https://www.chhajedgarden.com/cdn/shop/files/Vitality-Indoor-Assorted-Succulents_525x700.jpg?v=1706683717",
    "images": [
      "https://www.chhajedgarden.com/cdn/shop/files/Vitality-Indoor-Assorted-Succulents_525x700.jpg?v=1706683717",
      "https://www.chhajedgarden.com/cdn/shop/files/Vitality-Indoor-Assorted-Succulents_525x700.jpg?v=1706683717"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Mini Succulent Set is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Mini Succulent Set. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 33,
    "name": "Barrel Cactus",
    "category": "cactus",
    "price": 349,
    "rating": 4.5,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://www.moonvalleynurseries.com/_next/image?url=https%3A%2F%2Fcdn.mvncorp.dev%2Fmedia%2Fproducts%2Fimages%2FGolden%20Barrel%20Cacti-1.Golden%20Barrel%20Cacti&w=3840&q=50",
    "images": [
      "https://www.moonvalleynurseries.com/_next/image?url=https%3A%2F%2Fcdn.mvncorp.dev%2Fmedia%2Fproducts%2Fimages%2FGolden%20Barrel%20Cacti-1.Golden%20Barrel%20Cacti&w=3840&q=50",
      "https://www.moonvalleynurseries.com/_next/image?url=https%3A%2F%2Fcdn.mvncorp.dev%2Fmedia%2Fproducts%2Fimages%2FGolden%20Barrel%20Cacti-1.Golden%20Barrel%20Cacti&w=3840&q=50"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Barrel Cactus is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Barrel Cactus. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 34,
    "name": "Moon Cactus",
    "category": "cactus",
    "price": 399,
    "rating": 4.6,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "public/images/moon.jpg",
    "images": [
      "public/images/moon.jpg",
      "public/images/moon.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Moon Cactus is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Moon Cactus. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 35,
    "name": "Bunny Ear Cactus",
    "category": "cactus",
    "price": 199,
    "rating": 4.7,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "public/images/bunny ears.jpg",
    "images": [
      "public/images/bunny ears.jpg",
      "public/images/bunny ears.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bunny Ear Cactus is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bunny Ear Cactus. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 36,
    "name": "Haworthia",
    "category": "cactus",
    "price": 249,
    "rating": 4.8,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://m.media-amazon.com/images/I/61eWlQloqgL.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61eWlQloqgL.jpg",
      "https://m.media-amazon.com/images/I/61eWlQloqgL.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Haworthia is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Haworthia. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 37,
    "name": "Echeveria",
    "category": "cactus",
    "price": 299,
    "rating": 4.2,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/de6c1191-21f1-4c4c-ba18-069ad48e650b-961e7b9.jpg?quality=90&resize=940,627",
    "images": [
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/de6c1191-21f1-4c4c-ba18-069ad48e650b-961e7b9.jpg?quality=90&resize=940,627",
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/de6c1191-21f1-4c4c-ba18-069ad48e650b-961e7b9.jpg?quality=90&resize=940,627"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Echeveria is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Echeveria. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 38,
    "name": "String of Pearls",
    "category": "cactus",
    "price": 349,
    "rating": 4.3,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://cdn.mos.cms.futurecdn.net/ZEBwYk7YgCvTVKhNM29xXP.jpg",
    "images": [
      "https://cdn.mos.cms.futurecdn.net/ZEBwYk7YgCvTVKhNM29xXP.jpg",
      "https://cdn.mos.cms.futurecdn.net/ZEBwYk7YgCvTVKhNM29xXP.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "String of Pearls is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with String of Pearls. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 39,
    "name": "Sedum Succulent",
    "category": "cactus",
    "price": 399,
    "rating": 4.4,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://www.succulentfactory.in/cdn/shop/files/AI017.jpg?v=1757738360",
    "images": [
      "https://www.succulentfactory.in/cdn/shop/files/AI017.jpg?v=1757738360",
      "https://www.succulentfactory.in/cdn/shop/files/AI017.jpg?v=1757738360"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Sedum Succulent is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Sedum Succulent. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 40,
    "name": "Aloe Hybrid",
    "category": "cactus",
    "price": 199,
    "rating": 4.5,
    "description": "Stylish low-water succulent or cactus perfect for desks, shelves, and minimal decor.",
    "image": "https://trexplants.com/wp-content/uploads/2020/12/sidewinder-dec-small.jpg",
    "images": [
      "https://trexplants.com/wp-content/uploads/2020/12/sidewinder-dec-small.jpg",
      "https://trexplants.com/wp-content/uploads/2020/12/sidewinder-dec-small.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Aloe Hybrid is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Aloe Hybrid. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 41,
    "name": "Bonsai Plant",
    "category": "bonsai",
    "price": 849,
    "rating": 4.3,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3Ao_dhRlPGcDWv41aYYLydtZG1FQw8n5w&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3Ao_dhRlPGcDWv41aYYLydtZG1FQw8n5w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3Ao_dhRlPGcDWv41aYYLydtZG1FQw8n5w&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bonsai Plant is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bonsai Plant. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 42,
    "name": "Mini Bonsai",
    "category": "bonsai",
    "price": 899,
    "rating": 4.4,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "https://m.media-amazon.com/images/I/81bzuU+zC6L.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81bzuU+zC6L.jpg",
      "https://m.media-amazon.com/images/I/81bzuU+zC6L.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Mini Bonsai Combo is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Mini Bonsai Combo. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 43,
    "name": "Ficus Bonsai",
    "category": "bonsai",
    "price": 949,
    "rating": 4.5,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "public/images/ficus.jpg",
    "images": [
      "public/images/ficus.jpg",
      "public/images/ficus.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Ficus Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Ficus Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 44,
    "name": "Juniper Bonsai",
    "category": "bonsai",
    "price": 999,
    "rating": 4.6,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "public/images/juniper.jpg",
    "images": [
      "public/images/juniper.jpg",
      "public/images/juniper.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Juniper Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Juniper Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 45,
    "name": "Jade Bonsai",
    "category": "bonsai",
    "price": 799,
    "rating": 4.7,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "public/images/jade.jpg",
    "images": [
      "public/images/jade.jpg",
      "public/images/jade.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Jade Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Jade Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 46,
    "name": "Carmona Bonsai",
    "category": "bonsai",
    "price": 849,
    "rating": 4.8,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "public/images/carmona.jpg",
    "images": [
      "public/images/carmona.jpg",
      "public/images/carmona.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Carmona Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Carmona Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 47,
    "name": "Bougainvillea Bonsai",
    "category": "bonsai",
    "price": 899,
    "rating": 4.2,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIglRr9z2Q20lS-QrmnhvQuO0PUMNN1eL7A&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIglRr9z2Q20lS-QrmnhvQuO0PUMNN1eL7A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIglRr9z2Q20lS-QrmnhvQuO0PUMNN1eL7A&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bougainvillea Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bougainvillea Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 48,
    "name": "Banyan Bonsai",
    "category": "bonsai",
    "price": 949,
    "rating": 4.3,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "https://www.della.in/wp-content/uploads/2024/05/Della-Nursery-Banyan-Bonsai-Features-Image-4.jpg",
    "images": [
      "https://www.della.in/wp-content/uploads/2024/05/Della-Nursery-Banyan-Bonsai-Features-Image-4.jpg",
      "https://www.della.in/wp-content/uploads/2024/05/Della-Nursery-Banyan-Bonsai-Features-Image-4.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Banyan Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Banyan Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 49,
    "name": "Azalea Bonsai",
    "category": "bonsai",
    "price": 999,
    "rating": 4.4,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC7MMdwPdzQzLGtGlaQ0UtH0dkStNzgb_Ew&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC7MMdwPdzQzLGtGlaQ0UtH0dkStNzgb_Ew&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC7MMdwPdzQzLGtGlaQ0UtH0dkStNzgb_Ew&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Azalea Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Azalea Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 50,
    "name": "Elm Bonsai",
    "category": "bonsai",
    "price": 799,
    "rating": 4.5,
    "description": "Premium bonsai plant designed for elegant interiors and luxury green aesthetics.",
    "image": "public/images/elm.jpg",
    "images": [
      "public/images/elm.jpg",
      "public/images/elm.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Elm Bonsai is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Elm Bonsai. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 51,
    "name": "Tomato Seeds",
    "category": "seeds",
    "price": 149,
    "rating": 4.3,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
      "public/images/Rubberplant.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Terrace Tomato Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Terrace Tomato Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 52,
    "name": "Leafy Vegetable Seeds Combo",
    "category": "seeds",
    "price": 199,
    "rating": 4.4,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://m.media-amazon.com/images/I/61nbUGVZJfL._AC_UF1000,1000_QL80_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61nbUGVZJfL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/61nbUGVZJfL._AC_UF1000,1000_QL80_.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Vegetable Seeds Combo is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Vegetable Seeds Combo. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 53,
    "name": "Chili Seeds",
    "category": "seeds",
    "price": 249,
    "rating": 4.5,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://plantsguru.com/cdn/shop/files/Chilli_Seeds.jpg?v=1743505681",
    "images": [
      "https://plantsguru.com/cdn/shop/files/Chilli_Seeds.jpg?v=1743505681",
      "https://plantsguru.com/cdn/shop/files/Chilli_Seeds.jpg?v=1743505681"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Chili Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Chili Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 54,
    "name": "Coriander Seeds",
    "category": "seeds",
    "price": 299,
    "rating": 4.6,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://vgrgardens.com/wp-content/uploads/2024/11/6ecc39_989e389025434ce0828b05de56004171mv2.webp",
    "images": [
      "https://vgrgardens.com/wp-content/uploads/2024/11/6ecc39_989e389025434ce0828b05de56004171mv2.webp",
      "https://vgrgardens.com/wp-content/uploads/2024/11/6ecc39_989e389025434ce0828b05de56004171mv2.webp"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Coriander Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Coriander Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 55,
    "name": "Spinach Seeds",
    "category": "seeds",
    "price": 99,
    "rating": 4.7,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://plantsguru.com/cdn/shop/files/Spinach_-_Palak_Seeds.jpg?v=1743450291",
    "images": [
      "https://plantsguru.com/cdn/shop/files/Spinach_-_Palak_Seeds.jpg?v=1743450291",
      "https://plantsguru.com/cdn/shop/files/Spinach_-_Palak_Seeds.jpg?v=1743450291"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Spinach Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Spinach Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 56,
    "name": "Brinjal Seeds",
    "category": "seeds",
    "price": 149,
    "rating": 4.8,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://i.pinimg.com/736x/e6/55/87/e65587fe646b786a18e76377a7c78e68.jpg",
    "images": [
      "https://i.pinimg.com/736x/e6/55/87/e65587fe646b786a18e76377a7c78e68.jpg",
      "https://i.pinimg.com/736x/e6/55/87/e65587fe646b786a18e76377a7c78e68.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Brinjal Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Brinjal Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 57,
    "name": "Lady Finger Seeds",
    "category": "seeds",
    "price": 199,
    "rating": 4.2,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwBzA2CxRPP3pxPocbeG1GRDua2lWcur3Kg&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwBzA2CxRPP3pxPocbeG1GRDua2lWcur3Kg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwBzA2CxRPP3pxPocbeG1GRDua2lWcur3Kg&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Lady Finger Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Lady Finger Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 58,
    "name": "Mint Seeds",
    "category": "seeds",
    "price": 249,
    "rating": 4.3,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://www.urbangardengal.com/wp-content/uploads/2021/04/dried-mint-flowers.jpg",
    "images": [
      "https://www.urbangardengal.com/wp-content/uploads/2021/04/dried-mint-flowers.jpg",
      "https://www.urbangardengal.com/wp-content/uploads/2021/04/dried-mint-flowers.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Mint Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Mint Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 59,
    "name": "Fenugreek Seeds",
    "category": "seeds",
    "price": 299,
    "rating": 4.4,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://i0.wp.com/mahagrandspices.com/wp-content/uploads/2023/05/Fenugreek.jpg?fit=790%2C790&ssl=1",
    "images": [
      "https://i0.wp.com/mahagrandspices.com/wp-content/uploads/2023/05/Fenugreek.jpg?fit=790%2C790&ssl=1",
      "https://i0.wp.com/mahagrandspices.com/wp-content/uploads/2023/05/Fenugreek.jpg?fit=790%2C790&ssl=1"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Fenugreek Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Fenugreek Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 60,
    "name": "Radish Seeds",
    "category": "seeds",
    "price": 99,
    "rating": 4.5,
    "description": "High-quality seed pack for terrace gardening, kitchen gardens, and home growers.",
    "image": "https://www.kashmiribazaar.in/image/cache/catalog/pictures/products/seeds/radish-550x445.jpg",
    "images": [
      "https://www.kashmiribazaar.in/image/cache/catalog/pictures/products/seeds/radish-550x445.jpg",
      "https://www.kashmiribazaar.in/image/cache/catalog/pictures/products/seeds/radish-550x445.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Radish Seeds is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Radish Seeds. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 61,
    "name": "Terracotta Pot",
    "category": "pots",
    "price": 249,
    "rating": 4.3,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "public/images/terracotta.jpg",
    "images": [
      "public/images/terracotta.jpg",
      "public/images/terracotta.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Terracotta Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Terracotta Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 62,
    "name": "Ceramic Designer Pot",
    "category": "pots",
    "price": 299,
    "rating": 4.4,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "public/images/ceramic.jpeg",
    "images": [
      "public/images/ceramic.jpeg",
      "public/images/ceramic.jpeg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Ceramic Designer Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Ceramic Designer Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 63,
    "name": "Hanging Pot",
    "category": "pots",
    "price": 349,
    "rating": 4.5,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://i.pinimg.com/736x/e9/03/8a/e9038a7077caa3148b500d052d81ee77.jpg",
    "images": [
      "https://i.pinimg.com/736x/e9/03/8a/e9038a7077caa3148b500d052d81ee77.jpg",
      "https://i.pinimg.com/736x/e9/03/8a/e9038a7077caa3148b500d052d81ee77.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Hanging Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Hanging Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 64,
    "name": "Self Watering Pot",
    "category": "pots",
    "price": 3999,
    "rating": 4.6,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://i.pinimg.com/736x/0a/19/f8/0a19f8e33797d84e33443c299e25d471.jpg",
    "images": [
      "https://i.pinimg.com/736x/0a/19/f8/0a19f8e33797d84e33443c299e25d471.jpg",
      "https://i.pinimg.com/736x/0a/19/f8/0a19f8e33797d84e33443c299e25d471.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Self Watering Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Self Watering Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 65,
    "name": "Fiber Pot",
    "category": "pots",
    "price": 1999,
    "rating": 4.7,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://cpimg.tistatic.com/10692620/b/4/Fiber-Round-Flower-Pot..jpg",
    "images": [
      "https://cpimg.tistatic.com/10692620/b/4/Fiber-Round-Flower-Pot..jpg",
      "https://cpimg.tistatic.com/10692620/b/4/Fiber-Round-Flower-Pot..jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Fiber Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Fiber Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 66,
    "name": "Metal Planter",
    "category": "pots",
    "price": 2449,
    "rating": 4.8,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://5.imimg.com/data5/YV/PN/SU/SELLER-1570648/stainless-steel-metal-round-circular-outdoor-catering-home-decorative-planters.jpg",
    "images": [
      "https://5.imimg.com/data5/YV/PN/SU/SELLER-1570648/stainless-steel-metal-round-circular-outdoor-catering-home-decorative-planters.jpg",
      "https://5.imimg.com/data5/YV/PN/SU/SELLER-1570648/stainless-steel-metal-round-circular-outdoor-catering-home-decorative-planters.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Metal Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Metal Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 67,
    "name": "Decorative Balcony Pot",
    "category": "pots",
    "price": 299,
    "rating": 4.2,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://i.pinimg.com/736x/11/b0/e9/11b0e91d586df207b153ad3b6c4b74c7.jpg",
    "images": [
      "https://i.pinimg.com/736x/11/b0/e9/11b0e91d586df207b153ad3b6c4b74c7.jpg",
      "https://i.pinimg.com/736x/11/b0/e9/11b0e91d586df207b153ad3b6c4b74c7.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Decorative Balcony Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Decorative Balcony Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 68,
    "name": "Mini Table Pot",
    "category": "pots",
    "price": 349,
    "rating": 4.3,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://i.pinimg.com/1200x/46/b1/9a/46b19a10bcddcde6d3609d9daf89b14b.jpg",
    "images": [
      "https://i.pinimg.com/1200x/46/b1/9a/46b19a10bcddcde6d3609d9daf89b14b.jpg",
      "https://i.pinimg.com/1200x/46/b1/9a/46b19a10bcddcde6d3609d9daf89b14b.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Mini Table Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Mini Table Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 69,
    "name": "Square Ceramic Pot",
    "category": "pots",
    "price": 399,
    "rating": 4.4,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://i.pinimg.com/1200x/d4/23/98/d423981a356f0168cfad0c2459f277a3.jpg",
    "images": [
      "https://i.pinimg.com/1200x/d4/23/98/d423981a356f0168cfad0c2459f277a3.jpg",
      "https://i.pinimg.com/1200x/d4/23/98/d423981a356f0168cfad0c2459f277a3.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Square Ceramic Pot is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Square Ceramic Pot. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 70,
    "name": "Clay Pot Set",
    "category": "pots",
    "price": 199,
    "rating": 4.5,
    "description": "Durable and stylish planter pot suitable for indoor and outdoor gardening setups.",
    "image": "https://m.media-amazon.com/images/I/61PciTZiyWL._AC_UF894,1000_QL80_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61PciTZiyWL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/61PciTZiyWL._AC_UF894,1000_QL80_.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Clay Pot Set is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Clay Pot Set. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 71,
    "name": "Organic Fertilizer",
    "category": "fertilizers",
    "price": 299,
    "rating": 4.3,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/What-is-Organic-Fertilizer/orgainc-soil.jpg",
    "images": [
      "https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/What-is-Organic-Fertilizer/orgainc-soil.jpg",
      "https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/What-is-Organic-Fertilizer/orgainc-soil.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Organic Fertilizer is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Organic Fertilizer. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 72,
    "name": "Neem Cake Fertilizer",
    "category": "fertilizers",
    "price": 349,
    "rating": 4.4,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/308161215/OY/TJ/SQ/29408605/brown-neem-cake-fertilizer.jpg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2023/5/308161215/OY/TJ/SQ/29408605/brown-neem-cake-fertilizer.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/5/308161215/OY/TJ/SQ/29408605/brown-neem-cake-fertilizer.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Neem Cake Fertilizer is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Neem Cake Fertilizer. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 73,
    "name": "Vermicompost",
    "category": "fertilizers",
    "price": 399,
    "rating": 4.5,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "public/images/vermi.jpg",
    "images": [
      "public/images/vermi.jpg",
      "public/images/vermi.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Vermicompost is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Vermicompost. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 74,
    "name": "Seaweed Fertilizer",
    "category": "fertilizers",
    "price": 449,
    "rating": 4.6,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://image.made-in-china.com/202f0j00rAOhZNMncJuz/Seaweed-Fertilizer-Granular-Organic-Fertilizer-Seaweed-Extract-Agriculture-Fertilizer-Fertilizer-Kelp-Fertilizer-Granular-Machine.webp",
    "images": [
      "https://image.made-in-china.com/202f0j00rAOhZNMncJuz/Seaweed-Fertilizer-Granular-Organic-Fertilizer-Seaweed-Extract-Agriculture-Fertilizer-Fertilizer-Kelp-Fertilizer-Granular-Machine.webp",
      "https://image.made-in-china.com/202f0j00rAOhZNMncJuz/Seaweed-Fertilizer-Granular-Organic-Fertilizer-Seaweed-Extract-Agriculture-Fertilizer-Fertilizer-Kelp-Fertilizer-Granular-Machine.webp"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Seaweed Fertilizer is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Seaweed Fertilizer. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 75,
    "name": "Bone Meal",
    "category": "fertilizers",
    "price": 249,
    "rating": 4.7,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://i.pinimg.com/1200x/d4/d7/cf/d4d7cfb03cfdce9687737b33bd81e441.jpg",
    "images": [
      "https://i.pinimg.com/1200x/d4/d7/cf/d4d7cfb03cfdce9687737b33bd81e441.jpg",
      "https://i.pinimg.com/1200x/d4/d7/cf/d4d7cfb03cfdce9687737b33bd81e441.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bone Meal is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bone Meal. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 76,
    "name": "NPK Plant Food",
    "category": "fertilizers",
    "price": 299,
    "rating": 4.8,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://i.pinimg.com/1200x/d6/63/ca/d663ca9142f3a7f092466f014fb21d1a.jpg",
    "images": [
      "https://i.pinimg.com/1200x/d6/63/ca/d663ca9142f3a7f092466f014fb21d1a.jpg",
      "https://i.pinimg.com/1200x/d6/63/ca/d663ca9142f3a7f092466f014fb21d1a.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "NPK Plant Food is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with NPK Plant Food. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 77,
    "name": "Liquid Plant Tonic",
    "category": "fertilizers",
    "price": 349,
    "rating": 4.2,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://i.pinimg.com/736x/3d/b5/93/3db5938768f3087917335d5447bf4d17.jpg",
    "images": [
      "https://i.pinimg.com/736x/3d/b5/93/3db5938768f3087917335d5447bf4d17.jpg",
      "https://i.pinimg.com/736x/3d/b5/93/3db5938768f3087917335d5447bf4d17.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Liquid Plant Tonic is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Liquid Plant Tonic. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 78,
    "name": "Bloom Booster",
    "category": "fertilizers",
    "price": 399,
    "rating": 4.3,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://i.pinimg.com/1200x/21/d5/e0/21d5e0fccf2c8b74c2a3945f64324a62.jpg",
    "images": [
      "https://i.pinimg.com/1200x/21/d5/e0/21d5e0fccf2c8b74c2a3945f64324a62.jpg",
      "https://i.pinimg.com/1200x/21/d5/e0/21d5e0fccf2c8b74c2a3945f64324a62.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Bloom Booster is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Bloom Booster. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 79,
    "name": "Compost Mix",
    "category": "fertilizers",
    "price": 449,
    "rating": 4.4,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://i.pinimg.com/1200x/25/75/06/257506e015b2357e0ed5b7a58024c339.jpg",
    "images": [
      "https://i.pinimg.com/1200x/25/75/06/257506e015b2357e0ed5b7a58024c339.jpg",
      "https://i.pinimg.com/1200x/25/75/06/257506e015b2357e0ed5b7a58024c339.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Compost Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Compost Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 80,
    "name": "Cow Manure Mix",
    "category": "fertilizers",
    "price": 249,
    "rating": 4.5,
    "description": "Plant nutrition product that supports healthy growth, greener leaves, and stronger roots.",
    "image": "https://leafyisland.com/cdn/shop/products/CowManure1.webp?v=1682674881&width=1445",
    "images": [
      "https://leafyisland.com/cdn/shop/products/CowManure1.webp?v=1682674881&width=1445",
      "https://leafyisland.com/cdn/shop/products/CowManure1.webp?v=1682674881&width=1445"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Cow Manure Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Cow Manure Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 81,
    "name": "Garden Tool Kit",
    "category": "tools",
    "price": 349,
    "rating": 4.3,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "public/images/tool kit.jpg",
    "images": [
      "public/images/tool kit.jpg",
      "public/images/tool kit.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Garden Tool Kit is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Garden Tool Kit. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 82,
    "name": "Watering Can",
    "category": "tools",
    "price": 399,
    "rating": 4.4,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://i.pinimg.com/736x/fe/e3/b9/fee3b95465e997fd741a91a01a7197ab.jpg",
    "images": [
      "https://i.pinimg.com/736x/fe/e3/b9/fee3b95465e997fd741a91a01a7197ab.jpg",
      "https://i.pinimg.com/736x/fe/e3/b9/fee3b95465e997fd741a91a01a7197ab.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Watering Can is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Watering Can. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 83,
    "name": "Hand Trowel",
    "category": "tools",
    "price": 449,
    "rating": 4.5,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://i.pinimg.com/1200x/50/b3/5e/50b35e9c35c96bf9e19a95b42f295d17.jpg",
    "images": [
      "https://i.pinimg.com/1200x/50/b3/5e/50b35e9c35c96bf9e19a95b42f295d17.jpg",
      "https://i.pinimg.com/1200x/50/b3/5e/50b35e9c35c96bf9e19a95b42f295d17.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Hand Trowel is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Hand Trowel. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 84,
    "name": "Pruning Shear",
    "category": "tools",
    "price": 499,
    "rating": 4.6,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "public/images/prune.jpg",
    "images": [
      "public/images/prune.jpg",
      "public/images/prune.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Pruning Shear is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Pruning Shear. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 85,
    "name": "Spray Bottle",
    "category": "tools",
    "price": 299,
    "rating": 4.7,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://i.pinimg.com/736x/bf/86/e0/bf86e05023e6e5ec38ba7571693bcd6e.jpg",
    "images": [
      "https://i.pinimg.com/736x/bf/86/e0/bf86e05023e6e5ec38ba7571693bcd6e.jpg",
      "https://i.pinimg.com/736x/bf/86/e0/bf86e05023e6e5ec38ba7571693bcd6e.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Spray Bottle is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Spray Bottle. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 86,
    "name": "Garden Gloves",
    "category": "tools",
    "price": 349,
    "rating": 4.8,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "public/images/gloves.jpg",
    "images": [
      "public/images/gloves.jpg",
      "public/images/gloves.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Garden Gloves is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Garden Gloves. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 87,
    "name": "Soil Rake",
    "category": "tools",
    "price": 399,
    "rating": 4.2,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://i.pinimg.com/736x/8b/62/7b/8b627b7ed3f58a7c5d6a780933fe259e.jpg",
    "images": [
      "https://i.pinimg.com/736x/8b/62/7b/8b627b7ed3f58a7c5d6a780933fe259e.jpg",
      "https://i.pinimg.com/736x/8b/62/7b/8b627b7ed3f58a7c5d6a780933fe259e.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Soil Rake is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Soil Rake. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 88,
    "name": "Weeder Tool",
    "category": "tools",
    "price": 449,
    "rating": 4.3,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://i.pinimg.com/736x/4c/ef/2a/4cef2ad58ec2615b7dffb5e43586bece.jpg",
    "images": [
      "https://i.pinimg.com/736x/4c/ef/2a/4cef2ad58ec2615b7dffb5e43586bece.jpg",
      "https://i.pinimg.com/736x/4c/ef/2a/4cef2ad58ec2615b7dffb5e43586bece.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Weeder Tool is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Weeder Tool. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 89,
    "name": "Plant Support Clips",
    "category": "tools",
    "price": 499,
    "rating": 4.4,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://i.pinimg.com/1200x/79/32/de/7932dea7f7153c35f78f8591c21927b4.jpg",
    "images": [
      "https://i.pinimg.com/1200x/79/32/de/7932dea7f7153c35f78f8591c21927b4.jpg",
      "https://i.pinimg.com/1200x/79/32/de/7932dea7f7153c35f78f8591c21927b4.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Plant Support Clips is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Plant Support Clips. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 90,
    "name": "Transplant Kit",
    "category": "tools",
    "price": 299,
    "rating": 4.5,
    "description": "Useful gardening tool designed to make planting, pruning, watering, and maintenance easier.",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbURQFiv0r8YyANudcbgihLCqor1XepqjCoVnsT71k6IG6-umqcdaMgcbAUScFnCbX-fD4cHZHggGKg35wsCvOAIJ4rxcvHW77bWCVoTCIObtdIsuLP2KSfd8",
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbURQFiv0r8YyANudcbgihLCqor1XepqjCoVnsT71k6IG6-umqcdaMgcbAUScFnCbX-fD4cHZHggGKg35wsCvOAIJ4rxcvHW77bWCVoTCIObtdIsuLP2KSfd8",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbURQFiv0r8YyANudcbgihLCqor1XepqjCoVnsT71k6IG6-umqcdaMgcbAUScFnCbX-fD4cHZHggGKg35wsCvOAIJ4rxcvHW77bWCVoTCIObtdIsuLP2KSfd8"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Transplant Kit is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Transplant Kit. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 91,
    "name": "Premium Potting Soil",
    "category": "soil",
    "price": 229,
    "rating": 4.3,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://www.gardendesign.com/pictures/images/900x705Max/site_3/potting-soil-potting-soil-in-pot-dirt-in-pot-shutterstock-com_15947.jpg",
    "images": [
      "https://www.gardendesign.com/pictures/images/900x705Max/site_3/potting-soil-potting-soil-in-pot-dirt-in-pot-shutterstock-com_15947.jpg",
      "https://www.gardendesign.com/pictures/images/900x705Max/site_3/potting-soil-potting-soil-in-pot-dirt-in-pot-shutterstock-com_15947.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Premium Potting Soil is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Premium Potting Soil. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 92,
    "name": "Cocopeat Block",
    "category": "soil",
    "price": 279,
    "rating": 4.4,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://i.pinimg.com/1200x/e1/11/cf/e111cf4b7b250bfca4829cb419958447.jpg",
    "images": [
      "https://i.pinimg.com/1200x/e1/11/cf/e111cf4b7b250bfca4829cb419958447.jpg",
      "https://i.pinimg.com/1200x/e1/11/cf/e111cf4b7b250bfca4829cb419958447.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Cocopeat Block is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Cocopeat Block. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 93,
    "name": "Succulent Soil Mix",
    "category": "soil",
    "price": 329,
    "rating": 4.5,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_-r3G0ValMUvi2UCRrt4j8EI9aETQJyfCw&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_-r3G0ValMUvi2UCRrt4j8EI9aETQJyfCw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_-r3G0ValMUvi2UCRrt4j8EI9aETQJyfCw&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Succulent Soil Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Succulent Soil Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 94,
    "name": "Seed Starting Mix",
    "category": "soil",
    "price": 379,
    "rating": 4.6,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://gardenbetty.com/wp-content/uploads/2020/02/seed-starting-mix-08-720x720.jpg",
    "images": [
      "https://gardenbetty.com/wp-content/uploads/2020/02/seed-starting-mix-08-720x720.jpg",
      "https://gardenbetty.com/wp-content/uploads/2020/02/seed-starting-mix-08-720x720.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Seed Starting Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Seed Starting Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 95,
    "name": "Garden Soil Blend",
    "category": "soil",
    "price": 179,
    "rating": 4.7,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZy7PNM-ftvmw_uMl_gkzjQ564lXYYWUY7A&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZy7PNM-ftvmw_uMl_gkzjQ564lXYYWUY7A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZy7PNM-ftvmw_uMl_gkzjQ564lXYYWUY7A&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Garden Soil Blend is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Garden Soil Blend. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 96,
    "name": "Orchid Potting Mix",
    "category": "soil",
    "price": 229,
    "rating": 4.8,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://5.imimg.com/data5/ECOM/Default/2023/7/325795622/FD/DN/FH/133331885/oncidium-orchid-mix-500x500.jpg",
    "images": [
      "https://5.imimg.com/data5/ECOM/Default/2023/7/325795622/FD/DN/FH/133331885/oncidium-orchid-mix-500x500.jpg",
      "https://5.imimg.com/data5/ECOM/Default/2023/7/325795622/FD/DN/FH/133331885/oncidium-orchid-mix-500x500.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Orchid Potting Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Orchid Potting Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 97,
    "name": "Perlite Mix",
    "category": "soil",
    "price": 279,
    "rating": 4.2,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZf9iPBDa4HnL7xo38qK7A7ZbeZXByrj3JQ&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZf9iPBDa4HnL7xo38qK7A7ZbeZXByrj3JQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZf9iPBDa4HnL7xo38qK7A7ZbeZXByrj3JQ&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Perlite Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Perlite Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 98,
    "name": "Vermiculite Mix",
    "category": "soil",
    "price": 329,
    "rating": 4.3,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://www.marthastewart.com/thmb/cLbUrIm7iAi49Rgfe4kAqKOhuTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-vermiculite-soil-getty-0323-2000-822f9ee66b1b421f8d470673db697a39.jpg",
    "images": [
      "https://www.marthastewart.com/thmb/cLbUrIm7iAi49Rgfe4kAqKOhuTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-vermiculite-soil-getty-0323-2000-822f9ee66b1b421f8d470673db697a39.jpg",
      "https://www.marthastewart.com/thmb/cLbUrIm7iAi49Rgfe4kAqKOhuTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-vermiculite-soil-getty-0323-2000-822f9ee66b1b421f8d470673db697a39.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Vermiculite Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Vermiculite Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 99,
    "name": "Soil Conditioner",
    "category": "soil",
    "price": 379,
    "rating": 4.4,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://cdn.shopify.com/s/files/1/2561/3316/files/What_is_a_Soil_Conditioner-min_4e648d0b-66eb-4c47-8b4b-411abe317d75.jpg?v=1684816576",
    "images": [
      "https://cdn.shopify.com/s/files/1/2561/3316/files/What_is_a_Soil_Conditioner-min_4e648d0b-66eb-4c47-8b4b-411abe317d75.jpg?v=1684816576",
      "https://cdn.shopify.com/s/files/1/2561/3316/files/What_is_a_Soil_Conditioner-min_4e648d0b-66eb-4c47-8b4b-411abe317d75.jpg?v=1684816576"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Soil Conditioner is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Soil Conditioner. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 100,
    "name": "Root Booster Strips",
    "category": "soil",
    "price": 179,
    "rating": 4.5,
    "description": "Premium growing medium or soil mix for better root development and plant health.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbAlg3M4BDz1TAFna9cl_kRepVtSITZJ4Qw&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbAlg3M4BDz1TAFna9cl_kRepVtSITZJ4Qw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbAlg3M4BDz1TAFna9cl_kRepVtSITZJ4Qw&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Root Booster Mix is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Root Booster Mix. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 101,
    "name": "Decor Pebbles Pack",
    "category": "decor",
    "price": 199,
    "rating": 4.3,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/50/78/e3/5078e3663055df6447dc63ffce968a1a.jpg",
    "images": [
      "https://i.pinimg.com/736x/50/78/e3/5078e3663055df6447dc63ffce968a1a.jpg",
      "https://i.pinimg.com/736x/50/78/e3/5078e3663055df6447dc63ffce968a1a.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Decor Pebbles Pack is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Decor Pebbles Pack. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 102,
    "name": "Moss Stick",
    "category": "decor",
    "price": 249,
    "rating": 4.4,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/ec/d4/6a/ecd46ac5ce862f5976d0c4240afd1f85.jpg",
    "images": [
      "https://i.pinimg.com/736x/ec/d4/6a/ecd46ac5ce862f5976d0c4240afd1f85.jpg",
      "https://i.pinimg.com/736x/ec/d4/6a/ecd46ac5ce862f5976d0c4240afd1f85.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Moss Stick is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Moss Stick. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 103,
    "name": "Macrame Hanger",
    "category": "decor",
    "price": 299,
    "rating": 4.5,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/ef/da/f9/efdaf93cbc75ef0e750462bea4943337.jpg",
    "images": [
      "https://i.pinimg.com/736x/ef/da/f9/efdaf93cbc75ef0e750462bea4943337.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rQ7_ynX3OgXHkBgsmncws-wrXgJnIvPpA&https://i.pinimg.com/736x/ef/da/f9/efdaf93cbc75ef0e750462bea4943337.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Macrame Hanger is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Macrame Hanger. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 104,
    "name": "Plant Stand",
    "category": "decor",
    "price": 349,
    "rating": 4.6,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/d7/e1/56/d7e1563e11b20ef2f7f45884a15eac78.jpg",
    "images": [
      "https://i.pinimg.com/736x/d7/e1/56/d7e1563e11b20ef2f7f45884a15eac78.jpg",
      "https://i.pinimg.com/736x/d7/e1/56/d7e1563e11b20ef2f7f45884a15eac78.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Plant Stand is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Plant Stand. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 105,
    "name": "Fairy Lights for Plants",
    "category": "decor",
    "price": 149,
    "rating": 4.7,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/f7/ed/00/f7ed008df1b515d852d10951f946dadd.jpg",
    "images": [
      "https://i.pinimg.com/736x/f7/ed/00/f7ed008df1b515d852d10951f946dadd.jpg",
      "https://i.pinimg.com/736x/f7/ed/00/f7ed008df1b515d852d10951f946dadd.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Fairy Lights for Plants is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Fairy Lights for Plants. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 106,
    "name": "Mini Garden Figurines",
    "category": "decor",
    "price": 199,
    "rating": 4.8,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/1200x/70/b3/ab/70b3abcc63c9e0476f4fb30f5fe3e62f.jpg",
    "images": [
      "https://i.pinimg.com/1200x/70/b3/ab/70b3abcc63c9e0476f4fb30f5fe3e62f.jpg",
      "https://i.pinimg.com/1200x/70/b3/ab/70b3abcc63c9e0476f4fb30f5fe3e62f.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Mini Garden Figurines is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Mini Garden Figurines. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 107,
    "name": "Wooden Plant Shelf",
    "category": "decor",
    "price": 249,
    "rating": 4.2,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/90/bb/16/90bb16eeda9eb21ae107c03ef2e6112a.jpg",
    "images": [
      "https://i.pinimg.com/736x/90/bb/16/90bb16eeda9eb21ae107c03ef2e6112a.jpg",
      "https://i.pinimg.com/736x/90/bb/16/90bb16eeda9eb21ae107c03ef2e6112a.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Wooden Plant Shelf is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Wooden Plant Shelf. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 108,
    "name": "Pebble Mix Deluxe",
    "category": "decor",
    "price": 299,
    "rating": 4.3,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/1200x/e9/d4/08/e9d408db534917ecaa1893911343cee2.jpg",
    "images": [
      "https://i.pinimg.com/1200x/e9/d4/08/e9d408db534917ecaa1893911343cee2.jpg",
      "https://i.pinimg.com/1200x/e9/d4/08/e9d408db534917ecaa1893911343cee2.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Pebble Mix Deluxe is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Pebble Mix Deluxe. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 109,
    "name": "Decor Moss Mat",
    "category": "decor",
    "price": 349,
    "rating": 4.4,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicKkkr9gJCMe3Nq-DCvv-PT5kLLV5KsVCpw&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicKkkr9gJCMe3Nq-DCvv-PT5kLLV5KsVCpw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicKkkr9gJCMe3Nq-DCvv-PT5kLLV5KsVCpw&s"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Decor Moss Mat is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Decor Moss Mat. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 110,
    "name": "Terrarium Decor Kit",
    "category": "decor",
    "price": 149,
    "rating": 4.5,
    "description": "Decorative gardening accessory to elevate the beauty of pots, plants, and indoor displays.",
    "image": "https://i.pinimg.com/736x/82/9b/05/829b050e151fe06ada58dc9c9bb54b3d.jpg",
    "images": [
      "https://i.pinimg.com/736x/82/9b/05/829b050e151fe06ada58dc9c9bb54b3d.jpg",
      "https://i.pinimg.com/736x/82/9b/05/829b050e151fe06ada58dc9c9bb54b3d.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Terrarium Decor Kit is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Terrarium Decor Kit. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 111,
    "name": "Railing Planter",
    "category": "planters",
    "price": 299,
    "rating": 4.3,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/1200x/ae/5e/4e/ae5e4e0259cda854b80a3570695122c5.jpg",
    "images": [
      "https://i.pinimg.com/1200x/ae/5e/4e/ae5e4e0259cda854b80a3570695122c5.jpg",
      "https://i.pinimg.com/1200x/ae/5e/4e/ae5e4e0259cda854b80a3570695122c5.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Railing Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Railing Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 112,
    "name": "Wall Mount Planter",
    "category": "planters",
    "price": 349,
    "rating": 4.4,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/1200x/23/32/1b/23321b971a0c937f90c9e404d153218e.jpg",
    "images": [
      "https://i.pinimg.com/1200x/23/32/1b/23321b971a0c937f90c9e404d153218e.jpg",
      "https://i.pinimg.com/1200x/23/32/1b/23321b971a0c937f90c9e404d153218e.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Wall Mount Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Wall Mount Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 113,
    "name": "Vertical Garden Planter",
    "category": "planters",
    "price": 399,
    "rating": 4.5,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/736x/a3/dc/ea/a3dcead83feacb6e4ebfa86483131818.jpg",
    "images": [
      "https://i.pinimg.com/736x/a3/dc/ea/a3dcead83feacb6e4ebfa86483131818.jpg",
      "https://i.pinimg.com/736x/a3/dc/ea/a3dcead83feacb6e4ebfa86483131818.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Vertical Garden Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Vertical Garden Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 114,
    "name": "Rectangular Balcony Planter",
    "category": "planters",
    "price": 449,
    "rating": 4.6,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/736x/50/d7/27/50d727f44973bcd3e31ae687f485231a.jpg",
    "images": [
      "https://i.pinimg.com/736x/50/d7/27/50d727f44973bcd3e31ae687f485231a.jpg",
      "https://i.pinimg.com/736x/50/d7/27/50d727f44973bcd3e31ae687f485231a.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Rectangular Balcony Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Rectangular Balcony Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 115,
    "name": "Round Ribbed Planter",
    "category": "planters",
    "price": 249,
    "rating": 4.7,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/1200x/a9/cc/d2/a9ccd231b7eb8bd8e03bc95f9a42c5b1.jpg",
    "images": [
      "https://i.pinimg.com/1200x/a9/cc/d2/a9ccd231b7eb8bd8e03bc95f9a42c5b1.jpg",
      "https://i.pinimg.com/1200x/a9/cc/d2/a9ccd231b7eb8bd8e03bc95f9a42c5b1.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Round Ribbed Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Round Ribbed Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 116,
    "name": "Textured Indoor Planter",
    "category": "planters",
    "price": 2999,
    "rating": 4.8,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/736x/fc/33/71/fc337163c206e87d5116f9ca1cef99f4.jpg",
    "images": [
      "https://i.pinimg.com/736x/fc/33/71/fc337163c206e87d5116f9ca1cef99f4.jpg",
      "https://i.pinimg.com/736x/fc/33/71/fc337163c206e87d5116f9ca1cef99f4.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Textured Indoor Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Textured Indoor Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 117,
    "name": "Marble Finish Planter",
    "category": "planters",
    "price": 3449,
    "rating": 4.2,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/1200x/bb/82/54/bb8254940c1f88c101047c690328f89f.jpg",
    "images": [
      "https://i.pinimg.com/1200x/bb/82/54/bb8254940c1f88c101047c690328f89f.jpg",
      "https://i.pinimg.com/1200x/bb/82/54/bb8254940c1f88c101047c690328f89f.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Marble Finish Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Marble Finish Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 118,
    "name": "Dual Tone Planter",
    "category": "planters",
    "price": 399,
    "rating": 4.3,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/1200x/31/18/13/311813d598bd79dbe5266e45cc4faceb.jpg",
    "images": [
      "https://i.pinimg.com/1200x/31/18/13/311813d598bd79dbe5266e45cc4faceb.jpg",
      "https://i.pinimg.com/1200x/31/18/13/311813d598bd79dbe5266e45cc4faceb.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Dual Tone Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Dual Tone Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 119,
    "name": "Designer Table Planter",
    "category": "planters",
    "price": 449,
    "rating": 4.4,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/1200x/d3/0a/f6/d30af6feb08e952554686ee81bd21c1e.jpg",
    "images": [
      "https://i.pinimg.com/1200x/d3/0a/f6/d30af6feb08e952554686ee81bd21c1e.jpg",
      "https://i.pinimg.com/1200x/d3/0a/f6/d30af6feb08e952554686ee81bd21c1e.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Designer Table Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Designer Table Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 120,
    "name": "Classic White Planter",
    "category": "planters",
    "price": 2469,
    "rating": 4.5,
    "description": "Premium planter designed for stylish presentation of your favorite plants indoors or outdoors.",
    "image": "https://i.pinimg.com/736x/4a/32/41/4a3241629b6665a95231229ecee347d3.jpg",
    "images": [
      "https://i.pinimg.com/736x/4a/32/41/4a3241629b6665a95231229ecee347d3.jpg",
      "https://i.pinimg.com/736x/4a/32/41/4a3241629b6665a95231229ecee347d3.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Classic White Planter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Classic White Planter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 121,
    "name": "Plant Label Set",
    "category": "accessories",
    "price": 249,
    "rating": 4.3,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://i.pinimg.com/1200x/5b/c6/5d/5bc65d386da8373315597170c02057be.jpg",
    "images": [
      "https://i.pinimg.com/1200x/5b/c6/5d/5bc65d386da8373315597170c02057be.jpg",
      "https://i.pinimg.com/1200x/5b/c6/5d/5bc65d386da8373315597170c02057be.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Plant Label Set is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Plant Label Set. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 122,
    "name": "Moisture Meter",
    "category": "accessories",
    "price": 299,
    "rating": 4.4,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://i.pinimg.com/1200x/b7/0d/72/b70d72d5b3f9bc07ade8ef193fdfe9b7.jpg",
    "images": [
      "https://i.pinimg.com/1200x/b7/0d/72/b70d72d5b3f9bc07ade8ef193fdfe9b7.jpg",
      "https://i.pinimg.com/1200x/b7/0d/72/b70d72d5b3f9bc07ade8ef193fdfe9b7.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Moisture Meter is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Moisture Meter. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 123,
    "name": "Drip Irrigation Kit",
    "category": "accessories",
    "price": 9349,
    "rating": 4.5,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://www.hozelock.com/wp-content/uploads/2018/11/7010-7011-life.jpg",
    "images": [
      "https://www.hozelock.com/wp-content/uploads/2018/11/7010-7011-life.jpg",
      "https://www.hozelock.com/wp-content/uploads/2018/11/7010-7011-life.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Drip Irrigation Kit is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Drip Irrigation Kit. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 124,
    "name": "Plant Ties",
    "category": "accessories",
    "price": 399,
    "rating": 4.6,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://i.pinimg.com/1200x/87/56/7b/87567bf75b9a3e42d208e9030edd069f.jpg",
    "images": [
      "https://i.pinimg.com/1200x/87/56/7b/87567bf75b9a3e42d208e9030edd069f.jpg",
      "https://i.pinimg.com/1200x/87/56/7b/87567bf75b9a3e42d208e9030edd069f.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Plant Ties is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Plant Ties. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 125,
    "name": "Rooting Hormone",
    "category": "accessories",
    "price": 199,
    "rating": 4.7,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/plant-cutting-root-hormone-shutterstock_2566438603.jpg?itok=TqUzDSOx",
    "images": [
      "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/plant-cutting-root-hormone-shutterstock_2566438603.jpg?itok=TqUzDSOx",
      "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/plant-cutting-root-hormone-shutterstock_2566438603.jpg?itok=TqUzDSOx"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Rooting Hormone is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Rooting Hormone. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 126,
    "name": "Humidity Tray",
    "category": "accessories",
    "price": 249,
    "rating": 4.8,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://i.pinimg.com/1200x/83/c2/e1/83c2e19e0d7928cabcce1ec6a1f76db4.jpg",
    "images": [
      "https://i.pinimg.com/1200x/83/c2/e1/83c2e19e0d7928cabcce1ec6a1f76db4.jpg",
      "https://i.pinimg.com/1200x/83/c2/e1/83c2e19e0d7928cabcce1ec6a1f76db4.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Humidity Tray is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Humidity Tray. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 127,
    "name": "Watering Spikes",
    "category": "accessories",
    "price": 299,
    "rating": 4.2,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://www.pickyourplant.in/wp-content/uploads/2024/09/Watering-Spike-700x700.jpg",
    "images": [
      "https://www.pickyourplant.in/wp-content/uploads/2024/09/Watering-Spike-700x700.jpg",
      "https://www.pickyourplant.in/wp-content/uploads/2024/09/Watering-Spike-700x700.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Watering Spikes is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Watering Spikes. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 128,
    "name": "Grow Light",
    "category": "accessories",
    "price": 349,
    "rating": 4.3,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://modernfarmer.com/wp-content/uploads/2018/03/Grow-Lights-For-Indoor-Plants-Gardening.jpg",
    "images": [
      "https://modernfarmer.com/wp-content/uploads/2018/03/Grow-Lights-For-Indoor-Plants-Gardening.jpg",
      "https://modernfarmer.com/wp-content/uploads/2018/03/Grow-Lights-For-Indoor-Plants-Gardening.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Grow Light is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Grow Light. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 129,
    "name": "Plant Mister",
    "category": "accessories",
    "price": 3999,
    "rating": 4.4,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://i.pinimg.com/736x/46/44/5f/46445f551abf20ebac81d91fe77883b0.jpg",
    "images": [
      "https://i.pinimg.com/736x/46/44/5f/46445f551abf20ebac81d91fe77883b0.jpg",
      "https://i.pinimg.com/736x/46/44/5f/46445f551abf20ebac81d91fe77883b0.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Plant Mister is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Plant Mister. Looks premium and healthy."
      }
    ]
  },
  {
    "id": 130,
    "name": "Propagation Jar Set",
    "category": "accessories",
    "price": 199,
    "rating": 4.5,
    "description": "Practical gardening accessory that improves plant care, maintenance, or plant display.",
    "image": "https://i.pinimg.com/736x/58/d6/8d/58d68dfd94a2e4778a5fbfc91baa039a.jpg",
    "images": [
      "https://i.pinimg.com/736x/58/d6/8d/58d68dfd94a2e4778a5fbfc91baa039a.jpg",
      "https://i.pinimg.com/736x/58/d6/8d/58d68dfd94a2e4778a5fbfc91baa039a.jpg"
    ],
    "reviews": [
      {
        "user": "Anu",
        "text": "Propagation Jar Set is beautiful and arrived in great condition."
      },
      {
        "user": "Meera",
        "text": "Really happy with Propagation Jar Set. Looks premium and healthy."
      }
    ]
  }
];

export default products;
