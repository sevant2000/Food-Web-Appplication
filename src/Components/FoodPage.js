import React from "react";
import Items from "./Items";
import data from "./data";

function FoodPage() {
  return (
    <div className="text-center mt-3">
      
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Items
                img={item.img}
                title={item.title}
                price={item.price}
                desc={item.desc} 
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default FoodPage;
