<template>
    <div>
        <div class="form-group">
            <router-link :to="{ name: 'companies' }" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit company</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company name</label>
                            <input type="text" v-model="company.name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company address</label>
                            <input type="text" v-model="company.address" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company website</label>
                            <input type="text" v-model="company.website" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Company email</label>
                            <input type="text" v-model="company.email" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let app       = this;
            let id        = app.$route.params.id;
            app.companyId = id;
            var url       = '/Laravel_Vue_CRUD/api/v1/companies/'+id;
            
            axios.get(url)
                .then(function (resp) {
                    app.company = resp.data;
                })
                .catch(function () {
                    alert("Could not load your company");
                });
        },
        data() {
            return {
                companyId: null,
                company: {
                    name    : '',
                    email   : '',
                    address : '',
                    website : '',
                }
            }
        },
        methods: {
            saveForm() {
                var app        = this;
                var newCompany = app.company;
                var url        = '/Laravel_Vue_CRUD/api/v1/companies/'+app.companyId;
                
                axios.patch(url, newCompany)
                    .then(function (resp) {
                        app.$router.push({ name: 'companies' });
                        // app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
