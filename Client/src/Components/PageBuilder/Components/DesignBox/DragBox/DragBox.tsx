import {AiOutlinePlus} from 'react-icons/ai';

const DragBox = () => {
  return (
    <div>
      <div className="bg-black/10 border-2 border-dashed border-primary-border-light rounded-lg flex flex-col justify-center items-center gap-4 p-4">
        <div className="w-10 h-10 flex justify-center items-center">
          <button className="h-10 rounded-lg w-full flex justify-center items-center bg-primary-border-light">
            <AiOutlinePlus size={24} />
          </button>
        </div>
        <div className="text-blue-500">
          <p>یک قالب را بکشید و در اینجا رها کنید</p>
        </div>
      </div>
    </div>
  );
};

export default DragBox;
