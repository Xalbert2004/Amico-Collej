import React from 'react';
import styles from '../signUp/signUp.module.scss'

export default function SignUp({ setActive }) {
  return (
    <div className={styles.modal} onClick={() => setActive(false) } >
        <div className={styles.modal_content} onClick={(e) => e.stopPropagation()} >
            <div className={styles.signUp}>
                <p className={styles.title}>Գրանցում</p>
                <p className={styles.text}>Գրանցվիր անվճար և օգտվիր մեր ծաոայություններից</p>
                <input className={styles.inp_sign} type="text" placeholder='Login' />
                <input className={styles.inp_sign2} type="password" placeholder='Password' />
                <div className="chekb_block">
                    <input  id="chbox" name="chbox" type="checkbox" />
                    <label for="chbox"   style={{fontSize:'16px', color:'black'}} >Համաձայն եմ</label>
                    <p style={{fontSize:'16px', color:'red'}} >Մոռացել եք Գաղտնաբաոը՞</p>
                </div>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}
// onClick={(e) => e.stopPropagation