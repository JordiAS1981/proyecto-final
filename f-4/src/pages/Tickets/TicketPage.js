import { useSelector } from "react-redux";

export default function TicketsPage () {
    
    const {user} = useSelector((state)=> state.AuthReducer)

    return (
        <div>
            <h1>Tickets</h1>
        
        <fieldset>
        <label>Nombre:</label>
            {user.firstName}
        </fieldset>
        <fieldset>
            <label>Apellido:</label>
            {user.lastName}
        </fieldset>
        <fieldset>
            <label>Email:</label>
            {user.email}
        </fieldset>
        </div>
    )
}