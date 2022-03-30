
import EditUser from "../components/Register/EditUser";
import MainLayout from "../layouts/MainLayout";
import User from "../components/User";


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
