import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { Image } from 'next/image'

const GallerySwipe = ({ imageList }) => {
    const localList = imageList.map(o => (
        {
            original: o.src,
            thumbnail: o.src,
            width:"1024",
            height:"768",
            aspectRatio: o.aspectRatio,
            loaded: false
        }))
    return (
        <div className="gallery-swipe-container">
            <Gallery shareButton={false}>
                {localList.map((imgObj, index) => <Item
                    key={imgObj.id + "gallery-swipe" + index}
                    original={imgObj.original}
                    // thumbnail={imgObj.thumbnail}
                    width={imgObj.width}
                    height={(imgObj.width / imgObj.aspectRatio)}
                    style={{ margin: '2rem' }}
                >
                    {({ ref, open }) => <img ref={ref} onClick={open} src={imgObj.original} loading="lazy" onLoad={() => imgObj.loaded = true}/>}
                </Item>)}
            </Gallery>
        </div >
    )
}

export default GallerySwipe;