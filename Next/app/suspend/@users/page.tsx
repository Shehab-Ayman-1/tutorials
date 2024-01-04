const UsersPage = async () => {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return <h3 className="my-5 text-3xl">Users Page</h3>;
};

export default UsersPage;
