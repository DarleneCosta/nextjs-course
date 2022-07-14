import React from "react";
import { theme } from "../../theme/theme";
const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      style={{ color: theme.colors.primary["400"] }}
    >
      {children}
    </a>
  );
});

export default LinkEstilizado;
