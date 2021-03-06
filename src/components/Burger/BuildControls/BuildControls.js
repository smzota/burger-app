import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meet'},
]
const buildContols = (propr)=>{
    <div className={classes.BuildControls}>
        {controls.map((cntrl)=>{
            <BuildControl key={cntrl.label} label={cntrl.label} />
        })}
    </div>
};

export default buildContols