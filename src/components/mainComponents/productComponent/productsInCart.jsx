import { useEffect, useState } from 'react';
import axios from 'axios';
const cartItemsData = [
  {
    id: 1,
    name: "Kashmiri Chili",
    description: "Mildly spicy and known for its vibrant red color, perfect for adding color to dishes.",
    quantity: 2,
    price: 5.99, // price per unit in dollars
    image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/semi-dried-kashmir-red-chilli-buy-online.20230215165739.webp",

    location: "Kashmir, India",
    spicyLevel: "Mild",
    weight: "100g",
  },
  {
    id: 2,
    name: "Byadagi Chili",
    description: "Popular chili variety from Karnataka with a rich red color and medium heat.",
    quantity: 1,
    price: 3.49,
    image: "mirchiTypes/byadigiMirchiImg-11.webp",
    location: "Karnataka, India",
    spicyLevel: "Medium",
    weight: "50g",
  },
  {
    id: 3,
    name: "Guntur Chili",
    description: "Highly spicy chili variety from Andhra Pradesh, known for its pungency.",
    quantity: 3,
    price: 4.99,
    image: "mirchiTypes/gunturSannam.jpg",
    location: "Andhra Pradesh, India",
    spicyLevel: "Hot",
    weight: "100g",
  },
  {
    id: 4,
    name: "Bird's Eye Chili",
    description: "Small but intensely hot chili, commonly used in Thai and other Asian cuisines.",
    quantity: 1,
    price: 6.99,
    image: "mirchiTypes/bird-eye-chilli-500x500.webp",
    location: "Northeast India",
    spicyLevel: "Very Hot",
    weight: "25g",
  },
];


const CartPage = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [totalPrice, setTotalPrice] = useState(0);

  
  // useEffect(() => {
  //   fetchCartItems();
  // }, []);

  // const fetchCartItems = async () => {
  //   try {
  //     const response = await axios.get('/api/cart'); 
  //     setCartItems(cartItemsData);
  //     calculateTotalPrice(cartItemsData);
  //   } catch (error) {
  //     console.error("Error fetching cart items:", error);
  //   }
  // };

  const calculateTotalPrice = (items) => {
    const total = items?.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateCartItem = async (id, newQuantity) => {
    try {
      await axios.put(`/api/cart/${id}`, { quantity: newQuantity }); // API call to update quantity
      const updatedCart = cartItems?.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
      calculateTotalPrice(updatedCart);
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await axios.delete(`/api/cart/${id}`); // API call to remove item
      const filteredCart = cartItems?.filter(item => item.id !== id);
      setCartItems(filteredCart);
      calculateTotalPrice(filteredCart);
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const handleCheckout = () => {
    // Redirect to checkout page or handle checkout process
    console.log("Proceeding to checkout");
  };

  return (
    <div className="min-h-screen bg-red-200 p-8">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Your Cart</h2>
      <div className="xs:flex xs:flex-col xs:justify-center xs:items-center bg-white shadow-lg rounded-lg p-8">
        {cartItems?.length === 0 ? (
          <p className="text-gray-700 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className='space-y-6'>
              {cartItems?.map(item => (
                <li
                  key={item.id}
                  className="flex xs:flex-col xs:space-y-6 items-center justify-between p-4 border-b border-gray-500"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹{item.price} per kg</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateCartItem(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateCartItem(item.id, item.quantity + 1)}
                      className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeCartItem(item.id)}
                      className="text-red-500 border-1 border-gray-300 hover:text-red-700 hover:bg-red-600 hover:text-white hover:border-none"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex xs:flex-col xs:space-y-4  justify-between items-center mt-6">
              <h3 className="text-xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h3>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;
