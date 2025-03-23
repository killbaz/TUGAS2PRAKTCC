import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    const addNote = () => {
        if (note.trim() !== "") {
            setNotes([...notes, note]);
            setNote("");
        }
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <div className="p-6 bg-gradient-to-r from-pink-300 to-purple-400 min-h-screen flex flex-col items-center">
            <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">User List</h1>
                <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-purple-500 text-white">
                            <th className="border border-gray-300 px-4 py-2">No</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Gender</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="bg-gradient-to-r from-yellow-200 to-pink-200 hover:from-yellow-300 hover:to-pink-300 transition-all">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
                                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded shadow transition-all">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded shadow transition-all">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Notes Section */}
            <div className="w-full max-w-2xl mt-10 bg-white p-6 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Add a Note</h2>
                <textarea
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    rows="4"
                    placeholder="Write your note here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                ></textarea>
                <button 
                    className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mt-2 transition-all"
                    onClick={addNote}
                >
                    Add Note
                </button>
                <div className="mt-6 flex flex-wrap gap-4">
                    {notes.map((note, index) => (
                        <div key={index} className="bg-yellow-300 p-4 rounded-lg shadow-lg w-64 transform rotate-1 hover:rotate-0 transition-transform relative">
                            <p className="text-gray-800">{note}</p>
                            <button 
                                className="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-full text-xs transition-all"
                                onClick={() => deleteNote(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserList;
