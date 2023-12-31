import React from 'react'

type Props = {
  images: string[];
}

 const Images = (props: Props) => {
  
  return (
        <>
         <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
          {props.images.length} Photos
          </h1>
          <div className="flex flex-wrap">
          {props.images.map((image: string) => {
          return (
            <>
              <img className="w-56 h-44 mr-1 mb-1" src={image} alt="" />
            </>
          );
        })}

     
      </div>
        </div>
        
        
        </>
  )
}

export default Images;