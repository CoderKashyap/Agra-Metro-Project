"use client";

import { useState } from "react";
// import MetaData from "../app/components/layout/MetaData";
// import "./home.css";
import PlanYourJourneyCol from "../app/components/home/PlanYourJourneyCol";
import KnowYourLocationCol from "../app/components/home/KnowYourLocationCol";
import NumericCounterInfo from "../app/components/home/NumericCounterInfo";
import LiveActiveSponsored from "../app/components/home/LiveActive&sponsored";
import TourGuide from "../app/components/home/TourGuide";
import LatestBlogs from "../app/components/home/LatestBlogs";
import WayOfTransportToAgra from "../app/components/home/WayOfTransportToAgra";

const Home = () => {
  const [openPlanYourJourneyForm, setOpenPlanYourJourneyForm] = useState(false);
  return (
    <>
      {/* <MetaData
        title="Agra Metro- Stations, Fare, Timings & Route map"
        description="Agra ghumo, Khao pio aish kro."
        keywords="Agra Metro"
        image={undefined}
      /> */}

      <section className="w-full">
        <div className="grid place-items-center">
          <div className="sm:w-11/12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 p-4">
              {/* Route search form vala colomn 1, image ka size hanle krne ke liye before:bg-[length:300px_200px]*/}
              <PlanYourJourneyCol
                openPlanYourJourneyForm={openPlanYourJourneyForm}
                setOpenPlanYourJourneyForm={setOpenPlanYourJourneyForm}
              />

              {/* Route search form vala colomn 2 */}
              <KnowYourLocationCol />

              {/* Live & sponsored colomn 3rd */}
              <LiveActiveSponsored />
            </div>

            <NumericCounterInfo />

            <TourGuide />

            <LatestBlogs />

            <WayOfTransportToAgra />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
