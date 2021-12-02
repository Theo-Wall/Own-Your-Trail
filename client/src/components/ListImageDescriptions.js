// import { useState } from 'react'
import ImageDescriptionRow from './ImageDescriptionRow'


const ListImageDescriptions = ({photoArray, dataInput, descriptionValue}) => {

  console.log(photoArray)

  return ( 
        <div className="photo-description">
          {
          photoArray.map((photo, index) => {
            return (
              <ImageDescriptionRow 
                key={photo._id}
                index={index}
                url={photo.url}
                imageDescription={descriptionValue}
                dataInput={dataInput}
              />
            )
          })
          }
          {/* <label htmlFor="photoDescription">Photo 1 Description</label>
          <input value={descriptionValue} onChange={dataInput} id="photoDescription" type="text" placeholder="Describe Photo 1"></input>  */}
        </div>
  )
}


            <div  >
                
            </div>

export default ListImageDescriptions