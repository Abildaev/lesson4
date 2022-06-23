import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {showAndHideText} from "../../redux/actions/actions";


function PostsPage () {
    const text = useSelector(state => state.titleReducer.title);
    const dispatch = useDispatch()

    const handleText = () => {
        dispatch(showAndHideText())
    }

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleText}>
                show text
            </button>
        </div>
    )
}

export default PostsPage;
