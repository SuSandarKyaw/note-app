import './photoCard.css';

export const PhotoCard = (props) =>{
    return <div className="photo">  
        <h5>{props.name}</h5>
         <h5> {props.date} </h5>
         <img src={props.img}/>    
         
    </div>
}