import './assets/card.css';import {StatsCard} from "../../types/proptypes";

export  const ItemCard =  (props:StatsCard) =>{
    return (
        <>
            {/*For displaying a card for stats*/}

            <div className={"card__result"}>
               <div className={"card__quantity"}>
                   {props.quantity}
               </div>
                <div className={"card_content"}>
                    {props.label}
                </div>
            </div>
        </>

    );
}

