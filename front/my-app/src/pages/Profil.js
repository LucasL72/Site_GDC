import EditUser from "../components/Register/EditUser";
import User from "../components/User";
import MainLayout from "../layouts/MainLayout";

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

export default Profile;
