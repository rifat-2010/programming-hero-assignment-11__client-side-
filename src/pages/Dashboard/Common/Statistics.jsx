import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import CustomerStatistics from '../../../components/Dashboard/Statistics/CustomerStatistics';
import SellerStatistics from '../../../components/Dashboard/Statistics/SellerStatistics';
import Loading from '../../../components/Loading';
import useRole from '../../../hooks/useRole'
const Statistics = () => {
  const [role, isRoleLoading] = useRole();
if(isRoleLoading) return <Loading/>
  return ( <div>
    {role === 'user' && <CustomerStatistics />} 
    {role === 'librarian' && <SellerStatistics/>} 
    {role === 'admin' && <AdminStatistics />} 
    
    </div> )

}

export default Statistics
