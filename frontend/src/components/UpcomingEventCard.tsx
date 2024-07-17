import React from 'react'


const UpcomingEventCard = () => {
  return (
    <div className='bg-[#CED9FF] h-screen'>
        <div className="flex flex-col px-8 pt-9 pb-4 text-xs bg-blue-500 rounded-3xl max-w-[467px]">
      <div className="text-3xl font-bold text-white">Event 1 Title</div>
      <div className="flex gap-1.5 self-start mt-1.5 font-semibold text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb735d031d796c5451110a5cdc8c73d10106ec9af1a742b1b060a03782881951?"
          className="shrink-0 aspect-[0.95] w-[19px]"
        />
        <div className="my-auto">UNICEF</div>
      </div>
      <div className="flex gap-5 justify-between items-start w-full text-white">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6a49711b9e2d863c6e241ba0a2db5c726f1d28949ceaf72ddf9bd92abd44c6?"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
          <div className="flex-auto">Refenti Building, Bole Bulbula</div>
        </div>
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c550cc42b3b64ab37f06c638f44449af93e8aa52f9fbaf788116aff145389b6b?"
            className="shrink-0 w-4 aspect-square"
          />
          <div className="my-auto">Jul 17, 2024</div>
        </div>
      </div>
      <div className="shrink-0 mt-1.5 h-0.5 bg-white border-2 border-white border-solid" />
      <div className="mt-3 leading-5 text-white">
        Lorem ipsum dolor sit amet consectetur. Nibh condimentum risus nisl
        congue mi purus eget. Quis egestas mauris fusce vulputate. Interdum non
        commodo tortor fermentum malesuada posuere purus elementum. Nisi quis
        sed dolor lorem sed adipiscing egestas sed. Enim consequat condimentum
        mauris ornare lectus enim...
      </div>
      <div className="flex gap-5 justify-between px-0.5 mt-7 w-full">
        <div className="my-auto text-white">Posted on Jul 5, 2024</div>
        <div className="flex gap-2 justify-center px-6 py-1 font-medium text-blue-500 bg-white leading-[105%] rounded-[1000px]">
          <div className="my-auto">Check Out</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11ea18b88439cbe2958c30471203b32d46148dca8ed6ad74ccb9dcbf54cde81?"
            className="shrink-0 w-11 aspect-[1.52]"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpcomingEventCard