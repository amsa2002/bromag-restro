import { useNavigate, Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
//react-icon imports
import { FiPlus } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { fetchAbout, deleteAbout } from "../../api/AboutUsApi.js"

const AboutUs = () => {
    const [about, setAbout] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAbout(setAbout);  // Fetch the about list when the component mounts
    }, []);

    const handleDelete = async (id) => {
        await deleteAbout(id, () => fetchAbout(setAbout));  // Refresh the list after deletion
    }

    return (
        <main className="page">
            <div className="page-header">
                <h1>About Us</h1>
                <button type='button' onClick={() => navigate('/dashboard/about/add-about')}><FiPlus className="icon" />Add about</button>
            </div>

            <section>
                <div className="card-deck">
                {about.map((about) => (
                        <div className="card" key={about._id}>
                            <div className="card-title">
                                <h2>{about.title}</h2>
                            </div>
                            <div className="card-body">
                                <div className="card-icons">
                                    <Link className="edit" to={`/dashboard/about/edit-about/${about._id}`}>
                                        <GrEdit />
                                    </Link>
                                    <span className="delete" onClick={() => handleDelete(about._id)}>
                                        <RiDeleteBin5Line />
                                    </span>
                                </div>
                                <div className="card-content">
                                    <p>{about.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default AboutUs