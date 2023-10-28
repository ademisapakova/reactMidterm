import React, { useState } from 'react';

function UserProfile() {
    const [userData, setUserData] = useState({
        name: 'Lisa',
        surname: 'S',
        birthday: '1999-09-08',
        email: 'lisa@example.com',
        password: '********',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div>
            <h1>User Profile</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="surname">Surname:</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={userData.surname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={userData.birthday}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default UserProfile;
