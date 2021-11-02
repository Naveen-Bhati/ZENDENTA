import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../actions/userActions';
import { CalendarMain } from './MainCalendar.elements'



const MainCalendar = () => {
    const dispatch = useDispatch();
    const { users, error, loading } = useSelector(state => state.userList)


    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])



    return (
        <CalendarMain>

            {loading && <h2>Loading...</h2>}
            {error
                ?
                <h2>Error</h2>
                :
                users.map((user) =>
                    <h1 key={user._id}>{user.name} ---{user.email} --- {user.phone}</h1>
                )}

        </CalendarMain>
    )
}

export default MainCalendar
