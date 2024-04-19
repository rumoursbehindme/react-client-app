import React, { useState } from 'react';
import './style.css';

interface ViewSwitcherProps {
    onChangeView: (view: 'grid' | 'list') => void;
}

const SwitchView: React.FC<ViewSwitcherProps> = ({ onChangeView }) => {
    const [inListView, setInListView] = useState(false)
    return (
        <div className='switch-class'>
            <button className={inListView ? '' : 'in-view'}
                onClick={() => {
                    onChangeView('grid')
                    setInListView(false);
                }}>Grid View</button>
            <button className={inListView ? 'in-view' : ''}
                onClick={() => {
                    onChangeView('list');
                    setInListView(true);
                }}>List View</button>
        </div>
    );
};

export default SwitchView;
