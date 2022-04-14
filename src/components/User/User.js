import React from 'react';
import css from './user.module.css'

const User = ({user, getUserId, getUser, setUserId}) => {
    const {id, name, username} = user;
    return (
        <div className={css.user}>
            <p className={css.pUser}>{id} | {name} | {username}</p>
            <button onClick={()=>{
                // getUserId(id)
                setUserId(false)
                getUser(user)
            }}>User Details</button>
        </div>
    );
};

export {User};
