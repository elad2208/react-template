/* eslint-disable react-refresh/only-export-components */
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default (props: { imageSrc: string }): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.imageSrc}
          title="Random Image"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Random Image
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Random interesting image
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
