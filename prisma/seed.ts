const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const aneisCategory = await prisma.category.create({
      data: {
        name: "Anéis",
        slug: "anéis",
        imageUrl: "/images/aneis/heartRing.png",
      },
    });

    const aneis = [
      {
        name: "Anel Infinit Heart",
        slug: "anel-infinit-heart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/heartRing.png",
          "/images/aneis/heartRing2.png",
          "/images/aneis/heartRing3.png",
          "/images/aneis/heartRing4.png",
        ],
        basePrice: 35,
        categoryId: aneisCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Anel Black Diamond",
        slug: "Anel-Black-Diamond",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringDiamondBlack.png",
          "/images/aneis/ringDiamondBlack2.pngg",
          "/images/aneis/ringDiamondBlack3.png",
          "/images/aneis/ringDiamondBlack4.png",
        ],
        basePrice: 39,
        categoryId: aneisCategory.id,
        discountPercentage: 0, // 0% discount
      },
      {
        name: "Anel Infinite Heart Gold",
        slug: "Anel-Infinite-Heart-gold",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringInfinitHeartGold.png",
          "/images/aneis/ringInfinitHeartGold2.png",
          "/images/aneis/ringInfinitHeartGold3.png",
          "/images/aneis/ringInfinitHeartGold4.png",
        ],
        basePrice: 38,
        categoryId: aneisCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Anel Blue Diamond",
        slug: "Anel-Blue-Diamond",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringOfDiamondBlue.png",
          "/images/aneis/ringOfDiamondBlue2.png",
          "/images/aneis/ringOfDiamondBlue3.png",
          "/images/aneis/ringOfDiamondBlue4.png",
        ],
        basePrice: 45,
        categoryId: aneisCategory.id,
        discountPercentage: 15, // 5% discount
      },
      {
        name: "Anel Red Heart Diamond",
        slug: "Anel-Red-Heart-Diamond",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringOfDiamondHeartRed.png",
          "/images/aneis/ringOfDiamondHeartRed2.png",
          "/images/aneis/ringOfDiamondHeartRed3.png",
          "/images/aneis/ringOfDiamondHeartRed4.png",
        ],
        basePrice: 45,
        categoryId: aneisCategory.id,
        discountPercentage: 15, // 5% discount
      },
      {
        name: "Anel Red Diamond",
        slug: "Anel-Red-Diamond",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringOfDiamondRed.png",
          "/images/aneis/ringOfDiamondRed2.png",
          "/images/aneis/ringOfDiamondRed3.png",
          "/images/aneis/ringOfDiamondRed4.png",
        ],
        basePrice: 45,
        categoryId: aneisCategory.id,
        discountPercentage: 15, // 5% discount
      },
      {
        name: "Anel Yellow Diamond",
        slug: "Anel-Yellow-Diamond",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringOfDiamondYellow.png",
          "/images/aneis/ringOfDiamondYellow2.png",
          "/images/aneis/ringOfDiamondYellow3.png",
          "/images/aneis/ringOfDiamondYellow4.png",
        ],
        basePrice: 45,
        categoryId: aneisCategory.id,
        discountPercentage: 25, // 5% discount
      },
      {
        name: "Anel Infinit",
        slug: "Anel-Infinit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "/images/aneis/ringOfInfinit.png",
          "/images/aneis/ringOfInfinit2.png",
          "/images/aneis/ringOfInfinit3.png",
          "/images/aneis/ringOfInfinit4.png",
        ],
        basePrice: 57,
        categoryId: aneisCategory.id,
        discountPercentage: 20, // 5% discount
      }
      
    ];

    await prisma.product.createMany({
      data: aneis,
    });

    const brincosCategory = await prisma.category.create({
      data:{
        name: "Brincos",
        slug:"brincos",
        imageUrl:"/images/brincos/emeraldEarrings.png"
      }
    });

    const brincos = [
      {
        name: "Brinco Coração Ametista",
        slug:"brinco-coração-ametista",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/purpleHeartEarrings.png",
          "/images/brincos/purpleHeartEarrings2.png",
          "/images/brincos/purpleHeartEarrings3.png",
          "/images/brincos/purpleHeartEarrings4.png"
        ],
        basePrice: 65,
        categoryId: brincosCategory.id,
        discountPercentage: 10, 

      },
      {
        name: "Brinco Crucifixo",
        slug:"brinco-crucifixo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/crosEearrings.png",
          "/images/brincos/crosEearrings2.png",
          "/images/brincos/crosEearrings3.png",
          "/images/brincos/crosEearrings4.png"
        ],
        basePrice: 36,
        categoryId: brincosCategory.id,
        discountPercentage: 5, 

      },
      {
        name: "Brinco Folha Azul",
        slug:"brinco-folha-azul",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/blueFoilEarrings.png",
          "/images/brincos/blueFoilEarrings2.png",
          "/images/brincos/blueFoilEarrings3.png",
          "/images/brincos/blueFoilEarrings4.png"
        ],
        basePrice: 37,
        categoryId: brincosCategory.id,
        discountPercentage: 10, 

      },
      {
        name: "Brinco Folha Esmeraldas",
        slug:"brinco-folha-esmeraldas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/blueFoilEarrings.png",
          "/images/brincos/blueFoilEarrings2.png",
          "/images/brincos/blueFoilEarrings3.png",
          "/images/brincos/blueFoilEarrings4.png"
        ],
        basePrice: 36,
        categoryId: brincosCategory.id,
        discountPercentage: 7, 

      },
      {
        name: "Brinco Folha Esmeraldas",
        slug:"brinco-folha-esmeraldas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/emeraldEarrings.png",
          "/images/brincos/emeraldEarrings2.png",
          "/images/brincos/emeraldEarrings3.png",
          "/images/brincos/emeraldEarrings4.png"
        ],
        basePrice: 36,
        categoryId: brincosCategory.id,
        discountPercentage: 10, 

      },
      {
        name: "Brinco Cores Variadas",
        slug:"brinco-cores-variadas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/EarringsOfAssortedColors.png",
          "/images/brincos/EarringsOfAssortedColors2.png",
          "/images/brincos/EarringsOfAssortedColors3.png",
          "/images/brincos/EarringsOfAssortedColors4.png"
        ],
        basePrice: 36,
        categoryId: brincosCategory.id,
        discountPercentage: 15, 

      },
      {
        name: "Brinco Tribal Color",
        slug:"brinco-tribal-color",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/brincos/tribalColorEarrings.png",
          "/images/brincos/tribalColorEarrings2.png",
          "/images/brincos/tribalColorEarrings3.png",
          "/images/brincos/tribalColorEarrings4.png"
        ],
        basePrice: 36,
        categoryId: brincosCategory.id,
        discountPercentage: 5, 
      },
      
    ]

    await prisma.product.createMany({
      data:brincos,
    })

    const colaresCategory = await prisma.category.create({
      data:{
        name: "Colares",
        slug:"colares",
        imageUrl:"/images/colares/colarCoracaoGrande.png"
      }
    });

    const colares = [
      {
        name: "Colar Coração",
        slug:"colar-coração",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/colares/colarCoracao.png",
          "/images/colares/colarCoracao2.png",
          "/images/colares/colarCoracao3.png",
          "/images/colares/colarCoracao4.png"
        ],
        basePrice: 76,
        categoryId: colaresCategory.id,
        discountPercentage: 15, 

      },
      {
        name: "Colar Big Heart",
        slug:"colar-big-heart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/colares/colarCoracaoGrande.png",
          "/images/colares/colarCoracaoGrande2.png",
          "/images/colares/colarCoracaoGrande3.png",
          "/images/colares/colarCoracaoGrande4.png"
        ],
        basePrice: 76,
        categoryId: colaresCategory.id,
        discountPercentage: 15, 

      },
      {
        name: "Colar Cores",
        slug:"colar-cores",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/colares/colarCores.png",
          "/images/colares/colarCores2.png",
          "/images/colares/colarCores3.png",
          "/images/colares/colarCores4.png"
        ],
        basePrice: 57,
        categoryId: colaresCategory.id,
        discountPercentage: 0, 

      },
      {
        name: "Colar Conchas",
        slug:"colar-conhas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/colares/colardeConchas.png",
          "/images/colares/colardeConchas2.png",
          "/images/colares/colardeConchas3.png",
          "/images/colares/colardeConchass4.png"
        ],
        basePrice: 67,
        categoryId: colaresCategory.id,
        discountPercentage: 10, 

      },
      {
        name: "Colar Arvore Familia",
        slug:"colar-arvore-familia",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls:[
          "/images/colares/colarFamilia.png",
          "/images/colares/colarFamilia2.png",
          "/images/colares/colarFamilia3.png",
          "/images/colares/colarFamilia4.png"
        ],
        basePrice: 77,
        categoryId: colaresCategory.id,
        discountPercentage: 15, 

      },
    ]

    await prisma.product.createMany({
      data:colares,
    })

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
