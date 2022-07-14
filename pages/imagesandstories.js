import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import GallerySwipe from '../components/photoGallery/photoGallery';

const ImagesAndStories = () => {

    const [selectedImage, setSelectedImage] = useState();

    const images = [
        {src: "images/poze-prelucrate/1.png", aspectRatio: 1.2},
        {src: "images/poze/2.png", aspectRatio: 1.2},
        {src: "images/poze/3.png", aspectRatio: 1.2},
        {src: "images/poze/4.png", aspectRatio: 1.2},
        {src: "images/poze/5.png", aspectRatio: 1.2},
        {src: "images/poze/6.png", aspectRatio: 1.2},
        // {src: "images/poze/7.png", aspectRatio: 1.2},
        {src: "images/poze/8.png", aspectRatio: 1.2},
        {src: "images/poze/9.png", aspectRatio: 1.0}
        // {src: "images/poze/9.png", aspectRatio: 0.6937669376693767}
    ]

    return (
        <main style={{background: 'black', marginBottom: '2rem'}}>
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