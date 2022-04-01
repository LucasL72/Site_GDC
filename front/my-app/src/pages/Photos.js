import Album from "../components/Pics/Album";
import MainLayout from "../layouts/MainLayout";

const Photos = () => {
  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Notre Album</h2>
        <Album />
      </MainLayout>
    </div>
  );
};

export default Photos;
