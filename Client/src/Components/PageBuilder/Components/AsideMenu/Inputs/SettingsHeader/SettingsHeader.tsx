import React from 'react';

type SettingsHeaderProps = {
  title: string;
};

const SettingsHeader: React.FC<SettingsHeaderProps> = ({title}) => {
  return (
    <div className="settings-header">
      <h2>{title}</h2>
    </div>
  );
};

export default SettingsHeader;
