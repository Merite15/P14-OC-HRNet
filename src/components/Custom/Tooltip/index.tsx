import { useState } from 'react';
import "./style.scss";

/**
 * A custom tooltip component that renders a tooltip with information about the input field that it is associated with.
 *
 * @returns A React element representing the custom tooltip component.
 */
export const CustomTooltip = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <span
        className="fa-regular fa-circle-question"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></span>
      {isHovering && (
        <ul className="tooltip">
          <li> - start with a capital letter</li>
          <li> - minimum one character</li>
          <li> - no accent</li>
          <li> - no number</li>
          <li> - no special character</li>
        </ul>
      )}
    </>
  );
};
