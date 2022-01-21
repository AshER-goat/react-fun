import React from 'react';
import './index.css';

export class Footer extends React.Component {
    render() {
        const pageLinks = ['home', 'menu', 'hours & locations', 'contact', 'about'];
        const sourceLinks = ['email', 'phone (all locations)', 'address'];
        const socialLinks = ['Facebook', 'Instagram', 'Linkedin', 'GitHub'];

        const footerPageLinks = pageLinks.map((link, index) => {
            return (
                <span key={index}>
                    <a href={'/' + link}>{link}</a><br />
                </span>
            )
        });

        const footerSourceLinks = sourceLinks.map((link, index) => {
            return (
                <span key={index}>
                    <a href={'/' + link}>{link}</a><br />
                </span>
            )
        });

        const footerSocialLinks = socialLinks.map((link, index) => {
            return (
                <span key={index}>
                    <a href={'/' + link}>{link}</a><br />
                </span>
            )
        });
        
        return (
            <div className="container-fluid p-0">
                <footer className="px-3 py-5">
                    <div className="row">
                    <div className="col d-flex justify-content-center">
                            <ul className="list-group">
                                <a href="#"><h6>Our Site</h6></a>
                                <li className="nav-item">{footerPageLinks}</li>
                            </ul>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <ul className="list-group">
                                <a href="#"><h6>Hours &amp; Locations</h6></a>
                                <p>*hours vary by location</p>
                                <li className="nav-item">3232 N. Cartman St. 89102</li>
                                <li className="nav-item">456 S. Butters St. 89108</li>
                                <li className="nav-item">8623 S. Kyle St. 89109</li>
                                <li className="nav-item">1221 W. Kenny St. 89149</li>
                                <li className="nav-item">245 E. Stan St. 89152</li>
                            </ul>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <ul className="list-group">
                                <a href="#"><h6>Contact</h6></a>
                                <li className="nav-item">{footerSourceLinks}</li>
                            </ul>                            
                        </div>
                        <div className="col d-flex justify-content-center">
                            <ul className="list-group">
                                <a href="#"><h6>Follow Us!</h6></a>
                                <li className="nav-item">{footerSocialLinks}</li>
                            </ul>                           
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}