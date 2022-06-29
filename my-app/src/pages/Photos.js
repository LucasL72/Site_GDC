import Album from "../components/Pics/Album";
import MainLayout from "../layouts/MainLayout";
import { getPic } from "../store/actions/PicsActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Photos = () => {
  const dispatch = useDispatch();
  const listPics = useSelector((state) => state.pics.listPics);

  useEffect(() => {
    dispatch(getPic());
  }, []);
  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Notre Album</h2>
        <Album list={listPics}/>
      </MainLayout>
    </div>
  );
};

export default Photos;
