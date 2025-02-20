import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { saveLikeList } from '../store/slice';



export default function ProductCard({item}) {
    const dispatch = useDispatch()

  return (
    <Card sx={{ maxWidth: 345 }} className='object-contain'>
      <CardMedia
        className='h-[300px]'
        component="img"
        height='350px'
        image={item.images[0]}
        alt={item.title}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=> dispatch(saveLikeList(item))}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

