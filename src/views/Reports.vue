<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>
            <div class="my-3">
                <b-tabs content-class="d-flex justify-content-center" align="center" pills>
                    <b-tab title="Visit Level Reports" active>
                        <section>
                            <div class="container my-3">
                                <div class="row">
                                    <div class="card-deck">
<!--                                        <div class="card" v-on:click="loadData(payloads.dueSixMonths)" v-b-modal.modal-1>-->
                                        <div class="card" >
                                            <div class="card-body">
                                                <h5 class="card-title">Patients Due Viral Load (6 Months)</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">N/A</h1></div>
<!--                                            <div class="card-footer"><h1 class="display-4">{{dueSixMonths.counts}}</h1></div>-->
                                        </div>
<!--                                        <div class="card" v-on:click="loadData(payloads.dueTwelveMonths)" v-b-modal.modal-1>-->
                                        <div class="card" >
                                            <div class="card-body">
                                                <h5 class="card-title">Patients Due Viral Load (12 Months)</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">N/A</h1></div>
<!--                                            <div class="card-footer"><h1 class="display-4">{{dueTwelveMonths.counts}}</h1></div>-->
                                        </div>
<!--                                        <div class="card" v-on:click="loadData(payloads.dueAfterYear)" v-b-modal.modal-1>-->
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Patients Due Viral Load (After 1 Year)</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">N/A</h1></div>
<!--                                            <div class="card-footer"><h1 class="display-4">{{dueAfterYear.counts}}</h1></div>-->
                                        </div>
                                        <div class="card" v-on:click="loadData(payloads.appointmentsTomorrow)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Patients with Appointments Tomorrow</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{appointmentsTomorrow.counts}}</h1></div>
                                        </div>
                                        <div class="card" v-on:click="loadData(payloads.lastViralLoadGT1000)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Patients with Last Viral Load Greater than 1000</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{lastViralLoadGT1000.counts}}</h1></div>
                                        </div> 
                                    </div>
                                    <div class="card-deck my-3">
                                        <div class="card" v-on:click="loadData(payloads.appointmentMissers)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Patients with Missed Appointments </h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{appointmentMissers.counts}}</h1></div>
                                        </div>
                                        <div class="card" v-on:click="loadData(payloads.patientsOnDTG)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Patients on DTG</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{patientsOnDTG.counts}}</h1></div>
                                        </div> 
                                        <div class="card" v-on:click="loadData(payloads.defaultersPEPFAR)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Defaulters (30 Days) </h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{defaultersPEPFAR.counts}}</h1></div>
                                        </div>
                                        <div class="card" v-on:click="loadData(payloads.defaultersMOH)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Defaulters (60 Days) </h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{defaultersMOH.counts}}</h1></div>
                                        </div>
                                        <div class="card" v-on:click="loadData(payloads.cdctxcurrent)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">TX Current (30 Days)</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{cdctxcurrent.counts}}</h1></div>
                                        </div>
                                    </div> 
                                    
                                    <div class="card-deck">
                                        <div class="card" v-on:click="loadData(payloads.mohctxcurrent)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">TX Current (60 Days)</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{mohctxcurrent.counts}}</h1></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </b-tab>
                    <b-tab title="Adverse Outcome Reports">
                        <section>
                            <div class="container my-3">
                                <div class="row">
                                    <div class="card-deck">
                                        <div class="card" v-on:click="loadData(payloads.ARTStop)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">ART Stop</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{ARTStop.counts}}</h1></div>
                                        </div>
                                        <!--<div class="card" v-on:click="loadData(payloads.restart)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Restart</h5>

                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{restart.counts}}</h1></div>
                                        </div>-->
                                        <!--<div class="card" v-on:click="loadData(payloads.transIn)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Transfer In</h5>

                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{transIn.counts}}</h1></div>
                                        </div>-->
                                        <div class="card" v-on:click="loadData(payloads.transOut)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Transfer Out</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{transOut.counts}}</h1></div>
                                        </div>
                                        <div class="card" v-on:click="loadData(payloads.died)" v-b-modal.modal-1>
                                            <div class="card-body">
                                                <h5 class="card-title">Died</h5>
                                                
                                            </div>
                                            <div class="card-footer"><h1 class="display-4">{{died.counts}}</h1></div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </section>
                    </b-tab>
                    <b-tab title="Age Disaggregated Reports">
                        <section>
                            <div class="container-fluid p-3 my-3">
                                <div class="w-100" role="tablist">
                                    <b-card no-body class="mb-2 w-100">
                                        <b-card-header header-tag="header" class="p-1" role="tab">
                                            <b-button block v-b-toggle="'accordion1'" variant="info"><h4>Cumulative Age Disaggregated Report</h4></b-button>
                                        </b-card-header>
                                        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                                            <b-card-body>
                                                <div>
                                                    <form v-on:submit.prevent="loadCumulativeAgeDisaggregates">
                                                        <div class="form-row">
                                                            <div class="col-md-6">
                                                                <div class="input-group mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text">Report EndDate</span>
                                                                    </div>
                                                                    <input id="cumulative-end-date" class="form-control" v-model="cumulativeEndDate" type="date" required/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <button class="btn btn-success" type="submit">Run Report</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <table class="table visit-table" v-if="cumulativeDisaggregates !== null">
                                                    <thead class="thead-dark">
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th>On ART</th>
                                                        <th colspan="3">Defaulted</th>
                                                        <th>Stopped</th>
                                                        <th>Died</th>
                                                        <th>Transferred Out</th>
                                                        <th>Total</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th>(TX_Current)</th>
                                                        <th>1 Month</th>
                                                        <th>2 Months</th>
                                                        <th>3+ Months</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th>(Ever_Registered)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th>TOTAL</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['total']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['total']+cumulativeDisaggregates['defaulted1Month']['total']+cumulativeDisaggregates['defaulted2Months']['total']+cumulativeDisaggregates['defaulted3MonthsPlus']['total']+cumulativeDisaggregates['stopped']['total']+cumulativeDisaggregates['died']['total']+cumulativeDisaggregates['transferredOut']['total']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Adults</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['count']+cumulativeDisaggregates['defaulted1Month']['adults']['count']+cumulativeDisaggregates['defaulted2Months']['adults']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['count']+cumulativeDisaggregates['stopped']['adults']['count']+cumulativeDisaggregates['died']['adults']['count']+cumulativeDisaggregates['transferredOut']['adults']['count']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Males</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['count']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['count']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['count']+cumulativeDisaggregates['stopped']['adults']['males']['count']+cumulativeDisaggregates['died']['adults']['males']['count']+cumulativeDisaggregates['transferredOut']['adults']['males']['count']}}</th>
                                                    </tr>
                                                   <tr>
                                                        <th></th>
                                                        <th>15-19</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>20-24</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>25-29</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>30-34</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>35-39</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>40-44</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>45-49</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>50+</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['50+']+cumulativeDisaggregates['defaulted1Month']['adults']['males']['disaggregatedByAge']['50+']+cumulativeDisaggregates['defaulted2Months']['adults']['males']['disaggregatedByAge']['50+']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['50+']+cumulativeDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['50+']+cumulativeDisaggregates['died']['adults']['males']['disaggregatedByAge']['50+']+cumulativeDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th>Females</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['count']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['count']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['count']+cumulativeDisaggregates['stopped']['adults']['females']['count']+cumulativeDisaggregates['died']['adults']['females']['count']+cumulativeDisaggregates['transferredOut']['adults']['females']['count']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>15-19</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['15-19']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>20-24</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['20-24']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>25-29</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['25-29']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>30-34</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['30-34']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>35-39</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['35-39']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>40-44</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['40-44']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>45-49</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['45-49']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>50+</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['50+']+cumulativeDisaggregates['defaulted1Month']['adults']['females']['disaggregatedByAge']['50+']+cumulativeDisaggregates['defaulted2Months']['adults']['females']['disaggregatedByAge']['50+']+cumulativeDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['50+']+cumulativeDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['50+']+cumulativeDisaggregates['died']['adults']['females']['disaggregatedByAge']['50+']+cumulativeDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th>Pediatrics</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['count']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['count']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['count']+cumulativeDisaggregates['stopped']['pediatrics']['count']+cumulativeDisaggregates['died']['pediatrics']['count']+cumulativeDisaggregates['transferredOut']['pediatrics']['count']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Males</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['males']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['count']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['count']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['count']+cumulativeDisaggregates['stopped']['pediatrics']['males']['count']+cumulativeDisaggregates['died']['pediatrics']['males']['count']+cumulativeDisaggregates['transferredOut']['pediatrics']['males']['count']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>&lt;1</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>1-4</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>5-9</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>10-14</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['males']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th>Females</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['females']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['count']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['count']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['count']+cumulativeDisaggregates['stopped']['pediatrics']['females']['count']+cumulativeDisaggregates['died']['pediatrics']['females']['count']+cumulativeDisaggregates['transferredOut']['pediatrics']['females']['count']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>&lt;1</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge'][lt1]+cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>1-4</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['1-4']+cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>5-9</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['males']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['5-9']+cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>10-14</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['defaulted1Month']['pediatrics']['females']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['defaulted2Months']['pediatrics']['females']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['10-14']+cumulativeDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Unknown Age</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['unknownAge']['count']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['unknownAge']['count']+cumulativeDisaggregates['defaulted1Month']['unknownAge']['count']+cumulativeDisaggregates['defaulted2Months']['unknownAge']['count']+cumulativeDisaggregates['defaulted3MonthsPlus']['unknownAge']['count']+cumulativeDisaggregates['stopped']['unknownAge']['count']+cumulativeDisaggregates['died']['unknownAge']['count']+cumulativeDisaggregates['transferredOut']['unknownAge']['count']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Males</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['unknownAge']['males']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['unknownAge']['males']+cumulativeDisaggregates['defaulted1Month']['unknownAge']['males']+cumulativeDisaggregates['defaulted2Months']['unknownAge']['males']+cumulativeDisaggregates['defaulted3MonthsPlus']['unknownAge']['males']+cumulativeDisaggregates['stopped']['unknownAge']['males']+cumulativeDisaggregates['died']['unknownAge']['males']+cumulativeDisaggregates['transferredOut']['unknownAge']['males']}}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Females</th>
                                                        <th></th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted1Month']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted2Months']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['defaulted3MonthsPlus']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['stopped']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['died']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['transferredOut']['unknownAge']['females']}}</th>
                                                        <th>{{cumulativeDisaggregates['txCurrent']['unknownAge']['females']+cumulativeDisaggregates['defaulted1Month']['unknownAge']['females']+cumulativeDisaggregates['defaulted2Months']['unknownAge']['females']+cumulativeDisaggregates['defaulted3MonthsPlus']['unknownAge']['females']+cumulativeDisaggregates['stopped']['unknownAge']['females']+cumulativeDisaggregates['died']['unknownAge']['females']+cumulativeDisaggregates['transferredOut']['unknownAge']['females']}}</th>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <div class="alert alert-primary" role="alert">
                                                    Download the excel sheet  <span v-on:click="downloadAgeDisaggregatedReport(1, null, null, cumulativeEndDate)" class="alert-link">HERE</span>
                                                </div>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                    <b-card no-body class="mb-2 w-100">
                                        <b-card-header header-tag="header" class="p-1" role="tab">
                                            <b-button block v-b-toggle="'accordion2'" variant="info"><h4>Quarterly Age Disaggregated Report</h4></b-button>
                                        </b-card-header>
                                        <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
                                            <b-card-body>
                                                <div>
                                                    <form v-on:submit.prevent="loadQuarterlyAgeDisaggregates">
                                                        <div class="form-row">
                                                            <div class="col-4 pr-0 pl-1">
                                                                <div class="input-group mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text">Start Date</span>
                                                                    </div>
                                                                    <input id="quarterly-start-date" class="form-control" v-model="quarterlyStartDate" type="date" required/>
                                                                </div>
                                                            </div>
                                                            <div class="col-4 pr-0 pl-1">
                                                                <div class="input-group mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text">End Date</span>
                                                                    </div>
                                                                    <input id="quarterly-end-date" class="form-control" v-model="quarterlyEndDate" type="date" required/>
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <button type="submit" class="btn btn-success">Run Report</button>
                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>

                                                <table class="table visit-table" v-if="quarterlyDisaggregates !== null">
                                                    <thead class="thead-dark">
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th colspan="3">New Enrollments</th>
                                                        <th colspan="6">Adverse Outcomes</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th>New on ART</th>
                                                        <th>Re-Initiated</th>
                                                        <th>Transferred-In</th>
                                                        <th colspan="3">Defaulted</th>
                                                        <th>Stopped</th>
                                                        <th>Died</th>
                                                        <th>Transferred Out</th>
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th>(TX_NEW)</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th> &gt; 1 Month</th>
                                                        <th> &gt; 2 Months</th>
                                                        <th> &gt; 3 Months</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th>TOTAL</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['total']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['total']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['total']+quarterlyDisaggregates['defaulted1MonthPlus']['total']+quarterlyDisaggregates['defaulted2MonthsPlus']['total']+quarterlyDisaggregates['defaulted3MonthsPlus']['total']+quarterlyDisaggregates['stopped']['total']+quarterlyDisaggregates['died']['total']+quarterlyDisaggregates['transferredOut']['total']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th>Adults</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['count']+quarterlyDisaggregates['stopped']['adults']['count']+quarterlyDisaggregates['died']['adults']['count']+quarterlyDisaggregates['transferredOut']['adults']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th>Males</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['count']+quarterlyDisaggregates['stopped']['adults']['males']['count']+quarterlyDisaggregates['died']['adults']['males']['count']+quarterlyDisaggregates['transferredOut']['adults']['males']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>15-19</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['15-19']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['15-19']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>20-24</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['20-24']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['20-24']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>25-29</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['25-29']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['25-29']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>30-34</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['30-34']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['30-34']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>35-39</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['35-39']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['35-39']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>40-44</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['40-44']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['40-44']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>45-49</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['45-49']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['45-49']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>50+</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['50+']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['males']['disaggregatedByAge']['50+']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['males']['disaggregatedByAge']['50+']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['males']['disaggregatedByAge']['50+']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['males']['disaggregatedByAge']['50+']+quarterlyDisaggregates['stopped']['adults']['males']['disaggregatedByAge']['50+']+quarterlyDisaggregates['died']['adults']['males']['disaggregatedByAge']['50+']+quarterlyDisaggregates['transferredOut']['adults']['males']['disaggregatedByAge']['50+']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th>Females</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['count']+quarterlyDisaggregates['stopped']['adults']['females']['count']+quarterlyDisaggregates['died']['adults']['females']['count']+quarterlyDisaggregates['transferredOut']['adults']['females']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>15-19</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['15-19']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['15-19']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['15-19']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>20-24</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['20-24']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['20-24']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['20-24']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>25-29</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['25-29']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['25-29']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['25-29']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>30-34</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['30-34']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['30-34']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['30-34']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>35-39</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['35-39']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['35-39']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['35-39']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>40-44</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['40-44']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['40-44']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['40-44']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>45-49</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['45-49']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['45-49']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['45-49']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>50+</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['50+']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['50+']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['adults']['females']['disaggregatedByAge']['50+']+quarterlyDisaggregates['defaulted1MonthPlus']['adults']['females']['disaggregatedByAge']['50+']+quarterlyDisaggregates['defaulted2MonthsPlus']['adults']['females']['disaggregatedByAge']['50+']+quarterlyDisaggregates['defaulted3MonthsPlus']['adults']['females']['disaggregatedByAge']['50+']+quarterlyDisaggregates['stopped']['adults']['females']['disaggregatedByAge']['50+']+quarterlyDisaggregates['died']['adults']['females']['disaggregatedByAge']['50+']+quarterlyDisaggregates['transferredOut']['adults']['females']['disaggregatedByAge']['50+']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th>Pediatrics</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['count']+quarterlyDisaggregates['stopped']['pediatrics']['count']+quarterlyDisaggregates['died']['pediatrics']['count']+quarterlyDisaggregates['transferredOut']['pediatrics']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th>Males</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['males']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['males']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['males']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['count']+quarterlyDisaggregates['stopped']['pediatrics']['males']['count']+quarterlyDisaggregates['died']['pediatrics']['males']['count']+quarterlyDisaggregates['transferredOut']['pediatrics']['males']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>&lt;1</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge'][lt1]}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>1-4</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['1-4']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>5-9</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['5-9']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>10-14</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['males']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['stopped']['pediatrics']['males']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['died']['pediatrics']['males']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['transferredOut']['pediatrics']['males']['disaggregatedByAge']['10-14']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th>Females</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['females']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['females']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['females']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['count']+quarterlyDisaggregates['stopped']['pediatrics']['females']['count']+quarterlyDisaggregates['died']['pediatrics']['count']+quarterlyDisaggregates['transferredOut']['pediatrics']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>&lt;1</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge'][lt1]+quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge'][lt1]}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>1-4</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['1-4']+quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['1-4']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th></th>
                                                        <th>5-9</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['males']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['5-9']+quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['5-9']}}</th>&#45;&#45;}}-->
                                                    </tr>

                                                    <tr>
                                                        <th></th>
                                                        <th>10-14</th>
                                                        <th>{{quarterlyDisaggregates['txNew']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['pediatrics']['females']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['defaulted1MonthPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['defaulted2MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['defaulted3MonthsPlus']['pediatrics']['females']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['stopped']['pediatrics']['females']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['died']['pediatrics']['females']['disaggregatedByAge']['10-14']+quarterlyDisaggregates['transferredOut']['pediatrics']['females']['disaggregatedByAge']['10-14']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th>Unknown Age</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['unknownAge']['count']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['unknownAge']['count']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['unknownAge']['count']+quarterlyDisaggregates['defaulted1MonthPlus']['unknownAge']['count']+quarterlyDisaggregates['defaulted2MonthsPlus']['unknownAge']['count']+quarterlyDisaggregates['defaulted3MonthsPlus']['unknownAge']['count']+quarterlyDisaggregates['stopped']['unknownAge']['count']+quarterlyDisaggregates['died']['unknownAge']['count']+quarterlyDisaggregates['transferredOut']['unknownAge']['count']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th>Males</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['unknownAge']['males']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['unknownAge']['males']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['unknownAge']['males']+quarterlyDisaggregates['defaulted1MonthPlus']['unknownAge']['males']+quarterlyDisaggregates['defaulted2MonthsPlus']['unknownAge']['males']+quarterlyDisaggregates['defaulted3MonthsPlus']['unknownAge']['males']+quarterlyDisaggregates['stopped']['unknownAge']['males']+quarterlyDisaggregates['died']['unknownAge']['males']+quarterlyDisaggregates['transferredOut']['unknownAge']['males']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    <tr>
                                                        <th>Females</th>
                                                        <th></th>
                                                        <th>{{quarterlyDisaggregates['txNew']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['reInitiated']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredIn']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted1MonthPlus']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted2MonthsPlus']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['defaulted3MonthsPlus']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['stopped']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['died']['unknownAge']['females']}}</th>
                                                        <th>{{quarterlyDisaggregates['transferredOut']['unknownAge']['females']}}</th>
<!--                                                        {{&#45;&#45;        <th>{{quarterlyDisaggregates['txCurrent']['unknownAge']['females']+quarterlyDisaggregates['defaulted1MonthPlus']['unknownAge']['females']+quarterlyDisaggregates['defaulted2MonthsPlus']['unknownAge']['females']+quarterlyDisaggregates['defaulted3MonthsPlus']['unknownAge']['females']+quarterlyDisaggregates['stopped']['unknownAge']['females']+quarterlyDisaggregates['died']['unknownAge']['females']+quarterlyDisaggregates['transferredOut']['unknownAge']['females']}}</th>&#45;&#45;}}-->
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <div class="alert alert-primary" role="alert">
                                                    Download the excel sheet  <span v-on:click="downloadAgeDisaggregatedReport(2)" class="alert-link">HERE</span>
                                                </div>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>
                            </div>
                        </section>
                    </b-tab>
                </b-tabs>
            </div>
        </div>


        <b-modal id="modal-1" title="Patients Reports" hide-footer	 size="xl">
            <div class="container">
                <div class="row d-flex justify-content-center py-5">
                    <div class="alert alert-warning" role="alert" v-if="patients[0] === undefined">
                        No Records Available here
                    </div>
                    <table class="table" v-if="patients[0] !== undefined">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">ART No.</th>
                            <th scope="col">Given Name</th>
                            <th scope="col">Middle Name</th>
                            <th scope="col">Family Name</th>
                            <th scope="col">Sex</th>
                            <th scope="col">Address</th>
                            <th scope="col">Guardian</th>
                            <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(patient, index) in patients" v-bind:key="index">
                            <th scope="row">{{ patient.artNumber}}</th>
                            <td>{{ patient.person.personName.given}}</td>
                            <td>{{ patient.person.personName.middle}}</td>
                            <td>{{ patient.person.personName.family}}</td>
                            <td>{{ patient.person.gender}}</td>
                            <td>{{ (patient.person.personAddress.cityVillage !== null ? patient.person.personAddress.cityVillage : '' ) + (patient.person.personAddress.townshipDivision !== null ? (' ' + patient.person.personAddress.townshipDivision) : '')}}</td>
                            <td>{{ patient.guardianName}}</td>
                            <td>{{ patient.patientPhone}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </b-modal>

    </div>
</template>

<script>

import NavBar from "./NavBar";
import {authResource} from './../authResource'
import { countAll, loadAll } from './reports.utils'


export default {
    name: 'Reports',
    components: {NavBar},
    methods: {
        setPatient(patient)
        {
            sessionStorage.setItem('patient',JSON.stringify(patient));
            this.$router.push('/patients/show')
        },
        loadPatientDueViralCount(){
                this.isLoading = true;

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                    this.payloads.dueSixMonths
                )
                .then(result => {
                    this.isLoading = false
                    this.dueSixMonths = result
                })
                .catch(error => console.warn(error))

        },

        loadPatientDueViralCountTwelve(){
                this.isLoading = true;

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                    this.payloads.dueTwelveMonths
                )
                .then(result => {
                    this.isLoading = false
                    this.dueTwelveMonths = result
                })
                .catch(error => console.warn(error))
        },
        loadPatientDueViralCountYear(){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.dueAfterYear
            )
            .then(result => {
                this.isLoading = false
                this.dueAfterYear = result
            })
            .catch(error => console.warn(error))

        },

        loadPEPFARDefaultersCount (){
            this.isLoading = true;
            
            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.defaultersPEPFAR
            )
            .then(result => {
                this.isLoading = false
                this.defaultersPEPFAR = result
            })
            .catch(error => console.warn(error))

        },

        loadMOHDefaultersCount (){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.defaultersMOH
            )
            .then(result => {
                this.isLoading = false
                this.defaultersMOH = result
            })
            .catch(error => console.warn(error))
        },

        loadPatientsOnDTGCount (){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.patientsOnDTG
            )
            .then(result => {
                this.isLoading = false
                this.patientsOnDTG = result
            })
            .catch(error => console.warn(error))
        },

        loadPEPFARTXCurrentCount (){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.cdctxcurrent
            )
            .then(result => {
                this.isLoading = false
                this.cdctxcurrent = result
            })
            .catch(error => console.warn(error))
        },
        loadMOHTXCurrentCount (){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.mohctxcurrent
            )
            .then(result => {
                this.isLoading = false
                this.mohctxcurrent = result
            })
            .catch(error => console.warn(error))
        },

        loadTomorrowAppointmentsCount (){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.appointmentsTomorrow
            )
            .then(result => {
                this.isLoading = false
                this.appointmentsTomorrow = result
            })
            .catch(error => console.warn(error))
        },

        loadMissedAppointmentsCount (){
            this.isLoading = true

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.appointmentMissers
            )
            .then(result => {
                this.isLoading = false
                this.appointmentMissers = result
            })
            .catch(error => console.warn(error))
        },

        loadLastViralLoadGT1000Count (){
            this.isLoading = true;

            countAll(`${this.APIHosts.art}/${this.BASE_URL}`,
                this.payloads.lastViralLoadGT1000
            )
            .then(result => {
                this.isLoading = false
                this.lastViralLoadGT1000 = result
            })
            .catch(error => console.warn(error))
        },

        countARTStop(){
            countAll(`${this.APIHosts.art}/${this.BASE_URL}`, 
                this.payloads.ARTStop
            )
            .then(result => {
                this.isLoading = false
                this.ARTStop = result
            })
            .catch(error => console.log(error))
        },

        countRestart(){
            countAll(`${this.APIHosts.art}/${this.BASE_URL}`, 
                this.payloads.restart)
            .then(result => {
                this.isLoading = false
                this.restart = result
            })
            .catch(error => console.warn(error))
        },

        countTransIn(){
            countAll(`${this.APIHosts.art}/${this.BASE_URL}`, 
                this.payloads.transIn
            )
            .then(result => {
                this.isLoading = false
                this.transIn = result
            })
            .catch(error => console.warn(error))
        },

        countTransOut(){
            countAll(`${this.APIHosts.art}/${this.BASE_URL}`, 
                this.payloads.transOut
            )
            .then(result => {
                this.isLoading = false
                this.transOut = result
            })
            .catch(error => console.warn(error))
        },

        countDied(){
            countAll(`${this.APIHosts.art}/${this.BASE_URL}`, 
                this.payloads.died
            )
            .then(result => {
                this.isLoading = false
                this.died = result
            })
            .catch(error => console.warn(error))
        },

        loadData(payload){
            this.payload = payload
            loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, payload)
            .then(result => {
                this.isLoading = false
                this.patients = result
            })
            .catch(error => console.log(error))
        },

        loadCumulativeAgeDisaggregates (){
            this.isLoading = true

            const endpoint = `${this.APIHosts.art}/${this.BASE_URL_DISAGG}?code=1&reportStartDate=${null}&reportEndDate=${this.cumulativeEndDate}`

            authResource().get(endpoint)
                .then((response)=>{
                    this.isLoading = false
                    this.cumulativeDisaggregates = response.data.data
                })
                .catch((error)=> console.warn(error))
        },

        loadQuarterlyAgeDisaggregates (){
            this.isLoading = true

            const endpoint = `${this.APIHosts.art}/${this.BASE_URL_DISAGG}?code=2&reportStartDate=${this.quarterlyStartDate}&reportEndDate=${this.quarterlyEndDate}`

            authResource().get(endpoint)
                .then((response)=>{
                    this.isLoading = false
                    this.quarterlyDisaggregates = response.data.data
                })
                .catch((error)=> console.warn(error))
        },
        downloadAgeDisaggregatedReport (code){
            let title = ''
            let startDate = null
            let endDate = null

            if (code === 1)
            {
                title = 'Cumulative-Age-Disaggregated-Report';
                startDate = null;
                endDate = this.cumulativeEndDate;

                if (endDate == null)
                    return
            }else{
                title = 'Quarterly-Age-Disaggregated-Report';
                startDate = this.quarterlyStartDate;
                endDate = this.quarterlyEndDate;

                if (startDate == null || endDate == null)
                    return
            }




            const endpoint = `${this.APIHosts.art}/${this.BASE_URL_DISAGG}/export?code=${code}&reportStartDate=${startDate}&reportEndDate=${endDate}`

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
                    a.download = `${title}_${date.toISOString()}.xlsx`
                    document.body.appendChild(a)
                    a.click()
                    a.remove()
                })

        },
    },
     created(){
        this.loadPatientDueViralCount()
        this.loadPatientDueViralCountTwelve()
        this.loadPatientDueViralCountYear()
        this.loadTomorrowAppointmentsCount()
        this.loadLastViralLoadGT1000Count()
        this.loadPatientsOnDTGCount()
        this.loadPEPFARDefaultersCount()
        this.loadMOHDefaultersCount()
        this.loadMissedAppointmentsCount()
        this.loadPEPFARTXCurrentCount()
        this.loadMOHTXCurrentCount()

        this.countARTStop()
        this.countRestart()
        this.countTransIn()
        this.countTransOut()
        this.countDied()
    },
    data: () => {
        return {
            BASE_URL : 'reports',
            BASE_URL_DISAGG : 'reports/age-disaggregates',
            reports : [],

            dueSixMonths: {},
            dueAfterYear: {},
            dueTwelveMonths: {},
            appointmentsTomorrow: {},
            defaultersPEPFAR: {},
            defaultersMOH: {},
            patientsOnDTG: {},
            appointmentMissers: {},
            lastViralLoadGT1000: {},
            cdctxcurrent: {},
            mohctxcurrent: {},
            patients: [],
            payload:{},
            ARTStop: {},
            restart: {},
            transIn: {},
            transOut: {},
            died: {},
            lt1: '<1',

            payloads: {
                dueAfterYear: {
                    code: 1,
                    type:'dueAfter12Months'
                },
                dueTwelveMonths:{
                    code: 1,
                    type:'due12Months'
                },
                dueSixMonths: {
                     code: 1,
                    type:'due6Months'
                },
                appointmentsTomorrow: {
                    code: 2,
                    type:null
                },
                appointmentMissers: {
                    code: 3,
                    type:null
                },
                lastViralLoadGT1000: {
                    code: 4,
                    type:null
                },
                patientsOnDTG: {
                    code: 5,
                    type:null
                },
                defaultersPEPFAR: {
                    code: 6,
                    type:'PEPFARDefaulters'
                },
                defaultersMOH: {
                    code: 6,
                    type:'MOHDefaulters'
                },
                cdctxcurrent: {
                    code: 7,
                    type:'PEPFARTXCurrent'
                },
                mohctxcurrent: {
                    code: 7,
                    type:'MOHXCurrent'
                },
                ARTStop: {
                    code: 10,
                    type: 'ARTStop'
                },
                restart: {
                    code: 10,
                    type: 'Restart'
                },
                transIn: {
                    code: 10,
                    type: 'Trans-in'
                },
                transOut: {
                    code: 10,
                    type: 'Trans-out'
                },
                died: {
                    code: 10,
                    type: 'Died'
                }
            },

            // cumulativeDisaggregates : null,
            cumulativeDisaggregates : {
                txCurrent : {
                    adults : {
                        males : {
                            disaggregatedByAge : {}
                            },
                        females : {
                            disaggregatedByAge : {}
                            }
                    },
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },defaulted1Month : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },defaulted2Months : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },defaulted3MonthsPlus : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },stopped : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },died : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },transferredOut : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                }
            },
            cumulativeEndDate : null,
            // quarterlyDisaggregates : null,
            quarterlyDisaggregates : {
                txNew : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },reInitiated : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },transferredIn : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },defaulted1MonthPlus : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },defaulted2MonthsPlus   : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },defaulted3MonthsPlus : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },stopped : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },died : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                },transferredOut : {
                    adults : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    pediatrics : {males : {disaggregatedByAge : {}}, females : {disaggregatedByAge : {}},},
                    unknownAge : {}
                }
            },
            quarterlyStartDate : null,
            quarterlyEndDate : null,
        }
    }

}
</script>
