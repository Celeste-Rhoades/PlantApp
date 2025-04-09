import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="bg-emerald-50">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl ">
              <div className="font-playfair text-emerald-800 text-4xl mb-6 px-6">
                Plants in stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map(plant => (
                  <PlantItem key={plant.name} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
