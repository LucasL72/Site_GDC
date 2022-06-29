import EditUser from "../components/Register/EditUser";
import User from "../components/User";
import MainLayout from "../layouts/MainLayout";
import withAuth from "../components/Login/withAuth";

const Profile = () => {
  return (
    <div>
      <MainLayout>
        <User />
        <EditUser />
      </MainLayout>
    </div>
  );
};

export default withAuth(Profile);
