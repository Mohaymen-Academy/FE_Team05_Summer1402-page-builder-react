const SettingsFrameSelection = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 mt-6">
      <div className="flex justify-between">
        <div className="h-[65px] w-[120px] flex gap-1">
          <div className="bg-neutral-border-light w-[40px]"></div>
          <div className="bg-neutral-border-light w-[80px]"></div>
        </div>
        <div className="h-[65px] w-[120px] flex gap-1">
          <div className="bg-neutral-border-light w-[80px]"></div>
          <div className="bg-neutral-border-light w-[40px]"></div>
        </div>
      </div>
      <div className="h-[65px] w-[120px] flex gap-1">
        <div className="bg-primary-border-light w-[60px]"></div>
        <div className="bg-primary-border-light w-[60px]"></div>
      </div>
    </div>
  );
};

export default SettingsFrameSelection;
