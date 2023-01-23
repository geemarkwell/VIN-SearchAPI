import React, { useEffect, useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export const Button = () => {
    const [mode, setMode] = useState('light');
    const [icon, setIcon] = useState();

    const toggleMode = () => {
      if (mode === 'light') { 
        setIcon(!icon);
        setMode('dark')
      } else {
        setMode('light');
        setIcon(!icon);
      }
    };
  
    useEffect(() => {
      document.body.className = mode;
    }, [mode]);
  
    return (
      <div>
        <div>
        <button onClick={toggleMode}>
          {icon ? <LightModeOutlinedIcon />  : < DarkModeOutlinedIcon /> }
        </button> 
        </div>
      </div>
    );
}