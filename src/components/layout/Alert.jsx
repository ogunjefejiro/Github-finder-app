import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"
import {GoAlert} from "react-icons/go"

const Alert = () => {
    const {alert} = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === "error" && <GoAlert className="items-middle" color="red" />}
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>{alert.msg}</strong>
            </p>
        </p>
    )
    
}

export default Alert
