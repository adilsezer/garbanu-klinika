import React from "react";
import CurlArrow from "@components/common/CurlArrow";
import Link from "next/link";

type OurServicesCardProps = {
  title: string;
  labelText: string;
  url: string;
};

const OurServicesCard: React.FC<OurServicesCardProps> = ({
  title,
  labelText,
  url,
}) => {
  return (
    <Link href={url}>
      <div className="card w-60 bg-tertiary text-primary shadow-xl">
        <div className="card-body">
          <p className="text-center text-lg">{title}</p>
        </div>
      </div>
      <p className="text-center mt-2">{labelText}</p>
      <CurlArrow />
    </Link>
  );
};

export default OurServicesCard;
