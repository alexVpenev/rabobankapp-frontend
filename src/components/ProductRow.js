import './ProductRow.css'
import onlineBanking from "../images/online.png"
import investing from "../images/investing.png"
import saving from "../images/saving.png"
import lending from "../images/lending.png"
import umbrella from "../images/relax.png"
import bag from "../images/bag.png"
import house from "../images/house.png"

const ProductRow = () => {
    return (
        <div className="product-row-container">
            <h2>Other Rabobank products</h2>
            <div className="product-row">
                <div className="product-card">
                    <a href="https://bankieren.rabobank.nl/bankierenplus/deeplinking/dashboard/start">Online Banking</a>
                    <img src={onlineBanking}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/betalen/#intcamp=pa-homepage-betalen&inttype=tegel-betalen&intsource=particulieren">Payments</a>
                    <img src={bag}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/verzekering/#intcamp=pa-homepage-verzekeren&inttype=tegel-verzekeren&intsource=particulieren">Ensurance</a>
                    <img src={umbrella}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/hypotheek">Mortgages</a>
                    <img src={house}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/geld-lenen">Lending</a>
                    <img src={lending}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/sparen">Savings</a>
                    <img src={saving}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/beleggen">Investing</a>
                    <img src={investing}/>
                </div>
                <div className="product-card">
                    <a href="https://www.rabobank.nl/particulieren/pensioen">Pension</a>
                    <img src={umbrella}/>
                </div>
            </div>
        </div>
    )
}

export default ProductRow