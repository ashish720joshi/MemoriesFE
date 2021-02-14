import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersApi } from '../Redux/User/UserActions';
import { UserState } from '../Models/UsersState';

function Instakilo() {
    const userState: UserState = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('user container mount');
        dispatch(fetchUsersApi());
    }, [])

    return (
        <div>
            Instakilo
            {
                userState &&
                    userState.loading ?
                    "user loading" :
                    userState &&
                        userState.error ?
                        <h1>{userState.error}</h1> :
                        userState &&
                        userState.users.map((user) => {
                            return (
                                <div key={user.id}>
                                    {user.name}
                                </div>
                            )
                        })
            }

        </div>
    )
}

export default Instakilo
