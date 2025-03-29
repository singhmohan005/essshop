export const SearchIcon = ({ className, color="white" }) => (
  <div className={`flex  w-full h-full ${className}`}>
    <svg
      data-slot="icon"
      fill="none"
      stroke-width="1.5"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      ></path>
    </svg>
  </div>
);

export const ChevronDownIcon = ({ className, color="black" }) => (
  <div className={`flex  w-full h-full ${className}`}>
    <svg
      data-slot="icon"
      fill="none"
      stroke-width="1.5"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  </div>
);

export const LanguageIcon = ({ className, color="blue" }) => (
  <div className={`flex  w-full h-full ${className}`}>
    <svg
      data-slot="icon"
      fill="none"
      stroke-width="1.5"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
      ></path>
    </svg>
  </div>
);

export const CartIcon = ({ className, color= "blue" }) => (
  <div className={`flex  w-full h-full ${className}`}>
    <svg
      data-slot="icon"
      fill="none"
      stroke-width="1.5"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      ></path>
    </svg>
  </div>
);
