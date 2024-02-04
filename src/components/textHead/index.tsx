import React from "react";

export const TextHead: React.FC = ({children}) => {
  return (
    <div className="text-4xl font-mattone uppercase text-white 2xl:text-6xl">
        {children}
    </div>
  );
};
