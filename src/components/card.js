import './card.css';

export const Card = ({name,time,attend}) =>{   //js code destructing
    return <div className="my-card">
        <h3>{name}</h3>

        <div>
           {time}
        </div>
        {
            // props.attend ? <span>attended</span> : <span>Not attended</span>
        }

        <span>
            {
                attend ? 'attended' : 'Not attended'
            }
            
        </span>
    </div>

}