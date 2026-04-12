export type RoomOffer = {
  slug: "ground-floor" | "group-room" | "couple-room" | "tent";
  name: string;
  priceLabel: string;
  capacity: string;
  images: string[];
  inclusions: string[];
  parts: {
    title: string;
    image: string;
    description: string;
  }[];
  note?: string;
};

export const roomOffers: RoomOffer[] = [
  {
    slug: "ground-floor",
    name: "Ground Floor Room",
    priceLabel: "PHP 3,000",
    capacity: "Good for 4 persons",
    images: [
      "/Assets/GroundFloor/Ground floor room.jpg",
      "/Assets/GroundFloor/GroundRoom1.jpg",
      "/Assets/GroundFloor/Room 1.jpg",
    ],
    inclusions: [
      "Airconditioned",
      "Common bathroom",
      "Kitchen utensils",
      "Swimming pool included",
      "Parking",
      "Grilling",
      "Bonfire at night",
    ],
    parts: [
      {
        title: "Sleeping Area",
        image: "/Assets/GroundFloor/GroundRoom1.jpg",
        description: "Comfortable space for a small family or barkada stay.",
      },
      {
        title: "Alternative Room Angle",
        image: "/Assets/GroundFloor/Room 1.jpg",
        description: "Additional view of the room layout and bed area.",
      },
      {
        title: "Exterior Access",
        image: "/Assets/GroundFloor/Ground floor room.jpg",
        description: "Convenient access to shared areas and pool amenities.",
      },
    ],
  },
  {
    slug: "group-room",
    name: "Group Room",
    priceLabel: "PHP 10,500",
    capacity: "Good for 10 to 14 persons",
    images: [
      "/Assets/GroupRoom/GroupRoom1.1.jpg",
      "/Assets/GroupRoom/GroupRoom1.2.jpg",
      "/Assets/GroupRoom/GroupRoom2.jpg",
    ],
    inclusions: [
      "Airconditioned",
      "Common bathroom",
      "Swimming pool included",
      "Kitchen utensils",
      "Grilling",
      "Parking",
      "Bonfire",
    ],
    parts: [
      {
        title: "Main Group Hall",
        image: "/Assets/GroupRoom/GroupRoom1.1.jpg",
        description: "Wide layout suitable for bigger groups.",
      },
      {
        title: "Second View",
        image: "/Assets/GroupRoom/GroupRoom1.2.jpg",
        description: "Alternative angle showing sleeping and lounging areas.",
      },
      {
        title: "Extended Room Space",
        image: "/Assets/GroupRoom/GroupRoom2.jpg",
        description: "Additional section for larger occupancy comfort.",
      },
    ],
  },
  {
    slug: "couple-room",
    name: "Couple Room",
    priceLabel: "PHP 2,000",
    capacity: "Best for couples",
    images: [
      "/Assets/View/FrontView.jpg",
      "/Assets/View/IMG3.jpg",
      "/Assets/Facilities/Pool 2.jpg",
    ],
    inclusions: [
      "Common bathroom",
      "Fan room",
      "Swimming pool included",
      "Kitchen utensils",
      "Grilling",
      "Parking",
      "Bonfire",
    ],
    parts: [
      {
        title: "Couple Room Interior",
        image: "/Assets/View/FrontView.jpg",
        description: "Cozy room setup best for couples.",
      },
      {
        title: "Second Interior View",
        image: "/Assets/View/IMG3.jpg",
        description: "Additional look at fan-room configuration.",
      },
      {
        title: "Nearby Amenities",
        image: "/Assets/Facilities/Pool 2.jpg",
        description: "Easy access to poolside and common activity spaces.",
      },
    ],
    note: "Additional person: PHP 250 per pax",
  },
  {
    slug: "tent",
    name: "Tent",
    priceLabel: "PHP 1,500",
    capacity: "Good for 3 persons",
    images: [
      "/Assets/View/Banner.jpg",
      "/Assets/Facilities/Bonfire.jpg",
      "/Assets/Facilities/Parking.jpg",
    ],
    inclusions: [
      "Common bathroom",
      "Swimming pool included",
      "Kitchen utensils",
      "Grilling",
      "Parking",
      "Bonfire",
    ],
    parts: [
      {
        title: "Tent Area",
        image: "/Assets/View/Banner.jpg",
        description: "Open-air tent space for barkada and family groups.",
      },
      {
        title: "Bonfire Zone",
        image: "/Assets/Facilities/Bonfire.jpg",
        description: "Nighttime bonding area included in stay amenities.",
      },
      {
        title: "Parking and Access",
        image: "/Assets/Facilities/Parking.jpg",
        description: "Convenient access area for guests with vehicles.",
      },
    ],
  },
];

export function getRoomBySlug(slug: string) {
  return roomOffers.find((room) => room.slug === slug);
}

export const dayTourHighlights = [
  "Pool access for all listed guests",
  "Kitchen and grilling area use",
  "Parking availability",
  "Optional activity add-ons (ATV and boat activities)",
];

export const checkInOut = {
  checkIn: "2:00 PM",
  checkOut: "12:00 NN",
};
