

function ImageList({img}){

    return(
        <div>
            {
                img.map((value) =>{
                    <img src={value.urls.thumb} alt={value.alt_description}
                    />
                })
            }
        </div>
    )
}

export default ImageList;