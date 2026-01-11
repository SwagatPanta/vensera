// ==================== SERVICE DATA ==================== 
const serviceData = {
    'Digital Transformation': {
        icon: '🔄',
        description: 'Comprehensive digital transformation services that modernize your entire business infrastructure.',
        features: [
            'Legacy system modernization',
            'Cloud migration & optimization',
            'Process automation with AI/ML',
            'Custom enterprise solutions'
        ],
        benefits: [
            'Reduce operational costs by 40%+',
            'Accelerate time-to-market',
            'Improve system reliability',
            'Enhanced security & compliance'
        ]
    },
    'Warehouse Solutions': {
        icon: '🏢',
        description: 'Build and manage robust enterprise data warehouses that consolidate data from multiple sources.',
        features: [
            'Schema design & optimization',
            'ETL/ELT pipeline development',
            'Real-time data integration',
            'High-performance indexing'
        ],
        benefits: [
            'Query response times 10x faster',
            'Handle petabytes of data',
            'Unified data governance',
            'Improved analytics accuracy'
        ]
    },
    'Data Lake Architecture': {
        icon: '💧',
        description: 'Design and deploy scalable data lakes that store raw data at massive scale.',
        features: [
            'Distributed data architecture',
            'Data cataloging & metadata management',
            'Multi-format data support',
            'Machine learning pipelines'
        ],
        benefits: [
            'Store any type of data at scale',
            'Reduce infrastructure costs by 60%',
            'Enable AI/ML experimentation',
            'Faster data exploration'
        ]
    },
    'Advanced Reporting': {
        icon: '📊',
        description: 'Create stunning, interactive dashboards and comprehensive reports that bring your data to life.',
        features: [
            'Real-time dashboard creation',
            'Interactive visualizations',
            'Scheduled report generation',
            'Custom KPI tracking'
        ],
        benefits: [
            'Increased reporting frequency',
            'Self-service analytics',
            'Faster decision-making',
            'Real-time business insights'
        ]
    },
    'Financial Analytics': {
        icon: '💰',
        description: 'Comprehensive financial analytics platform that provides complete visibility into your financial performance.',
        features: [
            'Revenue & cost analysis',
            'Profitability modeling',
            'Cash flow forecasting',
            'Budget variance analysis'
        ],
        benefits: [
            'Improve financial visibility',
            'Predict cash flow accurately',
            'Optimize pricing strategy',
            'Reduce fraud risks'
        ]
    },
    'Data Security': {
        icon: '🔐',
        description: 'Enterprise-grade security protocols and compliance frameworks protecting your sensitive data.',
        features: [
            'End-to-end encryption',
            'Access control & authentication',
            'Data masking & anonymization',
            'Audit logging & monitoring'
        ],
        benefits: [
            'Meet GDPR, HIPAA, SOC 2 standards',
            'Reduce security incident risks',
            'Build customer trust',
            'Automated compliance reporting'
        ]
    }
};

