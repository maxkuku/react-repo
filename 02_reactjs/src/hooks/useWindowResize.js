import {useState, useEffect} from 'react'


export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            // console.log('window width is ' + width + 'px');
            window.removeEventListener('resize', handleResize);
        };
    });

    //console.log('window width is ' + width + 'px');
    return width;
}

