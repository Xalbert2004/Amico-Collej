import React from 'react';
import { useState } from 'react';
import styles from '../signUp/signUp.module.scss';
import {   useNavigate } from 'react-router-dom';
import axios from "axios";



export default function SignUp({ setActive }) {

  const [login, setLogin] = useState(true);

  let history = useNavigate();
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  })
  
  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});

  }

  const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
      name:data.name,
      email:data.email,
      password:data.password
    }

    console.log(sendData);

    axios.post('', sendData)
    .then((result)=>{
      if (result.data.Status === 'Invalid'){
        alert('Invalid User');
      }
      else{
        history(`/dashboard`)
      }
      
    })
  }

  return (
    <>
    {login ? (
        <div className={styles.modal} onClick={() => setActive(false) } >
          <div className={styles.modal_content} onClick={(e) => e.stopPropagation()} >
          <form onSubmit={submitForm} className={styles.signUp}>
                <p className={styles.title}>Գրանցում</p>
                <p className={styles.text}>Գրանցվիր անվճար և օգտվիր մեր ծաոայություններից</p>
                <input onChange={handleChange} name="name" value={data.name} className={styles.inp_sign} type="text" placeholder='Login' />
                <input onChange={handleChange} name="password" value={data.password} className={styles.inp_sign2} type="password" placeholder='Password' />
                <input onChange={handleChange} name="email" value={data.email}  className={styles.inp_sign2} type="email" placeholder='Email' />
                <div className={styles.chekb_block}>
                  <div>
                    <input  id="chbox" name="chbox" type="checkbox" />
                    <label for="chbox"   style={{fontSize:'16px', color:'black'}} >Համաձայն եմ</label>
                  </div>
                  {/* <p style={{fontSize:'16px', color:'red'}} >Մոռացել եք Գաղտնաբաոը՞</p> */}
                </div>
                <input className={styles.submit} type="submit" value="Գրանցվել" />
                {/* <button>Գրանցվել</button> */}
                <p style={{}} onClick={() => setLogin(false)}>Մունք գործել</p>
            </form>
          </div>
        </div>

    ):(
      <div className={styles.modal} onClick={() => setActive(false) } >
          <div className={styles.modal_content} onClick={(e) => e.stopPropagation()} >
            <form action="" className={styles.signUp}>
                <p className={styles.title}>Մունք Գործել</p>
                {/* <p className={styles.text}>Գրանցվիր անվճար և օգտվիր մեր ծաոայություններից</p> */}
                <input className={styles.inp_sign} type="text" placeholder='Login' />
                <input className={styles.inp_sign2} type="password" placeholder='Password' />
                {/* <input className={styles.inp_sign2} type="email" placeholder='Email' /> */}
                <div className={styles.chekb_block}>
                  {/* <div>
                    <input  id="chbox" name="chbox" type="checkbox" />
                    <label for="chbox"   style={{fontSize:'16px', color:'black'}} >Համաձայն եմ</label>
                  </div> */}
                  <p style={{fontSize:'16px', color:'red'}} >Մոռացել եք Գաղտնաբաոը՞</p>
                </div>
                <input className={styles.submit} type="submit" value="Մտնել" />
                <p onClick={() => setLogin(true)}>Գրանցվել</p>
                
            </form>
          </div>
        </div>
    )
      } 
    </>

  )
}
// onClick={(e) => e.stopPropagation