import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import UserStatistics from "../../../components/Dashboard/Statistics/UserStatistics";
import LibrarianStatistics from "../../../components/Dashboard/Statistics/LibrarianStatistics";
import Loading from "../../../components/Loading";
import useRole from "../../../hooks/useRole";
const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <Loading />;
  return (
    <div>
      {role === "user" && <UserStatistics />}
      {role === "librarian" && <LibrarianStatistics />}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
