import axios from "axios"

// Using VITE environment variable for backend URL
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Fetch all About entries
export const fetchAbout = async (setAboutList) => {
    try {
        const { data } = await axios.get(`${backendUrl}/api/about`);
        setAboutList(data);  // Set the state with fetched data
    } catch (error) {
        console.error("Error fetching about data", error.message);
    }
};

// Delete an About entry by ID
export const deleteAbout = async (id, fetchAbout) => {
    try {
        await axios.delete(`${backendUrl}/api/about/${id}`);
        fetchAbout();  // Refresh the list after deletion
    } catch (error) {
        console.error("Error deleting about entry", error.message);
    }
};

// Add a new About entry
export const addAbout = async (title, content) => {
    try {
        await axios.post(`${backendUrl}/api/about`, { title, content });
    } catch (error) {
        console.error("Error adding about entry", error.message);
    }
};
