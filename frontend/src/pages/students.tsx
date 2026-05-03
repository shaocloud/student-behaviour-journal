import { Link } from "react-router"

function Students() {
    return (
        <div>
            Students Page
            <Link to="/students/123">Go to student</Link>
        </div>
    )
}

export default Students