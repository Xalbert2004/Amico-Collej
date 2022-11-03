import React from 'react';
import { useState } from 'react';
import styles from '../signUp/signUp.module.scss'

export default function SignUp({ setActive }) {

  const [login, setLogin] = useState(true);
  return (
    <>
    {login ? (
        <div className={styles.modal} onClick={() => setActive(false) } >
          <div className={styles.modal_content} onClick={(e) => e.stopPropagation()} >
          <form action="" className={styles.signUp}>
                <p className={styles.title}>Գրանցում</p>
                <p className={styles.text}>Գրանցվիր անվճար և օգտվիր մեր ծաոայություններից</p>
                <input className={styles.inp_sign} type="text" placeholder='Login' />
                <input className={styles.inp_sign2} type="password" placeholder='Password' />
                <input className={styles.inp_sign2} type="email" placeholder='Email' />
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