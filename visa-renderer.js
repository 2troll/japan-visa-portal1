// Visa Page Renderer - Loads data from visa-data.js

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const countryCode = urlParams.get('country') || 'us';
const visaType = urlParams.get('type') || 'work';

// Check if data exists
if (typeof visaDatabase === 'undefined') {
    console.error('visaDatabase not loaded!');
    document.body.innerHTML = '<h1 style="color: white; text-align: center; padding: 50px;">Error loading visa data. Please refresh the page.</h1>';
} else {
    const data = visaDatabase[countryCode];
    
    if (!data) {
        document.body.innerHTML = `<h1 style="color: white; text-align: center; padding: 50px;">Country not found: ${countryCode}<br><br><a href="index.html" style="color: #e94560;">← Back to Home</a></h1>`;
    } else {
        const visa = data[visaType];
        
        if (!visa) {
            document.body.innerHTML = `<h1 style="color: white; text-align: center; padding: 50px;">Visa type not found: ${visaType}<br><br><a href="index.html" style="color: #e94560;">← Back to Home</a></h1>`;
        } else {
            // Update page title
            document.title = `${data.name} to Japan ${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa | Japan Visa Guide`;
            
            // Update header
            document.getElementById('country-name').textContent = data.name;
            document.getElementById('header-country').textContent = data.name;
            document.getElementById('header-visa').textContent = visaType.charAt(0).toUpperCase() + visaType.slice(1);
            document.getElementById('country-flag').textContent = data.flag;
            
            const categoryLink = document.getElementById('category-link');
            categoryLink.textContent = `${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa`;
            categoryLink.href = `${visaType}-visa-guide.html`;
            
            // Update badge
            const badge = document.getElementById('visa-badge');
            if (visa.required) {
                badge.textContent = 'Visa Required';
                badge.className = 'badge badge-warning';
            } else {
                badge.textContent = 'Visa Not Required';
                badge.className = 'badge badge-success';
            }
            
            document.getElementById('processing-time').textContent = `⏱️ Processing: ${visa.processing || visa.timeline}`;
            
            // Update quick summary
            document.getElementById('summary-visa-type').textContent = visa.type || visa.visaType;
            document.getElementById('summary-cost').textContent = visa.cost || visa.totalCost;
            document.getElementById('summary-validity').textContent = visa.validity;
            document.getElementById('summary-processing').textContent = visa.processing || visa.timeline;
            document.getElementById('summary-extension').textContent = visa.extension ? 'Yes' : 'No';
            document.getElementById('summary-documents').textContent = visa.documents ? visa.documents.length : 'N/A';
            
            // Update requirements tab
            const visaRequiredBox = document.getElementById('visa-required-box');
            if (visa.required) {
                visaRequiredBox.innerHTML = `
                    <div class="req-status">
                        <span class="status-icon">⚠️</span>
                        <div class="req-text">
                            <h3>Visa Required</h3>
                            <p>Citizens of ${data.name} must obtain a visa before entering Japan for ${visaType} purposes.</p>
                        </div>
                    </div>
                `;
            } else {
                visaRequiredBox.innerHTML = `
                    <div class="req-status">
                        <span class="status-icon">✅</span>
                        <div class="req-text">
                            <h3>Visa Not Required</h3>
                            <p>${data.name} citizens can enter Japan visa-free for ${visa.validity}.</p>
                        </div>
                    </div>
                `;
                visaRequiredBox.classList.add('not-required');
            }
            
            document.getElementById('req-visa-type').textContent = visa.type || visa.visaType;
            document.getElementById('req-visa-code').textContent = visa.code || visa.visaCode || 'N/A';
            document.getElementById('req-processing').textContent = visa.processing || visa.timeline;
            document.getElementById('req-fee').textContent = visa.cost || visa.totalCost || 'Varies';
            document.getElementById('req-validity').textContent = visa.validity;
            document.getElementById('req-extension').textContent = visa.extension ? 'Yes' : 'No';
            
            // Update documents tab
            if (visa.documents) {
                const docList = document.getElementById('document-list');
                docList.innerHTML = visa.documents.map((doc, i) => `
                    <div class="doc-item">
                        <div class="doc-checkbox" onclick="this.classList.toggle('checked')"></div>
                        <div class="doc-text">
                            <strong>${i + 1}. ${doc}</strong>
                        </div>
                    </div>
                `).join('');
                
                document.getElementById('doc-count').textContent = visa.documents.length;
                document.getElementById('prep-time').textContent = visa.prepTime || '2-4 weeks';
            }
            
            // Update process tab
            if (visa.steps) {
                const processList = document.getElementById('process-list');
                processList.innerHTML = visa.steps.map(step => `
                    <div class="process-step">
                        <div class="step-number">${step.step}</div>
                        <div class="step-content">
                            <h3>${step.action}</h3>
                            <div class="step-meta">
                                <span class="step-location">📍 ${step.location}</span>
                                <span class="step-time">⏱️ ${step.time}</span>
                                <span class="step-cost">💴 ${step.cost || 'Free'}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            
            // Update timeline tab
            document.getElementById('timeline-total').textContent = visa.timeline || visa.totalTime;
            
            if (visa.costs) {
                const costTable = document.getElementById('cost-table');
                costTable.innerHTML = `
                    <tr><th>Item</th><th>Cost</th></tr>
                    <tr><td>Visa Application Fee</td><td>¥${visa.costs.visaFee ? visa.costs.visaFee.toLocaleString() : '4,000'}</td></tr>
                    <tr><td>Document Authentication</td><td>¥${visa.costs.authentication ? visa.costs.authentication.toLocaleString() : '5,000'}</td></tr>
                    <tr><td>Translation Services</td><td>¥${visa.costs.translation ? visa.costs.translation.toLocaleString() : '10,000'}</td></tr>
                    <tr><td><strong>Total</strong></td><td><strong>${visa.costs.total || visa.totalCost}</strong></td></tr>
                `;
                
                document.getElementById('total-cost-yen').textContent = visa.costs.total || visa.totalCost;
                document.getElementById('total-cost-usd').textContent = visa.costs.totalUSD || '';
            }
            
            // Update residency tab
            if (visa.residency) {
                document.getElementById('residency-content').innerHTML = `
                    <div class="residency-path">
                        <h3>Path to Permanent Residency</h3>
                        <div class="residency-grid">
                            <div class="residency-item">
                                <div class="value">${visa.residency.years || visa.residency}</div>
                                <div class="label">Required Residency</div>
                            </div>
                            <div class="residency-item">
                                <div class="value">${visa.residency.income || '¥3,000,000/year'}</div>
                                <div class="label">Minimum Income</div>
                            </div>
                            <div class="residency-item">
                                <div class="value">${visa.residency.language || 'N2 Japanese'}</div>
                                <div class="label">Language Requirement</div>
                            </div>
                        </div>
                        <div class="residency-description">
                            <h4>Pathway Description</h4>
                            <p>${visa.residency.path || visa.residency}</p>
                        </div>
                    </div>
                `;
            }
            
            // Update FAQ tab
            if (visa.faq) {
                document.getElementById('faq-content').innerHTML = visa.faq.map((item, i) => `
                    <div class="faq-item" onclick="this.classList.toggle('active')">
                        <div class="faq-question">${item.q}</div>
                        <div class="faq-answer">${item.a}</div>
                    </div>
                `).join('');
            } else {
                document.getElementById('faq-content').innerHTML = '<p style="color: var(--text-muted); text-align: center;">FAQ coming soon for this country.</p>';
            }
            
            // Update related countries
            const relatedCountries = Object.keys(visaDatabase).filter(c => c !== countryCode);
            document.getElementById('related-countries').innerHTML = relatedCountries.map(c => `
                <a href="visa-page.html?country=${c}&type=${visaType}" class="related-link">
                    <span>${visaDatabase[c].flag}</span>
                    <span>${visaDatabase[c].name} ${visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa</span>
                </a>
            `).join('');
            
            // Add official links section if available
            if (visa.officialLinks) {
                const linksSection = document.createElement('div');
                linksSection.className = 'official-links';
                linksSection.style.cssText = 'margin-top: 3rem; padding: 2rem; background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border);';
                linksSection.innerHTML = `
                    <h3 style="color: var(--accent); margin-bottom: 1rem;">🔗 Official Resources</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${visa.officialLinks.japanImmigration ? `<li style="margin-bottom: 0.5rem;"><a href="${visa.officialLinks.japanImmigration}" target="_blank" style="color: var(--accent); text-decoration: none;">🇯🇵 Japan Immigration Services Agency</a></li>` : ''}
                        ${visa.officialLinks.embassy ? `<li style="margin-bottom: 0.5rem;"><a href="${visa.officialLinks.embassy}" target="_blank" style="color: var(--accent); text-decoration: none;">🏛️ Japanese Embassy in ${data.name}</a></li>` : ''}
                        ${visa.officialLinks.coeInfo ? `<li style="margin-bottom: 0.5rem;"><a href="${visa.officialLinks.coeInfo}" target="_blank" style="color: var(--accent); text-decoration: none;">📄 Certificate of Eligibility Info</a></li>` : ''}
                        ${visa.officialLinks.studentVisa ? `<li style="margin-bottom: 0.5rem;"><a href="${visa.officialLinks.studentVisa}" target="_blank" style="color: var(--accent); text-decoration: none;">📚 Study in Japan Portal</a></li>` : ''}
                    </ul>
                `;
                document.querySelector('.tab-section .container').appendChild(linksSection);
            }
        }
    }
}

// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab + '-tab').classList.add('active');
    });
});
