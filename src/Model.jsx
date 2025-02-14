import { Arcard } from "room-craft"; // Assuming this is the AR product card package

const products = [
  {
    name: "Indoor Plant",
    price: "29.99", // Price as string to match prop types
    description: "A beautiful indoor plant to brighten your home.",
    image: "/image/1.png",
    gltfPath: "/models/indoor_plant/scene.gltf",
  },
  {
    name: "Modern Chair",
    price: "149.99",
    description: "A stylish modern chair that fits any living room.",
    image: "/image/2.png",
    gltfPath: "/models/vitra_eames_plastic_chair/scene.gltf",
  },
  {
    name: "Table Lamp",
    price: "39.99",
    description: "A sleek table lamp to illuminate your space.",
    image: "/image/6.png",
    gltfPath: "/models/table_lamp/scene.gltf",
  },
  {
    name: "Wall Clock",
    price: "24.99",
    description: "A minimalist wall clock with a timeless design.",
    image: "/image/9.png",
    gltfPath: "/models/side_table_1/scene.gltf",
  },

];

function Model() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-900 to-gray-800"> {/* This makes the entire page blue */}
      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 gap-6">
          {products.map((product, index) => (
            <div key={index} className="mb-8 flex flex-col items-center">
              <Arcard
                gltfPath={product.gltfPath}
                
                productName={product.name}
                productPrice='100'
                productDescription="a perfect blend of comfort and contemporary design. With its sleek lines, ergonomic curves, and premium materials, this chair offers both style and support. Ideal for living rooms, offices, or dining areas, it’s available in a variety of colors to match your decor"
                 // Pass the details as an array
                type="detailed" // AR and 3D card

                cardColor="" // Optional: Set the card color
                textColor="#111111" // Optional: Set text color
                cardStyle="minimal"
                productRating="4"
              
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 gap-6">
          {products.map((product, index) => (
            <div key={index} className="mb-8 flex flex-col items-center">
              <Arcard
                gltfPath={product.gltfPath}
              
                productName={product.name}
                productPrice='100'
                productDescription="hi ruchit where are come to library we want job becase we are job less hi ruchit where are come to library we want job becase we are job less
                hi ruchit where are come to library we want job becase we are job lesshi ruchit wher"
                 // Pass the details as an array
                type="detailed" // AR and 3D card

                cardColor="" // Optional: Set the card color
                textColor="#ffffff" // Optional: Set text color
                cardStyle="glassmorphism"
                productRating="4"
              
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="mb-8 flex flex-col items-center">
              <Arcard
                gltfPath={product.gltfPath}
          
                productName={product.name}
                price='100'
                productDetails={[{
                  price: product.price,
                  description: product.description,
                  image: product.image,
                }]} // Pass the details as an array
                type="3d-ar" // AR and 3D card
                cardColor="" // Optional: Set the card color
                textColor="#575656" // Optional: Set text color
                cardStyle="glassmorphism"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="mb-8 flex flex-col items-center">
              <Arcard
                gltfPath={product.gltfPath}
             
                productName={product.name}
                price='100'
                productDetails={[{
                  price: product.price,
                  description: product.description,
                  image: product.image,
                }]} // Pass the details as an array
                type="3d-ar" // AR and 3D card
                cardColor="" // Optional: Set the card color
                textColor="#575656" // Optional: Set text color
                cardStyle="minimal"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="mb-8 flex flex-col items-center">
              <Arcard
                gltfPath={product.gltfPath}
           
                productName={product.name}
                price='100'
                productDetails={[{
                 
                  description: product.description,
                  image: product.image,
                }]} // Pass the details as an array
                type="3d-only" // AR and 3D card
                cardColor="" // Optional: Set the card color
                textColor="#575656" // Optional: Set text color
                cardStyle="minimal"
               
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
            <div  className="mb-8 flex flex-col items-center">
              <Arcard
                gltfPath="/models/kokedama_bonsai.glb"
             
                // productName="{product.name}"
                // price='100'
                // productDetails={[{
                  
                //   description: product.description,
                //   image: product.image,
                // }]} // Pass the details as an array
                type="custom-size" // AR and 3D card
                cardColor="#ffffff" // Optional: Set the card color
                textColor="#ffffff" // Optional: Set text color
                cardStyle="minimal"
                 customWidth="550px"//minimum 300suggested
                customHeight="550px"// minimum 300suggested
              />
            </div>
            
     
        </div>
      </div>
    </div>
  );
}

export default Model;
