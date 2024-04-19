import React, { useRef, useState } from 'react';
import './upnext.css';
import { IPlayListItemsProperty } from '../../types';
import { IconContext } from 'react-icons';
import { FcPrevious, FcNext } from "react-icons/fc";

export default function UpNext(data: { items: Array<IPlayListItemsProperty>, setUpNextIndex: any, sliceIndex: number }) {
    const { items, setUpNextIndex, sliceIndex } = data;
    const [prevOrNext, setPrevOrNext] = useState('Up Next');
    const containerRef = useRef<HTMLDivElement | null>(null);

    if (items && items.length > 1) {
        function handleUpNextOrPrevious() {
            setPrevOrNext(prevState => (prevState === 'Up Next' ? 'Previous Songs' : 'Up Next'));
        }

        const displayItems = prevOrNext === 'Up Next'
            ? items.slice(sliceIndex + 1) // Display items from sliceIndex + 1 to the end
            : items.slice(0, sliceIndex)// Display items from the beginning to sliceIndex in reverse order

        function handleItemClick(index: number) {
            if (sliceIndex) {
                const nextIndex = prevOrNext === 'Up Next'
                    ? index + 1 + sliceIndex
                    : (index);
                setUpNextIndex(nextIndex);
            } else {
                setUpNextIndex(index + 1);
            }

            // Scroll to the top of the container
            if (containerRef.current) {
                const firstChild = containerRef.current.firstChild as HTMLElement;
                firstChild.scrollIntoView({ behavior: 'smooth' });
            }
        }
        return (
            <div className='up-next-container'>
                <div className='up-next-or-prev' onClick={handleUpNextOrPrevious}>
                    <h1>{prevOrNext}</h1>
                    <IconContext.Provider value={{ size: '20px' }}>
                        {prevOrNext === 'Up Next' ? <FcPrevious /> : <FcNext />}
                    </IconContext.Provider>
                </div>
                {displayItems.map((item: any, index: number) => (
                    <span key={index} className="up-next-item" onClick={() => handleItemClick(index)}>
                        <span className="index">{sliceIndex ? (prevOrNext === 'Up Next' ? sliceIndex + index + 2 : index + 1) : index + 2}</span>
                        {item?.track?.name}
                    </span>
                ))}
            </div>
        );
    }
}
