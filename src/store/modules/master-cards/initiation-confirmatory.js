import { start } from 'pretty-error';

const state = {
    concepts: [],
    startDate: null,
    stages: [
        {
            name: 'Clinical stage 1',
            conditions: ['Asymptomatic', 'Persistent generalized lymphadenopathy']
        },
        {
            name: 'Clinical stage 2',
            conditions: [ 
                'Moderate unexplained weight loss (<10% ofpresumed or measured body weight)',
                'Recurrent respiratory tract infections (sinusitis tonsillitis, otitis media, pharyngitis)', 
                'Herpes zoster',
                'Angular cheilitis',
                'Recurrent oral ulceration',
                'Papular pruritic eruption',
                'Fungal nail infections',
                'Seborrhoeic dermatitis'
            ]
        },
        {
            name: 'Clinical stage 3',
            conditions: [
                'Unexplained severe weight loss (>10% of presumed or measured body weight)',
                'Unexplained chronic diarrhoea for longer than 1 month',
                'Unexplained persistent fever (intermittent or constant for longer than 1 month)',
                'Persistent oral candidiasis',
                'Oral hairy leukoplakia',
                'Pulmonary tuberculosis',
                'Severe bacterial infections (such as pneumonia, empyema, pyomyositis, bone or joint infection, meningitis, bacteraemia)',
                'Acute necrotizing ulcerative stomatitis, gingivitis or periodontitis',
                'Unexplained anaemia (<8 g/dl)',
                'neutropaenia (<0.5 x 109/l) and/or chronic thrombocytopaenia (<50 x 109/l)'
            ]
        },
        {
            name: 'Clinical stage 4',
            conditions: [
                'HIV wasting syndrome',
                'Pneumocystis (jirovecii) pneumonia',
                'Recurrent severe bacterial pneumonia',
                'Chronic herpes simplex infection (orolabial, genital or anorectal of more than 1 month’s duration or visceral at any site)',
                'Oesophageal candidiasis (or candidiasis of trachea, bronchi or lungs)',
                'Extrapulmonary tuberculosis',
                'Kaposi sarcoma',
                'Cytomegalovirus infection (retinitis or infection of other organs)',
                'Central nervous system toxoplasmosis',
                'HIV encephalopathy',
                'Extrapulmonary cryptococcosis, including meningitis',
                'Disseminated nontuberculous mycobacterial infection',
                'Progressive multifocal leukoencephalopathy',
                'Chronic cryptosporidiosis',
                'Chronic isosporiasis',
                'Disseminated mycosis (extrapulmonary histoplasmosis, coccidioidomycosis',
                'Lymphoma (cerebral or B-cell non-Hodgkin)',
                'Symptomatic HIV-associated nephropathy or cardiomyopathy',
                'Recurrent septicaemia (including nontyphoidal Salmonella)',
                'Invasive cervical carcinoma',
                'Atypical disseminated leishmaniasis'
            ]
        },
    ]
}

const getters = {
    concepts: ({concepts}) => concepts,
    startDate: ({startDate}) => startDate,
    stages: ({stages}) => stages
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