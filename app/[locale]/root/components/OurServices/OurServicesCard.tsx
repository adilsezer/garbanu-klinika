import IconLink from "@components/common/IconLink";
import React from "react";
import CurlArrow from "@components/common/CurlArrow";

type OurServicesCardProps = {
  title: string;
  description: string;
};

const OurServicesCard: React.FC<OurServicesCardProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <div className="card w-60 bg-tertiary text-primary shadow-xl">
        <div className="card-body">
          <p className="text-center text-lg">{title}</p>
        </div>
      </div>
      <p className="text-center mt-2">{description}</p>
      {/* Render the Icon component and pass it to IconLink */}
      <CurlArrow />
    </div>
  );
};

export default OurServicesCard;
