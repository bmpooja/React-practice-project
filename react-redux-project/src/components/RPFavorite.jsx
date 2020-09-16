import React from 'react'
import ReplacingHOCComponent from './HOCs/ReplacingHOCComp'

function RPFavorite (props){
    return(
        <ReplacingHOCComponent defaultOnvalue = {false} test = {function (obj){
            return(
                <div>
                    <h3> Coming from render Prop</h3>
                    <span onClick ={obj.toggle}>
                        {obj.on ?  "❤️" : "♡" }
                    </span>
                </div>
            )
        }} />
    )
}

export default RPFavorite;