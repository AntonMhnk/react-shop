import { useEffect } from "react";

function Alert(props) {
    const { 
        displayName = "", 
        closeAlert = Function.prototype 
    } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 1500)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [displayName])

    return <div id="toast-container">
                <div className="toast">{displayName} added to Shopping Cart</div>
            </div>
}

export {Alert}