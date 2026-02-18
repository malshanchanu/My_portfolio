document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading footer...');
    
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Chanuka Malshan</h3>
                    <p>Software Engineering undergraduate at NSBM Green University, passionate about creating innovative solutions and making a positive impact through technology.</p>
                    <div class="footer-social">
                        <a href="https://github.com/malshanchanu" class="social-link" target="_blank" title="GitHub">
                            <i class='bx bxl-github'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/chanuka-malshan-854460274" class="social-link" target="_blank" title="LinkedIn">
                            <i class='bx bxl-linkedin'></i>
                        </a>
                        <a href="https://www.facebook.com/share/19rRfen1eo/" class="social-link" target="_blank" title="Facebook">
                            <i class='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/malshan_c_02?igsh=MTZpbnk3c3N3bHBvMg==" class="social-link" target="_blank" title="Instagram">
                            <i class='bx bxl-instagram'></i>
                        </a>
                        <a href="mailto:chanukamalshan2002@gmail.com" class="social-link" title="Send Email">
                            <i class='bx bx-envelope'></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html"><i class='bx bx-chevron-right'></i> Home</a></li>
                        <li><a href="projects.html"><i class='bx bx-chevron-right'></i> Projects</a></li>
                        <li><a href="about.html"><i class='bx bx-chevron-right'></i> About Me</a></li>
                        <li><a href="contact.html"><i class='bx bx-chevron-right'></i> Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Skills</h4>
                    <ul>
                        <li><i class='bx bx-code-alt'></i> Frontend Development</li>
                        <li><i class='bx bx-data'></i> Backend Development</li>
                        <li><i class='bx bx-mobile-alt'></i> Responsive Design</li>
                        <li><i class='bx bx-game'></i> Game Development</li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><i class='bx bx-map'></i> Anamaduwa, Sri Lanka</li>
                        <li>
                            <a href="mailto:chanukamalshan2002@gmail.com" style="color: #ccc; text-decoration: none; display: flex; align-items: center;">
                                <i class='bx bx-envelope'></i> chanukamalshan2002@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+94761964700" style="color: #ccc; text-decoration: none; display: flex; align-items: center;">
                                <i class='bx bx-phone'></i> +94 761964700
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Chanuka Malshan. All Rights Reserved.</p>
                <p style="font-size: 12px; margin-top: 5px; color: #888;">
                    <i class='bx bx-mail-send'></i> Click any email address or icon to contact me!
                </p>
            </div>
        </footer>
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        console.log('Footer loaded successfully');
        
        // Initialize clickable emails in footer
        setTimeout(() => {
            if (typeof window.initEmailFunctionality === 'function') {
                window.initEmailFunctionality();
            }
        }, 100);
    } else {
        console.error('Footer container not found');
    }
});