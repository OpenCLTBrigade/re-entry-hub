import React from "react";

// This Row component lets us use a bootstrap row without having to think about class names
export const Row = ({children, addClasses }) => (
  <div className={addClasses}>
                              {children}
  </div>
);

