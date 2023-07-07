import { ImageList, CardMedia } from '@mui/material';
import React from 'react';
import {
  html5, css3, javascript, bootstrap, react, redux, vuejs,
  python, django, java, jest, nodejs, postgresql, rubyonrails, webpack,
} from '../img';

function TeckStack() {
  return (

    <ImageList
      cols={4}
      gap={4}
    >
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={html5}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={css3}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={javascript}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={bootstrap}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={react}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={redux}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={vuejs}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={python}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={django}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={jest}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={java}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={nodejs}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={postgresql}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={rubyonrails}
      />
      <CardMedia
        sx={{
          width: '60px',
          height: '60px',
        }}
        image={webpack}
      />
    </ImageList>

  );
}

export default TeckStack;
