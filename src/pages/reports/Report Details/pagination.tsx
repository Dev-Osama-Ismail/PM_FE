// import React, { useState } from "react";
// import { Button, IconButton, IconButtonProps } from "@material-tailwind/react";

// export function DefaultPagination() {
//   const [active, setActive] = useState<number>(1);

//   const getItemProps = (index: number): IconButtonProps => ({
//       variant: active === index ? "filled" : "text",
//       color: "gray",
//       onClick: () => setActive(index),
//       children: undefined
//   });

//   const next = () => {
//     if (active === 5) return;
//     setActive((prev) => prev + 1);
//   };

//   const prev = () => {
//     if (active === 1) return;
//     setActive((prev) => prev - 1);
//   };

//   return (
//     <div className="flex items-center gap-4">
//       <Button
//               variant="text"
//               className="flex items-center gap-2"
//               onClick={prev}
//               disabled={active === 1} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
//         <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
//       </Button>
//       <div className="flex items-center gap-2">
//         {[1, 2, 3, 4, 5].map((index) => (
//           <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} key={index} {...getItemProps(index)}>
//             {index}
//           </IconButton>
//         ))}
//       </div>
//       <Button
//               variant="text"
//               className="flex items-center gap-2"
//               onClick={next}
//               disabled={active === 5}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
//         Next
//         <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
//       </Button>
//     </div>
//   );
// }
