import React from 'react'
import "./HobbyPhotoAlbum.css"
import { hobbyPhotoAlbum } from '../../data/data'

function HobbyPhotoAlbum() {
  return (
        <div className='containerDiv'>
            {hobbyPhotoAlbum.map((item, index) => {
                return (
                    <div className='indexDiv' key={index} >
                        <img className="img" src={item.src} alt=''/>
                    </div>
                )
            })}
        </div>
  )
}

export default HobbyPhotoAlbum