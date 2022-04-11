import './Rabocard.css'
import background from '../images/card-background.png'

const RaboCard = ({ user }) => {
    return (
        <div className="rabocard">
            <div className="rabocard-details">
                <p className="card-iban">{user.iban}</p>
                <p>{user.firstName} {user.lastName}</p>
                {/* <p className="rabocard-balance">Balance: €{user.balance}</p> */}
            </div>
        </div>
    )
}

export default RaboCard