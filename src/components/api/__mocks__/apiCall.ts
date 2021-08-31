import mockData from './mockdata';

export default function apiCall(){
    console.log("Inside mock apiCall")
    return new Promise((resolve,reject)=>{
        process.nextTick(()=>{
            resolve(mockData);
        })
    })
}