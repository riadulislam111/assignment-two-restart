import React from 'react';
import vector from '../../assets/vector1.png'

const StatusCard = () => {
    return (
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 px-4'>
      
     
      <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
    
        <img 
          src={vector} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
       
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-semibold tracking-wide uppercase opacity-90 mb-2">
            In-Progress
          </h3>
          <div className="text-8xl font-black drop-shadow-md">0</div>
        </div>
      </div>

      
      <div className='bg-gradient-to-br from-[#54CF68] to-[#008]'>
      
        <img 
          src={vector} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-semibold tracking-wide uppercase opacity-90 mb-2">
            Resolved
          </h3>
          <div className="text-8xl font-black drop-shadow-md">0</div>
        </div>
      </div>

    </div>
    );
};

export default StatusCard;