import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import Zoom from "react-medium-image-zoom";
import PlantPurchaseOption from "./PlantPurchaseOptions";
import { useState } from "react";
import { getRandomIdx } from "shared-components/util";
import "react-medium-image-zoom/dist/styles.css";

const PlantInfoSection = (props) => {
  const { plant } = props;
  const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="mb-8 block md:hidden">
          <PlantHeading plant={plant} />
        </div>
        <Zoom>
          <img className="rounded-lg" src={plant.images[imageIdx].src} />
        </Zoom>
        <div className="mt-6 flex">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="w-px bg-slate-300"></div>
          <BenefitBox
            icon="fa-regular fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>

        <p className="mt-6 leading-relaxed text-slate-600">
          {plant.description}
        </p>
        <PlantPurchaseOption
          plant={plant}
          imageIdx={imageIdx}
          setImageIdx={setImageIdx}
        />
      </div>
    </div>
  );
};

export default PlantInfoSection;
