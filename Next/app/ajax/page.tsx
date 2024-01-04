const AjaxAPI = async () => {
   /* GET Data From Server-Side
      - Here We Can't Use Any Fetching Method Such As Next 12
      - We Must To Fetching Data Directly In The Server Side
      - If We Need To Render OR Make Any Client-Side Functionality, 
         We Need To make It In Another Component With 'use client'
   */

   return <h3 className="mb-4 text-2xl text-teal-500">GET Users</h3>;
};

export default AjaxAPI;
