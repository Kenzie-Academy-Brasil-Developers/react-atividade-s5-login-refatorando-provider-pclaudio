import kenzieLogo from "../../assets/images/kenzie.svg";
import { useAuth } from "../../providers/Auth";

const Dashboard = (): JSX.Element => {
  const { setLogout } = useAuth();

  const handleLogout = (): void => {
    setLogout();
  };

  return (
    <>
      <h1>Dashboard</h1>
      <img src={kenzieLogo} alt="Kenzie Academy Brasil" />
      <button onClick={handleLogout}>Sair</button>
    </>
  );
};

export default Dashboard;
