const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        background:"#0f172a",
        color:"white"
      }}
    >

      <h1>Welcome {user?.name}</h1>

      <h2>Industrial Intelligence Dashboard</h2>

    </div>

  );

};

export default Dashboard;