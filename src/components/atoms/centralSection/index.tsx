import React from 'react'

type TextCard = {
    title: string;
    content: string;
  };

const CentralText = ({title, content}: TextCard) => {
  return (
    <div className="flex flex-col items-center"> {/* Centrar horizontalmente */}
        <h2 className="text-3xl font-bold text-center mb-8 text-black">{title}</h2>
        <p className="text-center text-gray-500 mb-8 w-[50%] mx-auto"> {/* Asegurar que esté centrado */}
            {content}
        </p>
    </div>
  )
}

export default CentralText;



