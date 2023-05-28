import { useState } from 'react'
import AlbumCard from './Album/album-card'
import './App2.css'
import HomeLayout from './layout/HomeLayout';
const album =[
    {
        name : "Byun Baekhyun",
        date : "May 25 2020",
        title :"Delight",
        img:"https://nowcdn.smtown.com/upload/news/images/2020/05/19/z69xUT2pBG0wo5OV_518bfd8b15204fa9a62f68c513b3c023_1589866791944.jpg"

    },
    {
        name : "Byun Baek Hyun",
        date : "May 31 2021",
        title :"Bambi",
        img:"https://0.soompi.io/wp-content/uploads/2021/03/20080623/Baekhyun-5.jpg"

    },
    {
        name : "Byun Baekhyun",
        date : "July 10 2019",
        title :"City Light",
        img:"https://dbkpop.com/wp-content/uploads/2019/07/baekhyun_city_lights_6.jpg"

    },
    {
        name : "Byun Baekhyun",
        date : "September 22 2022 ",
        title :"Every Second",
        img:"https://i.scdn.co/image/ab67616d0000b273303f1d61dd182b78652e4330"
    },
    {
        name : "Byun Baekhyun",
        date : "July 1 2021",
        title :"U ",
        img:"https://i.mydramalist.com/XJBpd_3f.jpg"
    },
]
export function PhotoApp(){

    const [currentphotoIndex, setCurrentPhotoIndex]=useState(0);
    let photo= album[currentphotoIndex];
    
    const btnNext =()=>{
    setCurrentPhotoIndex ((prevIndex)=>prevIndex+1)
    }

    const btnBack =()=>{
        setCurrentPhotoIndex((prevIndex)=>prevIndex -1)
    }
    return(

        <div className='App'>
<HomeLayout>
{
            <AlbumCard name={photo.name} date={photo.date} title={photo.title} img={photo.img}/>
        }
       <div>
       {
            currentphotoIndex !== 0 && <button className='btn btn-info me-5' onClick={btnBack}>Back</button>
        }
        {
            currentphotoIndex !== album.length -1 && <button className='btn btn-danger' onClick={btnNext}> Next
            </button>
        }

       </div>
           
</HomeLayout>
        </div>
    )
    
}