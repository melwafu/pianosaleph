import AdminLayout from '@/Admin/AdminLayout';

function Children() {
  return(
    <h1>Dashboard</h1>
  )
}

function Dashboard() {
  const children = Children();

  return (
    <AdminLayout head="Dashboard" children={children} />
  );
}

export default Dashboard;