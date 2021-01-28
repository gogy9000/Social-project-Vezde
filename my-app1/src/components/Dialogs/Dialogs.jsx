import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
       
    <div className={s.Dialogs}>
        <div className={s.Dialogs_items}>
            <div className={s.Dialog+' '+s.active}>
               Motherfucker1
            </div>
            <div className={s.Dialog}>
               Motherfucker2
            </div>
            <div className={s.Dialog}>
               Motherfucker3
            </div>
            <div className={s.Dialog}>
               Motherfucker4
            </div>
            <div className={s.Dialog}>
               Motherfucker5
            </div>
            <div className={s.Dialog}>
               Motherfucker6
            </div>
        </div>
        <div className={s.Messages}>
            <div className={s.Message}>
              fuck you
            </div> 
            <div className={s.Message}>   
            no, fuck you
            </div>
            <div className={s.Message}>
              where is my many, Lebovsky?
            </div>
            <div className={s.Message}>
               what you say, motherfucker?
            </div>
            <div className={s.Message}>
               yo yo yo
            </div>
            <div className={s.Message}>
              no no no 
            </div>
        </div>    
             
        
    </div>
        
    )
}
export default Dialogs;