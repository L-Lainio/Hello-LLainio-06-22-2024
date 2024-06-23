// import React from 'react';

function Introduction() {
  return (
    <div className='flex justify-center flex-col item-center'>
      <div className='h-[95px] mt-[-20px]' />
      <div className='w-[5px] h-[5px] rounded-full bg-darkgrey-600'></div>
      <h2 className='mt-5 text-white font-medium text-[20px] tracking-widest text-center'>HELLO MY NAME IS</h2>
      <h2 className='text-[50px] font-bold text-white tracking-widest mt-5 text-center'>LORA <br /> LAINIO</h2>
      <img src='/src/assets/LoraProfilePic.jpg' className='w-[160px] h-[160px] bg-grey-200 p-7 rounded-full mt-7' />
    </div>
  );
}

export default Introduction;
