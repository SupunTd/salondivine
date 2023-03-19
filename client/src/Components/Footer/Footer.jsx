import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <>
        <footer>
            <div className='container'>
                <div className='logoname'>
                    <div className="name">Salon Divine</div>
                    <div className="f-description">You Have Best Option</div>
                    <div className="f-dis-2">The purity of your heart is seen in the sincerity of your smile.</div>
                </div>
                <div className='box last'>
                    <h3>Our Branches</h3>
                    <ul>
                        <li>Kottawa</li>
                        <li>Galle</li>
                        <li>Kandy</li>
                        <li>Rathnapura</li>
                        <li>Nugegoda</li>
                    </ul>
                </div>

                <div className='box last'>
                    <h3>Special Offers for</h3>
                    <ul>
                        <li>Wedding</li>
                        <li>Party</li>
                        <li>Birthday</li>
                        <li>Functions</li>
                        <li>Children</li>
                    </ul>
                </div>

                <div className='box last'>
                    <h3>Have a Questions?</h3>
                    <ul>
                        <li>12/2,Hapugala,Galle
                        </li>
                        <li>+947 77 6790 679
                        </li>
                        <li>info@salondivine.com
                        </li>
                    </ul>
                </div>

            </div>
        </footer>



      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | <i>Salon Divine</i>
        </p>
      </div>
    </>
  )
}

export default Footer;
