import './Footer.css';
function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                </div>
                <p>Zaid Rajab</p>
                <ul class="social-icon">
                    <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/Zaid-R">
                        <ion-icon name="logo-github"></ion-icon>
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/zaid-rajab/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;