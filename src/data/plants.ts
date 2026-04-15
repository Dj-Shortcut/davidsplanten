export type Plant = {
  slug: string;
  name: string;
  subtitle?: string;
  images: string[];
  care: {
    water: string;
    light: string;
    difficulty: string;
    tip: string;
  };
};

export const plants: Plant[] = [
  {
    slug: "sempervivum",
    name: "Sempervivum",
    subtitle: "Winterharde vetplant",
    images: [
      "/plants/sempervivum/pot.jpg",
    ],
    care: {
      water: "Zeer weinig water",
      light: "Zon of halfschaduw",
      difficulty: "Zeer makkelijk",
      tip: "Ideaal voor rotstuin en groendak",
    },
  },
  {
    slug: "sedum-sieboldii",
    name: "Sedum sieboldii",
    subtitle: "Compacte vetplant",
    images: [
      "/plants/sedum-sieboldii/closeup.jpg",
    ],
    care: {
      water: "Weinig water",
      light: "Veel licht",
      difficulty: "Makkelijk",
      tip: "Niet te nat houden",
    },
  },
];