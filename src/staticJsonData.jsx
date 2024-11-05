const navItems = [
  { item: "Home", id: 1 },
  { item: "About Us", id: 2 },
  { item: "Products", id: 3 },
  { item: "Contact", id: 4 },
  { item: "Regions", id: 5 }
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


const dryChilliProducts = [
  {
    id: 1,
    name: "Guntur Sannam Chili",
    variety: "Sannam",
    state: "Andhra Pradesh",
    supplier: "Reddy Spice Exports",
    supplierAddress: "123 Market St, Guntur, Andhra Pradesh",
    contactNumber: "+91-9876543210",
    color: "Bright Red",
    spicyLevel: "High",
    image: "mirchiTypes/gunturSannam.jpg",
    moistureContent: "10%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    pricePerKg: 450,
    availability: "In Stock",
    specialFeatures: "High pungency, perfect for spicy dishes",
    usage: "Cooking, pickles",
    packaging: "25kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 2,
    name: "Kashmiri Chili",
    variety: "Kashmiri",
    state: "Jammu & Kashmir",
    supplier: "Kashmir Spice House",
    supplierAddress: "5 Heritage Rd, Srinagar, Jammu & Kashmir",
    contactNumber: "+91-9988776655",
    color: "Deep Red",
    image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/semi-dried-kashmir-red-chilli-buy-online.20230215165739.webp",

    spicyLevel: "Mild",
    moistureContent: "12%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    pricePerKg: 600,
    availability: "In Stock",
    specialFeatures: "Rich color, mild heat",
    usage: "Color enhancement in dishes",
    packaging: "10kg bags",
    minOrderQuantity: "50kg"
  },
  {
    id: 3,
    name: "Byadgi Chili",
    variety: "Byadgi",
    state: "Karnataka",
    supplier: "Mysore Spice Traders",
    supplierAddress: "12 Spice Lane, Byadgi, Karnataka",
    contactNumber: "+91-9123456780",
    color: "Darker Red",
    spicyLevel: "Medium",
    image: "mirchiTypes/byadigiMirchiImg-11.webp",
    moistureContent: "9%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], pricePerKg: 500,
    availability: "Out of Stock",
    specialFeatures: "Wrinkled skin, used in spice mixes",
    usage: "Powder, cooking",
    packaging: "50kg bags",
    minOrderQuantity: "200kg"
  },
  {
    id: 4,
    name: "Teja Chili",
    variety: "Teja",
    state: "Andhra Pradesh",
    supplier: "Andhra Spice Mart",
    supplierAddress: "78 High St, Guntur, Andhra Pradesh",
    contactNumber: "+91-8765432109",
    color: "Red",
    spicyLevel: "Very High",
    moistureContent: "8%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], image: "mirchiTypes/gunturSannam.jpg",
    pricePerKg: 750,
    availability: "In Stock",
    specialFeatures: "High pungency, intense heat",
    usage: "Cooking, powdered chili",
    packaging: "25kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 5,
    name: "Jwala Chili",
    variety: "Jwala",
    state: "Gujarat",
    supplier: "Gujarat Spice Exporters",
    supplierAddress: "43 Jwala Rd, Rajkot, Gujarat",
    contactNumber: "+91-9123987654",
    color: "Red",
    spicyLevel: "High",
    moistureContent: "9%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], image: "mirchiTypes/kholaMirchi.jpeg",
    pricePerKg: 470,
    availability: "In Stock",
    specialFeatures: "Sharp spiciness, slender shape",
    usage: "Cooking",
    packaging: "20kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 6,
    name: "Bhoot Jolokia",
    variety: "Ghost Pepper",
    state: "Assam",
    supplier: "Naga Pepper Farms",
    supplierAddress: "22 Mountain Rd, Dimapur, Assam",
    contactNumber: "+91-9098765432",
    color: "Orange-Red",
    spicyLevel: "Extremely High",
    moistureContent: "7%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], pricePerKg: 1000,
    availability: "Limited Stock",
    specialFeatures: "Among the hottest chilies globally",
    usage: "Hot sauces, spice mixes",
    packaging: "10kg bags",
    minOrderQuantity: "50kg"
  },
  {
    id: 7,
    name: "Kanthari White Chili",
    variety: "Kanthari",
    state: "Kerala",
    supplier: "Kerala Spice Hub",
    supplierAddress: "6 Beach Rd, Kochi, Kerala",
    contactNumber: "+91-9012345678",
    color: "White",
    image: "mirchiTypes/Dried-Kanthari-Chilli-Birds-Eye-Chilli-Bird-Eye-Chilli-Birds-Chilli-Thai-Chilli-copy-4-1.jpg",

    spicyLevel: "Medium",
    moistureContent: "11%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    pricePerKg: 750,
    availability: "In Stock",
    specialFeatures: "Unique color, moderate spiciness",
    usage: "Cooking, pickles",
    packaging: "5kg bags",
    minOrderQuantity: "25kg"
  },
  {
    id: 8,
    name: "Mundu Chili",
    variety: "Mundu",
    state: "Tamil Nadu",
    supplier: "Madurai Spice Mart",
    supplierAddress: "45 Temple Rd, Madurai, Tamil Nadu",
    contactNumber: "+91-9871234567",
    color: "Bright Red",
    spicyLevel: "Medium",
    image: "mirchiTypes/gunturSannam.jpg",
    moistureContent: "10%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    pricePerKg: 550,
    availability: "In Stock",
    specialFeatures: "Round shape, unique flavor",
    usage: "Cooking, powder",
    packaging: "15kg bags",
    minOrderQuantity: "75kg"
  },
  {
    id: 9,
    name: "Dhani Chili",
    variety: "Dhani",
    state: "Manipur",
    supplier: "Manipur Spices",
    supplierAddress: "11 Spice Valley, Imphal, Manipur",
    contactNumber: "+91-8987654321",
    color: "Red",
    spicyLevel: "High",
    moistureContent: "9%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], pricePerKg: 800,
    availability: "Limited Stock",
    specialFeatures: "Small and fiery",
    image: "mirchiTypes/gunturSannam.jpg",
    usage: "Hot sauces",
    packaging: "5kg bags",
    minOrderQuantity: "30kg"
  },
  {
    id: 10,
    name: "Ramnad Mundu Chili",
    variety: "Mundu",
    state: "Tamil Nadu",
    supplier: "Southern Spice Traders",
    supplierAddress: "67 Mundu St, Ramanathapuram, Tamil Nadu",
    contactNumber: "+91-9123098765",
    color: "Deep Red",
    spicyLevel: "Medium",
    moistureContent: "10%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    pricePerKg: 580,
    image: "mirchiTypes/red-round-ramnad-dry-chilli-500x500.webp",
    availability: "In Stock",
    specialFeatures: "Distinct shape, mild flavor",
    usage: "Cooking, powder",
    packaging: "20kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 11,
    name: "Bhadgi Chili",
    variety: "Byadgi",
    state: "Karnataka",
    supplier: "Karnataka Spice Traders",
    supplierAddress: "12 Market St, Hubli, Karnataka",
    contactNumber: "+91-8901234567",
    color: "Bright Red",
    spicyLevel: "Medium",
    moistureContent: "9%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], image: "mirchiTypes/bird-eye-chilli-500x500.webp",
    pricePerKg: 520,
    availability: "In Stock",
    specialFeatures: "Ideal for powder, wrinkled appearance",
    usage: "Cooking",
    packaging: "20kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 12,
    name: "Sankeshwari Chili",
    variety: "Sankeshwari",
    state: "Maharashtra",
    supplier: "Maharashtra Spice Hub",
    supplierAddress: "9 Spice Valley, Kolhapur, Maharashtra",
    contactNumber: "+91-9870987654",
    color: "Red",
    spicyLevel: "High",
    image: "mirchiTypes/sankeswahri.webp",
    moistureContent: "9%",

    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ], pricePerKg: 580,
    availability: "In Stock",
    specialFeatures: "High pungency, sharp flavor",
    usage: "Cooking, powder",
    packaging: "15kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 13,
    name: "Bhavnagari Chili",
    variety: "Bhavnagari",
    state: "Gujarat",
    supplier: "Gujarat Spice Exporters",
    supplierAddress: "56 Bhavnagar Rd, Bhavnagar, Gujarat",
    contactNumber: "+91-9876532109",
    color: "Green/Red",
    spicyLevel: "Mild",
    image: "mirchiTypes/sankeswahri.webp",
    moistureContent: "12%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    pricePerKg: 400,
    availability: "In Stock",
    specialFeatures: "Large size, low heat",
    usage: "Pickling, cooking",
    packaging: "20kg bags",
    minOrderQuantity: "100kg"
  },
  {
    id: 14,
    name: "Madras Chili",
    variety: "Madras",
    state: "Tamil Nadu",
    supplier: "Spice House Tamil Nadu",
    supplierAddress: "123 Madras Rd, Chennai, Tamil Nadu",
    contactNumber: "+91-9865234798",
    color: "Bright Red",
    spicyLevel: "Medium",
    moistureContent: "11%",
    images: [
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-125x125.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-250x250.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-500x500.jpg",
      "http://5.imimg.com/data5/SELLER/Default/2024/4/414683643/FN/JX/KP/88512469/byadgi-red-dry-chilli-1000x1000.jpg"
    ],
    image: "mirchiTypes/sankeswahri.webp",
    pricePerKg: 500,
    availability: "In Stock",
    specialFeatures: "Sharp taste, versatile",
    usage: "Cooking, pickles",
    packaging: "25kg bags",
    minOrderQuantity: "100kg"
  },
  // Add more entries as needed up to 20
];



// eslint-disable-next-line no-undef
export { chiliVarieties, navItems, mirchiData, dryChilliProducts };
