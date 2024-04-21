import {useEffect} from 'react';

const UseTitle = (title: unknown) => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title]);
};

export default UseTitle;