import { useState, useEffect } from 'react';
import axios from "axios"
import Swal from 'sweetalert2'

import styles from "./Login.module.css"
import { useNavigate } from 'react-router';





const Login = () => {

    const Navigate = useNavigate();
  

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
                    Navigate("/home")
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

            

           
	<div className="container">
	
		<div className={styles.logincontent} style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
}}>
			<form className={styles.form}>
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"/>
				<h2 className={styles.title}>Welcome</h2>
           		<div className={styles.input_div_one}>
           		 
           		   <div className={styles.div}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
           		   		<input type="text" placeholder='username' value={empno} onChange={(e) => { setEmpno(e.target.value) }} name="empno" className={styles.input}/>
           		   </div>
           		</div>
           		<div className={styles.input_div_pass}>
           		
           		   <div className={styles.div}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-lock-fill" viewBox="0 0 16 16">
  <path d="M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z"/>
</svg>
           		    	<input type="password" placeholder='password' name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password"  className={styles.input}/>
            	   </div>
            	</div>
            	
            	<input type="submit" onClick={getData}  className={styles.btn} value="Login"/>
            </form>
        </div>
    </div>
    
        </>
    )
}
export default Login;