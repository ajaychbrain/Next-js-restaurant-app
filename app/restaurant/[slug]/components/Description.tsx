import React from 'react'

type Props = {
  description: string;
}


export const Description = (props: Props) => {
  return (
        <>
         <div className="mt-4">
          <p className="text-lg font-light">
            {props.description}
          </p>
        </div>
        
        </>
  )
}
