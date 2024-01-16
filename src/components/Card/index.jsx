import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard({ src, name, population, region, capital }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/${name}`}>
        <CardMedia sx={{ height: 140 }} image={src} title="green iguana" />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {capital}
        </Typography>
      </CardContent>
    </Card>
  );
}
