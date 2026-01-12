// ==================== Service Data ====================
const serviceData = {
    'Data Engineering': {
        icon: '⚙️',
        title: 'Data Engineering',
        description: 'Build scalable, fault-tolerant data pipelines that handle massive volumes of real-time and batch data processing.',
        benefits: [
            'Real-time and batch processing capabilities',
            'Fault-tolerant architecture with ACID transactions',
            'Scalable to petabyte-scale data lakes',
            'Proven across healthcare, fintech, and telecom'
        ],
        technologies: [
            'Apache Iceberg for ACID table format',
            'HDFS for distributed file systems',
            'MinIO for cloud-native object storage',
            'Apache Spark and Hadoop ecosystem'
        ]
    },
    'Data Analytics': {
        icon: '📊',
        title: 'Advanced Data Analytics',
        description: 'Extract deep insights from your data with advanced modeling, statistical analysis, and machine learning techniques.',
        benefits: [
            'Complex data exploration and modeling',
            'Statistical and predictive analytics',
            'Machine learning pipeline integration',
            'Domain-specific analytics for your industry'
        ],
        technologies: [
            'Python and R analytics',
            'Spark MLlib for distributed ML',
            'Time-series and forecasting models',
            'Custom analytics frameworks'
        ]
    },
    'Dashboard Solutions': {
        icon: '📈',
        title: 'Dashboard Solutions',
        description: 'Present your data beautifully with interactive, real-time dashboards that enable data-driven decision making.',
        benefits: [
            'Real-time data visualization',
            'Interactive drill-down capabilities',
            'Custom KPI tracking and alerts',
            'Mobile-responsive dashboards'
        ],
        technologies: [
            'Modern BI and visualization tools',
            'Real-time data refresh',
            'Custom dashboard development',
            'Integration with data lakes'
        ]
    }
};

// ==================== Functions ====================

function openServiceModal(serviceName) {
    const service = serviceData[serviceName];
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');

    const modalHTML = `
        <div class="modal-header">
            <div class="icon">${service.icon}</div>
            <h3>${service.title}</h3>
        </div>
        <div class="modal-body">
            <p>${service.description}</p>
            
            <div class="modal-features">
                <h4>Key Benefits</h4>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-features">
                <h4>Technologies Used</h4>
                <ul>
                    ${service.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    modalBody.innerHTML = modalHTML;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ==================== Event Listeners ====================

document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    const modal = document.getElementById('serviceModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeServiceModal();
        }
    });

    // Handle contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
