import { useState } from 'react';
import "./style.scss";

/**
 * Functional component representing a custom tooltip for providing input validation rules.
 *
 * @component
 * @returns {JSX.Element} CustomTooltip component for displaying input validation rules on hover.
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
