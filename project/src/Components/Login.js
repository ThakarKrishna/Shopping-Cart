import { useState, useEffect } from 'react';
import axios from "axios"
import Swal from 'sweetalert2'

import styles from "./Login.module.css"
import { useNavigate } from 'react-router';





const Login = () => {

    const Navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("Token");
        if (!token) {
            console.log("home")
            Navigate("/login");
        }
        //  else {
        //     Navigate("/home");
        // }
    }, [])

    const [empno, setEmpno] = useState("");
    const [password, setPassword] = useState("");

    const getData = (e) => {
        e.preventDefault();

        const details = {
            empno, password
        }
        if (empno !== "" || password !== "") {
            axios.post("http://103.138.234.244:9067/api/Login/Login", details).then((response) => {
                console.log(response.status)
                console.log(response.data.data);
                //    let token = response.data.data.tokenData;
                localStorage.setItem("Token", response.data.data.tokenData)


                if (response.data.data.tokenData != "") {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Login',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    Navigate("/")
                }


            }).catch(error => {

                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Incorrect Employee number or Password',
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Employee no and password Required',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        };







    }
    const inputs = document.querySelectorAll(".input");


    function addcl(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }
    
    function remcl(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }
    
    
    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });
    

    return (
     <>

            

           
	<div class="container">
	
		<div class={styles.logincontent}>
			<form>
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" value={empno} onChange={(e) => { setEmpno(e.target.value) }} name="empno" class="input"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password"  class="input"/>
            	   </div>
            	</div>
            	
            	<input type="submit" onClick={getData}  class="btn" value="Login"/>
            </form>
        </div>
    </div>
    
        </>
    )
}
export default Login;