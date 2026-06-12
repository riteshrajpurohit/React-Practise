import React from "react";

function Cards() {

    const data = [
    { 
      image: " https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      name: "Apple" , 
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui doloribus expedita reprehenderit quaerat.",
      instock : true
    },
    { 
      image: " https://images.unsplash.com/photo-1662947995689-ec5165848ad0?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      name: "Samsung" , 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui doloribus expedita reprehenderit quaerat.",
      instock : true
    },
    { 
      image: " https://images.unsplash.com/photo-1772683828822-731fe61b28a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      name: "OnePlus" , 
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui doloribus expedita reprehenderit quaerat. ",
      instock : false
    }
]
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      
      {data.map((elem , index)=>(
           <div key={index} className="w-72 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        
        <img
          className="w-full h-48 object-cover"
          src={elem.image}
          alt="Product"
        />

        <div className="p-4">
          <h2 className="text-xl font-semibold text-zinc-800">
           {elem.name}
          </h2>

          <p className="text-sm text-zinc-600 mt-2">
            {elem.description}
          </p>

          <button className= {`mt-4 w-full ${elem.instock ?  "bg-blue-600" :  "bg-red-600" } text-white py-2 rounded-lg transition`}>
            {elem.instock ? "Buy Now" : "Out of stock" }
          </button>
        </div>

      </div>

      ))}
     
    </div>
  );
}

export default Cards;