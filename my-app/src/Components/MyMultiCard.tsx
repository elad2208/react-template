import MyPropsCard from './MyPropsCard';
import { Grid } from '@mui/material';
function MyMultiCard():JSX.Element {
 return (
 <Grid container xs={12}>
<MyPropsCard
imageSrc="https://picsum.photos/id/866/700/400" />
 <MyPropsCard
imageSrc="https://picsum.photos/id/867/700/400" />
 <MyPropsCard
imageSrc="https://picsum.photos/id/868/700/400" />
 <MyPropsCard
imageSrc="https://picsum.photos/id/869/700/400" />
</Grid>
 );
}
export default MyMultiCard;