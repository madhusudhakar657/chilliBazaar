  const navItems = [
    {item:"Home", id:1},
    {item:"About Us", id:2},
    {item:"Products", id:3},
    {item:"Contact", id:4},
    {item:"Regions", id:5}
]

 const chiliVarieties = [
    {
      name: "Kashmiri Chili",
      description: "Known for its vibrant red color and mild spiciness, ideal for adding color to dishes.",
      location: "Kashmir, India",
      image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/semi-dried-kashmir-red-chilli-buy-online.20230215165739.webp",
      spicyLevel: "Low",
    },
    {
      name: "Byadagi Chili",
      description: "Popular for its deep red color and wrinkled appearance, commonly used in South Indian cuisine.",
      location: "Karnataka, India",
      image: "mirchiTypes/byadigiMirchiImg-11.webp",
      spicyLevel: "Medium",
    },
    {
      name: "Kanthari Chili",
      description: "Small, pointed chili with a strong heat, commonly grown in Kerala.",
      location: "Kerala, India",
      image: "mirchiTypes/Dried-Kanthari-Chilli-Birds-Eye-Chilli-Bird-Eye-Chilli-Birds-Chilli-Thai-Chilli-copy-4-1.jpg",
      spicyLevel: "High",
    },
    {
      name: "Ramnad Mundu/Gundu",
      description: "Round-shaped chili with a moderate level of heat, used in various Indian curries.",
      location: "Tamil Nadu, India",
      image: "mirchiTypes/red-round-ramnad-dry-chilli-500x500.webp",
      spicyLevel: "Medium",
    },
    {
      name: "Jwala Chili",
      description: "Long and slender chili with a sharp heat, commonly used in Gujarat.",
      location: "Gujarat, India",
      image: "mirchiTypes/jwala-dry-red-chilli-385295215-uomhd.avif",
      spicyLevel: "High",
    },
    {
      name: "Guntur Chili",
      description: "Known for its intense heat and bright color, widely exported from Andhra Pradesh.",
      location: "Andhra Pradesh, India",
      image: "mirchiTypes/gunturSannam.jpg",
      spicyLevel: "Very High",
    },
    {
      name: "Ghost Pepper (Bhut Jolokia)",
      description: "One of the hottest chilies in the world, often used in small amounts for extreme spice.",
      location: "Northeast India",
      image: "mirchiTypes/oven-dry-ghost-pepper-oven-dry-king-chillies-oven-dry-bbhut-jalokia-chilli-500x500.webp",
      spicyLevel: "Extremely High",
    },
    {
      name: "Boriya Chili",
      description: "Small, round chili with moderate heat, used in various pickles and sauces.",
      location: "Gujarat, India",
      image: "mirchiTypes/mirchiBanner1.jpg",
      spicyLevel: "Medium",
    },
    {
      name: "Bird's Eye Chili",
      description: "Tiny but powerful chili, popular in Indian and Southeast Asian cuisine.",
      location: "Assam, India",
      image: "mirchiTypes/bird-eye-chilli-500x500.webp",
      spicyLevel: "Very High",
    },
    {
      name: "Sankeshwari Chili",
      description: "Bright red chili with moderate spiciness, commonly used for coloring dishes.",
      location: "Maharashtra, India",
      image: "mirchiTypes/sankeswahri.webp",
      spicyLevel: "Medium",
    },
    {
      name: "Tomato Chili",
      description: "Mild and slightly sweet chili variety, used for flavoring without much heat.",
      location: "India",
      image: "mirchiTypes/tomato-dry-red-chilli-500x500.webp",
      spicyLevel: "Low",
    },
    {
      name: "Dalle Khursani",
      description: "Popular chili from the Northeast, known for its unique flavor and intense heat.",
      location: "Sikkim, India",
      image: "mirchiTypes/dalleKhursani.webp",
      spicyLevel: "Very High",
    },
    {
      name: "Mathania Chili",
      description: "Renowned for its bright color and moderate heat, frequently used in Rajasthani cuisine.",
      location: "Rajasthan, India",
      image: "mirchiTypes/mathania.jpg",
      spicyLevel: "Medium",
    },
    {
      name: "Khola Chili",
      description: "A spicy chili variety used in Goan cuisine, with a bold flavor.",
      location: "Goa, India",
      image: "mirchiTypes/kholaMirchi.jpeg",
      spicyLevel: "High",
    },
    {
      name: "Sannam Chili",
      description: "Widely grown for export, with a moderate spiciness and a robust flavor.",
      location: "Andhra Pradesh, India",
      image: "mirchiTypes/gunturSannam.jpg",
      spicyLevel: "Medium",
    }
  ];

  const mirchiData = [
    {
      id: 1,
      state: "Andhra Pradesh",
      popularVariety: "Guntur Chilli",
      specialty: "Known for its intense heat and deep red color; widely used in Indian cuisine.",
      minPricePerKg: 200,
      maxPricePerKg: 500
    },
    {
      id: 2,
      state: "Karnataka",
      popularVariety: "Byadagi Chilli",
      specialty: "Mild in spice but has a vibrant color and distinct aroma, often used in making sauces and powders.",
      minPricePerKg: 150,
      maxPricePerKg: 400
    },
    {
      id: 3,
      state: "Maharashtra",
      popularVariety: "Lavangi Chilli",
      specialty: "Small and fiery, commonly used in spicy dishes; has a strong heat profile.",
      minPricePerKg: 180,
      maxPricePerKg: 450
    },
    {
      id: 4,
      state: "Rajasthan",
      popularVariety: "Mathania Chilli",
      specialty: "Used for its rich red color and medium spice level; popular in Rajasthani cuisine.",
      minPricePerKg: 300,
      maxPricePerKg: 600
    },
    {
      id: 5,
      state: "Gujarat",
      popularVariety: "Sankeshwari Chilli",
      specialty: "Medium spice level with a vibrant color, commonly used in dry and powdered forms.",
      minPricePerKg: 120,
      maxPricePerKg: 350
    },
    {
      id: 6,
      state: "Nagaland",
      popularVariety: "Bhut Jolokia (Ghost Pepper)",
      specialty: "Extremely hot, one of the hottest chillies in the world; used in pickles and spicy dishes.",
      minPricePerKg: 500,
      maxPricePerKg: 1000
    },
    {
      id: 7,
      state: "Tamil Nadu",
      popularVariety: "Ramnad Mundu/Gundu Chilli",
      specialty: "Round and medium-hot, mainly used in South Indian cuisine for flavor and color.",
      minPricePerKg: 200,
      maxPricePerKg: 450
    },
    {
      id: 8,
      state: "West Bengal",
      popularVariety: "Dhani Chilli",
      specialty: "Small, extremely pungent, and used for its strong flavor and intense heat.",
      minPricePerKg: 150,
      maxPricePerKg: 400
    },
    {
      id: 9,
      state: "Madhya Pradesh",
      popularVariety: "Indori Chilli",
      specialty: "Mildly spicy with a unique flavor, used in powders and culinary dishes.",
      minPricePerKg: 100,
      maxPricePerKg: 300
    },
    {
      id: 10,
      state: "Assam",
      popularVariety: "Bird's Eye Chilli",
      specialty: "Small and very spicy, used in traditional Assamese and Northeastern cuisine.",
      minPricePerKg: 250,
      maxPricePerKg: 600
    }
  ];
  
  
  // eslint-disable-next-line no-undef
  export {chiliVarieties,navItems,mirchiData};
