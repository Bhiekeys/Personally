import {useState} from 'react'
import Data from './Designdata';
const Design = () => {
    const [visible, setVisible] = useState(3);

    const showAll = () => {
      setVisible(Data.length);
    };
    
  return (
    <div className="grid justify-center items-center bg-[#F2F4F7] pt-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl text-[#1D2939]">Design Tools</h2>
        <button className="bg-white font-semibold px-2" onClick={showAll}>
          view all
        </button>
      </div>
      {Data?.slice(0, visible).map((data) => {
        const { id, date, title, details, image } = data;
        return (
          <div
            key={id}
            className="grid sm:flex  items-center gap-20 mt-8 rounded-xl py-6 px-8 bg-white">
            <div className="w-[80vw] md:w-[40vw] grid justify-center sm:text-left text-center">
              <h6 className="text-[#667085] mb-6 text-[13px]">{date}</h6>
              <h2 className="text-[28px] font-semibold text-[#1D2939]">
                {title}
              </h2>
              <p className="text-[#475467] text-[19px]">{details}</p>
            </div>
            <div className="flex justify-center">
              <img src={image} alt={image} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Design