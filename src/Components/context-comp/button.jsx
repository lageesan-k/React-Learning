import { useContext } from "react";
import {GlobalContext} from "../../context/theme";

function ContextButton() {
    const getStatefromglobalcontext=useContext(GlobalContext);
    console.log(getStatefromglobalcontext);
    return (
        <button>Context Button</button>
    )
}

export default ContextButton;