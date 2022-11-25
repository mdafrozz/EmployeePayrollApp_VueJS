<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;1,500&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">

    <body>
        <header class="header-content header">
            <div class="logo-content">
                <img  class="logo-content-img" src="..\assets\logo.png" alt="logo" width="55" height="55" />
                <div>
                    <span class="emp-text">EMPLOYEE</span><br>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>

        <div class="main-content">
            <div class="header-content sub-main-content">
                <div class="emp-detail-text">
                    Employee Details <div class="emp-count">{{employees.length}}</div>
                </div>
                <router-link to="/addemployee" class="add-button">
                    <img src="..\assets\icons\add.svg" alt="">&nbsp;<span>Add User</span>
                </router-link>
            </div>

            <div class="table-main">
                <table class="table" id="display">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                    
                    <tr v-for="employee in employees" :key="employee">
                        <td><img :src="`../assets/profile-images/${employee.profilePic}`" /></td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.gender }}</td>
                        <td><div class="dept-label" v-for="dept in employee.department" :key="dept">{{dept}}</div></td>
                        <td>{{ employee.salary }}</td>
                        <td>{{ employee.startDate }}</td>
                        <td>{{ employee.notes }}</td>
                        <td>
                            <img @click="update(employee.employeeId)" src="..\assets\icons\create-black-18dp.svg" alt="edit" width="30" height="30" />
                            <img @click="remove(employee.employeeId)" src="..\assets\icons\delete-black-18dp.svg" alt="delete" width="30" height="30" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</template>

<script>
import EmployeePayrollService from "../service/EmployeePayrollservice"

export default {
    name: "HomePage",
    data() {
       
        return {
            employees: [],
            
        };
    },
    methods: {
        displayMessage() {
            console.log("Welcome to Employee Payroll App..!!");
        },
        getEmployees() {
            EmployeePayrollService.getAllEmployees().then((response) => {
                console.log(response.data);
                this.employees = response.data;
            });
        },
        update(id) {
      console.log(id);
      this.$router.push({ name: "EditEmployee", params: { id: id } });
    },
    remove(id) {
      console.log(id);
      EmployeePayrollService.deleteEmployee(id)
        .then((data) => {
          var answer = window.confirm(
            " Employee data once deleted cannot be restored!! Do you wish to continue ?",
            data
          );
          if (answer === true) {
            alert("Employee data deleted successfully!!");
            window.location.reload();
            this.getEmployees();
          } else {
            window.location.reload();
          }
        })
        .catch((error) => {
            console.log(error);
          alert("Something Went Wrong!");
        });
    },

    },
    created() {
        this.displayMessage();
        this.getEmployees();
    }
}
</script>

<style lang="scss" scoped>
.logo-content-img {
  border: solid 0px #42515f;
}
.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}


.emp-text {
    font: normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

* {
    box-sizing: border-box;
}

.main-content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    background-color: #f7f7f7;
    padding: 30px 0 10px;
    box-sizing: border-box;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
}

.emp-detail-text {
    font: normal normal bold 24px/25px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}

.emp-count {
    background-color: #82a70c;
    color: #ffffff;
    border-radius: 42%;
    font-size: 16px;
    width: 26px;
    text-align: center;
    display: inline-block;
}

.add-button {
    font: normal normal 22px/29px Roboto;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    background: #82a70c 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 5px;
    padding: 5px 18px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
}

.table-main {
    width: 80%;
    margin: 0 auto;
    overflow: auto;
}

.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    min-width: 800px;

}

td,
th {
    text-align: left;
    padding: 5px 8px;

}

th {
    background: #42515f 0% 0% no-repeat padding-box;
    border-radius: 0px;
    text-align: left;
    font: normal normal normal 14px/24px Roboto;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    border: 0px solid #dddddd;
    padding: 8px;
}


td {
    font: normal normal normal 14px/21px Roboto;
    letter-spacing: 0px;
    color: #3d3d3d;
    opacity: 1;
}

td:first-child {
    display: flex;
    align-items: center;
}

td img:first-child {
    margin-right: 10px;

}

td img {
    cursor: pointer;
}

.dept-label {
    background-color: #e9fea5;
    border-radius: 40%;
    width: fit-content;
    padding: 1px 7px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    font-size: 300;
    margin-bottom: 8px;
    margin-right: 8px;
}
</style>