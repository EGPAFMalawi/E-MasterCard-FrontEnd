<template>
    <div>
        <b-card no-body class="mb-2 w-100">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle="'accordion-' + payload.code" variant="info">
                    <h4>{{payload.title}}</h4>
                </b-button>
            </b-card-header>
            <b-collapse v-bind:id="'accordion-'+payload.code" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <table class="table" v-if="newNegative.disaggregatedByAge !== undefined">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col" align="center"></th>
                                <th scope="col" align="center" colspan="2">Unknown</th>
                                <th scope="col" align="center" colspan="2">&lt;1</th>
                                <th scope="col" align="center" colspan="2">1-4</th>
                                <th scope="col" align="center" colspan="2">5-9</th>
                                <th scope="col" align="center" colspan="2">10-14</th>
                                <th scope="col" align="center" colspan="2">15-19</th>
                                <th scope="col" align="center" colspan="2">20-24</th>
                                <th scope="col" align="center" colspan="2">25-29</th>
                                <th scope="col" align="center" colspan="2">30-34</th>
                                <th scope="col" align="center" colspan="2">35-39</th>
                                <th scope="col" align="center" colspan="2">40-44</th>
                                <th scope="col" align="center" colspan="2">45-49</th>
                                <th scope="col" align="center" colspan="2">50+</th>
                                <th scope="col" align="center"></th>
                                <th scope="col" align="center"></th>
                                <th scope="col" align="center"></th>
                            </tr>
                            <tr>
                                <th scope="row">Contacts Tested</th>
                                <th>M</th><th>F</th>    <!--Unknown-->
                                <th>M</th><th>F</th>    <!--<1-->
                                <th>M</th><th>F</th>    <!--1-4-->
                                <th>M</th><th>F</th>    <!--5-9-->
                                <th>M</th><th>F</th>    <!--10-14-->
                                <th>M</th><th>F</th>    <!--15-19-->
                                <th>M</th><th>F</th>    <!--20-24-->
                                <th>M</th><th>F</th>    <!--25-29-->
                                <th>M</th><th>F</th>    <!--30-34-->
                                <th>M</th><th>F</th>    <!--35-39-->
                                <th>M</th><th>F</th>    <!--40-44-->
                                <th>M</th><th>F</th>    <!--45-49-->
                                <th>M</th><th>F</th>    <!--50+-->
                                <th>Total Male</th>
                                <th>Total Female</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="center">New Negative</td>
                                <td align="center">0</td><td align="center">0</td>  <!--Unknown-->
                                <td align="center">{{newNegative.disaggregatedByAge[lt1].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge[lt1].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['1-4'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['1-4'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['5-9'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['5-9'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['10-14'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['10-14'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['15-19'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['15-19'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['20-24'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['20-24'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['25-29'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['25-29'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['30-34'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['30-34'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['35-39'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['35-39'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['40-44'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['40-44'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['45-49'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['45-49'].female}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['50+'].male}}</td>
                                <td align="center">{{newNegative.disaggregatedByAge['50+'].female}}</td>
                                <td align="center">{{newNegative.totalMale}}</td>
                                <td align="center">{{newNegative.totalFemale}}</td>
                                <td align="center">{{newNegative.total}}</td>
                            </tr>
                            <tr>
                                <td align="center">New Positive</td>
                                <td align="center">0</td>
                                <td align="center">0</td>
                                <td align="center">{{newPositive.disaggregatedByAge[lt1].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge[lt1].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['1-4'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['1-4'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['5-9'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['5-9'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['10-14'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['10-14'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['15-19'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['15-19'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['20-24'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['20-24'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['25-29'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['25-29'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['30-34'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['30-34'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['35-39'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['35-39'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['40-44'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['40-44'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['45-49'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['45-49'].female}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['50+'].male}}</td>
                                <td align="center">{{newPositive.disaggregatedByAge['50+'].female}}</td>
                                <td align="center">{{newPositive.totalMale}}</td>
                                <td align="center">{{newPositive.totalFemale}}</td>
                                <td align="center">{{newPositive.total}}</td>
                            </tr>
                            <tr>
                                <td align="center">Total Tested</td>
                                <td align="center">0</td>
                                <td align="center">0</td>
                                <td align="center">{{totalTested.disaggregatedByAge[lt1].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge[lt1].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['1-4'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['1-4'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['5-9'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['5-9'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['10-14'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['10-14'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['15-19'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['15-19'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['20-24'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['20-24'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['25-29'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['25-29'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['30-34'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['30-34'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['35-39'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['35-39'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['40-44'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['40-44'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['45-49'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['45-49'].female}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['50+'].male}}</td>
                                <td align="center">{{totalTested.disaggregatedByAge['50+'].female}}</td>
                                <td align="center">{{totalTested.totalMale}}</td>
                                <td align="center">{{totalTested.totalFemale}}</td>
                                <td align="center">{{totalTested.total}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-primary" role="alert">
                        Download the excel sheet  <span v-on:click="downloadReport" class="alert-link">HERE</span>
                    </div>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>

import NavBar from "../../views/NavBar";
import authResource from '../../authResource'

export default {
    name: 'Report',
    props: ['payload', 'title'],
    methods: {
        loadData(payload){
            const endpoint = `${this.APIHosts.art}/${this.BASE_URL}/hts?code=${payload.code}`

            authResource().get(endpoint)
            .then(({data: {data: {hts: {newNegative, newPositive, totalTested}, hts}}})=>{
               this.newNegative = newNegative
               this.newPositive = newPositive
               this.totalTested = totalTested
            })
            .catch((error)=> console.warn(error))
        },

        downloadReport (){
            const endpoint = `${this.APIHosts.art}/${this.BASE_URL}/hts/export?code=${this.payload.code}`
            const token = JSON.parse(sessionStorage.getItem('auth')).accessToken;

            fetch(endpoint, {
                method: 'GET',
                headers: new Headers({"Authorization": `Bearer ${token}`})
            })
            .then((res) => res.blob())
            .then(blob => {
                const date = new Date()
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${this.payload.title}_${date.toISOString()}.xlsx`
                document.body.appendChild(a)
                a.click()    
                a.remove()
            })

        },

    },
    created(){
        this.loadData(this.payload)
    },
    data: () => {
        return {
            BASE_URL : 'reports',
            lt1: '<1',
            newNegative: {},
            newPositive: {},
            totalTested: {},
        }
    }

}
</script>
