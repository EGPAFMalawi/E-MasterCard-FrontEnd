import { start } from 'pretty-error';

const state = {
    startDate: null,
    conditions: [
        {value: 'Asymptomatic', text: 'Asymptomatic', stage: 'Clinical Stage 1'},
        {value: 'Persistent generalized lymphadenopathy', text: 'Persistent generalized lymphadenopathy', stage: 'Clinical Stage 1'}, 
        {value: 'Moderate unexplained weight loss (<10% ofpresumed or measured body weight)', text: 'Moderate unexplained weight loss (<10% ofpresumed or measured body weight)', stage: 'Clinical Stage 2'},
        {value: 'Recurrent respiratory tract infections (sinusitis tonsillitis, otitis media, pharyngitis)', text: 'Recurrent respiratory tract infections (sinusitis tonsillitis, otitis media, pharyngitis)', stage: 'Clinical Stage 2'},
        {value: 'Herpes zoster', text: 'Herpes zoster', stage: 'Clinical Stage 2'},
        {value: 'Angular cheilitis', text: 'Angular cheilitis', stage: 'Clinical Stage 2'},
        {value: 'Recurrent oral ulceration', text: 'Recurrent oral ulceration', stage: 'Clinical Stage 2'},
        {value: 'Papular pruritic eruption', text: 'Papular pruritic eruption', stage: 'Clinical Stage 2'},
        {value: 'Fungal nail infections', text: 'Fungal nail infections', stage: 'Clinical Stage 2'},
        {value: 'Seborrhoeic dermatitis', text: 'Seborrhoeic dermatitis', stage: 'Clinical Stage 2'},
        {value: 'Unexplained severe weight loss (>10% of presumed or measured body weight)', text: 'Unexplained severe weight loss (>10% of presumed or measured body weight)', stage: 'Clinical Stage 3'},
        {value: 'Unexplained chronic diarrhoea for longer than 1 month', text: 'Unexplained chronic diarrhoea for longer than 1 month', stage: 'Clinical Stage 3'},
        {value: 'Unexplained persistent fever (intermittent or constant for longer than 1 month)', text: 'Unexplained persistent fever (intermittent or constant for longer than 1 month)', stage: 'Clinical Stage 3'},
        {value: 'Persistent oral candidiasis', text: 'Persistent oral candidiasis', stage: 'Clinical Stage 3'},
        {value: 'Oral hairy leukoplakia', text: 'Oral hairy leukoplakia', stage: 'Clinical Stage 3'},
        {value: 'Pulmonary tuberculosis', text: 'Pulmonary tuberculosis', stage: 'Clinical Stage 3'},
        {value: 'Severe bacterial infections (such as pneumonia, empyema, pyomyositis, bone or joint infection, meningitis, bacteraemia)', text: 'Severe bacterial infections (such as pneumonia, empyema, pyomyositis, bone or joint infection, meningitis, bacteraemia)', stage: 'Clinical Stage 3'},
        {value: 'Acute necrotizing ulcerative stomatitis, gingivitis or periodontitis', text: 'Acute necrotizing ulcerative stomatitis, gingivitis or periodontitis', stage: 'Clinical Stage 3'},
        {value: 'Unexplained anaemia (<8 g/dl)', text: 'Unexplained anaemia (<8 g/dl)', stage: 'Clinical Stage 3'},
        {value: 'neutropaenia (<0.5 x 109/l) and/or chronic thrombocytopaenia (<50 x 109/l)', text: 'neutropaenia (<0.5 x 109/l) and/or chronic thrombocytopaenia (<50 x 109/l)', stage: 'Clinical Stage 3'},
        {value: 'HIV wasting syndrome', text: 'HIV wasting syndrome', stage: 'Clinical Stage 4'},
        {value: 'Pneumocystis (jirovecii) pneumonia', text: 'Pneumocystis (jirovecii) pneumonia', stage: 'Clinical Stage 4'},
        {value: 'Recurrent severe bacterial pneumonia', text: 'Recurrent severe bacterial pneumonia', stage: 'Clinical Stage 4'},
        {value: 'Chronic herpes simplex infection (orolabial, genital or anorectal of more than 1 month’s duration or visceral at any site)', text: 'Chronic herpes simplex infection (orolabial, genital or anorectal of more than 1 month’s duration or visceral at any site)', stage: 'Clinical Stage 4'},
        {value: 'Oesophageal candidiasis (or candidiasis of trachea, bronchi or lungs)', text: 'Oesophageal candidiasis (or candidiasis of trachea, bronchi or lungs)', stage: 'Clinical Stage 4'},
        {value: 'Extrapulmonary tuberculosis', text: 'Extrapulmonary tuberculosis', stage: 'Clinical Stage 4'},
        {value: 'Kaposi sarcoma', text: 'Kaposi sarcoma', stage: 'Clinical Stage 4'},
        {value: 'Cytomegalovirus infection (retinitis or infection of other organs)', text: 'Cytomegalovirus infection (retinitis or infection of other organs)', stage: 'Clinical Stage 4'},
        {value: 'Central nervous system toxoplasmosis', text: 'Central nervous system toxoplasmosis', stage: 'Clinical Stage 4'},
        {value: 'HIV encephalopathy', text: 'HIV encephalopathy', stage: 'Clinical Stage 4'},
        {value: 'Extrapulmonary cryptococcosis, including meningitis', text: 'Extrapulmonary cryptococcosis, including meningitis', stage: 'Clinical Stage 4'},
        {value: 'Disseminated nontuberculous mycobacterial infection', text: 'Disseminated nontuberculous mycobacterial infection', stage: 'Clinical Stage 4'},
        {value: 'Progressive multifocal leukoencephalopathy', text: 'Progressive multifocal leukoencephalopathy', stage: 'Clinical Stage 4'},
        {value: 'Chronic cryptosporidiosis', text: 'Chronic cryptosporidiosis', stage: 'Clinical Stage 4'},
        {value: 'Chronic isosporiasis', text: 'Chronic isosporiasis', stage: 'Clinical Stage 4'},
        {value: 'Disseminated mycosis (extrapulmonary histoplasmosis, coccidioidomycosis', text: 'Disseminated mycosis (extrapulmonary histoplasmosis, coccidioidomycosis', stage: 'Clinical Stage 4'},
        {value: 'Lymphoma (cerebral or B-cell non-Hodgkin)', text: 'Lymphoma (cerebral or B-cell non-Hodgkin)', stage: 'Clinical Stage 4'},
        {value: 'Symptomatic HIV-associated nephropathy or cardiomyopathy', text: 'Symptomatic HIV-associated nephropathy or cardiomyopathy', stage: 'Clinical Stage 4'},
        {value: 'Recurrent septicaemia (including nontyphoidal Salmonella)', text: 'Recurrent septicaemia (including nontyphoidal Salmonella)', stage: 'Clinical Stage 4'},
        {value: 'Invasive cervical carcinoma', text: 'Invasive cervical carcinoma', stage: 'Clinical Stage 4'},
        {value: 'Atypical disseminated leishmaniasis', text: 'Atypical disseminated leishmaniasis', stage: 'Clinical Stage 4'},
    ],
    stages: [
        'Clinical Stage 1',
        'Clinical Stage 2',
        'Clinical Stage 3',
        'Clinical Stage 4'
    ]
}

const getters = {
    concepts: ({concepts}) => concepts,
    startDate: ({startDate}) => startDate,
    stages: ({stages}) => stages,
    conditions: ({conditions}) => conditions
}

const mutations = {
    setConcepts: (state, concepts) => (
        state.concepts = concepts
    ),
    setStartDate: (state, startDate) => (
        state.startDate = startDate
    ),
}

const actions = {
    loadConcepts({commit}, data){
        commit('setConcepts', data)
    },
    loadARTstartDate({commit}, data){
        commit('setStartDate', data)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}