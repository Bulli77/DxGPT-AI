import * as React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <mask id="a">
      <rect width={100} height={100} rx={0} ry={0} fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M88.662 45.572c-6.596-23.003-31.313-36.097-55.2-29.248S-4.448 47.376 2.148 70.38l23.89 83.313 86.513-24.807-23.89-83.313Z"
        fill="#f88c49"
      />
      <path
        d="M42.39 41.702c1.198 1.845 1.054 4.084-.338 4.988s-3.496.125-4.694-1.72-1.055-4.085.337-4.99 3.496-.123 4.695 1.722Zm13.418-8.715c1.199 1.845 1.055 4.085-.337 4.989s-3.496.124-4.695-1.72-1.054-4.085.338-4.99 3.496-.124 4.694 1.721ZM58.565 57.43c-6.885 4.47-13.38 1.391-12.788.1.587-1.299 3.472 1.895 10.876-3.045 7.4-4.947 5.731-8.765 7.206-8.697 1.475.068 1.592 7.17-5.294 11.641Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgComponent;
