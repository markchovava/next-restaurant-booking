import { toast, ToastOptions, Bounce, ToastPosition } from "react-toastify"; // Import ToastPosition


export const reactToastifyDark: ToastOptions = { // Explicitly type reactToastifyDark
    position: "top-right" as ToastPosition, // Assert the type for position
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
};