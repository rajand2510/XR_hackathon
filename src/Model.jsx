
import { AR3DProductCard } from '3d-ar-product-card'; // Assuming this is your AR component
import { ShoppingCart, FavoriteBorder } from '@mui/icons-material'; // You can replace these with SVGs or other icons if you want to avoid Material-UI

const products = [
  { name: "Indoor Plant", price: 29.99, gltfPath: "/models/indoor_plant/scene.gltf", imageSrc: "/image/1.png" },
  { name: "Modern Chair", price: 149.99, gltfPath: "/models/vitra_eames_plastic_chair/scene.gltf", imageSrc: "/image/2.png" },
  { name: "Table Lamp", price: 39.99, gltfPath: "/models/table_lamp/scene.gltf", imageSrc: "/image/6.png" },
  { name: "Wall Clock", price: 24.99, gltfPath: "/models/side_table_1/scene.gltf", imageSrc: "/image/9.png" },
];

function Model() {
  return (
    <div className="container mx-auto py-12">
      <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
      {/* Adjusted Grid layout with added gap for mobile devices */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white mt-10 rounded-lg shadow-md overflow-hidden flex flex-col mb-6"> {/* Added mb-6 for mobile gap */}
            <div className="flex-grow flex items-center justify-center h-64">
              <AR3DProductCard
                gltfPath={product.gltfPath}
                imageSrc={product.imageSrc}
                style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust the size of AR model
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <div className="flex justify-between mt-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                  <span className="flex items-center">
                    <ShoppingCart className="mr-1" /> Add to Cart
                  </span>
                </button>
                <button className="text-gray-500 hover:text-red-500 transition">
                  <FavoriteBorder />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Model;
