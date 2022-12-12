import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';

const MAXIMUN_COUNT = 10;


export const useCounter = () => {

    
    const [ counter, setCounter ] = useState( 5 );


    const counterElement = useRef<HTMLHeadingElement>( null );

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT));
    }

    useEffect( () => {

        if( counter < 10 ) return;

        console.log('%cSe llego al valor maximo','color:red; background-color:black');

        const tl = gsap.timeline();

        tl.to(counterElement.current,{ y: -10, duration: 0.2 ,ease: 'ease.out' })
            .to(counterElement.current,{ y: 0, duration: 1 ,ease: 'bounce.out' });
           

    },[ counter ]);

    return {
        counter,
        counterElement,
        handleClick,
    }

}
