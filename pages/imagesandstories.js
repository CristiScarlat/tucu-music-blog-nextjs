import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import GallerySwipe from '../components/photoGallery/photoGallery';

const ImagesAndStories = () => {

    const [selectedImage, setSelectedImage] = useState();

    const images = [
        {src: "images/coperta_13.jpg", aspectRatio: 1.2},
        {src: "images/coperta_12.jpg", aspectRatio: 1.2},
        {src: "images/coperta_11.jpg", aspectRatio: 1.2},
        {src: "images/coperta_21.jpg", aspectRatio: 1.2},
        {src: "images/coperta_22.jpg", aspectRatio: 1.2},
        {src: "images/coperta_23.jpg", aspectRatio: 1.2},
        {src: "images/band_1.jpg", aspectRatio: 0.6937669376693767},
        {src: "images/band_2.jpg", aspectRatio: 0.6937669376693767},
        {src: "images/band_3.jpg", aspectRatio: 0.6937669376693767},
        {src: "images/band_4.jpg", aspectRatio: 0.6937669376693767},
        {src: "images/band_5.jpg", aspectRatio: 0.6937669376693767},
        {src: "images/band_6.jpg", aspectRatio: 0.6937669376693767},
        {src: "images/tucu_1.jpg", aspectRatio: 1.2},
        {src: "images/tucu_2.jpg", aspectRatio: 1.2},
        {src: "images/mibu_1.jpg", aspectRatio: 1.2},
        {src: "images/mibu_2.jpg", aspectRatio: 1.2},
        {src: "images/vic_1.jpg", aspectRatio: 1.2},
        {src: "images/vic_2.jpg", aspectRatio: 1.2},
        {src: "images/cristi_1.jpg", aspectRatio: 1.2},
        {src: "images/cristi_2.jpg", aspectRatio: 1.2}
    ]

    return (
        <main style={{background: 'black'}}>
            {/* <div className='d-flex flex-wrap p-3 m-3 justify-content-center'>
                {images.map((image, index) => <div key={image + index} className="w-20 m-3" onClick={() => handleZoomImg(index)}><img src={image} width={500} height={'auto'}/></div>)}
            </div>
            {/* {selectedImage && <div className='image-zoom-container'>
                <button onClick={handleCloseZoom}><FontAwesomeIcon icon={faWindowClose} size='2x' color='white'/></button>
                <div><img className="img-responsive" src={selectedImage} style={{maxWidth: '50%'}}/></div>
            </div>} */} 
            <GallerySwipe imageList={images} />
        </main>
    )
}

export default ImagesAndStories;