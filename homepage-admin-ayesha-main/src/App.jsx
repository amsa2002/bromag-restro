import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

//page imports
import { Login, DashboardLayout, Dashboard, Banners, AddBanner, EditBanner, DiningFeatures, EditDiningFeature, AddDiningFeature, Cuisines, AddCuisine, EditCuisine, SignatureFoods, AddSignatureFood, EditSignatureFood, OtherFeatures, AddOtherFeature, EditOtherFeature, Offers, AddOffer, EditOffer, Gallery, AddGalleryImage, EditGalleryImage, Enquiries, Error, Blogs, AddBlog, EditBlog } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "banners",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Banners />,
              },
              {
                path: "add-banner",
                element: <AddBanner />,
              },
              {
                path: "edit-banner",
                element: <EditBanner />,
              },
            ],
          },
          {
            path: "blogs",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Blogs />,
              },
              {
                path: "add-blog",
                element: <AddBlog />,
              },
              {
                path: "edit-blog",
                element: <EditBlog />,
              },
            ],
          },
          {
            path: "offers",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Offers />,
              },
              {
                path: "add-offer",
                element: <AddOffer />,
              },
              {
                path: "edit-offer",
                element: <EditOffer />,
              },
            ],
          },
          {
            path: "dining-features",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <DiningFeatures />,
              },
              {
                path: "add-dining-feature",
                element: <AddDiningFeature />,
              },
              {
                path: "edit-dining-feature",
                element: <EditDiningFeature />,
              },
            ],
          },
          {
            path: "cuisines",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Cuisines />,
              },
              {
                path: "add-cuisine",
                element: <AddCuisine />,
              },
              {
                path: "edit-cuisine",
                element: <EditCuisine />,
              },
            ],
          },
          {
            path: "signature-foods",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <SignatureFoods />,
              },
              {
                path: "add-signature-food",
                element: <AddSignatureFood />,
              },
              {
                path: "edit-signature-food",
                element: <EditSignatureFood />,
              },
            ],
          },
          {
            path: "other-features",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <OtherFeatures />,
              },
              {
                path: "add-other-feature",
                element: <AddOtherFeature />,
              },
              {
                path: "edit-other-feature",
                element: <EditOtherFeature />,
              },
            ],
          },
          {
            path: "gallery",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Gallery />,
              },
              {
                path: "add-gallery-image",
                element: <AddGalleryImage />,
              },
              {
                path: "edit-gallery-image",
                element: <EditGalleryImage />,
              },
            ],
          },
          {
            path: "enquiry",
            element: <Enquiries />
          }
        ],
      },

    ],
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
