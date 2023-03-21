import {useState} from 'react'

export default function PageNotFound() {
    
    // Variables / use
    const [canceling, setCanceling] = useState("");
    const [continueing,  setContinueing] = useState("");

    // Fnuctions
const handleCancel = () => {
    console.log("about to cancel")
}

const handleContinue = () => {
    console.log("you want to leave page")
}


    
  return (
    <div>
        <dialog>
            <h3>!!! WARNING !!!</h3>
            <p>You are about to leave this Page.</p>
            <br />
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleContinue}>Yes, continue!</button>
        </dialog>
    </div>
  )
}
