import React from 'react'

const Brands = () => {
  const items = [
    { text: 'ENVIRONMENTS' },
    { circle: true },
    { text: 'EXPERIENCES' },
    { circle: true },
    { text: 'CONTENT' },
    { circle: true },
  ];
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex whitespace-nowrap animate-marqueeFast">
          {items.map((item, index) => (
            <div key={`original-${index}`} className="inline-flex items-center">
              {item.text && <h1 className="mx-4">{item.text}</h1>}
              {item.circle && (
                <div className="h-[50px] w-[50px] bg-orange-500 rounded-full mx-[2vw] my-[1vw]"></div>
              )}
            </div>
          ))}
          {items.map((item, index) => (
            <div key={`original-${index}`} className="inline-flex items-center">
              {item.text && <h1 className="mx-4">{item.text}</h1>}
              {item.circle && (
                <div className="h-[50px] w-[50px] bg-orange-500 rounded-full mx-[2vw] my-[1vw]"></div>
              )}
            </div>
          ))}
          {items.map((item, index) => (
            <div key={`original-${index}`} className="inline-flex items-center">
              {item.text && <h1 className="mx-4">{item.text}</h1>}
              {item.circle && (
                <div className="h-[50px] w-[50px] bg-orange-500 rounded-full mx-[2vw] my-[1vw]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Brands