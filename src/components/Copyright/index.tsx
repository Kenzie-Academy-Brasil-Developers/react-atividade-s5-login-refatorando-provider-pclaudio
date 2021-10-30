import { Link, Typography } from "@mui/material";
import { Box } from "./styles";

const Copyright = (): JSX.Element => {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}

        <Link color="inherit" href="https://www.kenzie.com.br/">
          Kenzie Academy Brasil
        </Link>

        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
};

export default Copyright;
