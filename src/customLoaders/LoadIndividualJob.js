
const loadIndividualJob = async(id) => {
    console.log(id);
        const jobs = await fetch('jobData.json')
        const jobsReadable = await jobs.json();
        
        console.log(jobsReadable)
        const targetProduct =  jobsReadable.find(job => job._id === id);
        console.log(targetProduct);
        return targetProduct;
          
} 
export default loadIndividualJob;