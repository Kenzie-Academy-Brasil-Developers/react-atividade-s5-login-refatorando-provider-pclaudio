import { useAuth } from "../../providers/Auth";
import kenzieLogo from "../../assets/images/kenzie.svg";
import { Box, Button, Container } from "./styles";

const Dashboard = (): JSX.Element => {
  const { setLogout } = useAuth();

  const handleLogout = (): void => {
    setLogout();
  };

  return (
    <Container disableGutters maxWidth={false}>
      <Box>
        <img src={kenzieLogo} alt="Kenzie Academy Brasil" />
        <Button
          fullWidth
          variant="contained"
          color="error"
          size="large"
          onClick={handleLogout}
        >
          Sair
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
