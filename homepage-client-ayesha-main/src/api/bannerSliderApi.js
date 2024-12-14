const backendUrl = import.meta.env.VITE_BACKEND_URL;

console.log("Backend URL:", backendUrl)

export const getBanners = async () => {
    const response = await fetch(`${backendUrl}/api/banners`)
    if (!response.ok) throw new Error('Failed to fetch banners')
    return await response.json()
}


export const addBanner = async (formData) => {
    const response = await fetch(`${backendUrl}/api/banners`, {
        method: "POST",
        body: formData,
    })

    if (!response.ok) {
        const error = await response.json()
        console.error("Error adding banner:", error)
        throw new Error("Failed to add banner")
    }

    return await response.json()
};



export const deleteBanner = async (id) => {
    const response = await fetch(`${backendUrl}/api/banners/${id}`, {
        method: 'DELETE',
    });

    console.log("Response from server:", response);

    if (!response.ok) {
        throw new Error('Failed to delete banner');
    }

    return await response.json();
}
