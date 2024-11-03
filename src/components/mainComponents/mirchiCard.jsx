/* eslint-disable react/prop-types */


const MirchiCard = (props) => {
    const { mirchi } = props;

console.log(mirchi.variety);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-red-700">{mirchi?.variety}</h3>
      <p className="text-gray-600 mt-2">{mirchi.state}</p>
      <p className="text-gray-700 mt-4">{mirchi.specialty}</p>
      <div className="mt-4">
        <p className="text-green-700 font-semibold">Min Price: ₹ {mirchi.minPrice}</p>
        <p className="text-red-700 font-semibold">Max Price: ₹ {mirchi.maxPrice}</p>
      </div>
    </div>
  );
};

export default MirchiCard;