// ==================== DETAILED SERVICE INFO ==================== 
const serviceDetailsData = {
    'Digital Transformation': {
        icon: '🔄',
        title: 'Digital Transformation',
        subtitle: 'Modernize Your Business Infrastructure',
        overview: 'Digital transformation is not just about technology—it\'s about reimagining your business processes, culture, and customer experiences. Our comprehensive digital transformation services help enterprises modernize their legacy systems, adopt cloud technologies, and implement AI/ML-driven automation to stay competitive in today\'s digital economy.',
        
        processSteps: [
            { step: 1, title: 'Assessment & Strategy', description: 'We evaluate your current IT infrastructure, identify bottlenecks, and create a personalized transformation roadmap aligned with your business goals.' },
            { step: 2, title: 'Planning & Design', description: 'Our architects design a scalable solution that includes cloud architecture, microservices, and integration patterns tailored to your needs.' },
            { step: 3, title: 'Migration & Implementation', description: 'We execute the transformation with minimal downtime, using proven methodologies and best practices across your entire technology stack.' },
            { step: 4, title: 'Optimization & Support', description: 'Post-launch, we optimize performance, ensure adoption, and provide ongoing support to maximize ROI.' }
        ],
        
        useCases: [
            { title: 'Legacy System Modernization', description: 'Replace outdated mainframe systems with cloud-native microservices architecture, reducing maintenance costs by 50%.' },
            { title: 'API-First Architecture', description: 'Enable seamless integration across departments and third-party services with REST/GraphQL APIs.' },
            { title: 'Cloud Migration', description: 'Lift-and-shift or re-architect applications to AWS, Azure, or Google Cloud with zero business interruption.' },
            { title: 'DevOps Implementation', description: 'Implement CI/CD pipelines, containerization (Docker/Kubernetes), and infrastructure-as-code practices.' }
        ],
        
        techStack: [
            'Cloud: AWS, Azure, Google Cloud',
            'Containers: Docker, Kubernetes',
            'DevOps: Jenkins, GitLab CI, Terraform',
            'Frameworks: Spring Boot, Node.js, Python Django',
            'Databases: PostgreSQL, MongoDB, DynamoDB'
        ],
        
        roi: [
            { metric: 'Cost Reduction', value: '40-50%', description: 'Lower operational and infrastructure costs' },
            { metric: 'Time to Market', value: '60% faster', description: 'Accelerated release cycles' },
            { metric: 'System Uptime', value: '99.99%', description: 'Enhanced reliability and availability' },
            { metric: 'Team Productivity', value: '+35%', description: 'Automated workflows and better tools' }
        ],
        
        timeline: [
            { phase: 'Assessment', duration: '2-3 weeks', details: 'Current state analysis and roadmap creation' },
            { phase: 'Design', duration: '3-4 weeks', details: 'Solution architecture and planning' },
            { phase: 'Implementation', duration: '3-6 months', details: 'Core transformation work' },
            { phase: 'Optimization', duration: 'Ongoing', details: 'Performance tuning and support' }
        ]
    },

    'Warehouse Solutions': {
        icon: '🏢',
        title: 'Warehouse Solutions',
        subtitle: 'Enterprise Data Consolidation & Analytics',
        overview: 'A modern data warehouse is the foundation of enterprise analytics. Our warehouse solutions consolidate data from disparate sources, transform it through sophisticated ETL/ELT pipelines, and make it available for real-time analytics and reporting. We build warehouses that scale with your business.',
        
        processSteps: [
            { step: 1, title: 'Requirements Gathering', description: 'We analyze your data sources, business metrics, and reporting needs to design an optimal schema.' },
            { step: 2, title: 'Architecture Design', description: 'We design a star or snowflake schema optimized for query performance and data integrity.' },
            { step: 3, title: 'ETL/ELT Pipeline Development', description: 'We build automated pipelines to extract, transform, and load data from source systems.' },
            { step: 4, title: 'Testing & Deployment', description: 'Comprehensive testing ensures data quality, then we deploy to production with zero data loss.' }
        ],
        
        useCases: [
            { title: 'Multi-Source Data Consolidation', description: 'Combine data from ERP, CRM, financial systems, and web applications into one unified platform.' },
            { title: 'Real-Time Analytics', description: 'Stream data updates every minute for up-to-the-second reporting and KPI monitoring.' },
            { title: 'Historical Analysis', description: 'Store years of historical data for trend analysis, forecasting, and pattern recognition.' },
            { title: 'Regulatory Reporting', description: 'Automate compliance reports (SOX, HIPAA, GDPR) with audit trails and data lineage.' }
        ],
        
        techStack: [
            'Platforms: Snowflake, Redshift, BigQuery, Teradata',
            'ETL Tools: Talend, Informatica, Airflow, dbt',
            'Data Modeling: Dimensional modeling, slowly changing dimensions',
            'Query: SQL, Presto, Trino',
            'Metadata: Collibra, Alation'
        ],
        
        roi: [
            { metric: 'Query Performance', value: '10x faster', description: 'Optimized schemas and indexing' },
            { metric: 'Report Generation', value: '80% automated', description: 'Scheduled reports eliminate manual work' },
            { metric: 'Data Integration', value: '95% faster', description: 'Streamlined ETL processes' },
            { metric: 'Business Insights', value: 'Real-time', description: 'Immediate access to critical metrics' }
        ],
        
        timeline: [
            { phase: 'Design', duration: '3-4 weeks', details: 'Schema and architecture design' },
            { phase: 'Development', duration: '2-3 months', details: 'Pipeline development and testing' },
            { phase: 'Deployment', duration: '1-2 weeks', details: 'Production rollout and migration' },
            { phase: 'Optimization', duration: 'Ongoing', details: 'Performance tuning and improvements' }
        ]
    },

    'Data Lake Architecture': {
        icon: '💧',
        title: 'Data Lake Architecture',
        subtitle: 'Scalable Raw Data Repository for Analytics & AI',
        overview: 'A data lake is a centralized repository that stores raw, unstructured data at massive scale. Unlike data warehouses, data lakes preserve data in its original format, enabling data scientists to explore, experiment, and build machine learning models without constraints. We design and implement cloud-native data lakes.',
        
        processSteps: [
            { step: 1, title: 'Infrastructure Planning', description: 'We assess your data volume, velocity, and variety to design optimal cloud infrastructure (AWS S3, Azure Data Lake, GCS).' },
            { step: 2, title: 'Data Ingestion Setup', description: 'We configure automated data ingestion from APIs, databases, logs, and streaming sources using Apache Kafka, AWS Kinesis, or Azure Event Hubs.' },
            { step: 3, title: 'Data Governance Implementation', description: 'We establish data cataloging, metadata management, quality frameworks, and access controls using tools like AWS Glue, Apache Iceberg, or Delta Lake.' },
            { step: 4, title: 'Analytics & ML Integration', description: 'We enable data scientists to query and experiment using Spark, Presto, and ML frameworks like TensorFlow and PyTorch.' }
        ],
        
        useCases: [
            { title: 'Real-Time Streaming Analytics', description: 'Ingest IoT sensor data, clickstreams, and application logs for real-time anomaly detection and alerts.' },
            { title: 'Machine Learning Pipeline', description: 'Store raw data to train ML models on complete datasets, enabling accurate predictions and recommendations.' },
            { title: 'Data Exploration & Discovery', description: 'Data scientists explore raw data without predefined schemas, discovering new patterns and business opportunities.' },
            { title: 'Multi-Purpose Data Hub', description: 'Serve multiple use cases (analytics, ML, AI, operational reporting) from a single source of truth.' }
        ],
        
        techStack: [
            'Storage: AWS S3, Azure Data Lake, Google Cloud Storage',
            'Processing: Apache Spark, Presto, Trino',
            'Streaming: Apache Kafka, AWS Kinesis, Azure Event Hubs',
            'Formats: Parquet, ORC, Delta Lake, Apache Iceberg',
            'ML: TensorFlow, PyTorch, Scikit-learn, XGBoost'
        ],
        
        roi: [
            { metric: 'Data Storage Cost', value: '60% lower', description: 'Scalable cloud storage at scale' },
            { metric: 'Time to Insight', value: '10x faster', description: 'Direct access to raw data' },
            { metric: 'ML Model Accuracy', value: '+25%', description: 'Training on complete, raw datasets' },
            { metric: 'Data Scientist Productivity', value: '+40%', description: 'Self-service data exploration' }
        ],
        
        timeline: [
            { phase: 'Planning', duration: '2-3 weeks', details: 'Infrastructure and governance design' },
            { phase: 'Implementation', duration: '2-4 months', details: 'Ingestion and storage setup' },
            { phase: 'Integration', duration: '1-2 months', details: 'Connect analytics and ML tools' },
            { phase: 'Maturation', duration: 'Ongoing', details: 'Optimization and expansion' }
        ]
    },

    'Advanced Reporting': {
        icon: '📊',
        title: 'Advanced Reporting',
        subtitle: 'Interactive Dashboards & Business Intelligence',
        overview: 'Modern reporting goes beyond static reports. We create interactive dashboards, self-service analytics platforms, and automated reports that give your entire organization real-time access to critical business metrics. Our solutions empower business users without requiring technical expertise.',
        
        processSteps: [
            { step: 1, title: 'Requirements & KPI Definition', description: 'We work with stakeholders to identify key metrics, KPIs, and reporting requirements.' },
            { step: 2, title: 'Dashboard Design', description: 'We design intuitive, visually appealing dashboards following best practices in data visualization.' },
            { step: 3, title: 'Development & Implementation', description: 'We build dashboards using tools like Tableau, Power BI, or Looker, connected to your data sources.' },
            { step: 4, title: 'Training & Adoption', description: 'We train users and help drive adoption through change management and ongoing support.' }
        ],
        
        useCases: [
            { title: 'Executive Dashboards', description: 'High-level KPI dashboards for C-suite visibility into revenue, profitability, and strategic metrics.' },
            { title: 'Operational Dashboards', description: 'Real-time monitoring of operational metrics (orders, inventory, support tickets) for quick decision-making.' },
            { title: 'Sales & Marketing Analytics', description: 'Pipeline dashboards, campaign performance, customer acquisition costs, and sales forecasting.' },
            { title: 'Self-Service Analytics', description: 'Enable business users to explore data, create custom reports, and drill into details independently.' }
        ],
        
        techStack: [
            'BI Platforms: Tableau, Power BI, Looker, Qlik Sense',
            'Visualization: D3.js, Plotly, Apache ECharts',
            'Data Sources: SQL, APIs, cloud data warehouses',
            'Publishing: Cloud dashboards, embedded analytics',
            'Mobile: Responsive design for tablet and mobile'
        ],
        
        roi: [
            { metric: 'Decision Speed', value: '5x faster', description: 'Real-time data availability' },
            { metric: 'Report Creation', value: '90% automated', description: 'Scheduled reports eliminate manual work' },
            { metric: 'User Adoption', value: '85%+', description: 'Intuitive, self-service analytics' },
            { metric: 'Insights Generated', value: '+50%', description: 'Data exploration drives discoveries' }
        ],
        
        timeline: [
            { phase: 'Discovery', duration: '2-3 weeks', details: 'Requirements and KPI definition' },
            { phase: 'Design', duration: '2-3 weeks', details: 'Dashboard and report design' },
            { phase: 'Development', duration: '4-8 weeks', details: 'Dashboard development and testing' },
            { phase: 'Deployment', duration: '1-2 weeks', details: 'Launch and user training' }
        ]
    },

    'Financial Analytics': {
        icon: '💰',
        title: 'Financial Analytics',
        subtitle: 'Complete Financial Visibility & Forecasting',
        overview: 'Financial Analytics provides CFOs and finance teams with comprehensive visibility into organizational finances. We implement integrated financial analytics solutions that consolidate data from ERP systems, general ledgers, and operational systems to enable accurate reporting, forecasting, and strategic planning.',
        
        processSteps: [
            { step: 1, title: 'Financial Data Assessment', description: 'We audit your ERP, GL, and operational data to understand current financial processes and data quality.' },
            { step: 2, title: 'Chart of Accounts Mapping', description: 'We map account hierarchies and define consistent financial dimensions for rollup and analysis.' },
            { step: 3, title: 'Analytics Model Development', description: 'We build financial models for profitability, cash flow, variance analysis, and forecasting.' },
            { step: 4, title: 'Dashboard & Report Deployment', description: 'We deploy financial dashboards for revenue, expenses, margins, headcount costs, and budget vs actual.' }
        ],
        
        useCases: [
            { title: 'Revenue Analytics', description: 'Track revenue by product, customer segment, geography, and sales channel with real-time KPIs.' },
            { metric: 'Cash Flow Forecasting', description: 'Predict cash needs 90-days forward using historical patterns and seasonal trends.' },
            { title: 'Profitability Analysis', description: 'Calculate product margins, customer lifetime value, and segment profitability for business optimization.' },
            { title: 'Budget vs Actual Reporting', description: 'Monitor departmental budgets vs actual spend with variance analysis and explanations.' }
        ],
        
        techStack: [
            'ERP Integration: SAP, Oracle, NetSuite, Microsoft Dynamics',
            'Analytics Platforms: Anaplan, Board, Jedox, Power BI',
            'Data Models: Dimensional modeling, slowly changing dimensions',
            'Forecasting: Machine learning models, statistical methods',
            'Consolidation: Multi-company consolidation and elimination automation'
        ],
        
        roi: [
            { metric: 'Close Cycle Time', value: '50% faster', description: 'Automated financial close processes' },
            { metric: 'Forecast Accuracy', value: '95%+', description: 'ML-powered predictions' },
            { metric: 'Cost Visibility', value: 'Real-time', description: 'Immediate cost allocation and tracking' },
            { metric: 'Decision Insights', value: '10x more', description: 'Deep financial analysis and optimization' }
        ],
        
        timeline: [
            { phase: 'Assessment', duration: '3-4 weeks', details: 'Current state analysis' },
            { phase: 'Model Development', duration: '3-4 months', details: 'Financial analytics model build' },
            { phase: 'Implementation', duration: '2-3 months', details: 'Dashboard and report deployment' },
            { phase: 'Optimization', duration: 'Ongoing', description: 'Continuous improvement and enhancement' }
        ]
    },

    'Data Security': {
        icon: '🔐',
        title: 'Data Security',
        subtitle: 'Enterprise-Grade Protection & Compliance',
        overview: 'In today\'s threat landscape, data security is not optional—it\'s essential. We implement comprehensive security frameworks that protect your data across the entire lifecycle: at rest, in transit, and in use. Our solutions ensure compliance with GDPR, HIPAA, SOC 2, and other regulatory requirements.',
        
        processSteps: [
            { step: 1, title: 'Security Assessment', description: 'We conduct penetration testing, vulnerability scanning, and security architecture reviews.' },
            { step: 2, title: 'Security Design', description: 'We design a defense-in-depth strategy including encryption, authentication, and monitoring.' },
            { step: 3, title: 'Implementation', description: 'We implement security controls: encryption, VPNs, firewalls, WAF, identity management, and DLP.' },
            { step: 4, title: 'Monitoring & Incident Response', description: 'We deploy SIEM, threat detection, and incident response procedures for continuous protection.' }
        ],
        
        useCases: [
            { title: 'Data Encryption', description: 'Encrypt sensitive data (PII, financial, health records) at rest in databases and in transit over networks.' },
            { title: 'Access Control', description: 'Implement role-based access control (RBAC) and attribute-based access control (ABAC) with audit trails.' },
            { title: 'Compliance Automation', description: 'Automate compliance reporting for GDPR, HIPAA, PCI-DSS, and SOC 2 with continuous monitoring.' },
            { title: 'Threat Detection', description: 'Deploy ML-based anomaly detection to identify unusual access patterns and potential breaches.' }
        ],
        
        techStack: [
            'Encryption: AES-256, RSA, TLS 1.3, HashiCorp Vault',
            'Identity: AWS IAM, Azure AD, Okta, Ping Identity',
            'SIEM: Splunk, Azure Sentinel, Elastic Stack',
            'Threat Detection: CrowdStrike, Palo Alto, Fortinet',
            'Data Protection: Imperva, Thales, Zscaler'
        ],
        
        roi: [
            { metric: 'Security Incidents', value: '90% reduction', description: 'Prevented breaches and unauthorized access' },
            { metric: 'Compliance', value: '100%', description: 'Meet all regulatory requirements' },
            { metric: 'Risk Mitigation', value: '8x ROI', description: 'Avoid costly breaches ($4.2M average)' },
            { metric: 'Customer Trust', value: '+40%', description: 'Confidence in data protection' }
        ],
        
        timeline: [
            { phase: 'Assessment', duration: '3-4 weeks', details: 'Security audit and analysis' },
            { phase: 'Design', duration: '2-3 weeks', details: 'Security architecture design' },
            { phase: 'Implementation', duration: '2-4 months', details: 'Security controls deployment' },
            { phase: 'Continuous Monitoring', duration: 'Ongoing', details: 'Threat monitoring and response' }
        ]
    }
};

