const traitsData = [
    { 
        name: "Acne vulgaris", 
        definition: "Acne vulgaris is a common inflammatory skin disorder affecting >85% of adolescents. It involves androgen‑stimulated sebum overproduction, follicular hyperkeratinisation, microbiome dysbiosis and inflammation. Genetics, diet (high glycemic foods, dairy) and stress influence severity. Treatment requires comprehensive counselling and realistic expectations.",
        variants: "13.5 million variants",
        loci: "44 loci",
        genes: "(43) ADAMTS18, ANKRD55, BCL11A, BORCS5, C8orf48,etc.",
        bibliography: [
            "Mitchel B.L, Saklatvala J.R, et al. Genome-wide association meta-analysis identifies 29 new acne susceptibility loci. Nature Communications, 07 Feb 2022, 13(1):702",
            "Amita H., Sadia M., et al. Acne Vulgaris. StatPearls [Internet].",
            "Linda K., Alan B., et al. Acne Vulgaris: Diagnosis and Treatment. Am Fam Physician. 2019;100(8):475-484"
        ]
    },
    { 
        name: "Alanine aminotransferase levels", 
        definition: "ALT is a hepatic enzyme that catalyzes amino acid metabolism. Elevated serum levels indicate liver damage from various causes (alcohol, NAFLD, viral hepatitis, drugs, genetic disorders). While sensitive for liver injury, ALT is non‑specific and requires clinical correlation.",
        variants: "13.5 million variants",
        loci: "334 loci",
        genes: "(401) ABCA1, ABCB11, ABCB4, ABCC2, ABCG5,etc.",
        bibliography: [
            "Barton AR, Sherman MA, Mukamel RE, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Moriles KE, Zubair M, Azer SA. Alanine Aminotransferase (ALT) Test. 2024 Feb 27. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan–.",
            "van Beek JH, de Moor MH, de Geus EJ, et al. The genetic architecture of liver enzyme levels: GGT, ALT and AST. Behav Genet. 2013 Jul;43(4):329-39. doi: 10.1007/s10519-013-9593-y. Epub 2013 Apr 12."
        ]
    },
    { 
        name: "Alcohol flush reaction", 
        definition: "Alcohol flush reaction results from inherited ALDH2 variants that impair acetaldehyde metabolism. This causes facial flushing, nausea and tachycardia after alcohol consumption. More common in Asian populations, it increases cancer risk due to acetaldehyde accumulation. Also called 'Asian flush'.",
        genes: "(1) ALDH2",
        bibliography: [
            "National Institute on Alcohol Abuse and Alcoholism. Alcohol Flush Reaction [May 2022]",
            "Cleveland Clinic. Alcohol Intolerance. [May 2022]",
            "Chen CC et al. Interaction between the functional polymorphisms of the alcohol-metabolism genes in protection against alcoholism. Am J Hum Genet. 1999 Sep;65(3):795-807."
        ]
    },
    { 
        name: "Alcohol dependence after prolonged consumption", 
        definition: "Alcohol dependence is a chronic, relapsing brain disease characterized by compulsive alcohol use, loss of control over alcohol intake, and a negative emotional state when not using. It develops through repeated alcohol exposure, leading to neuroadaptations in brain reward and stress systems. Genetic factors contribute significantly to risk, with heritability estimates of 40-60%. Prolonged consumption leads to tolerance, withdrawal symptoms, and changes in brain chemistry affecting dopamine, GABA, and glutamate systems. Risk factors include family history, early age of first drink, mental health disorders, and environmental factors. Treatment requires comprehensive approaches including behavioral therapy, medication, and support systems.",
        variants: "13.5 million variants",
        loci: "15 loci",
        genes: "(18) ADH1B, ADH1C, ALDH2, GABRA2, CHRM2, etc.",
        bibliography: [
            "Grant BF, et al. Epidemiology of DSM-5 Alcohol Use Disorder: Results From the National Epidemiologic Survey on Alcohol and Related Conditions III. JAMA Psychiatry. 2015;72(8):757-766.",
            "Edenberg HJ, Foroud T. Genetics and alcoholism. Nat Rev Gastroenterol Hepatol. 2013;10(8):487-494.",
            "Kranzler HR, et al. Genome-wide association study of alcohol dependence and related traits in 274,424 individuals from the UK Biobank identifies novel risk loci. Mol Psychiatry. 2019;24(6):812-820."
        ]
    },
    { 
        name: "Alkaline phosphatase levels", 
        definition: "ALP is found in liver, bone, kidney and intestine, with highest levels in bone (osteoblasts) and liver (bile transport). Normal range 44-147 IU/L in adults. Elevated levels occur with bone growth, pregnancy, liver disease and bile obstruction.",
        variants: "13.5 million variants",
        loci: "261 loci",
        genes: "(364) AAAS, ABCA1, ABCC12, ABI2, ABO,etc."
    },
    { 
        name: "Asparagus odor detection", 
        definition: "After eating asparagus, some people detect sulfur compounds (methanethiol, S‑methyl thioesters) in their urine. This ability varies genetically due to differences in olfactory receptor function. It represents a specific anosmia that affects ~40% of the population.",
        genes: "(1) OR2M7",
        bibliography: [
            "Pelchat ML, Bykowski C, Duke FF, Reed DR. Excretion and Perception of a Characteristic Odor in Urine after Asparagus Ingestion: a Psychophysical and Genetic Study. Chem Senses, 2011; 36(1):9–17.",
            "Eriksson, Nicholas et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS genetics vol. 6,6 e1000993. 24 Jun. 2010."
        ]
    },
    { 
        name: "Aspartate aminotransferase levels", 
        definition: "AST is a key enzyme in amino acid metabolism found in liver, heart, muscle and kidney. Normal range 10-40 U/L. Elevated levels indicate tissue damage but are less liver‑specific than ALT. Interpretation requires clinical context and other diagnostic tests.",
        variants: "13.5 million variants",
        loci: "383 loci",
        genes: "(409) ABCA1, ABCA4, ABCB11, ABCC2, ABCG5,etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Basal metabolic rate", 
        definition: "BMR is the minimum energy needed at rest for vital functions (breathing, circulation, temperature regulation). It accounts for ~70% of daily caloric expenditure and varies with lean mass, age, sex, hormones and physical condition. Measurement requires strict criteria including physical/psychological tranquility.",
        variants: "13.5 million variants",
        loci: "722 loci",
        genes: "(1002) A3GALT2, ABCE1, ABHD17C, ACAN, ACOT12, etc.",
        bibliography: [
            "UK Biobank Database. Basal metabolic rate, Data-Field 23105 [Version Jan-2022]",
            "McMurray RG, Soares J, Caspersen CJ, McCurdy T. Examining variations of resting metabolic rate of adults: a public health perspective. Med Sci Sports Exerc. 2014 Jul;46(7):1352-8."
        ]
    },
    { 
        name: "Bilirubin levels", 
        definition: "Bilirubin is the breakdown product of heme from aged red blood cells. It's formed in macrophages, bound to albumin in plasma, then conjugated in the liver and excreted via bile. Serum levels indicate liver function and hemolysis; elevated levels suggest hepatic dysfunction or increased RBC destruction.",
        variants: "13.5 million variants",
        loci: "268 loci",
        genes: "(304) ABCB4, ABCC2, ABO, ADAR, ADH4,etc."
    },
    { 
        name: "Birth weight", 
        definition: "Birth weight reflects gestational age and maternal health. Normal range 2.5-4 kg for term births (37-40 weeks). Low birth weight (<2.5 kg) increases perinatal morbidity and adult cardiovascular risk. High birth weight (macrosomia) associates with maternal diabetes/obesity and later metabolic disease.",
        variants: "13.5 million variants",
        loci: "145 loci",
        genes: "(212) ABCG1, ACTBL2, ACTL9, ADAM17, ADCY5,etc.",
        bibliography: [
            "Kids Health. Nemours Foundation [May 2022]",
            "American Academy of Pediatrics. Tracking Your Baby's Weight and Measurements [May 2022]",
            "Medline Plus. Birth Weight [May 2022]",
            "Warrington NM et al. Maternal and fetal genetic effects on birth weight and their relevance to cardio-metabolic risk factors. Nature Genetics, 01 May 2019, 51(5):804-814."
        ]
    },
    { 
        name: "Blood coagulation, factor V Leiden and 20210G-A", 
        definition: "Factor V Leiden and prothrombin 20210G-A are inherited thrombophilias that increase clotting risk. They predispose to deep vein thrombosis and pulmonary embolism. Risk is multifactorial; lifestyle modifications (exercise, avoiding prolonged sitting) and anticoagulation can help prevent complications.",
        genes: "(1) F2F5",
        bibliography: [
            "Bertina RM, Koeleman BP, Koster T, Rosendaal FR, Dirven RJ, de Ronde H, van der Velden PA, Reitsma PH. Mutation in blood coagulation factor V associated with resistance to activated protein C. Nature. 1994;369(6475):64-7.",
            "Doherty TM, Kelley A. Bleeding Disorders. 2019 Jun 16. StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan-.",
            "Kujovich JL. Factor V Leiden thrombophilia. Genet Med. 2011;13(1):1-16.",
            "Simone B, De Stefano V, Leoncini E, Zacho J, Martinelli I, Emmerich J, et al. Risk of venous thromboembolism associated with single and combined effects of Factor V Leiden, Prothrombin 20210A and Methylenetethraydrofolate reductase C677T: a meta-analysis involving over 11,000 cases and 21,000 controls. Eur J Epidemiol. 2013;28(8):621-47.",
            "Stevens SM, Woller SC, Bauer KA, Kasthuri R, Cushman M, Streiff M, et al. Guidance for the evaluation and treatment of hereditary and acquired thrombophilia. J Thromb Thrombolysis. 2016;41(1):154-64."
        ]
    },
    { 
        name: "Blood Group ABO/Rh", 
        definition: "The blood group of each individual is determined by the surface proteins expressed on the membrane of the red blood cells. Of the multitude of systems described, the most relevant, especially for human-to-human compatibility, are the ABO and Rh systems. Blood group is defined by the proteins or antigens expressed on the surface of erythrocytes or red blood cells. There are several known classificatory systems, but the most relevant for the categorization of the blood group in the population are the ABO system and the Rh system. In the case of the ABO system the antigens anchored to the surface of red blood cells are sugars that are produced by a series of reactions in which enzymes catalyze the transfer of sugar units. A person's DNA determines the type of enzymes he has and, therefore, the type of sugar antigens that end up on his red blood cells. An individual can express on the surface of the erythrocyte antigen A, B, both or neither, giving rise to the 4 possible blood groups of this system, A, B, AB or O respectively. The A allele encodes a glycosyltransferase that produces the antigen with the sugar N-acetylgalactosamine, the B allele to generate the sugar D-galactose, and the O allele for an enzyme with no function hence no sugar is expressed on the surface of the erythrocyte. Blood group O is the most common blood group worldwide, followed by blood group A. Group B is less common, and group AB is the least common. In contrast, Rh blood group antigens are proteins. A person's DNA contains the information to produce the protein antigens. The RhD gene codes for the D antigen, which is a large membrane protein. Some people have a version of the gene that does not express the D antigen on the cell surface and, therefore, the RhD protein is absent on their red blood cells. Hence, the two existing blood group types for the Rh system, Rh+ and Rh- respectively.",
        genes: "(1) ABORHD",
        bibliography: [
            "Dean L. Blood Groups and Red Cell Antigens. National Center for Biotechnology Information [May 2022].",
            "ABO blood group system. Encyclopedia Britannica, [May 2022]",
            "National Health Services. Blood Groups [May 2022]"
        ]
    },
    { 
        name: "C-reactive protein", 
        definition: "C-reactive protein is a protein commonly used to determine the degree of effectiveness of a treatment as it is linked to the immune system and participates in the defense system against infections. C-reactive protein (CRP) is a protein synthesized by the liver, the level of which increases in response to inflammation. CRP is an acute phase reactant protein that is mainly induced by the action of interleukin 6 on the gene responsible for CRP transcription during the acute phase of an inflammatory process. Although CRP is mainly synthesized in hepatic hepatocytes as mentioned above, it can also be synthesized in smooth muscle cells, macrophages, endothelial cells, lymphocytes and adipocytes. The name CRP arose because it was first identified as a substance in the serum of acutely inflamed patients that reacted with the antibody to the \"C\" carbohydrate of the pneumococcal capsule. CRP has both proinflammatory and anti-inflammatory properties. It plays a role in the recognition and elimination of foreign pathogens and damaged cells by binding to phosphocholine, phospholipids, histone, chromatin and fibronectin, enhancing macrophage phagocytosis and participating in innate immunity as a first defense system against infections. There are many factors that can alter initial CRP levels, such as age, sex, smoking, weight, lipid levels and blood pressure. CRP levels increase and decrease rapidly with the onset and removal of the inflammatory stimulus, respectively. Normal C-reactive protein levels increase within 6 hours and peak within 48 hours. Persistently elevated CRP levels may be seen in chronic inflammatory conditions, such as chronic infections or inflammatory arthritis, such as rheumatoid arthritis. Measuring and quantifying the level of C-Reactive Protein can be useful in determining the effectiveness of a treatment or knowing how advanced a disease or infection is.",
        variants: "13.5 million variants",
        loci: "91 loci",
        genes: "(94) ABO, ACKR1, ADAP1, ANK3, APOC1, etc.",
        bibliography: [
            "Sinnott-Armstrong N., Tanigawa Y., et al. Genetics of 35 blood and urine biomarkers in the UK Biobank. Nature Genetics, 18 Jan 2021, 53(2):185-194",
            "Nehring S.M., Goyal A., et al. C Reactive Protein. StatPearls",
            "Sproston N.R. et Ashworth J.J. Role of C-Reactive Protein at Sites of Inflammation and Infection. Front Immunol. 2018; 9: 754."
        ]
    },
    { 
        name: "Cathepsin D levels", 
        definition: "Cathepsin D is a lysosomal protease crucial for the degradation of both intracellular and extracellular proteins. This enzyme is essential for protein turnover, apoptosis and various cell signaling processes. Cathepsins are the major mammalian lysosomal proteases and are involved in tissue and bone remodeling, antigen processing and presentation, protein, hormone and neuropeptide processing, wound healing, apoptosis, and in the development and progression of diseases such as cancer, inflammation, atherosclerosis, rheumatoid arthritis, rheumatoid arthritis and other diseases.They are involved in tissue and bone remodeling, antigen processing and presentation, protein, hormone and neuropeptide processing, wound healing, apoptosis, and in the development and progression of diseases such as cancer, inflammation, atherosclerosis, rheumatoid arthritis and neurodegeneration. Cathepsin D is a most abundant lysosomal protease belonging to the aspartic family. It is predominantly found in the lysosomes of cells and plays a crucial role in the degradation of intracellular and extracellular proteins. It is synthesized in the rough endoplasmic reticulum as preprocatepsin D. It is then transformed into procathepsin D and targeted to intracellular vesicular structures such as lysosomes, endosomes and phagosomes. This enzyme is active at acidic pH, characteristic of the lysosomal environment, and is essential for cellular protein turnover, apoptosis, and various cell signaling processes. Normally, procathepsin D is found intracellularly, but under certain conditions it can be secreted, as has been found in milk, serum, sweat and urine in humans and other animals. It can be secreted by various cell types, including macrophages, keratinocytes, mammary epithelial cells and cancer cells. Cathepsin D levels are influenced by several factors. Genetically, polymorphisms and mutations in the CTSD gene can alter its expression and activity, affecting neurodegenerative diseases and cancer. Also, physiological and pathological states, such as neurodegenerative diseases and several types of cancer, show altered cathepsin D levels. Environmental factors such as diet, physical exercise and stress also play a role in the regulation of this enzyme. For example, a diet rich in antioxidants can protect against lysosomal damage and maintain adequate cathepsin D levels. Over the past three decades, cathepsin D has been studied mainly for its role in cancer development and as a possible independent tumor marker. This research has elucidated its physiological role and uncovered new functions, underscoring the importance of combining this knowledge to better understand the therapeutic and diagnostic potential of cathepsin D in human oncology.",
        variants: "13.5 million variants",
        loci: "12 loci",
        genes: "(7) CTSD, FGF21, GCKR, GNPTAB, IFITM10, KRTAP5-6, MAU2",
        bibliography: [
            "Folkersen L., Gustafsson S., et al. Genomic and drug target evaluation of 90 cardiovascular proteins in 30,931 individuals. Nature Metabolism, 16 Oct 2020, 2(10):1135-1148.",
            "Benes P., Vetvicka V., et al. CATHEPSIN D - MANY FUNCTIONS OF ONE ASPARTIC PROTEASE. Crit Rev Oncol Hematol. 2008 Oct; 68(1): 12-28.",
            "Mijanovik O., Petushkova A., et al. Cathepsin D-Managing the Delicate Balance. Pharmaceutics 2021, 13(6), 837."
        ]
    },
    { 
        name: "CCR5Delta32 and susceptibility to HIV infection", 
        definition: "CCR5 acts as an important co-receptor used by HIV for cellular entry into TCD4+ lymphocytes. The presence of a natural 32 base pair deletion in the CCR5 gene, known as CCR5Delta32, produces a truncated receptor that is not expressed on the surface of lymphocytes, thus preventing viral access and conferring resistance to infection. The HIV virus continues to be one of the major global public health problems involving 1.5 million newly diagnosed individuals in 2020, and a mortality of 680000 during the same year, despite improvements in transmission measures and knowledge of HIV biology. HIV invades and destroys TCD4+ (also called Th) lymphocytes and to a lesser extent other cells of the immune system. Over time the infection progresses to immune system failure, allowing opportunistic infections and life-threatening cancers to develop, in the form of the disease known as Acquired Immune Deficiency Syndrome (AIDS). To invade Th lymphocytes, HIV-1 (the most frequent) can employ the co-receptors CCR5, CXCR4, or both. However, the amount of CCR5 on the surface of CD4+ T cells is a key regulator of cellular unafectability, and a critical determinant of disease progression. CCR5 is a receptor for chemokines, molecules responsible for the attraction of other cell types to certain parts of the body, mainly involved in immune surveillance and inflammatory response. The expression of the CCR5 co-receptor on the cell surface can be prevented by a natural genetic variant consisting of a 32 base pair deletion. This variant generates a non-functional entry co-receptor for HIV that does not favor fusion between the virus and the target cell membrane, thus preventing infection and pathogenesis. Carriers of two copies (1% of Europeans) are highly protected from infection, although it is not complete, as rare cases of infection have been reported in these individuals. In the case of presenting a single copy of this variant, it seems to be associated with a reduced viral load, a slower rate of lymphocyte loss and thus a delayed progression to AIDS. In addition, they would show a better virological response to antiretroviral therapy. CCR5Delta32 is mainly observed in European populations (10%), especially in the north, such as Finland and Russia (16%), Iceland (15%), Sweden (14%), Denmark (13%), northern France (14%) or Norway (10%), while it has a lower incidence in the south and the Mediterranean, such as Spain (7%), Italy (5% 6%), Portugal (5.2%) or Sardinia (4%). It has also been observed in other populations of European descent related to migratory movements in South Africa (13%) or Chile (12%), as well as in African Americans, although with a low incidence (2%) and in some Jewish populations, especially Ashkenazi (11-20%). It is practically absent in sub-Saharan Africans, Asians and Native Americans.",
        genes: "(1) CCR5",
        bibliography: [
            "Jasinska AJ et al CCR5 as a Coreceptor for Human Immunodeficiency Virus and Simian Immunodeficiency Viruses: A Prototypic Love-Hate Affair. Front Immunol. 2022;13:835994.",
            "Ellwanger JH et al. Beyond HIV infection: Neglected and varied impacts of CCR5 and CCR5Delta32 on viral diseases. Virus Res. 2020;286:198040.",
            "Scheller SH et al. Biallelic, Selectable, Knock-in Targeting of CCR5 via CRISPR-Cas9 Mediated Homology Directed Repair Inhibits HIV-1 Replication. Front Immunol. 2022;13:821190.",
            "Matti C et al. CCR5 deficiency/CCR5?32: resistant to HIV infection at the cost of curtailed CD4 + T cell memory responses. EMBO J. 2020 Aug 3;39(15):e105854."
        ]
    },
    { 
        name: "Cognitive ability", 
        definition: "The study of genetic variants can help us understand the causes of differences in the cognitive functions of individuals that are determined by the environment but also have an important contribution from genetics. Educational attainment appears to be genetically influenced and was the main subject of the first GWAS (genome-wide association study) applied to the social sciences that looked for which genes might be related to such cognitive ability. Cognitive ability is fundamental to physical and mental well-being. Better cognitive function during youth is associated with a lower risk of psychiatric disorders and disease later in life. Conversely, there is evidence that some diseases can affect cognitive abilities in young people, thereby affecting their studies.",
        variants: "13.5 million variants",
        loci: "176 loci",
        genes: "(186) ABT1, ADAMTSL3, AFF3, ANAPC4, ARHGAP15, etc.",
        bibliography: [
            "Lee J.J., Wedow R., et al. Gene discovery and polygenic prediction from a genome-wide association study of educational attainment in 1.1 million individuals. Nature Genetics, 23 Jul 2018, 50(8):1112-1121."
        ]
    },
    { 
        name: "Corneal curvature", 
        definition: "The cornea is fundamental for vision, since its curvature directly influences light refraction and, therefore, visual quality. Alterations in this curvature can result in refractive errors such as myopia and hyperopia. Refractive errors are widespread in the world and one of the most affected populations is the Asian population. Corneal curvature refers to the shape and curvature of the cornea, the transparent, convex layer that covers the front of the eye and plays a crucial role in the refraction of light. It is a key aspect of the eye's vision, as the surface of the cornea provides approximately two-thirds of the eye's optical power. Changes in the curvature of the cornea can significantly affect refractive error, as occurs in myopia, where a steeper curvature is associated with a more negative or myopic refractive error. In an emmetropic eye (without vision problems), the refractive power of the optical components of the eye, including the curvature of the cornea, must be properly aligned with the axial length of the eye to avoid refractive errors such as myopia or hyperopia. Problems in the refractive ability of the eye are a common error worldwide, particularly in Asia, where uncorrected refractive error is a major cause of visual impairment and blindness. Measurement of corneal curvature can be performed by different specialized methods, although corneal topography is one of the most commonly used. This technique uses Placido rings or laser scanning systems to generate a detailed three-dimensional map of the corneal surface. The average curves of an emmetropic eye are between 42 and 45D.",
        variants: "13.5 million variants",
        loci: "39 loci",
        genes: "(37) ADAMTS20, ADAMTS3, ADAMTS7, BMP7, CHRND, etc.",
        bibliography: [
            "Fan Q, Pozarickij A, Tan NYQ, et al. Genome-wide association meta-analysis of corneal curvature identifies novel loci and shared genetic influences across axial length and refractive error. Commun Biol. 2020 Mar 19;3(1):133.",
            "Guggenheim JA, McMahon G, Kemp JP, et al. A genome-wide association study for corneal curvature identifies the platelet-derived growth factor receptor α gene as a quantitative trait locus for eye size in white Europeans. Mol Vis. 2013;19:243-53. Epub 2013 Jan 3."
        ]
    },
    { 
        name: "Corneal hysteresis", 
        definition: "Corneal hysteresis is a measure that assesses the ability of the cornea to absorb and release energy, reflecting its elasticity and viscosity. It is determined by observing how the cornea deforms under pressure and how it returns to its original shape. This parameter is crucial in the evaluation of ocular health, particularly in relation to glaucoma and its progression. Corneal hysteresis measures the ability of the cornea to absorb and dissipate energy, and varies among individuals. In healthy eyes, the average of this measurement is around 10.7 mmHg. With age, the cornea becomes stiffer and less flexible, which decreases corneal hysteresis. This change is due to changes in the structure of the corneal stroma, composed mainly of collagen. Corneal hysteresis is measured with a device that uses a blast of air to deform the cornea and then measures its recovery. This parameter provides valuable information for assessing the risk of glaucoma progression, since patients with glaucoma tend to have a lower corneal hysteresis. Corneal hysteresis has been related to progressive visual field loss, the presence and severity of glaucoma, as well as conversion to glaucoma. Although factors such as age and intraocular pressure may influence these measurements, corneal hysteresis remains a valuable tool for identifying those at increased risk of disease progression.",
        variants: "13.5 million variants",
        loci: "9 loci",
        genes: "(9) ABCA6, ADAMTS8, ANAPC1, FOXO1, MOCS2, MPDZ, TBX2, TCF4, ZNF469",
        bibliography: [
            "Murtagh P, O'Brien C. Corneal Hysteresis, Intraocular Pressure, and Progression of Glaucoma: Time for a \"Hyst-Oric\" Change in Clinical Practice? J Clin Med. 2022 May 20;11(10):2895.",
            "Simcoe MJ, Khawaja AP, Hysi PG, et al. Genome-wide association study of corneal biomechanical properties identifies over 200 loci providing insight into the genetic etiology of ocular diseases. Hum Mol Genet. 2020 Nov 4;29(18):3154-3164.",
            "Sit AJ, Chen TC, Takusagawa HL, et al. Corneal Hysteresis for the Diagnosis of Glaucoma and Assessment of Progression Risk: A Report by the American Academy of Ophthalmology. Ophthalmology. 2023 Apr;130(4):433-442."
        ]
    },
    { 
        name: "Dental caries and periodontitis", 
        definition: "Tooth decay and periodontitis are two common but distinct oral health problems that affect the teeth and gums. Both can have serious consequences if not treated properly. Dental caries is one of the most prevalent diseases worldwide. It is an oral disease that affects the teeth. It occurs when acids produced by bacteria in the mouth corrode the tooth enamel, the protective outer layer of the teeth. This change in the microbiota of the tooth causes an imbalance in the demineralization and remineralization of the tooth. Symptoms of caries can include tooth sensitivity, pain when chewing, visible discoloration of the teeth and the formation of holes in the teeth. Prevention of tooth decay involves good oral hygiene, including regular brushing and flossing, as well as a balanced diet low in sugar. It is also important to visit the dentist regularly for checkups and cleanings. Periodontal diseases, on the other hand, are a group of diseases, also of bacterial cause, in which, due to the state of dysbiosis under the gums leads to inflammation. It affects, in addition to the gums, the supporting structures of the teeth, such as the alveolar bone. Periodontitis usually begins with the accumulation of plaque and tartar in the gums. Over time, the bacteria provoke an inflammatory response from the body that damages the gums and the bone supporting the teeth. Symptoms of periodontitis can include red, swollen and bleeding gums, persistent bad breath, gum recession, tooth sensitivity and, in advanced stages, tooth mobility. Prevention of periodontitis also relies on good oral hygiene, including brushing, flossing and mouthwash. Regular dental visits are essential for early detection and treatment of gum disease. The development of caries and periodontitis involves, in addition to those mentioned above, a number of factors, some of which are shared by both conditions. Among them we can find smoking, oral bacteria, diet, oral hygiene, fluoride deficiency in teeth, lack of saliva, use of medications and genetics.",
        variants: "13.5 million variants",
        loci: "32 loci",
        genes: "(35) ALKAL2, AMY1, CBAHCC1, BTN3A2, CA12, etc.",
        bibliography: [
            "Shungin D, Haworth S, et al. Genome-wide analysis of dental caries and periodontitis combining clinical and self-reported data. Nature Communications, 24 Jun 2019, 10(1):2773.",
            "Robert D., Arezou R., et al. Dental caries are positively associated with periodontal disease severity. Clin Oral Investig. 2019 Oct;23(10):3811-3819. doi: 10.1007/s00784-019-02810-6. Epub 2019 Jan 28.",
            "Martínez M, Montero E, et al. Association between caries and periodontal diseases in a sample of employed adults in Spain: a cross-sectional study. Clinical Oral Investigations volume 25, pages3957-3966 (2021)."
        ]
    },
    { 
        name: "Duffy Antigen, malaria resistant", 
        definition: "The Duffy antigen consists of a glycoprotein on the surface of erythrocytes that acts as a key mediator for the access of the Plasmodium vivax parasite to the interior of red blood cells during its life cycle. Thus, individuals who do not carry this antigen would be resistant to the forms of malaria caused by this species. Malaria is an acute febrile illness caused by parasites of the Plasmodium genus, which are transmitted to humans through the bite of infected females of the Anopheles mosquito genus. The incidence has been established at around 60 cases per 1000 at-risk individuals annually, with a high mortality rate, especially among children, especially in resource-poor countries where the incidence is particularly high. There are five species of parasites that cause malaria in humans, of which the most dangerous are Plasmodium falciparum and vivax. Since the vector of transmission is a mosquito, it is usually restricted to tropical and subtropical areas where these insects thrive, however, while P falciparum is the most deadly malaria parasite and the most prevalent on the African continent.However, while P falciparum is the most deadly and most prevalent malaria parasite on the African continent, P vivax is the most widespread species outside Africa, accounting for 64% of cases in the Americas, more than 30% in Southeast Asia and 40% in the Eastern Mediterranean. At a particular stage of the parasite's life cycle, the parasite must be able to gain access to the interior of erythrocytes. The Duffy antigen receptor for chemokines (DARC), also known as Duffy antigen, is a glycosylated erythrocyte cell surface protein that acts as a receptor for various chemokines (molecules responsible for chemically attracting various cell types). Its exact function is unknown, but it seems to be involved in the regulation of chemokine bioavailability and, consequently, the recruitment of leukocytes in different tissues. However, it has been reported that the Duffy antigen plays an important role in malaria transmission by acting as an erythroid receptor for P vivax. Thus, its absence (typical of African ancestry for which the most relevant parasite species is P falciparum), makes erythrocytes resistant to invasion by the P vivax species of the parasite. However, it is important to consider that there are other parasite species that can trigger malaria so that people who do not have the Duffy antigen can still be infected by these other forms of malaria. In addition, it has been suggested that DARC binding to platelet factor 4 (PF4) is essential for platelet-mediated clearance of P falciparum parasites, so in cases of infection by this other species, its absence may trigger a negative effect, however, these associations are still under investigation.",
        genes: "(1) DARC",
        bibliography: [
            "World Health Organizatio (WHO) Paludism. [May 2022]",
            "Aldarweesh F. The Duffy Blood Group System. Human Blood Group Systems and Haemoglobinopathies. London: IntechOpen; 2019 [May 2022].",
            "Kaur H et al. Duffy antigen receptor for chemokines (DARC) and susceptibility to Plasmodium vivax malaria. Parasitol Int. 2019 Aug;71:73-75.",
            "Kano FS et al. Susceptibility to Plasmodium vivax malaria associated with DARC (Duffy antigen) polymorphisms is influenced by the time of exposure to malaria. Sci Rep. 2018 Sep 14;8(1):13851.",
            "Reich D et al. Reduced Neutrophil Count in People of African Descent Is Due To a Regulatory Variant in the Duffy Antigen Receptor for Chemokines Gene. PLoS Genet. 2009 Jan; 5(1): e1000360."
        ]
    },
    { 
        name: "Ear lobe type", 
        definition: "The separation of the earlobe from the skin of the head is a polygenic trait that is largely influenced by the genetic factor and the origin of the individual. The human pinna consists of a piece of cartilage covered with skin and attached to the skull by ligaments, muscles and fibrous tissue. This cartilage does not extend to the earlobe, which is mainly made up of areolar and adipose tissue. There is a large nonpathologic variation among humans in the shape and size of the pinna, and this variation has been reported to be influenced by age, sex, and ethnicity. The earlobe can be found either separate from the skin of the head or attached to the skin of the head. Earlobe attachment is a continuous feature: although most earlobes can be neatly classified as attached or unattached, they have features in between. If you want to learn more about how genetics influences who you are, visit the DNA traits test section.",
        genes: "(3) ADAMTS9-AS2, EDAR, ITGA8",
        bibliography: [
            "Shaffer JR, Li J, Lee MK, Roosenboom J, Orlova E, Adhikari K, et al. Multiethnic GWAS Reveals Polygenic Architecture of Earlobe Attachment. Am J Hum Genet, 2017; 101(6):913–24.",
            "Adhikari K, Reales G, Smith AJP, Konka E, Palmen J, Quinto-Sanchez M, et al. A genome-wide association study identifies multiple loci for variation in human ear morphology. Nat Commun, 2015; 6(1):7500."
        ]
    },
    { 
        name: "Menarche", 
        definition: "The heritability of menopausal age is estimated to range from 30-85%, indicating a significant genetic component in this complex trait in which multiple genes may be involved. Menopause is the time in a woman's life when her menstrual cycles cease and her body undergoes changes that will no longer allow her to become pregnant. This is a natural event that generally occurs between the ages of 40 and 60, and is most common between the ages of 45 and 50. If the last menstrual cycle occurs before the age of 40, it is considered premature. The first thing that happens is that menstrual periods begin to change, and may occur more or less frequently. This situation can last from one to three years. Menopause is complete when there has been no period for a year, which is called postmenopause. Population studies indicate that factors that may affect the age at which women have their final menstrual cycle are: smoking, age at menarche (first menstrual cycle), parity or total number of pregnancies, use of oral contraceptives, body mass index, ethnicity, socio-cultural factors, diet, physical exercise and family history.",
        genes: "(1) MCM8",
        bibliography: [
            "Murray A, et al. Common Genetic Variants Are Significant Risk Factors for Early Menopause: Results From the Breakthrough Generations Study. Hum Mol Genet. 2011; Jan 1;20(1):186-92."
        ]
    },
    { 
        name: "Earwax type / Armpit odor", 
        definition: "The intensity of axillary odor and the type of cerumen that people have are interrelated traits, since they share elements between them, such as their transporter in the membranes of the cells where these traits are manifested. Cerumen is a normal secretion of the ceruminous and sebaceous glands of the outer third of the external auditory canal. It is composed of glycopeptides, lipids, hyaluronic acid, sialic acid, lysosomal enzymes and immunoglobulins. Earwax exerts a protective effect by maintaining an acidic environment (pH 5.2 to 7.0) in the ear canal, while lubricating the canal, protecting the ear from infection and providing a barrier against insects and water. Earwax is usually expelled from the ear canal spontaneously through the natural movement of the jaw. Two types of cerumen occur in humans: the wet type, with brownish, sticky cerumen, and the dry type, with absent or reduced ceruminous secretion. The wet type is completely dominant to the dry type, and is very common in populations of European and African origin (~95% and ~100%, respectively). In contrast, the dry type is frequently observed in East Asian populations, with the prevalence of wet cerumen being ~15% in Japan, ~5% in Korea, and ~10% among the Chinese. An association between axillary odor and wet-type cerumen was first identified approximately 70 years ago. Since then, attempts have been made to establish associations between the two traits by studying the regulators of each trait. It is in the apocrine and/or eccrine glands of the human body where odor is produced, especially the axillary and pubic apocrine glands.",
        genes: "(1) ABCC11",
        bibliography: [
            "Yoshiura K, Kinoshita A, Ishida T, Ninokata A, Ishikawa T, Kaname T, et al. A SNP in the ABCC11 gene is the determinant of human earwax type. Nat Genet, 2006; 38(3):324–30.",
            "Prokop-Prigge KA, Mansfield CJ, Parker MR, Thaler E, Grice EA, Wysocki CJ, et al. Ethnic/racial and genetic influences on cerumen odorant profiles. J Chem Ecol, 2015; 41(1):67–74.",
            "Ohashi J, Naka I, Tsuchiya N. The Impact of Natural Selection on an ABCC11 SNP Determining Earwax Type. Mol Biol Evol, 2011; 28(1):849–57.",
            "Martin A, Saathoff M, Kuhn F, Max H, Terstegen L, Natsch A. A functional ABCC11 allele is essential in the biochemical formation of human axillary odor. J Invest Dermatol, 2010; 130(2):529–40.",
            "Harker M, Carvell A-M, Marti VPJ, Riazanskaia S, Kelso H, Taylor D, et al. Functional characterisation of a SNP in the ABCC11 allele - effects on axillary skin metabolism, odour generation and associated behaviours. J Dermatol Sci, 2014; 73(3):23–30."
        ]
    },
    { 
        name: "Eosinophil count", 
        definition: "Eosinophils are white blood cells that fight parasitic infections and modulate allergic/inflammatory responses. Elevated counts (eosinophilia) occur with allergies, asthma, autoimmune disease and parasitic infections. Low counts accompany acute bacterial infections or certain medications. Genetics influences baseline levels.",
        variants: "13.5 million variants",
        loci: "763 loci",
        genes: "(736) BAHCC1, BAK1, BANK1, BATF, BAX, etc.",
        bibliography: [
            "Vuckovic D., Bao E.L., et al. The Polygenic and Monogenic Basis of Blood Traits and Diseases. Cell, 01 Sep 2020, 182(5):1214-1231.e11",
            "Sunadome H, Matsumoto H, et al. Correlation between eosinophil count, its genetic background and body mass index: The Nagahama Study. Allergol Int. 2020 Jan;69(1):46-52.",
            "Höglund J, Hadizadeh F, et al. Gene-Based Variant Analysis of Whole-Exome Sequencing in Relation to Eosinophil Count. Front Immunol. 2022; 13: 862255."
        ]
    },
    { 
        name: "Epigenetic aging", 
        definition: "Epigenetic age acceleration occurs when biological age (measured by DNA methylation) advances faster than chronological age. This reflects cellular aging and associates with increased mortality risk and age‑related diseases. The epigenetic clock measures biological age using methylation patterns.",
        variants: "13.5 million variants",
        loci: "25 loci",
        genes: "(24) AKIRIN1, C1orf112, CD34, CSPG5, CYRIA, etc.",
        bibliography: [
            "McCartney DL, Min JL, Richmond RC, et al. Genome-wide association studies identify 137 genetic loci for DNA methylation biomarkers of aging. Genome Biol. 2021 Jun 29;22(1):194.",
            "National Institute on Aging (NIA) [March 2021]."
        ]
    },
    { 
        name: "Estradiol levels", 
        definition: "Estradiol is the most potent estrogen, primarily synthesized in ovaries from estrone or testosterone aromatization. It regulates menstrual cycles, secondary sex characteristics, bone metabolism and cardiovascular protection. Levels vary by age, sex and menstrual phase; high levels may increase thrombosis/breast cancer risk.",
        variants: "13.5 million variants",
        loci: "13 loci",
        genes: "(11) ABO, CABLES1, CYP19A1, CYP3A7, FKBP4, etc.",
        bibliography: [
            "Hariri L, Rehman A. Estradiol. 2023 Jun 28. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-.",
            "Schmitz D, Ek WE, Berggren E, et al. Genome-wide Association Study of Estradiol Levels and the Causal Effect of Estradiol on Bone Mineral Density. J Clin Endocrinol Metab. 2021 Oct 21;106(11):e4471-e4486."
        ]
    },
    { 
        name: "Eye clarity", 
        definition: "Eye color is determined by melanin abundance and distribution in the iris. Brown eyes have more eumelanin; light eyes have less melanin with relatively more pheomelanin. Color varies by population (brown most common globally, greater diversity in Europe). Eye color may change with age and associates with some diseases.",
        variants: "13.5 million variants",
        loci: "52 loci",
        genes: "(49) ADRB2, AHRR, AP3M2, BTG1, CCDC13, etc.",
        bibliography: [
            "Simcoe M, et al. Genome-wide association study in almost 195,000 individuals identifies 50 previously unidentified genetic loci for eye color. Sci Adv. 2021 Mar 10;7(11):eabd1239.",
            "Mitchell R, Rochtchina E, Lee A, Wang JJ, Mitchell P; Blue Mountains Eye Study. Iris color and intraocular pressure: the Blue Mountains Eye Study. Am J Ophthalmol. 2003 Mar;135(3):384-6.",
            "Frank RN, Puklin JE, Stock C, Canter LA. Race, iris color, and age-related macular degeneration. Trans Am Ophthalmol Soc. 2000;98:109-117."
        ]
    },
    { 
        name: "Facial aging", 
        definition: "Skin aging involves intrinsic factors (hormone decline, DNA damage) and extrinsic factors (UV radiation contributes 80%). UV‑induced photoaging causes epidermal/dermal changes, wrinkles and laxity. Skin structure depends on extracellular matrix integrity, collagen/elastin content and hydration. Aging reduces barrier function and repair capacity.",
        variants: "13.5 million variants",
        loci: "55 loci",
        genes: "(54) AKAP1, AKAP12, ARAP2, ARL15, AXIN2,etc.",
        bibliography: [
            "UK BIOBANK Jan 2012",
            "Le Clerk S., Taing L., et al. A genome-wide association study in Caucasian women points out a putative role of the STXBP5L gene in facial photoaging. The Journal of Investigative Dermatology, 06 Dec 2012, 133(4):929-935.",
            "Zargarán D., Zoller F., et al. Facial skin aging: Key concepts and overview of processes. Int J Cosmet Sci. 2022 Aug; 44(4): 414-420."
        ]
    },
    { 
        name: "Frequency of bowel movements", 
        definition: "Bowel frequency reflects gastrointestinal motility and varies with diet, activity and health. Normal range is 3 times per week to 3 times per day. Deviations may indicate GI disorders, dysmotility or altered microbiota. Monitoring frequency aids in managing constipation, diarrhea and IBS.",
        variants: "13.5 million variants",
        loci: "14 loci",
        genes: "(14) BDNF, CALCB, CDK18, DMC1, KIF4B, etc.",
        bibliography: [
            "Bonfiglio F, Liu X, Smillie C, et al GWAS of stool frequency provides insights into gastrointestinal motility and irritable bowel syndrome. Cell Genom. 2021 Dec 8;1(3):None.",
            "Walter SA, Kjellström L, Nyhlin H, et al. Assessment of normal bowel habits in the general adult population: the Popcol study. Scand J Gastroenterol. 2010 May;45(5):556-66."
        ]
    },
    { 
        name: "Gamma glutamyl transferase levels", 
        definition: "GGT is a liver enzyme involved in glutathione metabolism and amino acid transport. Elevated levels indicate liver damage, biliary obstruction, alcohol abuse or metabolic conditions (obesity, diabetes, NAFLD). GGT is influenced by genetics, medications and lifestyle factors.",
        variants: "13.5 million variants",
        loci: "556 loci",
        genes: "(525) A1CF, A3GALT2, ABCA9, ABCB11, ABCC2, etc."
    },
    { 
        name: "Gene COMT", 
        definition: "COMT encodes catechol‑O‑methyltransferase, which regulates dopamine, adrenaline and noradrenaline bioavailability. The Val158Met variant produces a less stable enzyme with reduced activity, affecting mood, cognition, stress response and pain perception.",
        genes: "(1) COMT",
        bibliography: [
            "Chen J, Song J, Yuan P, et al. Orientation and cellular distribution of membrane-bound catechol-O-methyltransferase in cortical neurons: implications for drug development. J Biol Chem. 2011 Oct 7;286(40):34752-60.",
            "Morris KA, Grace SA, Woods W, et al. The influence of COMT rs4680 on functional connectivity in healthy adults: A systematic review. Eur J Neurosci. 2020 Oct;52(8):3851-3878.",
            "Munafò MR, Johnstone EC, Guo B, et al. Association of COMT Val108/158Met genotype with smoking cessation. Pharmacogenet Genomics. 2008 Feb;18(2):121-8.",
            "Serrano JM, Banks JB, Fagan TJ, et al.The influence of Val158Met COMT on physiological stress responsivity. Stress. 2019 Mar;22(2):276-279.",
            "Smith SB, Reenilä I, Männistö PT, et al. Epistasis between polymorphisms in COMT, ESR1, and GCH1 influences COMT enzyme activity and pain. Pain. 2014 Nov;155(11):2390-9"
        ]
    },
    { 
        name: "Gene MTHFR", 
        definition: "MTHFR encodes methylenetetrahydrofolate reductase, a key enzyme in folate metabolism that converts dietary folate to the circulating form used in homocysteine‑to‑methionine conversion. Common variants C677T and A1298C reduce enzyme activity and are associated with various conditions, though clinical impact remains controversial.",
        genes: "(1) MTHFR",
        bibliography: [
            "MTHFR genetic testing: Controversy and clinical implications. Australian Journal for General Practitioners 2016; 45(4):237-240.",
            "Wan L et al. Methylenetetrahydrofolate reductase and psychiatric diseases. Transl Psychiatry 2018; 8, 242.",
            "Leclerc D et al. Molecular Biology of Methylenetetrahydrofolate Reductase (MTHFR) and Overview of Mutations/Polymorphisms. Madame Curie Bioscience Database [May 2022].",
            "Liu F et al. 5,10-methylenetetrahydrofolate reductase C677T gene polymorphism and peripheral arterial disease: a meta-analysis. Vascular. 2020:1708538120982698.",
            "Osadnik T et al. Genetic and environmental factors associated with homocysteine concentrations in a population of healthy young adults. Analysis of the MAGNETIC study. Nutr Metab Cardiovasc Dis. 2020;30(6):939-947."
        ]
    },
    { 
        name: "Gene MTR", 
        definition: "MTR encodes methionine synthase, catalyzing the final step in methionine biosynthesis from homocysteine. Folate deficiency increases neural tube defect risk; folic acid supplementation reduces NTDs by 70%. Elevated homocysteine is a stroke risk marker linked to B‑vitamin deficiency.",
        genes: "(1) MTR",
        bibliography: [
            "Jumper J, Evans R, Pritzel A, et al. Highly accurate protein structure prediction with AlphaFold. Nature. 2021 Aug;596(7873):583-589. doi: 10.1038/s41586-021-03819-2.",
            "Kluijtmans LA, Young IS, Boreham CA, et al. Genetic and nutritional factors contributing to hyperhomocysteinemia in young adults. Blood. 2003 Apr 1;101(7):2483-8.",
            "Ouyang S, Li Y, Liu Z, et al. Association between MTR A2756G and MTRR A66G polymorphisms and maternal risk for neural tube defects: a meta-analysis. Gene. 2013 Feb 25;515(2):308-12.",
            "van Meurs JB, Pare G, Schwartz SM, et al. Common genetic loci influencing plasma homocysteine concentrations and their effect on risk of coronary artery disease. Am J Clin Nutr. 2013 Sep;98(3):668-76."
        ]
    },
    { 
        name: "Gene MTRR", 
        definition: "MTRR encodes methionine synthase reductase, which activates MTR enzyme in the folate cycle. MTRR variants reduce enzyme activity and increase homocysteine levels, predisposing to cardiovascular disease, neural tube defects and other homocysteine‑related conditions.",
        genes: "(1) MTRR",
        bibliography: [
            "Fredriksen A, Meyer K, Ueland PM, et al.Large-scale population-based metabolic phenotyping of thirteen genetic polymorphisms related to one-carbon metabolism. Hum Mutat. 2007 Sep;28(9):856-65.",
            "Li D, Zhao Q, Zhang C, et al.Associations of MTRR A66G polymorphism and promoter methylation with ischemic stroke in patients with hyperhomocysteinemia. J Gene Med. 2020 May;22(5):e3170.",
            "Olteanu H, Munson T, Banerjee R. Differences in the efficiency of reductive activation of methionine synthase and exogenous electron acceptors between the common polymorphic variants of human methionine synthase reductase. Biochemistry. 2002 Nov 12;41(45):13378-85.",
            "Rossokha Z, Fishchuk L, Vorobei L, et al. Hyperhomocysteinemia in men and women of married couples with reproductive disorders. What is the difference? Syst Biol Reprod Med. 2023 Feb;69(1):75-85.",
            "Wang J, Ouyang N, Qu L, et al. Effect of MTHFR A1298C and MTRR A66G Genetic Mutations on Homocysteine Levels in the Chinese Population: A Systematic Review and Meta-analysis. J Transl Int Med. 2017 Dec 29;5(4):220-229."
        ]
    },
    { 
        name: "Hair color", 
        definition: "Hair color is determined by melanin amount and distribution. Eumelanin produces dark shades; pheomelanin produces light/reddish shades. Melanocytes manufacture pigment transferred to keratinocytes. Color varies by population (dark most common globally, greater diversity in Europe). Hair grays with age due to declining melanin production.",
        variants: "13.5 million variants",
        loci: "121 loci",
        genes: "(124) AKAP1, AKAP12, ANXA3, AP3M2, AREG,etc.",
        bibliography: [
            "Morgan MD, Pairo-Castineira E, Rawlik K, et al. Genome-wide study of hair colour in UK Biobank explains most of the SNP heritability. Nature Communications. 2018 Dec;9(1):5271.",
            "National Library of Medicine (NIH). Is hair color determined by genetics? [Jun 2020]"
        ]
    },
    { 
        name: "Hair texture", 
        definition: "Hair shape reflects fiber structure and protein composition. Straight hair is fine and oily; wavy hair is thicker with variable frizz; curly hair is springy when dry; kinky hair is very thick and compact. Shape varies by ethnicity and changes with age as sebaceous glands shrink.",
        variants: "13.5 million variants",
        loci: "9 loci",
        genes: "(9) CALCOCO1, ERRFI1, FRAS1, GATA3, KRTAP2-3, PADI3, PTK6, TGFA, WNT10A",
        bibliography: [
            "Cloete E et al. Systems Approach to Human Hair Fibers: Interdependence Between Physical, Mechanical, Biochemical and Geometric Properties of Natural Healthy Hair. Front Physiol. 2019; 10:112.",
            "Thibaut S et al. Chronological ageing of human hair keratin fibres. Int J Cosm Sci 2010; 32, 422-434.",
            "Loussouarn G et al. Diversity in human hair growth, diameter, colour and shape. An in vivo study on young adults from 24 different ethnic groups observed in the five continents. Eur J Dermatol 2016; 26(2): 144-54.",
            "Liu F al. Meta-analysis of genome-wide association studies identifies 8 novel loci involved in shape variation of human head hair. Human Molecular Genetics, 01 Feb 2018, 27(3):559-575."
        ]
    },
    { 
        name: "Heat production in response to cold", 
        definition: "Thermogenesis maintains body temperature (36-37°C) through brown adipose tissue (BAT) activation via β3-adrenergic receptors. BAT generates heat through fatty acid oxidation and high mitochondrial content. Cold exposure, diet and supplements can induce thermogenesis, which inversely correlates with obesity rates.",
        genes: "(2) ADRB2, ADRB3",
        bibliography: [
            "Levine JA, Eberhardt NL, et al. Role of nonexercise activity thermogenesis in resistance to fat gain in humans. Science. 1999 Jan 8;283(5399):212-4.",
            "Ishida Y, Matsushita M, et al. Genetic evidence for involvement of β2-adrenergic receptor in brown adipose tissue thermogenesis in humans. International Journal of Obesity.",
            "Oomen JM, van Rossum CTM, et al. β2-Adrenergic Receptor Polymorphisms and Salbutamol-Stimulated Energy Expenditure. The Journal of Clinical Endocrinology & Metabolism, Volume 90, Issue 4, 1 April 2005, Pages 2301–2307.",
            "Reguero M, Gómez de Cedrón M, et al. Precision Nutrition to Activate Thermogenesis as a Complementary Approach to Target Obesity and Associated-Metabolic-Disorders. Cancers (Basel). 2021 Feb; 13(4): 866.",
            "Kiani AK, Medori MC, et al. Clinical assessment for diet prescription. J Prev Med Hyg. 2022 Oct 17;63(2 Suppl 3):E102-E124.",
            "Ricquier D. Fundamental mechanisms of thermogenesis. Comptes Rendus. Biologies, Volume 329 (2006) no. 8, pp. 578-586."
        ]
    },
    { 
        name: "Height", 
        definition: "Height is a complex trait with ~80% genetic contribution. Average ranges: women 1.50-1.70m, men 1.62-1.83m. Northern Europeans are tallest globally. Height is influenced by genetics, nutrition, disease and maternal diet during pregnancy. Aging causes slight height reduction due to disc atrophy and osteoporosis.",
        variants: "13.5 million variants",
        loci: "1357 loci",
        genes: "(276) A3GALT2, AAMDC, ABCA9, ABCB4, ABCB5, etc.",
        bibliography: [
            "UK Biobank Database. Standing height, Data-Field 50 [Version Feb-2022]",
            "National Library of Medicine (NIH). Is height determined by genetics? [Jun 2020]",
            "Grunauer M, Jorge AAL. Genetic short stature. Growth Horm IGF Res. 2018 Feb;38:29-33",
            "Jelenkovic A, et al. Genetic and environmental influences on height from infancy to early adulthood: An individual-based pooled analysis of 45 twin cohorts. Sci Rep. 2016 Jun 23;6:28496."
        ]
    },
    { 
        name: "HLA-B27 antigen", 
        definition: "HLA-B27 is a class I MHC protein encoded on chromosome 6 that presents antigens to cytotoxic T cells. It's common in Europeans and associated with spondyloarthropathies including ankylosing spondylitis (prevalence 0.23% in Europeans). Early detection enables preventive measures and earlier treatment.",
        genes: "(1) MICA-AS1",
        bibliography: [
            "Bowness P. HLA-B27. Annu Rev Immunol. 2015;33:29-48.",
            "Evans DM, et al. Interaction between ERAP1 and HLA-B27 in ankylosing spondylitis implicates peptide handling in the mechanism for HLA-B27 in disease susceptibility. Nat Genet. 2011;43(8):761-7.",
            "Jang HS, Proos A, Koe L, Anderson J, Fulton R, Fernando SL. High accuracy of HLA-B*27 genotyping by allele-specific real-time polymerase chain reaction in a heterogeneous population compared to flow cytometry and single nucleotide polymorphism detection assays. Pathology. 2020;52(2):256-261."
        ]
    },
    { 
        name: "Insomnia", 
        definition: "Insomnia is a chronic sleep disorder affecting ~1/3 of the population, characterized by difficulty falling/staying asleep despite conducive environment. Sleep disturbances must occur ≥3 times/week for ≥1 month and cause daytime functional impairment. Risk factors include female sex, stress, age >60, comorbidities and irregular sleep schedule.",
        variants: "13.5 million variants",
        loci: "242 loci",
        genes: "(215) ACVR2A, ADAMTS20, ADARB1, ADO, AMFR, etc.",
        bibliography: [
            "Jansen PR, Watanabe K, Stringer S, et al. Genome-wide analysis of insomnia in 1,331,010 individuals identifies new risk loci and functional pathways. Nat Genet. 2019 Mar;51(3):394-403.",
            "Mayo Clinic [October 2016].",
            "Roth T. Insomnia: definition, prevalence, etiology, and consequences. J Clin Sleep Med. 2007 Aug 15;3(5 Suppl):S7-10."
        ]
    },
    { 
        name: "Intensity of itching due to mosquito bites", 
        definition: "Mosquito bite reactions involve histamine release and IgE-mediated responses causing immediate wheals and delayed itching. Reaction intensity varies genetically and decreases with repeated exposure. Mosquitoes are attracted to CO2, blood group O, body odors and floral scents. Beer consumption may increase attractiveness.",
        variants: "13.5 million variants",
        loci: "30 loci",
        genes: "(32) ACTL9, BBS12, CSF2R, BETS1, FASLG, etc.",
        bibliography: [
            "Jones AV, Tilley M, Gutteridge A, et al. GWAS of self-reported mosquito bite size, itch intensity and attractiveness to mosquitoes implicates immune-related predisposition loci. Human Molecular Genetics. 2017 Apr;26(7):1391-1406.",
            "Vander Does A, Labib A, Yosipovitch G. Update on mosquito bite reaction: Itch and hypersensitivity, pathophysiology, prevention, and treatment. Front Immunol. 2022 Sep 21;13:1024559.",
            "Mosquito bites. Mayo Clinic [Oct. 2022]."
        ]
    },
    { 
        name: "Left-handedness (left lateral)", 
        definition: "Left-handedness is the preference for using primarily the left hand to perform everyday activities, such as writing, eating, or throwing an object. Left handedness is less common than right handedness and has been linked to certain neuropsychiatric traits such as schizophrenia and bipolar disorder. Left-handed people have a definite preference for using the left hand over the right, and this can be seen from early stages of development, even in utero, when the embryo begins to move only one arm. Constant use of one hand throughout life can cause changes in bone and bone density. In addition, it has been observed that left laterality is related to language lateralization in the brain, that is, the side that plays a major role in language. Its connection with some neuropsychiatric traits, such as schizophrenia and bipolar disorder, has also been investigated. Genetic influence may play a crucial role in explaining the differences in language processing, spatial skills and emotions between left- and right-handers. However, the exact etiology of this trait is not yet fully understood, although it has been shown to be highly polygenic. In addition to genetic influence, left laterality can also be explained by environmental factors that could affect from prenatal stages. However, the precise effects of such environmental factors are not yet fully known. The worldwide prevalence of left-handedness is about 10%, and it is also higher in males than in females. The problem with the study of left-handedness is that non-right-handed people have historically been forced to use their right hand for everyday tasks, which has led to some left-handed or ambidextrous people becoming right-handed due to this imposition. This has caused the rate of forced right-handedness to vary between cultures and, although it has decreased in recent decades, it may have affected the accuracy of left-handed prevalence statistics.",
        variants: "13.5 million variants",
        loci: "36 loci",
        genes: "(38) ABT1, ANKS1B, ATP1B1, ATXN2L, BCR, etc.",
        bibliography: [
            "de Kovel CGF, Carrión-Castillo A, Francks C. A large-scale population study of early life factors influencing left-handedness. Sci Rep. 2019 Jan 24;9(1):584.",
            "Cuellar-Partida G, Tung JY, Eriksson N. Genome-wide association study identifies 48 common genetic variants associated with handedness. Nat Hum Behav. 2021 Jan;5(1):59-70.",
            "Jing SS. Hand Dominance: Nature, Nurture, and Relevance for Hand Surgeons. J Hand Microsurg. 2020 Jun 22;14(1):111-112. German."
        ]
    },
    { 
        name: "Liver iron levels", 
        definition: "The liver is one of the main storage sites for iron, an essential element for life, although its overload is toxic. Excessive iron content in the liver has been linked to various liver and metabolic diseases such as hereditary hemochromatosis. Iron is an essential mineral for multiple biological functions, including oxygen transport in hemoglobin and enzymatic activity. The liver is one of the main storage organs for this mineral, however, excessive accumulation of this mineral at the hepatic level can have severe consequences. Hepatic iron overload refers to the abnormal and excessive accumulation of iron within hepatocytes, Kupffer cells, or both, mainly in the form of ferritin particles and hemosiderin aggregates. Although the body regulates the intestinal absorption of iron, it has no effective mechanism to regulate its elimination, which can lead to systemic iron overload if there is a sustained increased supply. When ferritin storage capacity is exceeded, free iron accumulates in the cells of the affected organ, forming insoluble hemosiderin aggregates that can trigger cellular damage and progressive organ dysfunction. This condition is not only associated not only with serious liver diseases such as cirrhosis and hepatocellular carcinoma, but also with metabolic disorders such as type 2 diabetes, arterial hypertension, ovarian ovarian syndrome, and other metabolic disorders.This condition is not only associated with serious liver diseases such as cirrhosis and hepatocellular carcinoma, but also with metabolic disorders such as type 2 diabetes, arterial hypertension, polycystic ovary syndrome and dismetabolic iron overload syndrome (DIOS), which affects a significant proportion of the general population.",
        variants: "13.5 million variants",
        loci: "10 loci",
        genes: "(10) ASNSD1, BTN1A1, BTN3A1, BTN3A2, H2BC4, etc.",
        bibliography: [
            "Liu Y, Basty N, Whitcher B, et al. Genetic architecture of 11 organ traits derived from abdominal MRI using deep learning. Elife. 2021 Jun 15;10:e65554.",
            "Wilman HR, Parisinos CA, Atabaki-Pasdar N, et al. Genetic studies of abdominal MRI data identify genes regulating hepcidin as major determinants of liver iron concentration. J Hepatol. 2019 Sep;71(3):594-602."
        ]
    },
    { 
        name: "Lymphocyte count", 
        definition: "Lymphocyte count is a vital indicator of a person's immune health, influenced by infections, nutritional status, stress and medical treatments. Genetics also plays a key role in lymphocyte regulation, with genetic variants that can predispose to various health conditions. The lymphocyte count is a key measure of a person's immune system, as lymphocytes are a type of white blood cell that is essential for the body's defense against infection and disease. Lymphocytes are divided into three main types: T cells, B cells and NK (natural killer) cells. Each of these types has a specific role in the identification and elimination of pathogens, as well as in immunological memory, which protects the body against future infections by the same agents. An adequate lymphocyte count is essential for maintaining immune homeostasis and the body's ability to respond to infectious and malignant threats. Lymphocyte counts can be influenced by a variety of factors. These include infections, which can temporarily increase or decrease the number of lymphocytes in the blood. Viral infections, for example, often cause an increase in the lymphocyte count as the body's immune response. On the other hand, autoimmune diseases, such as systemic lupus erythematosus, can decrease the number of lymphocytes. Other factors include nutritional status, since deficiencies in essential vitamins and minerals can compromise lymphocyte production and function. Stress also has a significant impact; chronic stress can suppress immune function and reduce lymphocyte counts. In addition, medical treatments such as chemotherapy and radiation therapy, which are used to fight cancer, can have a devastating effect on lymphocyte counts due to their destructive nature on rapidly dividing cells, including cells of the immune system. Genetics may also play an important role in regulating lymphocyte counts. Genetic variants may influence the production, development and function of these white blood cells.",
        variants: "13.5 million variants",
        loci: "811 loci",
        genes: "(1376) A2ML1, AANAT, ABCA2, ABCC1, ABCC5, etc.",
        bibliography: [
            "Vuckovic D., Bao E.L., et al. The Polygenic and Monogenic Basis of Blood Traits and Diseases. Cell, 01 Sep 2020, 182(5):1214-1231.e11.",
            "Hall M.A., Ahmadi K.R., et al. Genetic influence on peripheral blood T lymphocyte levels. Genes Immun. 2000 Oct;1(7):423-7.",
            "Lin B.D., Willemsen G., et al. Heritability and GWAS Studies for Monocyte-Lymphocyte RatioTwin Res Hum Genet . 2017 Apr;20(2):97-107"
        ]
    },
    { 
        name: "Male baldness", 
        definition: "Male baldness related to genes and male sex hormones affects almost 80% of men under the age of 70 and may influence their self-esteem. Recently, however, it has also been suggested that it may be related to other androgen-related conditions. This type of baldness is also known as male, androgenetic or androgenic alopecia. Androgens affect various skin functions, such as sebaceous gland growth and differentiation, hair growth, epidermal barrier and wound healing, mainly through a multistep signaling pathway. Although human hair growth is also affected by thyroid hormones and glucocorticoids, androgens are the most important regulators as they can stimulate, leave unaltered or inhibit hair growth depending on the body site. Androgens can increase the size of hair follicles in androgen-dependent areas (beard, axillary hair and pubic hair) but, in turn, in the scalp follicles of susceptible men, they suppress hair growth and promote miniaturization and hair shortening. Since the follicles are exposed to the same circulating hormones, this differential response would be the result of variations in androgen gene expression in different areas of the body, generally regulated at different mediators depending on the part of the body where the hair grows. Each hair strand lies in a corresponding hair cavity in the skin called a follicle. In general, in the balding process the hair follicle shrinks over time, producing shorter and thinner hair, until it finally fails to form a new hair. However, the follicle remains viable, indicating that it would be possible for hair to grow back. A circular area usually appears at the back of the head known as the crown of the head that gradually becomes thinner and increases in size over time. Eventually, the hair becomes thinner, finer and shorter and creates a horseshoe-shaped pattern of hair around the sides of the head and a bald area at the back of the head. Additionally, through the same androgenic link, male alopecia appears to have been linked to prostate cancer risk and its early onset has been postulated as a strong predictor of early onset of severe coronary heart disease and metabolic syndrome.",
        variants: "13.5 million variants",
        loci: "358 loci",
        genes: "(414) ACTBL2, ACTL7B, ADAMTS18, ADAMTS9, AFF3, etc.",
        bibliography: [
            "Lolli F et al. Endocrine. 2017 Jul;57(1):9-17.",
            "A.D.A.M. HealthCare. Male pattern baldness [May 2022]",
            "Male baldness. Australian Journal for General Practitioners 2016; 45 (4):186-188.",
            "Yap CX et al. Dissection of genetic variation and evidence for pleiotropy in male pattern baldness. Nature Communications, 20 Dec 2018, 9(1):5407."
        ]
    },

    { 
        name: "Mental agility", 
        definition: "In logical reasoning, the ideas or sequence of facts are developed coherently and without contradiction. Logical ability is the ability that allows us to think and reason quickly when faced with a problem, without prior information and experience. Its measurement can be very useful in assessing a person's psychological abilities. Intelligence is a somewhat abstract mental capacity that can be studied in different ways. Throughout history, several models have been created to try to explain this trait. Logic is a formal science that studies a part of the structure or form of human thought that includes processes such as demonstration, inference and deduction. It is an extremely ancient discipline, dating back to the Ancient Ages. Throughout history it has been considered a branch of philosophy, but the important methodological and knowledge change that took place during the 20th century has led to the distinction between other types of logic, such as mathematics and computational logic. Logical ability enables a person to adapt to and deal with new situations in an agile way, without previous learning, experience or acquired knowledge being a determining factor in its manifestation. It includes the ability to analyse, reason, identify, solve and extrapolate concepts. It is influenced by the maturational process, reaching its peak early, around adolescence, and deteriorating with age. It is a fundamental ability in scientific, mathematical and technical fields. Logical ability is influenced by genetics and other variables such as neurophysiology (e.g. the development of neural connections). Also, growing up as a child in a nurturing environment favours the development of neural connections in the regions of the brain associated with memory, learning and spatial orientation. Being able to assess logical ability helps to obtain information about a person's capacities and can even be very useful in certain diagnoses. In addition to age, there are other factors that can diminish this ability, such as accidents, pathologies or drug use, among others.",
        variants: "13.5 million variants",
        loci: "50 loci",
        genes: "(46) AFF3, AMIGO1, ANAPC4, ARHGAP15, ARNT, etc.",
        bibliography: [
            "UK Biobank Database. Fluid intelligence score, Data-Field 20016 [Version Jan-2022]",
            "Kent P. Fluid intelligence: A brief history. Appl Neuropsychol Child. 2017 Jul-Sep;6(3):193-203. doi: 10.1080/21622965.2017.1317480. Epub 2017 May 16. PMID: 28506124.",
            "Cochrane A, Simmering V, Green CS. Fluid intelligence is related to capacity in memory as well as attention: Evidence from middle childhood and adulthood. PLoS One. 2019;14(8):e0221353. Published 2019 Aug 22."
        ]
    },
    { 
        name: "Metabolizer profile CYP2C19", 
        definition: "Cytochrome CYP2C19 is an enzyme of the hepatic cytochrome P450 family, whose main function is the metabolism of xenobiotics. Its substrates include multiple drugs, such as antidepressants and proton pump inhibitors, among others, so variants in this gene impact the metabolism of many common drugs. CYP P450 is a superfamily of enzymes involved in enzymatic oxidation of steroids, fatty acids, xenobiotics and other biosynthetic pathways. These enzymes convert xenobiotics into water-soluble derivatives to facilitate their excretion. They are mainly found in the liver, but can be found in other tissues. Cytochrome CYP2C19 is a key enzyme that regulates the bioavailability of catecholamines (e.g. adrenaline, noradrenaline and dopamine), which are essential molecules for physiological functions such as mood, cognition, stress management and pain perception. The Val158Met variant produces a less stable COMT enzyme with reduced activity, thus affecting various neurological and physiological functions.",
        genes: "(1) CYP2C19",
        bibliography: [
            "Akasaka T, et al. CYP2C19 variants and epoxyeicosatrienoic acids in patients with microvascular angina. Int J Cardiol Heart Vasc. 2017 Apr 12;15:15-20.",
            "Elfaki I, Mir R, Almutairi FM, Duhier FMA. Cytochrome P450: Polymorphisms and Roles in Cancer, Diabetes and Atherosclerosis. Asian Pac J Cancer Prev. 2018 Aug 24;19(8):2057-2070.",
            "Lima JJ, Thomas CD, Barbarino J, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for CYP2C19 and Proton Pump Inhibitor Dosing. Clin Pharmacol Ther. 2021 Jun;109(6):1417-1423.",
            "Bousman CA, Stevenson JM, Ramsey LB, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for CYP2D6, CYP2C19, CYP2B6, SLC6A4, and HTR2A Genotypes and Serotonin Reuptake Inhibitor Antidepressants. Clin Pharmacol Ther. 2023 Jul;114(1):51-68.",
            "Pharmacogenomics Knowledgebase (PharmGKB). Gene-specific Information Tables for CYP2C19."
        ]
    },
    { 
        name: "Metabolizer profile CYP2C9", 
        definition: "Cytochrome CYP2C9 is an enzyme of the hepatic cytochrome P450 family, whose main function is the metabolism of xenobiotics. Its substrates include multiple widely used anti-inflammatory drugs, so variants in this gene impact the metabolism of many common drugs. CYP P450 is a superfamily of enzymes involved in enzymatic oxidation of steroids, fatty acids, xenobiotics and other biosynthetic pathways. These enzymes convert xenobiotics into water-soluble derivatives to facilitate their excretion. CYP2C9 are mainly found in the liver, but can be found in other tissues such as duodenum or small intestine. Cytochrome CYP2C9 is a member of this enzyme family and, together with CYP2C19, can account for up to 20% of its total activity. It is involved in the metabolism of a multitude of xenobiotics including commonly prescribed drugs such as non-steroidal anti-inflammatory drugs (ibuprofen, diclofenac, celecoxib), antiepileptics (such as phenytoin) or anticoagulants (such as warfarin), among many others. In addition to the above, CYP2C9 is also involved in the biotransformation of other xenobiotics such as environmental and industrial pollutants, although in a much less significant way. Like other enzymes of the same family, CYP2C9 is also involved in the biosynthesis of melatonin, cholesterol, steroids and other lipids. This gene is highly polymorphic and loss or decrease of function alleles can be found, which influences not only the ability to metabolize the drugs described above, but also the risk of possible adverse effects. It is important to bear in mind that, independently of the effects on the activity that the different genotypes may have, there are multiple drugs and foods (such as St. John's wort or soy) that can act as inhibitors or inducers and that significantly affect their function. This is important, above all, in polytherapy because it can condition the therapeutic effect and the presence of side effects of drugs metabolized by CYP2C9.",
        genes: "(1) CYP2C9",
        bibliography: [
            "Rendic S, Guengerich FP. Contributions of human enzymes in carcinogen metabolism. Chem Res Toxicol. 2012 Jul 16;25(7):1316-83.",
            "Katherine N et al. Clinical Pharmacogenetics Implementation Consortium Guideline (CPIC) for CYP2C9 and Nonsteroidal Anti-Inflammatory Drugs. Clinical Pharmacology & TherapeuticsVolume 108, Issue 2.",
            "Pharmacogenomics Knowledgebase (PharmGKB). Gene-specific Information Tables for CYP2C9.",
            "Elfaki I, Mir R, Almutairi FM, Duhier FMA. Cytochrome P450: Polymorphisms and Roles in Cancer, Diabetes and Atherosclerosis. Asian Pac J Cancer Prev. 2018 Aug 24;19(8):2057-2070."
        ]
    },
    { 
        name: "Metabolizer profile CYP2D6", 
        definition: "Cytochrome CYP2D6 is an enzyme of the hepatic cytochrome P450 family, whose main function is the metabolism of xenobiotics. This CYP is responsible for the metabolism of 25% of drugs, including tricyclic antidepressants, opioids or beta-blockers, among many others. Therefore, the presence of variants in this gene impacts the ability to metabolize multiple compounds. CYP P450 is a superfamily of enzymes involved in enzymatic oxidation of steroids, fatty acids, xenobiotics and other biosynthetic pathways. These enzymes convert xenobiotics into water-soluble derivatives to facilitate their excretion. CYP2D6 is mainly found in the liver, but is also present in the central nervous system, including the substantia nigra. CYP2D6 is involved in the metabolism of multiple widely used drugs such as antidepressants (amitriptyline, doxepin, imipramine, fluoxetine, paroxetine, mirtazapine etc.), opioids (codeine, tramadol, oxycodone, etc.), antipsychotics (haloperidol, risperidone, etc.), beta-blockers (metoprolol, propranolol, etc.) or tamoxifen, among many others. In addition to the exogenous substances described above, CYP2D6 also plays an important role in the metabolism of endogenous substances such as tryptamines, a family of molecules involved in various brain functions.involved in various brain functions such as perception or cognition, neurosteroids and tyramine, which it uses as a substrate for the synthesis of dopamine, one of the most important neurotransmitters. It is important to bear in mind that, independently of the effects on activity that the different genotypes may have, there are multiple compounds that can act as inhibitors or inducers and that significantly affect their function. This is important, above all, in polytherapy because it can condition the therapeutic effect and the presence of side effects of drugs metabolized by CYP2D6.",
        genes: "(1) CYP2D6",
        bibliography: [
            "Rendic S, Guengerich FP. Contributions of human enzymes in carcinogen metabolism. Chem Res Toxicol. 2012 Jul 16;25(7):1316-83.",
            "Bousman CA et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for CYP2D6, CYP2C19, CYP2B6, SLC6A4, and HTR2A Genotypes and Serotonin Reuptake Inhibitor Antidepressants.",
            "Elfaki I, Mir R, Almutairi FM, Duhier FMA. Cytochrome P450: Polymorphisms and Roles in Cancer, Diabetes and Atherosclerosis. Asian Pac J Cancer Prev. 2018 Aug 24;19(8):2057-2070."
        ]
    },
    { 
        name: "Metabolizer profile CYP3A5", 
        definition: "Cytochrome CYP3A5 is an enzyme of the hepatic cytochrome P450 family, whose main function is the metabolism of xenobiotics. This CYP is responsible for the oxidative metabolism of multiple drugs and is involved in the metabolism of cholesterol, steroids and other lipids. CYP P450 is a superfamily of enzymes involved in enzymatic oxidation of steroids, fatty acids, xenobiotics and other biosynthetic pathways. These enzymes convert xenobiotics into water-soluble derivatives to facilitate their excretion. CYP3A5 is mainly found in the liver and prostate, but can also be found in the intestine, bile duct or nasal mucosa. CYP3A5 is involved in the metabolism of multiple drugs including tacrolimus, cyclosporine, sirolimus, midazolam, vincristine and some statins. The physiological function of this cytochrome is still unknown. The activity of this cytochrome can vary markedly between individuals, influenced by the presence of inducers or inhibitors, diseases and by the presence of certain genetic polymorphisms, the latter being the main reason for the variability. CYP3A5 is a polymorphic gene with different alleles whose frequency varies between populations, being very frequent the presence of loss-of-function alleles that decrease its metabolizing capacity. The strongest evidence of the clinical impact of genetic variations relates to tacrolimus metabolism and has been shown to play a key role in the immunosuppressive treatment of transplant recipients.It is important to bear in mind that, independently of the genetic profile of the individual, the genetic profile of the patient should be determined in order to ensure correct therapeutic monitoring and dose adjustment. It is important to bear in mind that, independently of the effects on activity that the different genotypes may have, there are multiple compounds that can act as inhibitors or inducers and that significantly affect their function. This is important, above all, in polytherapy because it can condition the therapeutic effect and the presence of side effects of drugs metabolized by CYP3A5.",
        genes: "(1) CYP3A5",
        bibliography: [
            "Rendic S, Guengerich FP. Contributions of human enzymes in carcinogen metabolism. Chem Res Toxicol. 2012 Jul 16;25(7):1316-83.",
            "Birdwell KA et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guidelines for CYP3A5 Genotype and Tacrolimus Dosing. Clin Pharmacol Ther. 2015 Jul;98(1):19-24.",
            "Pharmacogenomics Knowledgebase (PharmGKB). Gene-specific Information Tables for CYP3A5.",
            "Elfaki I, Mir R, Almutairi FM, Duhier FMA. Cytochrome P450: Polymorphisms and Roles in Cancer, Diabetes and Atherosclerosis. Asian Pac J Cancer Prev. 2018 Aug 24;19(8):2057-2070.",
            "Rodriguez-Antona C. PharmVar GeneFocus: CYP3A5. Clin Pharmacol Ther. 2022 Dec;112(6):1159-1171."
        ]
    },
    { 
        name: "Monocyte count", 
        definition: "Monocyte counts are crucial to the health of the immune system, as these white blood cells fight infection and maintain immune balance. Genetic and environmental factors such as infections, inflammatory diseases and stress can influence their levels. The monocyte count in the blood is a crucial indicator of the health of the immune system. Monocytes are a type of white blood cell that play a vital role in defending against infection, eliminating dead cells and maintaining balance in the immune system. These cells can differentiate into macrophages and dendritic cells, which are essential for the innate and adaptive immune response. An adequate monocyte count is vital for the body's response to pathogens and for the resolution of inflammation. Monocyte counts can be affected by a variety of factors, including infectious states, chronic inflammatory diseases, stress, physical exercise, and the use of certain medications. During an infection, the body may increase monocyte production to fight pathogens. Inflammatory diseases, such as rheumatoid arthritis and inflammatory bowel disease, can also alter monocyte levels. In addition, stress and intense exercise can cause temporary fluctuations in monocyte counts due to the release of stress hormones such as cortisol, which influences monocyte mobilization and production.",
        variants: "13.5 million variants",
        loci: "375 loci",
        genes: "(440) ABCE1, ABO, ACKR1, ACTRT2, ACVR2A, etc.",
        bibliography: [
            "Vuckovic D., Bao E.L., et al. The Polygenic and Monogenic Basis of Blood Traits and Diseases. Cell, 01 Sep 2020, 182(5):1214-1231.e11.",
            "Patel A.A. et Yona S. Inherited and Environmental Factors Influence Human Monocyte Heterogeneity. Front Immunol. 2019; 10: 2581.",
            "Crosslin D.R., McDavid A., et al. Genetic variation associated with circulating monocyte count in the eMERGE Network. Hum Mol Genet. 2013 May 15; 22(10): 2119-2127."
        ]
    },
    { 
        name: "Morning circadian rhythm (Morning person)", 
        definition: "Being a morning person is related to waking up early and having more energy during the morning and is a trait that has sometimes been linked to mood, productivity and overall health. Circadian rhythms are fundamental cyclical processes that occur in most living organisms, including humans. These daily cycles affect a wide range of molecular and behavioral processes, such as hormone levels, core body temperature, and sleep-wake patterns. Chronotype describes an individual`s propensity to go to sleep earlier or later, and is a manifestation produced due to internal circadian cycles and the need for sleep, driven by sleep homeostasis. There is significant natural variation among the human population with respect to sleep, and the chronotype is often divided between morning individuals (or \"larks\"), who prefer to go to bed and rise earlier; evening individuals (or \"owls\"), who prefer to go to bed later and get up later; and intermediates, who fall between the two extremes. Age and sex, as well as ambient light levels, among other environmental factors, affect the variability of this trait, but genetic variation is also an important factor. Numerous studies have studied circadian rhythm disturbances, sleep and being an early riser or late riser and their effects on health and have identified that these traits are related to the development of some diseases.These traits have been identified as being related to the development of some diseases, especially metabolic and psychiatric disorders, although the conclusions that can be drawn from these are still limited and subject to the need for further research in the future.",
        variants: "13.5 million variants",
        loci: "470 loci",
        genes: "(89) ADSLA, KAIN1, ALG10, ALG10B, ALKBH3,etc.",
        bibliography: [
            "Jones S.E., Lane J.M., et al. Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms. Nature Communications, 29 Jan 2019, 10(1):343.",
            "Roenneberg T., Kuehnle T., et al. Epidemiology of the human circadian clock. Sleep Medicine Reviews, 01 Nov 2007, 11(6):429-438",
            "Skarke C., Lahens N.F. et al. A Pilot Characterization of the Human Chronobiome. Scientific Reports, 07 Dec 2017, 7(1):17141."
        ]
    },
    { 
        name: "Mouth ulcers", 
        definition: "Mouth ulcers are a common disorder whose incidence decreases with age and can have multiple causes, some of which are still unknown. They are often painful and can make eating and speaking difficult. Oral ulceration is the most common ulcerative condition in humans, affecting up to 25% of young adults. Mouth ulcers become less common with age and the causes of their development may vary with time and age. Many causes of mouth ulcers are recognized, including mucosal trauma and a number of autoimmune and inflammatory conditions. For example, mouth ulcers are common in patients with ulcerative colitis and Crohn`s disease or systemic lupus erythematosus, as well as can develop without being attributed to any type of disease. Some other factors that have been associated with this pathology include vitamin or hematinic deficiencies, chemicals such as sodium lauryl sulfate, mechanical trauma, stress and anxiety, or bacterial or viral infections. Immune regulation is also believed to play a key role in their occurrence, as susceptible individuals experience focal infiltration of the oral mucosa by monocytes and T lymphocytes deep to the basement membrane, followed by loss of the superficial mucosa and a proliferative phase of scarring. Mouth ulcers usually heal on their own within one to two weeks. However, in some cases, they may be persistent or recur frequently. Treatment may include mouth rinses with antiseptic or analgesic solutions, as well as the application of topical creams or gels to relieve pain.",
        variants: "13.5 million variants",
        loci: "37 loci",
        genes: "(37) CCDC8, CCR2, CEBPB, CRB1, CYP21A2, etc.",
        bibliography: [
            "Dudding T., Haworth S., et al. Genome wide analysis for mouth ulcers identifies associations at immune regulatory loci. Nature Communications, 05 Mar 2019, 10(1):1052.",
            "Tabolli S., Bergamo F., et al. Quality of life and psychological problems of patients with oral mucosal disease in dermatological practice. Dermatology (Basel, Switzerland), 28 Jan 2009, 218(4):314-320.",
            "Minhas S., Sajjad A., et al. Oral Ulcers Presentation in Systemic Diseases: An Update. Open Access Maced J Med Sci. 2019 Oct 15; 7(19): 3341-3347."
        ]
    },
    { 
        name: "Nasion prominence", 
        definition: "Facial morphology is one of the most complex and variable features of each individual that determine part of the physical identity of the face. Part of this physical identity is determined by the degree of prominence of the nasion, the bony fusion point of the nasal bones and the frontal bone of each person. The interindividual variation of facial shape is one of the most remarkable among humans that confers their identity, and the morphogenesis and modeling of the face is one of the most complex events of embryogenesis in humans and mammals in general. This stems from the wide spectrum of subtle variations in facial and neighboring tissues that characterize facial appearance in the human population, and supports the high incidence of congenital craniofacial anomalies described to date. One of the key points of facial variability consists of the prominence, or outward protrusion, of the nasion. This structure is the point of intersection of the frontal bone and two nasal bones of the human skull and consists of the deepest point on the face between the eyebrows, just above the bridge of the nose. The morphological variability in this region is represented by the degree of prominence of this point towards the facial exterior, which is different in each individual.",
        genes: "(1) PAX3",
        bibliography: [
            "Liu F et al. A genome-wide association study identifies five loci influencing facial morphology in Europeans. Gibson G, editor. PLoS Genet, 2012; 8(9): e1002932.",
            "Paternoster L et al. Genome-wide association study of three-dimensional facial morphology identifies a variant in PAX3 associated with nasion position. Am J Hum Genet, 2012; 90(3):478–85."
        ]
    },
    { 
        name: "Neuroticisms", 
        definition: "Neuroticism is one of the main personality traits referring to a person`s tendency to experience negative emotions, such as anxiety, sadness, irritability and worry. Since its introduction in the 1960s, the definition of the term neuroticism has undergone various conceptualizations. In general, it refers to the relatively stable tendency to view the world and one`s own life negatively and to respond with negative emotions to threatening experiences, frustration or loss. Despite the difficulty in conceptualizing neuroticism, there seems to be a consensus that the main characteristic would be the tendency to experience negative emotions. These negative emotions have included irritability, fear, sadness, anxiety, worry, hostility, alterations in self-awareness, and feelings of vulnerability and uncontrollability. People with a high level of neuroticism tend to be more likely to experience negative emotions intensely and more frequently compared to those with a low level of neuroticism. They may be more susceptible to stress, anxiety and depression. In addition, they may have a greater emotional reaction to challenges and adverse situations in everyday life. On the other hand, people with low neuroticism tend to be more emotionally stable, are more resistant to stress, and tend to maintain a calmer and more optimistic attitude even in the face of difficult situations. It is important to note that neuroticism is not considered intrinsically negative. All personality traits, including neuroticism, exist on a spectrum and may have advantages in certain situations. For example, people with a moderate level of neuroticism may be aware of potential problems and take steps to address them. However, when neuroticism is at extremely high levels, it can interfere with a person`s quality of life and daily functioning. Neuroticism is influenced by a combination of genetic, biological, environmental and life experience factors. Among the biological factors we can find that differences in the activity of the limbic system and the amygdala, areas of the brain related to emotions, can influence neurotic tendencies. In turn, traumatic events, family difficulties, bullying, cultural values or social norms, among others, may contribute to the development of emotional and cognitive patterns associated with neuroticism.",
        variants: "13.5 million variants",
        loci: "85 loci",
        genes: "(81) ACVR2A, AGBL1, ARNTL, ARPP21, BBX, etc.",
        bibliography: [
            "García A.M., Sánchez-Meca J., et al. Neuroticism and suicidal thoughts: a meta-analytic study. Rev. Esp. Salud Publica vol.92 Madrid 2018 Epub 16-Aug-2018",
            "Widiger T.A. et Oltmanns J.R. Neuroticism is a fundamental domain of personality with enormous public health implications. World Psychiatry. 2017 Jun; 16(2): 144-145.",
            "Luciano M., Hagenaars S.P., et al. Association analysis in over 329,000 individuals identifies 116 independent variants influencing neuroticism. Nature Genetics, 18 Dec 2017, 50(1):6-11."
        ]
    },
    { 
        name: "Neutrophil count", 
        definition: "The neutrophil count is a crucial indicator of immune health and the body's ability to fight infection. This count depends on a variety of factors, including age, gender, health status, and medication. Neutrophil count is a crucial measure in assessing an individual's immune health. Neutrophils are a type of white blood cell and form the body's first line of defense against bacterial and fungal infections. Their primary role is to phagocytize and destroy pathogens, releasing enzymes and antimicrobial compounds that help control and eliminate infections. An adequate neutrophil count is essential to maintain the body's ability to respond to infections and prevent disease. A low count, known as neutropenia, may predispose to recurrent and serious infections, while an elevated count, known as neutrophilia, may indicate an acute inflammatory or infectious response, or be a sign of conditions such as leukemia. Several factors can influence a person's neutrophil count. Among physiological factors, age and gender play an important role; neutrophil counts can vary between different age groups and between men and women. Infections and inflammatory responses are also determining factors; during an acute or chronic infection, the body produces more neutrophils to fight pathogens. Underlying medical conditions, such as autoimmune disorders, cancer and bone marrow diseases, can also affect neutrophil counts. In addition, certain medications, especially chemotherapeutics and immunosuppressants, can lower neutrophil counts, while corticosteroids can increase neutrophil counts.",
        variants: "13.5 million variants",
        loci: "636 loci",
        genes: "(464) AAMP, ABCA7, ABCC5, ABL1, ABO, etc.",
        bibliography: [
            "Vuckovic D., Bao E.L., et al. The Polygenic and Monogenic Basis of Blood Traits and Diseases. Cell, 01 Sep 2020, 182(5):1214-1231.e11.",
            "Skokowa J., Dale D.C., et al. Severe congenital neutropenias. Nat Rev Dis Primers. 2017 Jun 8; 3: 17032."
        ]
    },
    { 
        name: "Nicotine dependence after prolonged consumption", 
        definition: "Smoking remains the leading cause of preventable death worldwide. It consists of a multistage process, for which nicotine dependence is the limiting phase of smoking cessation, characterized by a compulsive desire to smoke and loss of control over consumption despite the consequences. Nicotine dependence is defined as an adaptation to repeated nicotine exposure manifested by compulsive use, the development of tolerance, the experience of withdrawal symptoms upon cessation of nicotine use, and the inability to quit despite the harmful effects. Nicotine dependence develops as the person maintains nicotine use, most often as cigarettes, but also others such as chewing tobacco or pipes, including the use of electronic cigarettes. Nicotine is a parasympathetic stimulant that binds to nicotinic acetylcholine receptors in the brain and activates them leading to the release of dopamine and other neurotransmitters such as norepinephrine, acetylcholine, serotonin, GABA, or endorphins. In addition, repeated exposure to nicotine increases the number of nicotinic receptors implying higher consumption to achieve the same effects, which is known as tolerance. Chronic activation of nicotinic acetylcholine receptors can induce changes in brain physiology, resulting from stimulation of brain regions associated with reward, pleasure and anxiety, altering the normal functioning of these circuits. Thus, when these receptors are not occupied, withdrawal symptoms such as cravings, irritability, anxiety, depression, impatience, sleep problems, restlessness, hunger, or difficulty concentrating are triggered. In addition, there are other changes that occur as dependence develops, since cigarette smoking is psychologically linked to certain moods and social contexts. According to the World Health Organization, it has been shown that greater nicotine dependence is associated with less motivation to quit smoking, difficulty in trying to quit and failure in the attempt, as well as smoking the first cigarette earlier in the day and smoking more cigarettes per day. Additionally, it has been established that there is a higher frequency of nicotine dependence in people with anxiety disorders due to the existing psychosocial link.",
        variants: "13.5 million variants",
        loci: "6 loci",
        genes: "(6) CHRNA4, CHRNB3, CYP2A6, FAM163B, GNAI1, HYKK.",
        bibliography: [
            "Wittenberg RE et al. Nicotinic acetylcholine receptors and nicotine addiction: A brief introduction. Neuropharmacology 2020;177:108256.",
            "Mayo Clinic. Nicotine dependence. [May 2022]",
            "National Institute on Drug abuse. Tobacco, Nicotine, and E-Cigarettes Research Report [May 2022]",
            "Quach BC et al. Expanding the genetic architecture of nicotine dependence and its shared genetics with multiple traits. Nature Communications, 03 Nov 2020, 11(1):556"
        ]
    },
    { 
        name: "Permanent tooth eruption", 
        definition: "Dental maturation is the process that includes the loss of primary teeth and the eruption and calcification of permanent teeth. This process of tooth replacement begins in infancy and ends practically at the onset of puberty and can be influenced by numerous variables that determine both the time elapsed and the tooth structure. The human species has twenty primary teeth (also known as deciduous) and thirty-two permanent teeth. The dental lamina is a structure originating in the oral epithelium during the embryonic period that indicates the location of the future dentition. The permanent dental primordia or germs are observed during development between 10 and 13 weeks of gestation and the permanent teeth will develop from an extension of the dental lamina, called the successional lamina. Tooth eruption occurs in three phases, an initial phase in which only the primary teeth are visible, a second phase of mixed dentition in which primary and permanent teeth coexist, and the last phase in which, after the last deciduous tooth falls out, the dentition is permanent or permanent. The eruption of the permanent dentition begins at six years of age with the first molar, without any exfoliation of the primary tooth, which means that it can go unnoticed. This is the beginning of the first phase of mixed dentition, which will end when all the incisors and the first permanent molars appear. As puberty approaches, the eruption of the remaining teeth in the lateral sectors takes place, initiating the second phase of mixed dentition, with great individual variations, influenced hormonally and with a generalized advancement in girls from 6 to 12 months with respect to boys. Other factors such as nutrition, caries or trauma to the primary teeth and ethnicity can also influence dental maturity.",
        genes: "(3) ADKC, CACNA1S, LOC101928278.",
        bibliography: [
            "Geller F et al. Genome-Wide Association Study Identifies Four Loci Associated with Eruption of Permanent Teeth. PLoS Genet. 2011;7(9):e1002275.",
            "WebMD. Dental Health and your children's teeth [May 2022]",
            "Kurosaka H et al. Development of dentition: From initiation to occlusion and related diseases. J Oral Biosci. 2022 Jun;64(2):159-164."
        ]
    },
    { 
        name: "Persistence of fetal hemoglobin", 
        definition: "It has been demonstrated that the persistence of fetal hemoglobin has a marked hereditary character. There are several studies that relate certain genetic polymorphisms or variants with the persistence of fetal hemoglobin in adults and its possible implication in the improvement of symptoms of different types of anemia. Fetal hemoglobin is the main oxygen transport protein to all parts of the body in the human fetus during the last seven months of development in utero and in the newborn until about 6 months of age, by which time virtually all of it has been replaced by adult hemoglobin. Only about 1% of total adult hemoglobin is fetal hemoglobin. Functionally, fetal hemoglobin differs from adult hemoglobin in that it is able to bind oxygen with greater affinity, giving the developing fetus better access to oxygen from the mother's bloodstream. Structurally, fetal hemoglobin is a protein made up of four globins: two alpha-globins and two gamma-globins. During development there is a change in gene expression that causes the gene that produces gamma-globin to stop being expressed and activates the expression of the beta-globin gene, so that adults have hemoglobin that is mostly made up of two alpha-globins and two beta-globins. The transcriptional change of the gene from gamma to beta-globin is commonly referred to as the \"fetal to adult hemoglobin switch\". In some individuals the rate of fetal hemoglobin production does not decrease over the years, possibly due to the presence of variants in the BCL11A gene, a gene that acts as a molecular switch in the transition from fetal hemoglobin to adult hemoglobin.",
        genes: "(1) BCL11A",
        bibliography: [
            "Bauer DE, Orkin SH. Hemoglobin switching's surprise: the versatile transcription factor BCL11A is a master repressor of fetal hemoglobin. Curr Opin Genet Dev. 2015 Aug;33:62-70.",
            "Uda M, Galanello R, Sanna S, Lettre G, Sankaran VG, Chen W, et al. Genome-wide association study shows BCL11A associated with persistent fetal hemoglobin and amelioration of the phenotype of beta-thalassemia. Proc Natl Acad Sci U S A [Internet]. 2008 Feb 5 [cited 2014 Sep 28];105(5):1620–5.",
            "Liu N, Hargreaves VV, Zhu Q, Kurland JV, Hong J, Kim W, Sher F, et al. Direct Promoter Repression by BCL11A Controls the Fetal to Adult Hemoglobin Switch. Cell. 2018 Apr 5;173(2):430-442.e1"
        ]
    },
    { 
        name: "Photic sneeze reflex", 
        definition: "The explanation why some people tend to sneeze when exposed to bright light remains an enigma. There are indications that certain variants may increase vulnerability to this particular trait. The \"photic sneeze reflex\" is a characteristic of some people who tend to sneeze when they move from relative darkness to bright light, often sunlight (e.g., when exiting a tunnel). Once the eyes have adapted to the brightness the sneezing stops. This condition occurs in about one in four Caucasians and is thought to have a hereditary component. The exact cause of this reflex and whether it has any physiological relevance is unknown, but it is thought to be due to an electrical process in which light stimulates several nerves involved in the sneeze reflex.",
        genes: "(1) 2q22.3",
        bibliography: [
            "Eriksson N, Macpherson JM, Tung JY, Hon LS, Naughton B, Saxonov S, et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010;6(6):1–20.",
            "Wang M, Sun X, Shi Y, Song X, Mi H. A genome-wide association study on photic sneeze reflex in the Chinese population. Sci Rep. 2019 Mar 21;9(1):4993."
        ]
    },
    { 
        name: "Pigmented rings on the iris", 
        definition: "The iris is the colored part of the eye that surrounds the pupil. As with fingerprints, iris color patterns are very complex and unique to each individual. The color of the iris is genetically determined and is a consequence of the amount and proportion of melanins. Its main function is to control the amount of light entering the eye through the pupil. A person's iris can tell a lot about him or her. Like the fingerprint, pigmentation patterns are complex and unique. Because of this, in some countries iris recognition is used as a personal identifier. In addition to the overall iris color, pigment distribution appears to be genetically determined as well. The peripupillary ring or pigment ring is the change in iris color in the area closest to the pupil, usually darker, and is particularly characteristic of green and light eyes. Studies to date have shown that, like eye color, the presence of the pigment ring is genetically determined. If you want to learn more about how genetics influences who you are, visit the DNA traits test section.",
        genes: "(1) LOC105370627",
        bibliography: [
            "Larsson M, et al. GWAS findings for human iris patterns: associations with variants in genes that influence normal neuronal pattern development. Am J Hum Genet. 2011 Aug 12;89(2):334-43.",
            "Mackey DA, Wilkinson CH, Kearns LS, Hewitt AW. Classification of iris colour: review and refinement of a classification schema. Clin Exp Ophthalmol. 2011 Jul;39(5):462-71."
        ]
    },
    { 
        name: "Probability of having red hair", 
        definition: "Red hair color is the result of the combination of two types of melanin pigments in specific amounts, which ultimately determines the characteristic orange color. In addition, this characteristic production of melanin pigments can also determine the color of the skin or even the eyes together. Red hair coloration is due to the production of pheomelanin and very little eumelanin. Pheomelanin consists of a photosensitive pigment that gives it a red or light maroon-pink color, giving rise to the characteristic orange hair color. Eumelanin, on the other hand, is a dark brown or black pigment, so its low concentration results in light blond hair, and thus the red hair color is hidden when a higher amount of eumelanin is present. Additionally, the color of the hair can vary throughout life, especially with age as melanin production decreases over time, and is conditioned by environmental factors such as sun exposure. The presence of red hair occurs in Caucasian populations and is generally associated with lighter skin pigmentation and the presence of freckles, although this is not necessarily always the case. It is also usually related to green, hazel and amber eye color, due to the presence of pheomelanin. The highest frequency of redheads is found in northwestern Europe, for example, in Scotland, 13% percent of the population has red hair followed in frequency by Ireland. In the Rif region of Morocco and Kazan (Russia) it is also characteristic due to European migrations and the isolation of these population groups, although nowadays, also due to migrations, redheads can be found all over the European continent, the United States, Australia etc.",
        genes: "(1) MC1R",
        bibliography: [
            "Liu F et al. Colorful DNA polymorphisms in humans. Semin Cell Dev Biol. 2013;24(6-7):562-75.",
            "Ito S et al. Diversity of human hair pigmentation as studied by chemical analysis of eumelanin and pheomelanin. J Eur Acad Dermatol Venereol. 2011;25(12):1369-80.",
            "Eriksson N et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010;6(6):1–20.",
            "Han J et al. A genome-wide association study identifies novel alleles associated with hair color and skin pigmentation. PLoS Genet. 2008;4(5).",
            "Sulem P et al. Two newly identified genetic determinants of pigmentation in Europeans. Nat Genet. 2008;40(7):835–7.p>"
        ]
    },
    { 
        name: "Probability of snoring", 
        definition: "Snoring is a loud, vibrating noise that occurs during sleep due to a partial blockage in the upper airway. In some cases, snoring may be a sign of a more serious breathing disorder, such as sleep apnea. Snoring is a loud, raspy, hoarse breathing sound that occurs during sleep. This sound is the result of the vibration of the upper airway structures as air moves in and out as you breathe. Although it is a common experience in most people, sporadically, it can become a chronic problem and, in certain circumstances, may be an indication of more significant health disorders. This phenomenon occurs in the nasopharynx and affects a significant percentage of the population, being more frequent in men (57%) than in women (40%). Moreover, the prevalence increases with age. However, the perception of snoring and its response are subjective, which makes estimates of its prevalence variable. When snoring is persistent and of high intensity, it can cause sleep difficulties for both the snorer and his or her bed partner, and can sometimes be a sign of sleep apnea. Additional symptoms include daytime anxiety, risk of depression, frequent awakenings, morning headache, nighttime gasping or choking, fatigue, and excessive daytime sleepiness. The non-genetic risk factors that predispose to the appearance of this trait are the following: ● Overweight or obesity. ● Tobacco and alcohol consumption. ● Advanced age. ● Abnormal structures that block the flow of air: deviation of the nasal septum, congested nose due to cold or allergies, soft palate, inflammation of the tonsils or nasal polyps. ● Poor muscle tone. ● Postmenopausal state. Addressing this feature involves considering lifestyle changes, such as weight loss, avoiding alcohol and tobacco use, and a preference for sleeping with the head elevated or in lateral decubitus. There are also medical and surgical options available to attenuate snoring, although their necessity and effectiveness vary from individual to individual.",
        variants: "13.5 million variants",
        loci: "37 loci",
        genes: "(38) ANAPC4, AOPEP, BCL11B, BCL2, DNF, etc.",
        bibliography: [
            "Campos AI, García-Marín LM, Byrne EM, et al. Insights into the aetiology of snoring from observational and genetic investigations in the UK Biobank. Nat Commun. 2020 Feb 14;11(1):817.",
            "Medline Plus [July 2021].",
            "MSD Manuals [Feb 2023]."
        ]
    },
    { 
        name: "PSA (Prostate Specific Antigen)", 
        definition: "PSA is a prostate‑derived enzyme measurable in serum. Higher values raise the probability of prostate cancer but are not specific and can increase with benign conditions (e.g., BPH, infection, inflammation). No single cut‑off is definitive; elevated results warrant confirmation and clinical correlation, especially in older men or those with family history.",
        genes: "(3) CLPTM1L, HNF1B, MSMB.",
        bibliography: [
            "Gudmundsson J, Besenbacher S, Sulem P, Gudbjartsson DF, Olafsson I, Arinbjarnarson S, et al. Genetic correction of PSA values using sequence variants associated with PSA levels. Sci Transl Med. 2010;2(62):62ra92.",
            "David MK et al. Prostate Specific Antigen. [May 2022]",
            "Medscape. Prostate-Specific Antigen Testing [May 2022]",
            "American Cancer Society. Prostate Cancer. Early detection, diagnosis, and staging [May 2022]",
            "National Institute of Health. National Cancer Institute [May 2022]"
        ]
    },
    { 
        name: "QT Intervals", 
        definition: "QTc measures ventricular depolarisation–repolarisation time. Marked prolongation (>440 ms men, >460 ms women) or shortening (<350 ms) can be acquired (electrolytes, drugs, hypothermia, ischemia) or genetic (channelopathies) and increases arrhythmic risk. Abnormal QTc on ECG, relevant symptoms or family history warrants further evaluation.",
        variants: "13.5 million variants",
        loci: "34 loci",
        genes: "(34) ANKRD9, ATP1B1, ATP2A2, AZIN1, CAV1, etc.",
        bibliography: [
            "ECG library [May 2022].",
            "Al-Azaam B et al. Atrial Fibrillation in Inherited Channelopathies. Card Electrophysiol Clin. 2021 Mar;13(1):155-163.",
            "Schwartz PJ et al. Inherited cardiac arrhythmias. Nat Rev Dis Primers. 2020;6(1):58.",
            "Loussouarn G et al. Diversity in human hair growth, diameter, colour and shape. An in vivo study on young adults from 24 different ethnic groups observed in the five continents. Eur J Dermatol 2016; 26(2): 144-54.",
            "Arking DE et al. Genetic association study of QT interval highlight's role for calcium signaling pathways in myocardial repolarization. Nature Genetics, 22 Jun 2014, 46(8):826-836."
        ]
    },
    { 
        name: "Red blood cell count", 
        definition: "RBC count reflects oxygen‑carrying capacity and varies with nutrition (iron/B12/folate), marrow health, altitude and disease. Low counts indicate anaemia from diverse causes; apparent elevation may reflect hemoconcentration (dehydration). Genetics also contributes to baseline differences.",
        variants: "13.5 million variants",
        loci: "1103 loci",
        genes: "(620) A3GALT2, AAAS, ABCA1, ABCC2, ABCC6,etc.",
        bibliography: [
            "Chen M.H., Raffield L.M., et al. Trans-ethnic and Ancestry-Specific Blood-Cell Genetics in 746,667 Individuals from 5 Global Populations. Cell, 01 Sep 2020, 182(5):1198-1213.e14.",
            "Xiang R., Liu Y., et al. Genome-wide analyses of variance in blood cell phenotypes provide new insights into complex trait biology and prediction. Version 1. medRxiv. Preprint. 2024 Apr 16.",
            "Pilling L.C., Atkins J.L., et al. Red blood cell distribution width: Genetic evidence for aging pathways in 116,666 volunteers. PLoS One. 2017; 12(9): e0185083."
        ]
    },
    { 
        name: "Resistin levels", 
        definition: "Resistin is secreted by adipose and immune cells and promotes insulin resistance and inflammation. Levels track adiposity, diet, activity and inflammatory state and are partly genetic, linking resistin to obesity, type 2 diabetes and cardiovascular risk.",
        variants: "13.5 million variants",
        loci: "16 loci",
        genes: "(11) CDK6, EVI5, GSDMC, EMP1, PLAGL1, etc.",
        bibliography: [
            "Folkersen L., Gustaffson S., et al. Genomic and drug target evaluation of 90 cardiovascular proteins in 30,931 individuals. Nature Metabolism, 16 Oct 2020, 2(10):1135-1148.",
            "Ankita D., Bhavana D., et al. Resistin: A journey from metabolism to cancer. Transl Oncol. 2021 Oct; 14(10): 101178.",
            "Jamaluddin S., Weakley S.M., et al. Resistin: functional roles and therapeutic considerations for cardiovascular disease. Br J Pharmacol. 2012 Feb; 165(3): 622-632."
        ]
    },
    { 
        name: "Resting heart rate", 
        definition: "Resting heart rate (typically 50–100 bpm) integrates autonomic tone, fitness and health. Lower rates often reflect better fitness; persistent bradycardia or tachycardia merits evaluation. Baseline HR shows meaningful genetic influence.",
        variants: "13.5 million variants",
        loci: "74 loci",
        genes: "(63) ACHE, ADCK1, ALG10, BAPOC1, ARHGAP10, etc.",
        bibliography: [
            "Eppinga RN, Hagemeijer Y, Burgess S, et al. Identification of genomic loci associated with resting heart rate and shared genetic predictors with all-cause mortality. Nature Genetics. 2016 Dec;48(12):1557-1563.",
            "Your heart rate. British Heart Foundation [July 2022].",
            "Pulse. MedlinePlus. National Library of medicine (NIH) [Feb 2023]."
        ]
    },
    { 
        name: "Risk tendency", 
        definition: "General risk tolerance varies widely and is shaped by neurobiological pathways (dopamine, serotonin and steroid hormones), life experience and genetics. It correlates with multiple risk‑taking behaviours across domains.",
        variants: "13.5 million variants",
        loci: "306 loci",
        genes: "(244) A3GALT2, ACVR2A, ADGRB3, AGAAKT3, ALOX5, etc.",
        bibliography: [
            "Karlsson L.R., Biroli P., et al. Genome-wide association analyses of risk tolerance and risky behaviors in over 1 million individuals identify hundreds of loci and shared genetic influences. Nature Genetics, 14 Jan 2019, 51(2):245-257.",
            "Strawbridge R.J., Ward J., et al. Genome-wide analysis of self-reported risk-taking behaviour and cross-disorder genetic correlations in the UK Biobank cohort. Translational Psychiatry, 02 Feb 2018, 8(1):39.",
            "Dohmen T., Falk A., et al. Individual Risk Attitudes: Measurement, Determinants, and Behavioral Consequences. Journal of the European Economic Association, Volume 9, Issue 3, 1 June 2011, Pages 522-550."
        ]
    },
    { 
        name: "Secretor status and ABH antigens (FUT2 gene)", 
        definition: "FUT2 encodes the α1,2‑fucosyltransferase that enables secretion of ABH/Lewis antigens into mucosae. Loss‑of‑function variants (e.g., W143X in Europeans, I129F in Asians) cause the non‑secretor phenotype, altering microbiota and susceptibility to infections and cardiometabolic conditions.",
        genes: "(1) FUT2",
        bibliography: [
            "Stowell CP, Stowell SR. Biologic roles of the ABH and Lewis histo-blood group antigens Part I: infection and immunity. Vox Sang. 2019;114(5):426-442.",
            "Stowell SR, Stowell CP. Biologic roles of the ABH and Lewis histo-blood group antigens part II: thrombosis, cardiovascular disease and metabolism. Vox Sang. 2019 Aug;114(6):535-552.",
            "Velkova A, Diaz JEL, Pangilinan F, Molloy AM, Mills JL, Shane B, Sanchez E, et al. The FUT2 secretor variant p.Trp154Ter influences serum vitamin B12 concentration via holo-haptocorrin, but not holo-transcobalamin, and is associated with haptocorrin glycosylation. Hum Mol Genet. 2017;26(24):4975-4988.",
            "Azad MB, Wade KH, Timpson NJ. FUT2 secretor genotype and susceptibility to infections and chronic conditions in the ALSPAC cohort. Version 2. Wellcome Open Res. 2018."
        ]
    },
    { 
        name: "Selectin E levels", 
        definition: "E‑selectin is an endothelial adhesion molecule induced by TNF‑α/IL‑1 that mediates leukocyte recruitment. Circulating levels reflect inflammatory tone and are shaped by genetics and lifestyle (infection, smoking, obesity, oxidative stress).",
        variants: "13.5 million variants",
        loci: "25 loci",
        genes: "(13) ABO, ACFD1, FUT3, GBGT1, HNF1A, etc.",
        bibliography: [
            "Folkersen L., Gustaffson S., et al. Genomic and drug target evaluation of 90 cardiovascular proteins in 30,931 individuals. Nature Metabolism, 16 Oct 2020, 2(10):1135-1148.",
            "Polfus L.M., Raffield L.M., et al. Whole genome sequence association with E-selectin levels reveals loss-of-function variant in African Americans. Hum Mol Genet. 2019 Feb 1; 28(3): 515-523."
        ]
    },
    { 
        name: "Serum albumin levels", 
        definition: "Albumin, the predominant liver‑derived plasma protein, maintains oncotic pressure and transports many compounds and drugs. Low levels suggest hepatic/renal disease, malnutrition or inflammation; high levels usually reflect dehydration. Results require clinical context.",
        variants: "13.5 million variants",
        loci: "353 loci",
        genes: "(373) ABCA10, ABCA8, ABCA9, ABO, ACE, etc.",
        bibliography: [
            "Albumin Blood Test. MedlinePlus. National Library of medicine (NIH) [June 2022].",
            "Barton AR, Sherman MA, Mukamel RE, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Moman RN, Gupta N, Varacallo M. Physiology, Albumin. 2022 Dec 26. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-."
        ]
    },
    { 
        name: "Sex hormone regulation (SHBG)", 
        definition: "SHBG is a hepatic glycoprotein that binds testosterone and estradiol, modulating distribution and bioavailability and also acting in target tissues. Levels vary with endocrine/metabolic state and are ~50% heritable. Abnormal SHBG is linked to obesity/metabolic syndrome, PCOS, osteoporosis and hormone‑dependent cancers.",
        variants: "13.5 million variants",
        loci: "553 loci",
        genes: "(940) AADATA, ABCA1, ABCA6, ABCA8, ABCB6, etc.",
        bibliography: [
            "Ruth K.S., Day F.R., et al. Using human genetics to understand the disease impacts of testosterone in men and women. Nature Medicine, 10 Feb 2020, 26(2):252-258",
            "Hammond G.L. Diverse Roles for Sex Hormone-Binding Globulin in Reproduction. Biol Reprod. 2011 Sep; 85(3): 431–441."
        ]
    },
    { 
        name: "Skin melanin levels", 
        definition: "Skin colour primarily reflects the amount and type of melanin made by melanocytes: eumelanin (brown/black) and pheomelanin (red/yellow). Populations have similar melanocyte numbers but different activity/distribution, producing the spectrum from very light to very dark skin and differing tanning responses.",
        variants: "13.5 million variants",
        loci: "193 loci",
        genes: "(122) ACHE, ADOA, HCYA, HRANGPTL2, ANKRD11, etc.",
        bibliography: [
            "UK Biobank Database. Skin colour, Data-Field 1717 [Version Feb-2022]"
        ]
    },
    { 
        name: "Sleep duration", 
        definition: "Sleep duration is heritable and governed by homeostatic (S‑process) and circadian (C‑process) regulation. Adequate sleep (≥7 h in adults) supports cognition and cardiometabolic health; short/disrupted sleep increases disease risk. GWAS have identified many loci influencing habitual sleep length.",
        variants: "13.5 million variants",
        loci: "52 loci",
        genes: "(48) ACVR2A, ARRDC1, ASCL4, BANK1, BUD13, etc.",
        bibliography: [
            "Borbély AA, Daan S, Wirz-Justice A, Deboer T. The two-process model of sleep regulation: a reappraisal. J Sleep Res. 2016 Apr;25(2):131-43.",
            "Dashti H.S., Jones S.E., et al. Genome-wide association study identifies genetic loci for self-reported habitual sleep duration supported by accelerometer-derived estimates. Nature Communications, 07 Mar 2019, 10(1):1100."
        ]
    },
    { 
        name: "Smell", 
        definition: "Olfactory function varies genetically across populations, with specific anosmias (inability to detect certain odors) being common. The ability to perceive floral aromas, including the characteristic asparagus urine odor, is influenced by genetic variations in olfactory receptor genes. Reduced ability to perceive certain smells can impact quality of life and safety.",
        variants: "13.5 million variants",
        loci: "15 loci",
        genes: "(12) OR2M7, OR2J3, OR51E1, OR10G4, OR2T11, etc.",
        bibliography: [
            "Pelchat ML, Bykowski C, Duke FF, Reed DR. Excretion and Perception of a Characteristic Odor in Urine after Asparagus Ingestion: a Psychophysical and Genetic Study. Chem Senses, 2011; 36(1):9–17.",
            "Eriksson, Nicholas et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS genetics vol. 6,6 e1000993. 24 Jun. 2010.",
            "Hasin-Brumshtein Y, Lancet D, Olender T. Human olfaction: from genomic variation to phenotypic diversity. Trends Genet. 2009 Apr;25(4):178-84."
        ]
    },
    { 
        name: "Spleen volume", 
        definition: "The spleen filters blood, mounts immune responses and serves as a reservoir. Volume varies physiologically and with disease; splenomegaly accompanies infections, haematologic and metabolic disorders, and may transiently increase after intense exercise.",
        variants: "13.5 million variants",
        loci: "34 loci",
        genes: "(34) ADCY5, ALDH8A1, ARHGAP42, ASCC2, ATF1,etc.",
        bibliography: [
            "Liu Y., Basty N., et al. Genetic architecture of 11 organ traits derived from abdominal MRI using deep learning. Elife, 15 Jun 2021, 10:e65554.",
            "Salah M.F., Naser A.M., et al. Sonographic measurement of splenic size and its correlation with body parameters. Med Int (Lond). 2023 Jan-Feb; 3(1): 7.",
            "Aldulaimi S. et Mendez A. Splenomegaly: Diagnosis and Management in Adults. Am Fam Physician. 2021;104(3):271-276."
        ]
    },
    { 
        name: "Telomere length", 
        definition: "Telomeres cap chromosomes and shorten with cell division and stress. Shorter leukocyte telomeres are linked to impaired tissue regeneration and age‑related disease; length is influenced by genetics, sex hormones and environment.",
        variants: "13.5 million variants",
        loci: "20 loci",
        genes: "(20) C11orf65, DCAF4, GMEB2, MOB1, BMP, etc.",
        bibliography: [
            "Li C, Stoma S, Lotta LA, Warner S, et al. Genome-wide Association Analysis in Humans Links Nucleotide Metabolism to Leukocyte Telomere Length. Am J Hum Genet. 2020 Mar 5;106(3):389-404.",
            "Rossiello F, Jurk D, Passos JF, d'Adda di Fagagna F. Telomere dysfunction in aging and age-related diseases. Nat Cell Biol. 2022 Feb;24(2):135-147.",
            "Telomere. National Human Genome Research Institute (NIH) [July 2024]."
        ]
    },
    { 
        name: "Thyroid function (TSH levels)", 
        definition: "Thyroid dysfunction is an important health problem that affects 10% of the population, increasing, above all, cardiovascular risk. Among other parameters, in clinical practice it is evaluated by measuring TSH levels, so that an increase would be related to hypothyroidism and a decrease to hyperthyroidism. The thyroid is a bilobed, butterfly-shaped gland located in the neck in front of the trachea. It produces thyroid hormones, thyroxine (T4) and triiodothyronine (T3), which control the body's metabolism and the balance of other hormones. Among its many functions are the regulation of body temperature, heart rate, oxygen consumption and protein synthesis, hence they are essential in growth and organogenesis. The thyroid is finely regulated by Thyroid Stimulating Hormone (TSH) secreted by the pituitary gland. TSH stimulates the release of thyroid hormones, but these, in turn, exert a negative action on TSH production when TSH levels increase. Thyroid dysfunction is a very common condition. Moreover, in recent years it has become clear that not only clinical hypo- and hyperthyroidism have clinical manifestations, but that subclinical ones are associated with increased risk of pathological conditions such as coronary heart disease, depression or cardiovascular disease. More recently, studies have shown that even physiological variations of thyroid hormones within the normal range would be associated with many of these complications. Therefore, knowledge of the factors that regulate this complex hormonal system can help in taking measures to reduce the risks associated with its dysregulation.",
        variants: "13.5 million variants",
        loci: "20 loci",
        genes: "(42) ABO, ADCY9, BCAS3, C9orf92, CADM1, etc.",
        bibliography: [
            "Mayo clinic [March 2022]",
            "Teumer A, Chaker L, Groeneweg S, et al. Genome-wide analyses identify a role for SLC17A4 and AADAT in thyroid hormone regulation. Nature Communications. 2018 Oct;9(1):4455.",
            "Cooper, D. S. & Biondi, B. Subclinical thyroid disease. Lancet. 2012; 379, 1142–1154."
        ]
    },
    { 
        name: "Tooth morphology", 
        definition: "Several dental traits show strong heritability and population differences. A well‑studied example is shovel‑shaped incisors, influenced by variation in EDAR and related ectodermal development pathways.",
        genes: "(1) EDAR",
        bibliography: [
            "Kimura R, Yamaguchi T, Takeda M, Kondo O, Toma T, Haneji K, et al. A Common Variation in EDAR Is a Genetic Determinant of Shovel-Shaped Incisors. Am. J. Hum. Genet. 2009 Oct;85(4):528–35.",
            "Park JH, Yamaguchi T, Watanabe C, Kawaguchi A, Haneji K, Takeda M, Kim YI, Tomoyasu Y, Watanabe M, Oota H, Hanihara T, Ishida H, Maki K, Park SB, Kimura R. Effects of an Asian-specific nonsynonymous EDAR variant on multiple dental traits. J Hum Genet. 2012 Aug;57(8):508-14."
        ]
    },
    { 
        name: "Total serum protein levels", 
        definition: "Total protein reflects albumin plus globulins. Low values suggest hepatic/renal loss, malnutrition or malabsorption; high values often reflect inflammation or paraproteinemia. Interpretation should be integrated with other labs and clinical context.",
        variants: "13.5 million variants",
        loci: "442 loci",
        genes: "(432) A1CF, ABCA8, ABCA9, ABCF2-H2BK1, ABO, etc.",
        bibliography: [
            "Barton AR, Sherman MA, Mukamel RE, et al. Whole-exome imputation within UK Biobank powers rare coding variant coding association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "LaPelusa A, Kaushik R. Physiology, Proteins. 2022 Nov 14. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-.",
            "Total Protein and Albumin/Globulin (A/G) Ratio. MedlinePlus. National Library of medicine (NIH) [October 2021]."
        ]
    },
    { 
        name: "Usual walking pace", 
        definition: "Habitual walking pace is a strong predictor of longevity and cardiometabolic health. It reflects fitness and behaviour and has a measurable genetic component that overlaps with BMI and cardiometabolic traits.",
        variants: "13.5 million variants",
        loci: "53 loci",
        genes: "(47) ADGRB2, AHCY, ANAPC4, ARHGAP15, AUTS2, etc.",
        bibliography: [
            "Timmins I.R., Zaccardi F., et al. Genome-wide association study of self-reported walking pace suggests beneficial effects of brisk walking on health and survival. Communications Biology volume 3, Article number: 634 (2020).",
            "Gilherme J.P.L.F., Semenova E.A., et al. Genomic Predictors of Brisk Walking Are Associated with Elite Sprinter Status. Genes (Basel). 2022 Oct; 13(10): 1710.",
            "Usual walking pace. UK Biobank Database. Data-Field 924"
        ]
    },
    { 
        name: "White blood cell count", 
        definition: "WBC count indexes immune status. Leukocytosis accompanies infection, inflammation or stress; leukopenia occurs with viral illness, autoimmune disease, cytotoxic drugs or marrow disorders. Baseline counts and subset distributions reflect both genetic and environmental influences.",
        variants: "13.5 million variants",
        loci: "1026 loci",
        genes: "(601) AAMP, ABCB1, ABCC5, ABL1, ABO, etc.",
        bibliography: [
            "Chen M.H., Raffield L.M., et al. Trans-ethnic and Ancestry-Specific Blood-Cell Genetics in 746,667 Individuals from 5 Global Populations. Cell, 01 Sep 2020, 182(5):1198-1213.e14.",
            "Mosley J.D, Shelley J.P., et al. Clinical consequences of a polygenic predisposition to benign lower white blood cell counts. Version 1. medRxiv. Preprint. 2023 Aug 21.",
            "Crosslin D.R., McDavid A., et al. Genetic variants associated with the white blood cell count in 13,923 subjects in the eMERGE Network. Hum Genet. 2012 Apr;131(4):639-52."
        ]
    },
    {
        name: "Blood coagulation, factor V Leiden and 20210G-A",
        definition: "Factor V Leiden and prothrombin 20210G-A are genetic variants that increase the risk of venous thromboembolism. Factor V Leiden is a point mutation in the F5 gene that makes factor V resistant to inactivation by activated protein C, leading to increased thrombin generation.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "F5, F2",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Blood Group ABO/Rh",
        definition: "ABO and Rh blood group systems are determined by genetic variations that affect red blood cell surface antigens. These systems are crucial for blood transfusions and can influence disease susceptibility and response to certain infections.",
        variants: "13.5 million variants",
        loci: "ABO and Rh loci",
        genes: "ABO, RHD, RHCE",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "C-reactive protein",
        definition: "C-reactive protein is an acute-phase protein produced by the liver in response to inflammation. Elevated levels indicate systemic inflammation and are associated with increased cardiovascular risk and various inflammatory conditions.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CRP, IL6, TNF",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Cathepsin D levels",
        definition: "Cathepsin D is a lysosomal protease involved in protein degradation and cellular processes. Genetic variations can affect its expression and activity, potentially influencing various disease processes.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "CTSD",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "CCR5Delta32 and susceptibility to HIV infection",
        definition: "CCR5Delta32 is a genetic deletion in the CCR5 gene that confers resistance to HIV-1 infection. Individuals homozygous for this variant are highly resistant to HIV infection, while heterozygotes show delayed disease progression.",
        variants: "13.5 million variants",
        loci: "CCR5 locus",
        genes: "CCR5",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Cognitive ability",
        definition: "Cognitive ability encompasses various mental functions including memory, attention, reasoning, and problem-solving. It has a strong genetic component and is influenced by multiple genetic variants across the genome.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Corneal curvature",
        definition: "Corneal curvature affects refractive power and is a key factor in vision. Genetic variations can influence corneal shape and contribute to refractive errors like myopia and astigmatism.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Corneal hysteresis",
        definition: "Corneal hysteresis is a measure of corneal biomechanical properties that reflects the ability of the cornea to absorb and dissipate energy. It has genetic determinants and is important in glaucoma and refractive surgery.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Dental caries and periodontitis",
        definition: "Dental caries and periodontitis are common oral diseases with genetic and environmental components. Genetic variations can affect susceptibility to these conditions through effects on immune response and tooth structure.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Duffy Antigen, malaria resistant",
        definition: "The Duffy antigen is a protein on red blood cells that serves as a receptor for certain malaria parasites. Genetic variations that eliminate this antigen confer resistance to Plasmodium vivax malaria.",
        variants: "13.5 million variants",
        loci: "Duffy locus",
        genes: "DARC",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Ear lobe type",
        definition: "Ear lobe attachment is a classic example of a simple genetic trait. Free earlobes are dominant over attached earlobes, though the genetic basis is more complex than initially thought.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Earwax type / Armpit odor",
        definition: "Earwax type and armpit odor are influenced by genetic variations in the ABCC11 gene. Wet vs. dry earwax and the presence of armpit odor are determined by these genetic differences.",
        variants: "13.5 million variants",
        loci: "ABCC11 locus",
        genes: "ABCC11",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Eosinophil count",
        definition: "Eosinophil count is influenced by genetic factors and environmental exposures. Elevated counts can indicate allergic reactions, parasitic infections, or other inflammatory conditions.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Epigenetic aging",
        definition: "Epigenetic aging refers to age-related changes in DNA methylation patterns that can be used to estimate biological age. The rate of epigenetic aging has genetic determinants and can be accelerated by environmental factors.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Estradiol levels",
        definition: "Estradiol levels are influenced by genetic variations in genes involved in steroidogenesis and metabolism. These levels are important for reproductive health and can affect various physiological processes.",
        variants: "13.5 million variants",
        loci: "Multiple loci",
        genes: "Multiple genes",
        bibliography: ["Add bibliography here"]
    }
];