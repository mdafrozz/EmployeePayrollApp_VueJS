<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">

    <body>
        <div>
            <!--Header with logo-->
            <header class="header-content header">
                <div class="logo-content">
                    <router-link to="/">
                        <img  class="logo-content-img" src="..\assets\logo.png" alt="logo" width="55" height="55" />
                    </router-link>
                    <div>
                        <span class="emp-text">EMPLOYEE</span><br />
                        <span class="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <!--Form with header and name-->
            <div class="form-content">
                <form class="form" action="#" @submit="submitForm">
                    <div class="form-head">Employee Payroll form</div>

                    <div class="row-content">
                        <label class="label text" for="name">Name</label>
                        <input class="input" type="text" id="name" name="name" placeholder="Your name.."
                            v-model.trim="formValues.name" required />
                    </div>

                    <!--Specify profile pic in the form -->
                    <div class="row-content">
                        <label for="profile" class="label text">Profile Image</label>
                        <div class="profile-radio-content">
                            <label class="profile-label">
                                <input type="radio" id="profile1" name="profile" value="Ellipse-3.png"
                                    v-model="formValues.profilePic" required />
                                <img class="profile" id="image1" src="..\assets\profile-images\Ellipse-3.png" />
                            </label>
                            <label class="profile-label">
                                <input type="radio" id="profile2" name="profile" value="Ellipse-1.png"
                                    v-model="formValues.profilePic" required />
                                <img class="profile" id="image2" src="..\assets\profile-images\Ellipse-1.png" />
                            </label>
                            <label class="profile-label">
                                <input type="radio" id="profile3" name="profile" value="Ellipse-8.png"
                                    v-model="formValues.profilePic" required />
                                <img class="profile" id="image3" src="..\assets\profile-images\Ellipse-8.png" />
                            </label>
                            <label class="profile-label">
                                <input type="radio" id="profile4" name="profile" value="Ellipse-7.png"
                                    v-model="formValues.profilePic" required />
                                <img class="profile" id="image4" src="..\assets\profile-images\Ellipse-7.png" />
                            </label>
                        </div>
                    </div>

                    <!--Specify gender, departments and salary-->
                    <div class="row-content">
                        <label class="label text" for="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" v-model="formValues.gender"
                                required />
                            <label class="text" for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female" v-model="formValues.gender"
                                required />
                            <label class="text" for="female">Female</label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="department">Department</label>
                        <div>
                            <input type="checkbox" id="hr" name="department" value="HR"
                                v-model="formValues.department" />
                            <label class="text" for="hr">HR</label>
                            <input type="checkbox" id="sales" name="department" value="Sales"
                                v-model="formValues.department" />
                            <label class="text" for="sales">Sales</label>
                            <input type="checkbox" id="finance" name="department" value="Finance"
                                v-model="formValues.department" />
                            <label class="text" for="finance">Finance</label>
                            <input type="checkbox" id="engineer" name="department" value="Engineer"
                                v-model="formValues.department" />
                            <label class="text" for="engineer">Engineer</label>
                            <input type="checkbox" id="others" name="department" value="Others"
                                v-model="formValues.department" />
                            <label class="text" for="others">Others</label>
                        </div>
                    </div>

                    <div class="row-content">
                        <label class="label text" for="salary">Salary</label>
                        <input class="input" type="range" id="salary" name="salary" min="350000" max="1000000" 
                            step="50000" oninput="rangeValue.innerText = this.value" v-model="formValues.salary" required>
                        <salary-output id="rangeValue" class="salary-output" for="salary">650000
                        </salary-output>
                    </div>
                    <!--Specify startdate with day, month, year-->
                    <div class="row-content">
                        <label class="label text" for="startDate">Start Date</label>
                        <div>
                            <select id="day" name="Day" v-model="formValues.day" required>
                                <option disabled value="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select id="month" name="Month" v-model="formValues.month" required>
                                <option disabled value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select id="year" name="Year" v-model="formValues.year" required>
                                <option disabled value="">Year</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                    </div>

                    <!--Add notes and buttons-->
                    <!--Using UXdesign set buttton style-->
                    <div class="row-content">
                        <label class="label text" for="notes">Notes</label>
                        <textarea id="notes" class="input" name="notes" placeholder="" style="height: 100px"
                            v-model="formValues.notes" required></textarea>
                    </div>
                    <div class="buttonParent">
                        <router-link to="/">
                            <button type="submit" class="resetButton button cancelButton">
                                Cancel
                            </button>
                        </router-link>
                        <div class="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton">
                                Submit
                            </button>
                            <input type="reset" class="resetButton button" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </body>
</template>

<script>
import EmployeePayrollservice from '../service/EmployeePayrollservice';

export default {
    name: "AddEmployee",
    data() {
        return {
            formValues: {
                name: '',
                salary: '',
                notes: '',
                day: '',
                month: '',
                year: '',
                department: [],
                gender: '',
                profilePic: '',
                startDate: '',
            },
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            this.formValues.startDate =
                this.formValues.day + this.formValues.month + this.formValues.year;

            const data = this.formValues;

            EmployeePayrollservice.addEmployee(data)
                .then((response) => {
                    console.log(response);
                    console.log(response.data.data);
                    this.employees = response.data.data;
                    alert("Employee Added Successfully!!", response);
                    location.reload();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error while adding employee..!");
                });
        },
    },
};
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
    margin-left: 3px;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

.form-content {
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form {
    width: 65%;
    padding: 44px 60px;
    margin-top: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.form-head {
    font: normal normal bold 24px/37px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}

.label {
    min-width: 140px;
}

.text {
    font-size: 16px;
    color: #42525f;
    opacity: 1;
    font-family: Roboto;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 5px;
    position: relative;
    margin-right: 30px;
}

.profile-radio-content>label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.buttonParent {
    display: flex;
    margin: 10px;
    justify-content: space-between;
    margin: 20px;
}

.button {
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: transparent;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border-radius: 5px;
    border: 1px solid #707070;
    margin-top: 20px;
    cursor: pointer;
}

.button:hover {
    background: #82a70c;
}

.submitButton {
    border: none;
    background-color: lightgrey;
    margin-right: 30px;
}

.resetButton {
    border: none;
    background-color: lightgrey;
    margin-right: 30px;
}

.cancelButton {
    text-decoration: none;
    text-align: center;
}
</style>
