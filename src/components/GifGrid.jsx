import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifts(category);
  //   setImages(newImages);
  // }

  // useEffect(() => {
  //   getImages();
  // }, [])

  // getGifts(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (
          <h2>Cargando...</h2>
        )
      }
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem 
              key={ image.id }
              { ...image } // Repartir las propiedades del objeto image
            />
          ))
        }
      </div>
    </>
  )
}
