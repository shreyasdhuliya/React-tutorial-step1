import React from 'react';

const HeroName = ({name, heroName}) => {
return <h1>{name} aka {heroName}</h1>
}

const HeroName2 = (props) => {
    const {name, heroName} = props;
    return <h1>{name} aka {heroName}</h1>
    }

export {HeroName, HeroName2};