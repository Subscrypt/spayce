import React from "react";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

// @ts-ignore
const SwaggerUI = dynamic(() => import("swagger-ui-react"), { loading: () => <p>docs</p>, ssr: false });

const Docs = () => {
  return (
    <div className="bg-white">
      <div className="bg-white h-10"></div>
      <SwaggerUI url={`/api/docs`} />
      <div className="bg-white h-20"></div>
    </div>
  );
};

export default Docs;
