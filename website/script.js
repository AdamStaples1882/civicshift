// Main Initialization
function initWebsite() {
    console.log("CivicShift: Initializing...");

    // --- Scroll Animations ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    if (scrollElements.length > 0) {
        scrollElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }

    // --- Estimator Logic ---
    initEstimator();
}


function initEstimator() {
    // The original variables and updateEstimate function are replaced by the new calculateEstimate logic.
    // The new logic directly accesses elements and uses radio buttons for service selection.

    function calculateEstimate() {
        // Get selected service from radio buttons
        const serviceRadio = document.querySelector('input[name="service"]:checked');
        if (!serviceRadio) return;
        
        const service = serviceRadio.value;
        const duration = parseInt(document.getElementById('duration').value) || 6;

        // Rate ranges per day for all services
        const rates = {
            interim: { min: 850, max: 1000 },
            prog_mgmt: { min: 750, max: 900 },
            recovery: { min: 800, max: 950 },
            crm: { min: 700, max: 850 },
            service_redesign: { min: 650, max: 800 },
            infrastructure: { min: 700, max: 850 },
            integration: { min: 700, max: 850 }
        };

        const rate = rates[service] || rates.interim;
        const daysPerMonth = 20; // Approximate working days

        const minTotal = rate.min * daysPerMonth * duration;
        const maxTotal = rate.max * daysPerMonth * duration;

        // Format in thousands for cleaner display
        const minK = (minTotal / 1000).toFixed(0);
        const maxK = (maxTotal / 1000).toFixed(0);

        // Update display
        document.getElementById('minPrice').textContent = minK;
        document.getElementById('maxPrice').textContent = maxK;
        
        // Show result area with smooth animation
        const resultArea = document.getElementById('resultArea');
        resultArea.style.display = 'block';
        setTimeout(() => {
            resultArea.style.opacity = '1';
        }, 50);
    }

    // Attach Listeners for the new estimator logic
    // Assuming 'duration' is an input field and 'service' are radio buttons
    const durationInput = document.getElementById('duration');
    if (durationInput) {
        durationInput.addEventListener('input', calculateEstimate);
    }

    const serviceRadios = document.querySelectorAll('input[name="service"]');
    serviceRadios.forEach(radio => {
        radio.addEventListener('change', calculateEstimate);
    });

    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', (e) => {
            e.preventDefault();
            calculateEstimate();
        });
    }
}

// Robust Loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsite);
} else {
    initWebsite(); // DOM already ready
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });
    }
});
