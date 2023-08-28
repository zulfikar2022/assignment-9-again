import React, { useEffect, useState } from 'react';
import CategoryContainer from '../CategoryContainer/CategoryContainer';

const JobCategory = () => {
    const [category,setCategory] = useState([]);
    useEffect(() => {
            fetch('jobTypeData.json')
                .then(res => res.json())
                .then(data =>{setCategory(data)})
    },[])
    return (
        <div className='text-center mt-6'>
            <h2 className='text-4xl font-semibold mb-3 '>Job Category List</h2>
            <p className='text-zinc-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="category-container mt-10">
                <div className='flex justify-evenly'>
                    {category.map((ct,index) => <CategoryContainer
                     key={index}
                     category = {ct}
                     ></CategoryContainer>)}
                </div>
            </div>

        </div>
    );
};

export default JobCategory;