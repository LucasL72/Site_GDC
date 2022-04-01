import React from 'react';
import GestionUser from '../../components/Admin/AdminPages/GestionUser';
import AdminLayout from '../../layouts/AdminLayout';

const AdminUser = () => {
    return (
        <div>
            <AdminLayout>
                <GestionUser />
            </AdminLayout>
            
        </div>
    );
};

export default AdminUser;