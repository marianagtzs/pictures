import ImageShow from './ImageShow'

function ImageList({ images}){
    const renderImage = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })

    return(
        <div>
        <h1>Images: </h1>
        </div>
    )
}

export default ImageList