import './album-card.css'

export default function AlbumCard({name,date,title,img}){
    return <div className="my-photo">
        <img src={img}/>
      <ul>
        <li>
            <span>{name}</span>
        </li>
        <li>
            <span>{date}</span>
        </li>
        <li>
            <span>{title}</span>
        </li>
      </ul>
    </div>
}