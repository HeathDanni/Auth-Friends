import React, { useState} from 'react';
import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    componentDidMount() {
        getFriends();
    };

    getFriends = () => {
        axios
        .get('http://localhost:5000/api/friends')
        .then((res) => {
            console.log('res', res)
            setFriends([
                ...friends,
                res
            ])
        .catch((err) => {
            console.log('err:', err)
        })
        })
    };

    return (
        <div>
            {friends.map((el) => {
                <span>{el.name}</span>
            })}
        </div>
    )
}