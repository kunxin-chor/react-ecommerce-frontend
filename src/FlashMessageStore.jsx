import { atom, useAtom} from 'jotai';

const flashMessageAtom = atom({
    'message': '',
    'type': 'info' // danger, success, info etc (mapped to bootstrap alert classes)
})

// the useFlashMessage hook will allow other components to set the flash message or to remove the flash message
export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessage = (message, type="info") => {
        setFlashMessage({
            message,
            type
        })

        setTimeout(()=>{
            clearMessage();
        }, 5000)
    }

    const clearMessage = () => {
        setFlashMessage({
            message: "",
            type:"info"
        })
    }

    return {
        flashMessage,
        showMessage,
        clearMessage
    }
}

