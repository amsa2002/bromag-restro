import { useNavigate, Link } from "react-router-dom"
//react-icon imports
import { FiPlus } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

import avatar2 from '../../assets/images/avatar2.webp'

const Blogs = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Blogs</h1>
                <button type='button' onClick={() => navigate('/dashboard/blogs/add-blog')}><FiPlus className="icon" />Add blog</button>
            </div>

            <section>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-img">
                            <img src={avatar2} alt="" />
                        </div>

                        <div className="card-body">
                            <div className="card-icons">
                                <Link className="edit" to="/dashboard/blogs/edit-blog"><span >
                                    <GrEdit />
                                </span></Link>

                                <span className="delete">
                                    <RiDeleteBin5Line />
                                </span>
                            </div>

                            <div className="card-content">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque exercitationem delectus, accusamus fugit, maxime totam repellat sunt libero explicabo cum odit nam magni magnam eveniet amet debitis dolorum quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus consequuntur odio mollitia cupiditate aperiam expedita, deleniti, distinctio aspernatur animi quam? Cumque, praesentium iusto. Sint officia mollitia accusamus libero amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias alias explicabo doloremque blanditiis ipsa ex, perferendis cupiditate rerum quo totam iste architecto consequuntur enim officiis ut nemo esse provident asperiores.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src={avatar2} alt="" />
                        </div>

                        <div className="card-body">
                            <div className="card-icons">
                                <Link className="edit" to="/dashboard/blogs/edit-blog"><span >
                                    <GrEdit />
                                </span></Link>

                                <span className="delete">
                                    <RiDeleteBin5Line />
                                </span>
                            </div>

                            <div className="card-content">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque exercitationem delectus, accusamus fugit, maxime totam repellat sunt libero explicabo cum odit nam magni magnam eveniet amet debitis dolorum quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus consequuntur odio mollitia cupiditate aperiam expedita, deleniti, distinctio aspernatur animi quam? Cumque, praesentium iusto. Sint officia mollitia accusamus libero amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias alias explicabo doloremque blanditiis ipsa ex, perferendis cupiditate rerum quo totam iste architecto consequuntur enim officiis ut nemo esse provident asperiores.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={avatar2} alt="" />
                        </div>

                        <div className="card-body">
                            <div className="card-icons">
                                <Link className="edit" to="/dashboard/blogs/edit-blog"><span >
                                    <GrEdit />
                                </span></Link>

                                <span className="delete">
                                    <RiDeleteBin5Line />
                                </span>
                            </div>

                            <div className="card-content">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque exercitationem delectus, accusamus fugit, maxime totam repellat sunt libero explicabo cum odit nam magni magnam eveniet amet debitis dolorum quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus consequuntur odio mollitia cupiditate aperiam expedita, deleniti, distinctio aspernatur animi quam? Cumque, praesentium iusto. Sint officia mollitia accusamus libero amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias alias explicabo doloremque blanditiis ipsa ex, perferendis cupiditate rerum quo totam iste architecto consequuntur enim officiis ut nemo esse provident asperiores.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={avatar2} alt="" />
                        </div>

                        <div className="card-body">
                            <div className="card-icons">
                                <Link className="edit" to="/dashboard/blogs/edit-blog"><span >
                                    <GrEdit />
                                </span></Link>

                                <span className="delete">
                                    <RiDeleteBin5Line />
                                </span>
                            </div>

                            <div className="card-content">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque exercitationem delectus, accusamus fugit, maxime totam repellat sunt libero explicabo cum odit nam magni magnam eveniet amet debitis dolorum quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus consequuntur odio mollitia cupiditate aperiam expedita, deleniti, distinctio aspernatur animi quam? Cumque, praesentium iusto. Sint officia mollitia accusamus libero amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias alias explicabo doloremque blanditiis ipsa ex, perferendis cupiditate rerum quo totam iste architecto consequuntur enim officiis ut nemo esse provident asperiores.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Blogs