import React from "react";
import ServicesSub from "./../services-sub/services-sub";
import "./services-farm.scss";

function ServicesFarm() {
  return (
    <ServicesSub subpage="farming">
      <div className="title">
        <h1 className="services-sub-title">
          <span>Farming</span>
        </h1>
      </div>
      <div className="farming">
        <article className="mb-4">
          <h2 className="sub-heading">Livestocks</h2>
          <p>Poultry</p>
          <p>Cattles (Beef, Milk, Cheese, Yoghurt)</p>
          <p>Goats/Sheep Honey</p>
        </article>

        <article>
          <h2 className="sub-heading mt-4">
            Crops Cultivation &amp; Value Chain
          </h2>
          <p>Oil Palm Plantation</p>
          <p>Cocoa and Bush Mango</p>
          <p>Bananas/Plantain/</p>
          <p>Oranges/mangos/Pineapple</p>
          <p>Rice/vegetables (green, pumpkin)</p>
          <p>Cassava (garri/starch/pelletsins)</p>
          <p>Maize/Millet/Beans/Onions</p>
          <p>Melons/peppers/tomatoes</p>
          <p>Groundnut</p>
        </article>
      </div>
    </ServicesSub>
  );
}

export default ServicesFarm;
