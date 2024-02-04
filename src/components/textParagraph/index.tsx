import React from "react";

export const TextParagraph: React.FC = ({children}) => {
  return (
    <div className="text-xl text-white font-subtitle 2xl:text-2xl">
        {children}
    </div>
  );
};
