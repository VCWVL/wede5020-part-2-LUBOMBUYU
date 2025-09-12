/**
 * Mobile Menu Functionality
 * Handles hamburger menu toggle, sidebar animation, and accessibility features
 */

class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.nav-toggle');
        this.sidebar = document.getElementById('mobile-sidebar');
        this.overlay = document.getElementById('sidebar-overlay');
        this.desktopNav = document.getElementById('desktop-nav');
        this.mobileNav = document.getElementById('mobile-nav');
        this.isOpen = false;

        this.init();
    }

    init() {
        if (!this.hamburger || !this.sidebar || !this.overlay || !this.desktopNav || !this.mobileNav) {
            console.warn('Mobile menu elements not found');
            return;
        }

        // Add event listeners
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.overlay.addEventListener('click', () => this.closeMenu());
        document.addEventListener('keydown', (e) => this.handleKeydown(e));

        // Responsive menu limiter
        this.handleResponsiveMenu();
        window.addEventListener('resize', () => {
            this.handleResponsiveMenu();
            if (window.innerWidth > 767 && this.isOpen) {
                this.closeMenu();
            }
        });

        // Close menu when clicking on navigation links
        const navLinks = this.sidebar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    handleResponsiveMenu() {
        if (window.innerWidth <= 767) {
            // Show hamburger and mobile sidebar, hide desktop nav
            this.hamburger.style.display = 'block';
            this.sidebar.style.display = 'block';
            this.overlay.style.display = 'block';
            this.desktopNav.style.display = 'none';

            // Populate mobile sidebar with desktop nav links
            this.populateSidebarNav();
        } else {
            // Hide hamburger and mobile sidebar, show desktop nav
            this.hamburger.style.display = 'none';
            this.sidebar.style.display = 'none';
            this.overlay.style.display = 'none';
            this.desktopNav.style.display = 'block';
        }
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.sidebar.classList.add('active');
        this.overlay.classList.add('active');
        this.hamburger.classList.add('active');
        this.hamburger.setAttribute('aria-expanded', 'true');

        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';

        // Focus management
        this.sidebar.focus();
    }

    closeMenu() {
        this.isOpen = false;
        this.sidebar.classList.remove('active');
        this.overlay.classList.remove('active');
        this.hamburger.classList.remove('active');
        this.hamburger.setAttribute('aria-expanded', 'false');

        // Restore body scroll
        document.body.style.overflow = '';

        // Return focus to hamburger button
        this.hamburger.focus();
    }

    handleKeydown(e) {
        if (e.key === 'Escape' && this.isOpen) {
            this.closeMenu();
        }
    }

    populateSidebarNav() {
        // Copy desktop nav links to mobile nav
        if (this.desktopNav && this.mobileNav) {
            this.mobileNav.innerHTML = this.desktopNav.innerHTML;

            // Re-attach click listeners to sidebar links
            const sidebarLinks = this.mobileNav.querySelectorAll('.nav-link');
            sidebarLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
        }
    }
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileMenu;
}
