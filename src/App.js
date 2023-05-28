import logo from './logo.svg';
import './App.css'

import { createElement } from 'react';
import { PhotoCard } from './PhotoAlbum/photoCard';

export default function App() {
  return ( 
  <div >
    <h1 id='title'>ZeroBase1</h1>
  
    <div className='App container'>
      <>
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/3hdUTGMXFNJVMpqqzf8D_300x300.jpg'/>
      <PhotoCard name="Seok Matthew" date="6.13.2001" img='https://static.wikia.nocookie.net/boys-planet/images/8/8e/Seok_Matthew_1.png/revision/latest?cb=20230412012211'/>
      <PhotoCard name="Zhang Hao" date="6.13.2001" img='https://kprofiles.com/wp-content/uploads/2023/02/Zhang_Hao_Boys_Planet_profile_photo.webp'/>    
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://static.wikia.nocookie.net/boys-planet/images/1/13/Kim_Jiwoong_1.png/revision/latest?cb=20221229175849.jpg'/>       
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/3hdUTGMXFNJVMpqqzf8D_300x300.jpg'/>       
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/3hdUTGMXFNJVMpqqzf8D_300x300.jpg'/>       
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/3hdUTGMXFNJVMpqqzf8D_300x300.jpg'/>       
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/3hdUTGMXFNJVMpqqzf8D_300x300.jpg'/>       
      <PhotoCard name="Sung Han Bin" date="6.13.2001" img='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/3hdUTGMXFNJVMpqqzf8D_300x300.jpg'/>       
    
      </>
      
    </div>
</div>
      
  );
}


