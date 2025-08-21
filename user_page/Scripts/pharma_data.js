const pharmaData = [
    {
        name: "Celecoxib (Dosage)",
        action: "Non-steroidal anti-inflammatory drugs",
        definition: "Celecoxib is a selective COX-2 inhibitor NSAID used to treat osteoarthritis, rheumatoid arthritis, and acute pain. It has better gastrointestinal tolerability than traditional NSAIDs but requires careful monitoring of cardiovascular risk.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Docetaxel (Adverse effects)",
        action: "Antineoplastics",
        definition: "Docetaxel is a taxane chemotherapy drug used to treat various cancers including breast, lung, and prostate cancer. It works by stabilizing microtubules and preventing cell division.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP3A4, ABCB1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Efavirenz (Adverse effects)",
        action: "Antivirals",
        definition: "Efavirenz is a non-nucleoside reverse transcriptase inhibitor used to treat HIV infection. It can cause central nervous system side effects and requires careful monitoring.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2B6, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Fluvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Fluvastatin is a statin drug used to lower cholesterol levels and prevent cardiovascular disease. It works by inhibiting HMG-CoA reductase.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9, SLCO1B1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Ibuprofen (Dosage)",
        action: "Anti-inflammatory",
        definition: "Ibuprofen is a non-steroidal anti-inflammatory drug used to treat pain, fever, and inflammation. It works by inhibiting cyclooxygenase enzymes.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Ivacaftor (Efficacy)",
        action: "Other drugs for the respiratory system",
        definition: "Ivacaftor is a CFTR potentiator used to treat cystic fibrosis in patients with specific CFTR mutations. It improves lung function and reduces pulmonary exacerbations.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CFTR",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Methotrexate (Adverse Reactions)",
        action: "Immunomodulators",
        definition: "Methotrexate is an antimetabolite drug used to treat cancer, autoimmune diseases, and ectopic pregnancy. It can cause serious adverse reactions including myelosuppression and hepatotoxicity.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "MTHFR, SLC19A1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Methotrexate in rheumatoid arthritis (Efficacy)",
        action: "Immunomodulators",
        definition: "Methotrexate is a first-line disease-modifying antirheumatic drug for rheumatoid arthritis. It reduces inflammation and slows disease progression.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "MTHFR, SLC19A1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Olanzapine (Adverse effects)",
        action: "Antipsychotics",
        definition: "Olanzapine is an atypical antipsychotic used to treat schizophrenia and bipolar disorder. It can cause metabolic side effects including weight gain and diabetes.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP1A2, CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Olanzapine (Efficacy)",
        action: "Antipsychotics",
        definition: "Olanzapine is effective for treating positive and negative symptoms of schizophrenia and manic episodes in bipolar disorder.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP1A2, CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Phenytoin (Dosage)",
        action: "Antiepileptics",
        definition: "Phenytoin is an antiepileptic drug used to control seizures. It has a narrow therapeutic index and requires careful dose monitoring.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Tacrolimus (Dosage)",
        action: "Immunosuppressants",
        definition: "Tacrolimus is a calcineurin inhibitor used to prevent organ rejection after transplantation. It requires therapeutic drug monitoring due to narrow therapeutic range.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP3A5, ABCB1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Thioguanine, Azathioprine, Mercaptopurine (Dosage)",
        action: "Immunosuppressants",
        definition: "These thiopurine drugs are used as immunosuppressants and in cancer treatment. TPMT genetic testing is crucial to prevent severe myelosuppression.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "TPMT, NUDT15",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Valproic Acid (Adverse effects)",
        action: "Antiepileptics",
        definition: "Valproic acid is an antiepileptic drug that can cause serious adverse effects including hepatotoxicity, teratogenicity, and pancreatitis.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "POLG, UGT1A6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Warfarin (Adverse Reactions)",
        action: "Antithrombotics",
        definition: "Warfarin is an oral anticoagulant used to prevent blood clots. It has a narrow therapeutic index and requires careful monitoring.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "VKORC1, CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Abacavir (Adverse effects)",
        action: "Antivirals",
        definition: "Abacavir is a nucleoside reverse transcriptase inhibitor for HIV treatment. HLA-B*5701 testing is required to prevent hypersensitivity reactions.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "HLA-B*5701",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Acenocoumarol, Fenprocoumon (Adverse effects)",
        action: "Antithrombotics",
        definition: "These coumarin anticoagulants are vitamin K antagonists used to prevent blood clots. They require careful monitoring and dose adjustment.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "VKORC1, CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Amifampridine (Dosage)",
        action: "Cholinergics",
        definition: "Amifampridine is used to treat Lambert-Eaton myasthenic syndrome. It improves neuromuscular transmission by blocking potassium channels.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "NAT2",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Aminoglycoside antibiotics (Adverse effects)",
        action: "Antibiotics",
        definition: "Aminoglycosides are broad-spectrum antibiotics that can cause ototoxicity and nephrotoxicity. MT-RNR1 variants increase ototoxicity risk.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "MT-RNR1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Amitriptyline (Dosage)",
        action: "Antidepressants",
        definition: "Amitriptyline is a tricyclic antidepressant used for depression and chronic pain. CYP2D6 and CYP2C19 variants affect metabolism.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Aripiprazole (Dosage)",
        action: "Antipsychotics",
        definition: "Aripiprazole is an atypical antipsychotic with partial agonist activity at dopamine and serotonin receptors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Atazanavir (Adverse effects)",
        action: "Antivirals",
        definition: "Atazanavir is a protease inhibitor for HIV treatment. UGT1A1 variants can cause hyperbilirubinemia.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "UGT1A1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Atomoxetine (Dosage)",
        action: "Centrally acting psychostimulants",
        definition: "Atomoxetine is a non-stimulant treatment for ADHD. CYP2D6 variants significantly affect drug exposure and response.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Atorvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Atorvastatin is a statin that reduces cholesterol synthesis. SLCO1B1 variants increase myopathy risk.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Brexpiprazole (Dosage)",
        action: "Antipsychotics",
        definition: "Brexpiprazole is an atypical antipsychotic with partial agonist activity at multiple receptors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Brivaracetam (Dosage)",
        action: "Anti-acid treatment",
        definition: "Brivaracetam is an antiepileptic drug that binds to synaptic vesicle protein 2A.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Carbamazepine (Dosage)",
        action: "Antiepileptics",
        definition: "Carbamazepine is an antiepileptic drug that stabilizes neuronal membranes and reduces glutamate release.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "HLA-B*1502, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Citalopram (Dosage)",
        action: "Antidepressants",
        definition: "Citalopram is an SSRI antidepressant that inhibits serotonin reuptake. CYP2C19 variants affect metabolism.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Clobazam (Adverse Reactions)",
        action: "Muscle relaxants",
        definition: "Clobazam is a benzodiazepine used as an adjunctive treatment for seizures. CYP2C19 variants affect metabolism.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Clomipramine (Dosage)",
        action: "Antidepressants",
        definition: "Clomipramine is a tricyclic antidepressant that inhibits serotonin and norepinephrine reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Clopidogrel (Dosage)",
        action: "Antithrombotics",
        definition: "Clopidogrel is an antiplatelet drug that inhibits platelet aggregation. CYP2C19 variants affect activation.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Codeine (Dosage)",
        action: "Opioid analgesics",
        definition: "Codeine is an opioid analgesic that requires CYP2D6 for activation to morphine.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Desipramine (Dosage)",
        action: "Antidepressants",
        definition: "Desipramine is a tricyclic antidepressant that primarily inhibits norepinephrine reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Diazepam (Adverse Reactions)",
        action: "Anxiolytics",
        definition: "Diazepam is a benzodiazepine used for anxiety, muscle spasms, and seizures.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Doxepin (Dosage)",
        action: "Antidepressants",
        definition: "Doxepin is a tricyclic antidepressant with strong antihistamine properties.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Escitalopram (Dosage)",
        action: "Antidepressants",
        definition: "Escitalopram is the S-enantiomer of citalopram and a selective serotonin reuptake inhibitor.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Fentanyl (Efficacy)",
        action: "Opioid analgesics",
        definition: "Fentanyl is a potent synthetic opioid analgesic used for severe pain management.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP3A4, OPRM1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Flecainide (Dosage)",
        action: "Antiarrhythmics",
        definition: "Flecainide is a class IC antiarrhythmic agent used to treat ventricular arrhythmias.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Floxacillin (Adverse effects)",
        action: "Antibiotics",
        definition: "Floxacillin is a beta-lactam antibiotic used to treat staphylococcal infections.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Fluorouracil, Capecitabine (Dosage)",
        action: "Antineoplastics",
        definition: "These antimetabolite drugs are used in cancer treatment and can cause severe toxicity.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "DPYD, TYMS",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Fluvoxamine (Dosage)",
        action: "Antipsychotics",
        definition: "Fluvoxamine is an SSRI antidepressant that inhibits serotonin reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP1A2",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "G6PD Deficiency and Adverse Drug Reactions",
        action: "Multiple pharmacological actions",
        definition: "G6PD deficiency affects the metabolism of various drugs and can cause hemolytic anemia.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "G6PD",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Haloperidol (Dosage)",
        action: "Antipsychotics",
        definition: "Haloperidol is a first-generation antipsychotic used to treat schizophrenia and acute psychosis.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Hydrochlorothiazide (Efficacy)",
        action: "Antihypertensives",
        definition: "Hydrochlorothiazide is a thiazide diuretic used to treat hypertension and edema.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Iloperidone (Dosage)",
        action: "Antipsychotics",
        definition: "Iloperidone is an atypical antipsychotic with activity at multiple neurotransmitter receptors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Imipramine (Dosage)",
        action: "Antidepressants",
        definition: "Imipramine is a tricyclic antidepressant that inhibits serotonin and norepinephrine reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Inhalation anesthetics and succinylcholine (Adverse Reactions)",
        action: "General anesthetics",
        definition: "These drugs can cause malignant hyperthermia in susceptible individuals with RYR1 variants.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "RYR1, CACNA1S",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Irinotecan (Adverse effects)",
        action: "Antineoplastics",
        definition: "Irinotecan is a topoisomerase I inhibitor that can cause severe diarrhea and myelosuppression.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "UGT1A1, DPYD",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Isoniazid (Adverse effects)",
        action: "Antibiotics",
        definition: "Isoniazid is an antituberculosis drug that can cause hepatotoxicity and peripheral neuropathy.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "NAT2, CYP2E1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Lansoprazole, Dexlansoprazole (Dosage)",
        action: "Anti-acid treatment",
        definition: "These proton pump inhibitors are used to treat acid-related gastrointestinal disorders.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Lovastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Lovastatin is a statin that reduces cholesterol synthesis by inhibiting HMG-CoA reductase.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Lumacaftor + Ivacaftor (Efficacy)",
        action: "Other drugs for the respiratory system",
        definition: "This combination therapy treats cystic fibrosis by correcting CFTR protein function.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CFTR",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Metoprolol (Dosage)",
        action: "Beta-blockers cardiovascular system",
        definition: "Metoprolol is a beta-blocker used to treat hypertension, angina, and heart failure.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Mirtazapine (Adverse Reactions)",
        action: "Antidepressants",
        definition: "Mirtazapine is an atypical antidepressant that enhances noradrenergic and serotonergic transmission.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP1A2",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Nortriptyline (Dosage)",
        action: "Antidepressants",
        definition: "Nortriptyline is a tricyclic antidepressant that primarily inhibits norepinephrine reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Omeprazole (Dosage)",
        action: "Anti-acid treatment",
        definition: "Omeprazole is a proton pump inhibitor used to treat acid-related gastrointestinal disorders.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Pantoprazole (Dosage)",
        action: "Anti-acid treatment",
        definition: "Pantoprazole is a proton pump inhibitor with minimal CYP2C19 metabolism.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Paroxetine (Dosage)",
        action: "Antidepressants",
        definition: "Paroxetine is an SSRI antidepressant that inhibits serotonin reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Peginterferons alfa-2a -2b and ribavirin (Efficacy)",
        action: "Antivirals",
        definition: "This combination therapy is used to treat chronic hepatitis C infection.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "IL28B, IFNL3",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Pimozide (Dosage)",
        action: "Antipsychotics",
        definition: "Pimozide is a first-generation antipsychotic used to treat Tourette syndrome.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Pitavastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Pitavastatin is a statin with minimal drug interactions due to limited CYP metabolism.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Pravastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Pravastatin is a statin that is not extensively metabolized by CYP enzymes.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Quetiapine (Dosage)",
        action: "Antipsychotics",
        definition: "Quetiapine is an atypical antipsychotic with activity at multiple neurotransmitter receptors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Risperidone (Dosage)",
        action: "Antipsychotics",
        definition: "Risperidone is an atypical antipsychotic that blocks dopamine and serotonin receptors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Rosuvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Rosuvastatin is a potent statin with minimal CYP metabolism and good tolerability.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Selective Serotonin Reuptake Inhibitors (SSRIs) (Adverse effects)",
        action: "Antidepressants",
        definition: "SSRIs are a class of antidepressants that can cause various adverse effects including sexual dysfunction and bleeding risk.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Sertraline (Dosage)",
        action: "Antidepressants",
        definition: "Sertraline is an SSRI antidepressant with minimal drug interactions.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Simvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Simvastatin is a statin that requires CYP3A4 for activation and can cause myopathy.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Statins (Dosage and risk of myopathy)",
        action: "Hypolipidemic agents",
        definition: "Statins can cause myopathy, with SLCO1B1 variants significantly increasing this risk.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "SLCO1B1, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Tamoxifen (Efficacy)",
        action: "Antipsychotics",
        definition: "Tamoxifen is a selective estrogen receptor modulator used in breast cancer treatment.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Tramadol (Dosage)",
        action: "Opioid analgesics",
        definition: "Tramadol is an opioid analgesic that requires CYP2D6 for activation to its active metabolite.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Trimipramine (Dosage)",
        action: "Antidepressants",
        definition: "Trimipramine is a tricyclic antidepressant with strong antihistamine properties.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Venlafaxine (Dosage)",
        action: "Antidepressants",
        definition: "Venlafaxine is an SNRI antidepressant that inhibits serotonin and norepinephrine reuptake.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Voriconazole (Dosage)",
        action: "Antifungals",
        definition: "Voriconazole is a triazole antifungal used to treat serious fungal infections.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C19, CYP3A4",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Vortioxetine (Dosage)",
        action: "Antidepressants",
        definition: "Vortioxetine is a multimodal antidepressant with activity at multiple serotonin receptors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6, CYP2C19",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Zuclopenthixol (Dosage)",
        action: "Antipsychotics",
        definition: "Zuclopenthixol is a first-generation antipsychotic used to treat schizophrenia.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Allopurinol (Dosage)",
        action: "Antigout agents",
        definition: "Allopurinol is a xanthine oxidase inhibitor used to treat gout and hyperuricemia.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "HLA-B*5801",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Cisplatin (Adverse Reactions)",
        action: "Antineoplastics",
        definition: "Cisplatin is a platinum-based chemotherapy drug that can cause nephrotoxicity and ototoxicity.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "TPMT, GSTP1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Eliglustat (Adverse Reactions)",
        action: "Enzyme replacement therapy",
        definition: "Eliglustat is a substrate reduction therapy for Gaucher disease type 1.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Flucytosine (Adverse Reactions)",
        action: "Antifungals",
        definition: "Flucytosine is an antifungal drug used to treat serious fungal infections.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "DPYD",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Fluindione (Adverse Reactions)",
        action: "Antithrombotics",
        definition: "Fluindione is a vitamin K antagonist anticoagulant used in some European countries.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "VKORC1, CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Gonadotrophins and Ovulation Stimulants (Efficacy)",
        action: "Hormonal agents",
        definition: "These drugs stimulate ovulation and are used in fertility treatments.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Hormonal contraceptives (Adverse effects)",
        action: "Hormonal agents",
        definition: "Hormonal contraceptives can cause various adverse effects including thrombosis risk.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "F5, F2, SERPINC1",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Hydrocodone (Dosage)",
        action: "Opioid analgesics",
        definition: "Hydrocodone is an opioid analgesic that requires CYP2D6 for activation.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Lornoxicam (Dosage)",
        action: "Non-steroidal anti-inflammatory drug",
        definition: "Lornoxicam is an NSAID used to treat pain and inflammation.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Meloxicam (Dosage)",
        action: "Non-steroidal anti-inflammatory drug",
        definition: "Meloxicam is a selective COX-2 inhibitor NSAID with good gastrointestinal tolerability.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Piroxicam (Dosage)",
        action: "Non-steroidal anti-inflammatory drug",
        definition: "Piroxicam is a long-acting NSAID used to treat arthritis and pain.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Pitolisant (Dosage)",
        action: "Central nervous system stimulants",
        definition: "Pitolisant is a histamine H3 receptor antagonist used to treat narcolepsy.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Propafenone (Adverse Reactions)",
        action: "Antiarrhythmics",
        definition: "Propafenone is a class IC antiarrhythmic agent used to treat atrial fibrillation.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2D6",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Siponimod (Dosage)",
        action: "Immunomodulators",
        definition: "Siponimod is a sphingosine-1-phosphate receptor modulator used to treat multiple sclerosis.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Tenoxicam (Dosage)",
        action: "Non-steroidal anti-inflammatory drug",
        definition: "Tenoxicam is a long-acting NSAID used to treat arthritis and pain.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CYP2C9",
        bibliography: ["Add bibliography here"]
    }
];
