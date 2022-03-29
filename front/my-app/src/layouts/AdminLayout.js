import Navigbar from "../components/core/Navigbar";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Navigbar />
           <main>{children}</main> 
        </div>
    );
};

export default AdminLayout;