console.log('=== main_user_page.js LOADED ===');

document.addEventListener('DOMContentLoaded', () => {
    console.log('=== DOMContentLoaded FIRED ===');
    
    // --- Splash Screen Logic ---
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const progressBarInner = document.getElementById('progress-bar-inner');

    setTimeout(() => { progressBarInner.style.width = '100%'; }, 100);
    setTimeout(() => { splashScreen.classList.add('fade-out'); }, 1500);
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1900);

    // --- Main Application Logic ---
    const tabs = document.querySelectorAll('#nav-tabs button');
    const panels = document.querySelectorAll('#content-panels > div');

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('tab-active');
                t.classList.add('tab-inactive');
            });
            tab.classList.add('tab-active');
            tab.classList.remove('tab-inactive');
            const targetPanelId = tab.dataset.tab + 'Content';
            panels.forEach(panel => {
                panel.id === targetPanelId ? panel.classList.remove('hidden') : panel.classList.add('hidden');
            });
            
            // Update risk indicators when complex diseases tab is selected
            if (tab.dataset.tab === 'complex') {
                console.log('Complex diseases tab selected, updating risk indicators...');
                setTimeout(() => {
                    console.log('Delayed update of complex risk indicators...');
                    updateComplexRiskIndicators();
                }, 500);
            }
        });
    });


    function displayDetails(containerId, item, resultValue = 'N/A', action = null) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let contentHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-800">${item.name}</h3>
                
                <!-- Results Section -->
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 class="font-semibold text-green-800 flex items-center mb-2">
                        <i data-lucide="check-circle" class="w-4 h-4 mr-2"></i>
                        Your Result
                    </h4>
                    <div class="text-green-700 text-center">
                        ${action ? `<p class="mb-2 text-lg"><strong>Action:</strong> ${action}</p>` : ''}
                        <p class="text-xl font-semibold">${resultValue}</p>
                    </div>
                    
                    <!-- Picture-based Visual Representation -->
                    ${getPictureVisual(containerId, resultValue)}
                </div>
                
                <div class="info-box">
                    <h4 class="font-semibold text-green-800 flex items-center mb-2">
                        <i data-lucide="info" class="w-4 h-4 mr-2"></i>
                        Definition
                    </h4>
                    <div class="text-gray-600 text-sm">
                        <div id="definition-${item.name.replace(/\s+/g, '-').toLowerCase()}" class="definition-content">
                            <span class="definition-preview">${(item.definition || 'No definition available.').substring(0, 200)}${(item.definition && item.definition.length > 200) ? '...' : ''}</span>
                            ${(item.definition && item.definition.length > 200) ? `<span class="definition-full hidden">${item.definition}</span>` : ''}
                        </div>
                        ${(item.definition && item.definition.length > 200) ? `
                            <button 
                                onclick="toggleDefinition('${item.name.replace(/\s+/g, '-').toLowerCase()}')" 
                                class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 flex items-center space-x-1 transition-colors duration-200">
                                <span class="read-more-text">Read More</span>
                                <i data-lucide="chevron-down" class="w-4 h-4 read-more-icon"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
                
                ${(containerId === 'pharma-details' && item.action) ? `
                <div class="info-box">
                    <h4 class="font-semibold text-green-800 flex items-center mb-2">
                        <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                        Action
                    </h4>
                    <div class="text-gray-700 text-sm">
                        ${item.action}
                    </div>
                </div>
                ` : ''}
                
                ${(item.variants || item.loci || item.genes) ? `
                <div class="pt-6">
                    <h4 class="font-semibold text-gray-700 mb-4 flex items-center text-sm">
                        <i data-lucide="bar-chart-3" class="w-4 h-4 mr-2"></i>Genetic Analysis Metrics
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${item.variants ? `
                        <!-- Variants Card -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <div class="text-center">
                                <h5 class="text-xs font-medium text-green-700 mb-2">Observed Variants</h5>
                                <p class="font-bold text-lg text-green-800 break-words leading-tight">${item.variants}</p>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${item.loci ? `
                        <!-- Loci Card -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <div class="text-center">
                                <h5 class="text-xs font-medium text-green-700 mb-2">Risk Loci</h5>
                                <p class="font-bold text-lg text-green-800 break-words leading-tight">${item.loci}</p>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${item.genes ? `
                        <!-- Genes Card -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <div class="text-center">
                                <h5 class="text-xs font-medium text-green-700 mb-2">Genes Analyzed</h5>
                                <p class="font-bold text-lg text-green-800 break-words leading-tight">${item.genes}</p>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
                ` : ''}
        `;

        if (item.bibliography && item.bibliography.length > 0) {
            contentHTML += `<div class="pt-4 mt-4 border-t border-gray-200"><h4 class="font-semibold text-gray-600 flex items-center mb-2 text-sm"><i data-lucide="book-open" class="w-4 h-4 mr-2"></i>Bibliography</h4>`;
            
            // Show first 1 bibliography item by default
            const initialCount = Math.min(1, item.bibliography.length);
            const remainingCount = item.bibliography.length - initialCount;
            
            contentHTML += `<ul class="list-disc list-inside space-y-1" id="bibliography-${item.name.replace(/\s+/g, '-')}">`;
            
            // Show initial items
            for (let i = 0; i < initialCount; i++) {
                contentHTML += `<li class="text-xs text-gray-500">${item.bibliography[i]}</li>`;
            }
            
            // Show remaining items (hidden initially)
            if (remainingCount > 0) {
                for (let i = initialCount; i < item.bibliography.length; i++) {
                    contentHTML += `<li class="text-xs text-gray-500 hidden" id="bib-item-${item.name.replace(/\s+/g, '-')}-${i}">${item.bibliography[i]}</li>`;
                }
            }
            
            contentHTML += `</ul>`;
            
            // Add Read More/Less button if there are more than 1 item
            if (remainingCount > 0) {
                contentHTML += `
                    <button onclick="toggleBibliography('${item.name.replace(/\s+/g, '-')}', ${remainingCount})" 
                            class="text-blue-600 hover:text-blue-800 text-xs mt-2 font-medium transition-colors duration-200"
                            id="bib-toggle-${item.name.replace(/\s+/g, '-')}">
                        Read More (${remainingCount} more)
                    </button>`;
            }
            
            contentHTML += `</div>`;
        }

        contentHTML += `</div>`;
        container.innerHTML = contentHTML;
        lucide.createIcons();
    }

    function createParameterList(listContainerId, detailsContainerId, items) {
        const listContainer = document.getElementById(listContainerId);
        if (!listContainer) return;
        listContainer.innerHTML = ''; // Clear previous list

        console.log(`Creating parameter list for ${listContainerId} with ${items.length} items`);

        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'parameter-item p-3 rounded-lg border-l-4 border-transparent';
            
            // Add colored risk indicator for complex diseases
            let riskIndicator = '';
            if (listContainerId === 'complex-list') {
                riskIndicator = '<span class="inline-block w-4 h-4 rounded-full bg-gray-400 mr-2" data-risk-indicator></span>';
                console.log(`Added risk indicator for complex disease: ${item.name}`);
            }
            
            itemDiv.innerHTML = `${riskIndicator}${item.name}`;
            
            // Store the original item data for later use
            itemDiv.dataset.itemIndex = index;
            itemDiv.dataset.originalName = item.name; // Store original name
            
            itemDiv.addEventListener('click', () => {
                // Get the original item data
                const originalItem = items[index];
                // Check if this DOM element has patient results
                const hasResults = itemDiv.dataset && itemDiv.dataset.resultValue;
                let resultValue = hasResults ? itemDiv.dataset.resultValue : 'N/A';
                let action = hasResults && itemDiv.dataset.action ? itemDiv.dataset.action : null;
                
                // If no results in dataset, check the global patient results map
                if (resultValue === 'N/A' && window.patientResultsMap) {
                    const parameterName = originalItem.name;
                    const patientResult = window.patientResultsMap.get(parameterName);
                    if (patientResult) {
                        resultValue = patientResult.result;
                        action = patientResult.action;
                        console.log(`Found patient result for "${parameterName}":`, patientResult);
                    }
                }
                
                displayDetails(detailsContainerId, originalItem, resultValue, action);
                listContainer.querySelectorAll('.parameter-item').forEach(el => el.classList.remove('selected'));
                itemDiv.classList.add('selected');
            });
            listContainer.appendChild(itemDiv);
            
            if (index === 0) {
                itemDiv.classList.add('selected');
                displayDetails(detailsContainerId, item, 'N/A', null);
            }
        });
        
        console.log(`Finished creating parameter list for ${listContainerId}`);
        
        // Update risk indicators for complex diseases if we have patient results
        if (listContainerId === 'complex-list') {
            console.log('Complex list created, checking for patient results...');
            if (window.patientResultsMap) {
                console.log('Patient results map found, updating risk indicators...');
                updateComplexRiskIndicators();
            } else {
                console.log('No patient results map found yet');
            }
        }
    }
    
    // Function to update risk indicators with proper colors
    function updateComplexRiskIndicators() {
        const complexList = document.getElementById('complex-list');
        if (!complexList) {
            console.error('Complex list container not found!');
            return;
        }
        
        console.log('=== UPDATING COMPLEX RISK INDICATORS ===');
        console.log('Patient results map exists:', !!window.patientResultsMap);
        
        if (window.patientResultsMap) {
            console.log('Patient results map size:', window.patientResultsMap.size);
            console.log('All patient results:');
            for (let [key, value] of window.patientResultsMap.entries()) {
                console.log(`  "${key}":`, value);
            }
        }
        
        const parameterItems = complexList.querySelectorAll('.parameter-item');
        console.log(`Found ${parameterItems.length} parameter items in complex list`);
        
        if (parameterItems.length === 0) {
            console.error('No parameter items found in complex list!');
            return;
        }
        
        parameterItems.forEach((item, index) => {
            const riskIndicator = item.querySelector('[data-risk-indicator]');
            if (!riskIndicator) {
                console.error(`No risk indicator found for item ${index}:`, item);
                return;
            }
            
            // Get parameter name from the dataset or text content
            let parameterName = item.dataset.originalName || item.textContent.replace(/●/, '').trim();
            console.log(`Processing parameter ${index + 1}: "${parameterName}"`);
            
            // Check if we have patient results
            if (window.patientResultsMap && window.patientResultsMap.size > 0) {
                // Try to find the result by exact name match first
                let patientResult = window.patientResultsMap.get(parameterName);
                
                // If not found, try to find by partial match
                if (!patientResult) {
                    for (let [key, value] of window.patientResultsMap.entries()) {
                        if (key.includes(parameterName) || parameterName.includes(key)) {
                            patientResult = value;
                            console.log(`Found partial match: "${key}" for "${parameterName}"`);
                            break;
                        }
                    }
                }
                
                console.log(`Patient result for "${parameterName}":`, patientResult);
                
                if (patientResult && patientResult.result) {
                    const riskLevel = getRiskLevelFromResult(patientResult.result);
                    const riskColor = getRiskColorForIndicator(riskLevel);
                    console.log(`Risk level: ${riskLevel}, Color: ${riskColor}`);
                    
                    // Update the risk indicator with proper color
                    riskIndicator.className = `inline-block w-4 h-4 rounded-full mr-2 ${riskColor}`;
                    console.log(`✓ Updated risk indicator color to: ${riskColor}`);
                } else {
                    // Default to gray if no result
                    riskIndicator.className = 'inline-block w-4 h-4 rounded-full mr-2 bg-gray-400';
                    console.log(`No result found, using default gray`);
                }
            } else {
                // Default to gray if no patient results map
                riskIndicator.className = 'inline-block w-4 h-4 rounded-full mr-2 bg-gray-400';
                console.log(`No patient results map, using default gray`);
            }
        });
        
        console.log('=== FINISHED UPDATING COMPLEX RISK INDICATORS ===');
    }
    
    // Helper function to determine risk level from result text
    function getRiskLevelFromResult(resultText) {
        const lowerResult = resultText.toLowerCase();
        if (lowerResult.includes('low') || lowerResult.includes('decreased') || lowerResult.includes('reduced')) {
            return 'low';
        } else if (lowerResult.includes('high') || lowerResult.includes('elevated') || lowerResult.includes('increased')) {
            return 'high';
        } else if (lowerResult.includes('medium') || lowerResult.includes('average') || lowerResult.includes('normal')) {
            return 'medium';
        } else {
            return 'medium'; // Default to medium for unknown results
        }
    }
    
    // Helper function to get CSS classes for risk colors
    function getRiskColorForIndicator(riskLevel) {
        switch (riskLevel) {
            case 'low': return 'bg-green-500';
            case 'high': return 'bg-red-500';
            case 'medium': return 'bg-orange-500';
            default: return 'bg-orange-500';
        }
    }
    
    function setupSearch(inputId, listContainerId) {
        const searchInput = document.getElementById(inputId);
        const listContainer = document.getElementById(listContainerId);
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = listContainer.querySelectorAll('.parameter-item');
            items.forEach(item => {
                const itemName = item.textContent.toLowerCase();
                item.style.display = itemName.includes(searchTerm) ? 'block' : 'none';
            });
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const firstVisibleItem = listContainer.querySelector('.parameter-item[style*="block"]');
                if (firstVisibleItem) firstVisibleItem.click();
            }
        });
    }

    // Function to populate all parameter lists
    function populateAllParameterLists() {
        console.log('Populating parameter lists...');
        
        // Check if data files are loaded
        console.log('wellnessData available:', typeof wellnessData !== 'undefined');
        console.log('traitsData available:', typeof traitsData !== 'undefined');
        console.log('monogenicData available:', typeof monogenicData !== 'undefined');
        console.log('complexData available:', typeof complexData !== 'undefined');
        console.log('pharmaData available:', typeof pharmaData !== 'undefined');
        
        // Populate Wellness list
        if (typeof wellnessData !== 'undefined') {
            createParameterList('wellness-list', 'wellness-details', wellnessData);
            console.log('Wellness list populated with', wellnessData.length, 'items');
        } else {
            console.error('wellnessData is not defined!');
        }
        
        // Populate Traits list
        if (typeof traitsData !== 'undefined') {
            createParameterList('traits-list', 'traits-details', traitsData);
            console.log('Traits list populated with', traitsData.length, 'items');
        } else {
            console.error('traitsData is not defined!');
        }
        
        // Populate Monogenic list
        if (typeof monogenicData !== 'undefined') {
            createParameterList('monogenic-list', 'monogenic-details', monogenicData);
            console.log('Monogenic list populated with', monogenicData.length, 'items');
        } else {
            console.error('monogenicData is not defined!');
        }
        
        // Populate Complex list
        if (typeof complexData !== 'undefined') {
            createParameterList('complex-list', 'complex-details', complexData);
            console.log('Complex list populated with', complexData.length, 'items');
        } else {
            console.error('complexData is not defined!');
        }
        
        // Populate Pharma list
        if (typeof pharmaData !== 'undefined') {
            createParameterList('pharma-list', 'pharma-details', pharmaData);
            console.log('Pharma list populated with', pharmaData.length, 'items');
        } else {
            console.error('pharmaData is not defined!');
        }
    }

    // --- INVOCATION ---
    
    // Populate all parameter lists with static data
    populateAllParameterLists();
    
    // Initialize search bars for all tabs
    setupSearch('traits-search', 'traits-list');
    setupSearch('wellness-search', 'wellness-list');
    setupSearch('monogenic-search', 'monogenic-list');
    setupSearch('complex-search', 'complex-list');
    setupSearch('pharma-search', 'pharma-search');

    lucide.createIcons();
    
    // Make updateComplexRiskIndicators available globally for testing
    window.updateComplexRiskIndicators = updateComplexRiskIndicators;
    
    // Add a debug function to check patient results
    window.debugPatientResults = function() {
        console.log('=== DEBUGGING PATIENT RESULTS ===');
        console.log('Patient results map exists:', !!window.patientResultsMap);
        if (window.patientResultsMap) {
            console.log('Patient results map size:', window.patientResultsMap.size);
            console.log('All patient results:');
            for (let [key, value] of window.patientResultsMap.entries()) {
                console.log(`  "${key}":`, value);
            }
        }
        console.log('Complex list element:', document.getElementById('complex-list'));
        console.log('Complex parameter items:', document.querySelectorAll('#complex-list .parameter-item').length);
        console.log('Complex risk indicators:', document.querySelectorAll('#complex-list [data-risk-indicator]').length);
        console.log('================================');
    };
    
    // Add a function to manually test risk indicators
    window.testRiskIndicators = function() {
        console.log('=== TESTING RISK INDICATORS ===');
        
        // Check if complex list exists
        const complexList = document.getElementById('complex-list');
        if (!complexList) {
            console.error('Complex list not found!');
            return;
        }
        
        // Check parameter items
        const parameterItems = complexList.querySelectorAll('.parameter-item');
        console.log(`Found ${parameterItems.length} parameter items`);
        
        // Check risk indicators
        const riskIndicators = complexList.querySelectorAll('[data-risk-indicator]');
        console.log(`Found ${riskIndicators.length} risk indicators`);
        
        // Show first few items
        parameterItems.forEach((item, index) => {
            if (index < 5) {
                const riskIndicator = item.querySelector('[data-risk-indicator]');
                const name = item.dataset.originalName || item.textContent;
                console.log(`Item ${index + 1}: "${name}" - Risk indicator: ${riskIndicator ? 'Present' : 'Missing'}`);
            }
        });
        
        console.log('=== END TEST ===');
    };
    
    // Add a function to force update risk indicators
    window.forceUpdateRiskIndicators = function() {
        console.log('=== FORCE UPDATING RISK INDICATORS ===');
        updateComplexRiskIndicators();
        console.log('=== FORCE UPDATE COMPLETE ===');
    };
});

// Function to toggle definition read more/less
function toggleDefinition(definitionId) {
    const definitionContent = document.getElementById(`definition-${definitionId}`);
    if (!definitionContent) return;
    
    const preview = definitionContent.querySelector('.definition-preview');
    const full = definitionContent.querySelector('.definition-full');
    const button = definitionContent.parentElement.querySelector('button');
    const readMoreText = button.querySelector('.read-more-text');
    const readMoreIcon = button.querySelector('.read-more-icon');
    
    if (full.classList.contains('hidden')) {
        // Show full definition
        preview.classList.add('hidden');
        full.classList.remove('hidden');
        readMoreText.textContent = 'Read Less';
        readMoreIcon.innerHTML = '<i data-lucide="chevron-up" class="w-4 h-4"></i>';
        lucide.createIcons(); // Re-render the icon
    } else {
        // Show preview
        preview.classList.remove('hidden');
        full.classList.add('hidden');
        readMoreText.textContent = 'Read More';
        readMoreIcon.innerHTML = '<i data-lucide="chevron-down" class="w-4 h-4"></i>';
        lucide.createIcons(); // Re-render the icon
    }
}

// Function to toggle bibliography read more/less
function toggleBibliography(parameterName, remainingCount) {
    const button = document.getElementById(`bib-toggle-${parameterName}`);
    if (!button) return;
    
    const isExpanded = button.textContent.includes('Read Less');
    
    if (isExpanded) {
        // Collapse - hide remaining items
        for (let i = 1; i < 1 + remainingCount; i++) {
            const item = document.getElementById(`bib-item-${parameterName}-${i}`);
            if (item) item.classList.add('hidden');
        }
        button.textContent = `Read More (${remainingCount} more)`;
        button.classList.remove('text-blue-600');
        button.classList.add('text-blue-500');
    } else {
        // Expand - show all items
        for (let i = 1; i < 1 + remainingCount; i++) {
            const item = document.getElementById(`bib-item-${parameterName}-${i}`);
            if (item) item.classList.remove('hidden');
        }
        button.textContent = 'Read Less';
        button.classList.remove('text-blue-500');
        button.classList.add('text-blue-600');
    }
}

function getPictureVisual(containerId, resultValue) {
    let visualHTML = '';
    
    // Determine test type based on container ID
    let testType = '';
    if (containerId === 'complex-details') testType = 'Complex';
    else if (containerId === 'wellness-details') testType = 'Wellness';
    else if (containerId === 'traits-details') testType = 'Traits';
    else if (containerId === 'monogenic-details') testType = 'Monogenic';
    
    if (testType === 'Complex' || testType === 'Wellness' || testType === 'Traits') {
        // Bell curve images for Complex, Wellness, and Traits
        const lowerResult = resultValue.toLowerCase();
        let imagePath = '';
        let altText = '';
        
        if (lowerResult.includes('low') || lowerResult.includes('decreased') || lowerResult.includes('reduced')) {
            imagePath = '../curves&pics/Low 2.png';
            altText = 'Low/Favorable Result';
        } else if (lowerResult.includes('average') || lowerResult.includes('medium') || lowerResult.includes('normal')) {
            imagePath = '../curves&pics/Average 2.png';
            altText = 'Average/Medium Result';
        } else if (lowerResult.includes('high') || lowerResult.includes('elevated') || lowerResult.includes('increased')) {
            imagePath = '../curves&pics/High 2.png';
            altText = 'High/Unfavorable Result';
        } else {
            imagePath = '../curves&pics/Not found 2.png';
            altText = 'Result Not Found';
        }
        
        visualHTML = `
            <div class="mt-4">
                <h5 class="font-semibold text-gray-700 mb-2 text-sm flex items-center">
                    <i data-lucide="bar-chart-3" class="w-4 h-4 mr-2"></i>
                    Results Distribution
                </h5>
                <div class="flex justify-center items-center bg-white rounded-lg border p-4 shadow-sm">
                    <img src="${imagePath}" alt="${altText}" class="w-full max-w-md mx-auto">
                </div>
            </div>
        `;
    } else if (testType === 'Monogenic') {
        // Chromosome images for Monogenic
        const lowerResult = resultValue.toLowerCase();
        let imagePath = '';
        let altText = '';
        
        if (lowerResult.includes('variant present') || lowerResult.includes('positive') || lowerResult.includes('detected')) {
            imagePath = '../curves&pics/red chromosome.png';
            altText = 'Variant Present - Red Chromosome';
        } else {
            imagePath = '../curves&pics/green chromosome.png';
            altText = 'Variant Absent - Green Chromosome';
        }
        
        visualHTML = `
            <div class="mt-4">
                <h5 class="font-semibold text-gray-700 mb-2 text-sm flex items-center">
                    <i data-lucide="dna" class="w-4 h-4 mr-2"></i>
                    Genetic Variant Status
                </h5>
                <div class="flex justify-center items-center bg-white rounded-lg border p-4 shadow-sm">
                    <img src="${imagePath}" alt="${altText}" class="w-32 h-32 object-contain mx-auto">
                </div>
            </div>
        `;
    }
    
    return visualHTML;
}

