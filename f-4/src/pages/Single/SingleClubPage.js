import { useParams } from "react-router-dom"

export default function SingleClubPage(){
    const params = useParams()
    return (
        <div>
            <h1>Single Club {params.id}</h1>
        </div>
    )
}