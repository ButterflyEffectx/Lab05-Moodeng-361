import { useState, useEffect } from "react";

//images
import food1 from "/src/images/food1.png";
import food2 from "/src/images/food2.png";
import food3 from "/src/images/food3.png";
import myPhoto from "/src/images/myphoto.png";
import moodeng from "/src/images/moodeng.jpg";

function Moodeng() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);

  const addSize1 = () => {
    if (level < 100) {
      setSize(size + 15);
    }
  }
  const addSize2 = () => {
    if (level < 100) {
      setSize(size + 35);
    }
  }
  const addSize3 = () => {
    if (level < 100) {
      setSize(size + 45);
    }
  }

  useEffect(() => {
    let thePhoto = document.getElementById('photo');
    if (level >= 100) {
      thePhoto.src = myPhoto;
      setSize(500)
    }
  }, [level]);

  return (
    <div className="p-16 w-screen h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center  border border-red-600">
      <div className="pb-3 text-center text-4xl font-extrabold text-gray-800 mb-4">
        Level: {level}
      </div>
      <div className="w-screen md:w-full bg-white rounded-lg shadow-lg  flex flex-col md:flex-row relative">
        <div className="py-20 flex-grow md:py-12 flex justify-center items-center border-b border-gray-300 relative overflow-hidden z-50">
          <img 
            id="photo" 
            src={moodeng} 
            alt="moodeng" 
            style={{ width: `${size}px`, transition: 'width 0.3s ease-in-out' }} 
            className="absolute transition-transform transform duration-300 ease-in-out"
          />
        </div>
        
        <div className="flex flex-col justify-center items-center md:items-start md:justify-between p-8 space-y-6">
          <div className="text-3xl text-center font-bold text-gray-700 mb-6">
            เลือกอาหารป้อนหมูเด้ง
          </div>
          <div className="flex flex-col space-y-6 md:flex-col md:space-y-6 w-full items-end">
            <div className="flex gap-x-5 items-center text-center">
                <p>เนื้อหมู</p>
                <img
                src={food1}
                alt="food"
                className="w-24 h-24 filter grayscale hover:filter-none transition duration-300 md:w-32 md:h-32 rounded-full drop-shadow-lg cursor-pointer transform hover:scale-105"
                onClick={() => {setLevel(level + 5); addSize1();}}
                />
            </div>
            <div className="flex gap-x-5 items-center text-center">
                <p>กล้วย</p>
                <img
                src={food2}
                alt="food"
                className="w-24 h-24 filter grayscale hover:filter-none transition duration-300 md:w-32 md:h-32 rounded-full drop-shadow-lg cursor-pointer transform hover:scale-105"
                onClick={() => {setLevel(level + 10); addSize2();}}
                />
            </div>
            <div className="flex gap-x-5 items-center text-center">
                <p>เนื้อหมา/แมว</p>
                <img
                src={food3}
                alt="food"
                className="w-24 h-24 filter grayscale hover:filter-none transition duration-300 md:w-32 md:h-32 rounded-full drop-shadow-lg cursor-pointer transform hover:scale-105"
                onClick={() => {setLevel(level + 15); addSize3();}}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xl font-bold py-6">
        <button 
          className="py-3 px-8 bg-cyan-400 text-white rounded-full shadow-lg hover:bg-cyan-500 transition-colors duration-300"
          onClick={() => {
            setSize(100);
            setLevel(0);
            let thePhoto = document.getElementById('photo');
            thePhoto.src = moodeng;
          }}
        >
          แปลงร่างหมูเด้ง
        </button>
      </div>
    </div>
  );
}

export default Moodeng;
