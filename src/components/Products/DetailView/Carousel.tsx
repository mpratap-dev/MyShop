import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const CarouselContainer = ({ images }: { images: string[] }) => (
  <Carousel autoplay dotPosition="left">
    {
      images?.map((src) => (
        <div >
          <img src={src} alt="image" height={200} className='mx-auto rounded border'/>
        </div>
      ))
    }
  </Carousel>
);

export default CarouselContainer;