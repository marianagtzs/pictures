import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({ images }){
    const renderImage = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })

    return(
        <div className = 'Image-list'>  
      {renderImage}
            </div>
    )
}

export default ImageList