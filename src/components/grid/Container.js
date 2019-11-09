import React from "react";

//Bootstrap container
export const Container = ({addClasses, children}) => (
  <div className={addClasses}>
                 {children}
  </div>
);
