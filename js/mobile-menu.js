/**
 * Mobile Menu Functionality
 * Handles hamburger menu toggle, sidebar animation, and accessibility features
 */

class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.nav-toggle');
        this.sidebar = document.getElementById('mobile-sidebar');
        this.overlay = document.getElementById('sidebar-overlay');
        this.isOpen = false;

        this.init();
    }

    init() {
        if (!this.hamburger || !this.sidebar || !this.overlay) {
            console.warn('Mobile menu elements not found');
            return;
        }

        // Add event listeners
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.overlay.addEventListener('click', () => this.closeMenu());
        document.addEventListener('keydown', (e) => this.handleKeydown(e));

        // Close menu on window resize if desktop size
        window.addEventListener('resize', () => {
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
        const mainNav = document.getElementById('desktop-nav');
        const sidebarNav = document.getElementById('mobile-nav');

        if (mainNav && sidebarNav) {
            // Copy the navigation content
            sidebarNav.innerHTML = mainNav.innerHTML;

            // Re-attach click listeners to sidebar links
            const sidebarLinks = sidebarNav.querySelectorAll('.nav-link');
            sidebarLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
        } else {
            // If main nav isn't ready yet, try again after a short delay
            setTimeout(() => this.populateSidebarNav(), 100);
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
