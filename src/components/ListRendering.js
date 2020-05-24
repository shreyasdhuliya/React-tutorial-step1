import React from 'react';

import Person from './person3';

const ListRendering = () => {
    const names = ['shreyas','simi','jivesh', 'komal'];

    return (
        <div>
            {names.map(name => <span>{name } </span>)}
        </div>
    );
}

const ListRendering2 = () => {
    const names = ['shreyas','simi','jivesh', 'komal'];
    var namesList = names.map(name => <span>{name } </span>);
    return (
        <div>
            {namesList}
        </div>
    );
}

const ListRendering3 = () => {
    const names = [{name:'shreyas'},{name:'simi'},{name:'jivesh'},{name: 'komal'}];
    var namesList = names.map(n => <span>{n.name } </span>);
    return (
        <div>
            {namesList}
        </div>
    );
}

const ListRendering4 = () => {
    const names = [{name:'shreyas'},{name:'simi'},{name:'jivesh'},{name: 'komal'}];
    var namesList = names.map(n => <span><Person name={n.name } key={n.id} /> </span>);
    //var namesList = names.map((n,index) => <span><Person name={n.name } key={index} /> </span>);
    return (
        <div>
            {namesList}
        </div>
    );
}

export {ListRendering, ListRendering2,ListRendering3,ListRendering4};