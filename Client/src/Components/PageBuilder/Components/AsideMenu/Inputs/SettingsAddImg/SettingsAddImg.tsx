import {AiOutlinePlus} from 'react-icons/ai';

function SettingsAddImg() {
  return (
    <div className="bg-white border-2 border-dashed border-primary-border-light rounded-lg flex flex-col justify-center items-center gap-1 my-8 py-[16px]">
      <div className="w-10 h-10 flex justify-center items-center">
        <button className="h-10 rounded-lg w-full flex justify-center items-center bg-primary-light">
          <AiOutlinePlus color="rgb(59 130 246)" size={24} />
        </button>
      </div>
      <p className="text-blue-500 font-semibold">افزودن عکس</p>
      <p className="subLabel">حجم عکس تا ۵ مگابایت و بافرمت JPG, PNG</p>
    </div>
  );
}

export default SettingsAddImg;
