// import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { dryChilliProducts } from '../../../staticJsonData';
import ProductInfoDialog from './productDetailes';
import SectionDivider from '../../customComponents/divider';



const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);


  // const handleSeeMoreInfo = (product)=>{
   
  //      navigate(`/products/${product?.id}`,{state:product})
  // };

  return (
    <div className="min-h-screen bg-red-100 pt-16 pb-10 mt-20">
       <SectionDivider className={'font-bold text-3xl ml-4 mb-8'} title = {"Explore Our Chili Varieties"}/>
      <div className="mx-8 flex justify-center items-center">
        
        {/* <h1 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-10">Explore Our Chili Varieties</h1> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:mx-4 sm:mx-4">
          {dryChilliProducts.map((product) => (
            // <Link to={`/products/${product.id}`} key={product.id} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div key={product.id} className="block py-6 w-full bg-white flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition" onClick={() => openDialog(product)}>
              <h2 className="text-xl inline text-center font-bold text-gray-800">{product.name}</h2>
              <div className='h-4/5 flex justify-center items-center'>
                <div className='m-0 px-5'>
                  <img className='w-36 h-36 p-0 m-0' src={product?.image} alt={product?.name} />
                </div>
                <div className='p-5'>
                  <p className="mt-2 text-gray-900"><span className="font-semibold text-red-600">Variety:</span> {product.variety}</p>
                  <p className="mt-2 text-gray-900"><span className="font-semibold text-red-600">Supplier:</span> {product.supplier}</p>
                  <p className="mt-2 font-semibold text-gray-900"><span className="font-semibold text-red-600">Price:</span> {product.pricePerKg}/Kg</p>
                  <p className="mt-2 text-gray-900"><span className="font-semibold text-red-600">Availability:</span> {product.availability}</p>
                  <p className="mt-2 text-gray-900"><span className="font-semibold text-red-600">Location:</span> {product.supplierAddress}</p>
                </div>
              </div>
              <button onClick={() => openDialog(product)} className="w-4/5 py-2 text-sm font-semibold bg-red-600 hover:text-red-600 text-white border border-red-600 rounded hover:bg-red-50">
                See More Details
              </button>
            </div>

            // </Link>
          ))}
        </div>
        {selectedProduct && (
        <ProductInfoDialog
          product={selectedProduct}
          isOpen={isDialogOpen}
          onClose={closeDialog}
        />
      )}
      </div>
    </div>
  );
};

export default Products;
