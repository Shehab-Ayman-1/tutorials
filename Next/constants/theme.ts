export const theme = {
   menu: {
      defaultProps: {
         offset: 13,
         animate: {
            mount: { opacity: 1, scale: 1 },
            unmount: { opacity: 1, scale: 0 },
         },
      },
      styles: {
         base: {
            menu: {
               p: "py-2 px-2 md:px-4",
               border: "border border-teal-50",
               borderRadius: "rounded-lg",
               boxShadow: "shadow-lg shadow-teal/50 dark:shadow-teal/10",
               fontSize: "text-base lg:text-xl",
               color: "text-teal",
            },
            item: {
               initial: {
                  display: "flex-start",
                  bg: "hover:bg-dimTeal hover:bg-opacity-80 focus:bg-dimTeal focus:bg-opacity-80 active:bg-dimTeal active:bg-opacity-80",
                  color: "text-dimWhite hover:text-teal-500 focus:text-teal-500 active:text-teal",
               },
            },
         },
      },
   },

   select: {
      styles: {
         base: {
            option: {
               initial: {
                  background: "hover:bg-teal-100 focus:bg-teal-100",
                  color: "hover:text-teal-900 focus:text-teal-900",
               },
               active: {
                  bg: "bg-teal-100 bg-opacity-80",
                  color: "text-teal-900",
               },
            },
         },
      },
   },
};