// ==================== MODAL FUNCTIONS ==================== 
function openServiceModal(serviceName) {
    console.log('openServiceModal called with:', serviceName);
    
    // Store the service name for Learn More button
    currentServiceName = serviceName;
    
    const data = serviceData[serviceName];
    if (!data) {
        console.error('Service data not found for:', serviceName);
        return;
    }
    
    // Set modal content
    document.getElementById('modalTitle').textContent = serviceName;
    document.getElementById('modalDescription').textContent = data.description;
    document.querySelector('.modal-icon').textContent = data.icon;
    
    // Set features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    
    // Set benefits
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = data.benefits.map(b => `<li>${b}</li>`).join('');
    
    // Show modal
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        console.log('✅ Modal opened successfully!');
    } else {
        console.error('Modal element not found!');
    }
}

function closeServiceModal() {
    console.log('closeServiceModal called');
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        console.log('✅ Modal closed');
    }
}

// Store the current service name globally so Learn More can access it
let currentServiceName = '';

function openServiceDetails() {
    console.log('Opening details for:', currentServiceName);
    closeServiceModal();
    
    const details = serviceDetailsData[currentServiceName];
    if (!details) {
        console.error('Details not found for:', currentServiceName);
        return;
    }
    
    // Update details modal
    document.getElementById('detailsTitle').textContent = details.title;
    document.getElementById('detailsSubtitle').textContent = details.subtitle;
    document.querySelector('.details-icon').textContent = details.icon;
    document.getElementById('detailsOverview').textContent = details.overview;
    
    // Process Steps
    const processHTML = details.processSteps.map(step => `
        <div class="step">
            <div class="step-number">${step.step}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('detailsProcess').innerHTML = processHTML;
    
    // Use Cases
    const useCasesHTML = details.useCases.map(useCase => `
        <div class="use-case">
            <h4>✓ ${useCase.title}</h4>
            <p>${useCase.description}</p>
        </div>
    `).join('');
    document.getElementById('detailsUseCases').innerHTML = useCasesHTML;
    
    // Tech Stack
    const techHTML = details.techStack.map(tech => `<li>${tech}</li>`).join('');
    document.getElementById('detailsTechStack').innerHTML = `<ul>${techHTML}</ul>`;
    
    // ROI Metrics
    const roiHTML = details.roi.map(metric => `
        <div class="roi-item">
            <div class="roi-metric">${metric.metric}</div>
            <div class="roi-value">${metric.value}</div>
            <div class="roi-desc">${metric.description}</div>
        </div>
    `).join('');
    document.getElementById('detailsROI').innerHTML = roiHTML;
    
    // Timeline
    const timelineHTML = details.timeline.map(phase => `
        <div class="timeline-item">
            <div class="timeline-phase">${phase.phase}</div>
            <div class="timeline-duration">${phase.duration}</div>
            <div class="timeline-details">${phase.details || phase.description}</div>
        </div>
    `).join('');
    document.getElementById('detailsTimeline').innerHTML = timelineHTML;
    
    // Show details modal
    const detailsModal = document.getElementById('serviceDetailsModal');
    if (detailsModal) {
        detailsModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        console.log('✅ Details modal opened!');
    }
}

function closeServiceDetails() {
    console.log('Closing details modal');
    const detailsModal = document.getElementById('serviceDetailsModal');
    if (detailsModal) {
        detailsModal.classList.remove('show');
        document.body.style.overflow = 'auto';
        console.log('✅ Details modal closed');
    }
}

function contactForService() {
    console.log('Contact for service:', currentServiceName);
    closeServiceDetails();
    
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Optional: Pre-fill the service field if it exists
    const serviceSelect = document.querySelector('select');
    if (serviceSelect) {
        serviceSelect.value = currentServiceName;
    }
}

// ==================== INITIALIZE ON LOAD ==================== 
function initializeWebsite() {
    console.log('=== INITIALIZING WEBSITE ===');
    
    // Verify service cards exist
    const cards = document.querySelectorAll('.service-card');
    console.log('Service cards found:', cards.length);
    
    // Verify modal exists
    const modal = document.getElementById('serviceModal');
    console.log('Modal element found:', !!modal);
    
    // Add event listeners
    cards.forEach((card, idx) => {
        const title = card.querySelector('h3').textContent;
        card.addEventListener('click', function() {
            console.log(`Card ${idx + 1} clicked:`, title);
            openServiceModal(title);
        });
        card.style.cursor = 'pointer';
    });
    
    console.log('✅ Website initialized successfully!');
}

// Wait for DOM to load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}

// ==================== FORM HANDLING ==================== 
function initFormHandling() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && service && message) {
            console.log('Form submitted:', { name, email, service, message });
            alert('Thank you! We will contact you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ==================== SMOOTH SCROLLING ==================== 
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==================== CTA BUTTON ==================== 
function initCTAButton() {
    const btn = document.querySelector('.cta-button');
    if (btn) {
        btn.addEventListener('click', () => {
            const contact = document.getElementById('contact');
            if (contact) {
                contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// ==================== MODAL CLOSE HANDLERS ==================== 
function initModalHandlers() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    
    // Close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }
    
    // Click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeServiceModal();
        }
    });
    
    // Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeServiceModal();
        }
    });
}

// ==================== COMPLETE INITIALIZATION ==================== 
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    initializeWebsite();
    initFormHandling();
    initSmoothScrolling();
    initCTAButton();
    initModalHandlers();
    console.log('✅ ALL SYSTEMS INITIALIZED');
});
