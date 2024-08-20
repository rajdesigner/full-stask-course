import React from 'react';

interface PanelProps {
  isActive: boolean,
  title: string;
  children: React.ReactNode;
  onShow: any
}

export const Panel: React.FC<PanelProps> = ({ title, children, isActive, onShow }) => {
  return (
    <>
        <section className='panel'>
            <h3>{title}</h3>
            {
                isActive ? 
                <p>{children}</p>: 
                <button onClick={onShow}>
                    Show
                </button>
            }
            
        </section>
    </>
  );
};

