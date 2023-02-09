import { useEffect, useState } from "react";

export default function useProfile(initial = {}, initialNames = {}) {
    const [fetching, setfetching] = useState(false);
    const [inputs, setInputs] = useState(initial)
    const [checkedNames, setcheckedNames] = useState(initialNames);

    useEffect(() => {
        // This function runs when the things we are watching change
        setInputs(initial);
        setcheckedNames(initialNames);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleChange(name: string, value: any) {
        // const value = 'e.target';
        // const name = 'e.target';

        setInputs({
            // copy the existing state
            ...inputs,
            [name]: value,
        });

    
}

return { inputs }
}