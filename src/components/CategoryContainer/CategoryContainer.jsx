import React from 'react';

const CategoryContainer = ({category}) => {
    const {logo,jobType,vacancy} = category;
   
    return (
        <div className='category-container p-5 bg-slate-500/20 rounded'>
           <img src={logo} className='w-12 rounded' alt="" />
           <h4 className='font-semibold pt-5'>{jobType}</h4>
           <p className='text-zinc-500'>{vacancy} Job Available</p>
        </div>
    );
};

export default CategoryContainer;