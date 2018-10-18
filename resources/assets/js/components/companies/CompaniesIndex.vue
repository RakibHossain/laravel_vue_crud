<template>
    <div>
        <div class="form-group">
            <router-link :to="{ name: 'createCompany' }" class="btn btn-success">Create new company</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                Companies list <span class="badge">{{ companies.length }}</span>
            </div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="company, index in companies">
                        <td>{{ company.name }}</td>
                        <td>{{ company.address }}</td>
                        <td><a href="#">{{ company.website }}</a></td>
                        <td>{{ company.email }}</td>
                        <td>
                            <router-link :to="{name: 'editCompany', params: {id: company.id}}" class="btn btn-xs btn-info">Edit</router-link>
                            <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteCompany(company.id, index)">Delete</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                companies: []
            }
        },
        mounted() {
            var app = this;
            var url = '/Laravel_Vue_CRUD/api/v1/companies';
            
            axios.get(url)
                .then(function (resp) {
                    console.log(resp);
                    app.companies = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load companies");
                });
        },
        methods: {
            deleteCompany(id, index) {
                if (confirm("Do you really want to delete it ?")) {
                    var app = this;
                    var url = '/Laravel_Vue_CRUD/api/v1/companies/'+id;
                    axios.delete(url)
                        .then(function (resp) {
                            app.companies.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            }
        }
    }
</script>
