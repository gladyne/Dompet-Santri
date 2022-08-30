import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
        mb: 10,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Welcome To Dompet Santri
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Transaksi secara modern dan mudah pada pondok santren dengan praktis
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
