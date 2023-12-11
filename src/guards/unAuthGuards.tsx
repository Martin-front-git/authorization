import React, { useEffect } from 'react';
import { IGuard } from '../models/interfaces/guard';

const UnAuthGuard:React.FC<IGuard> = ({component}) => {
    useEffect(() => {
        console.log("UnAuth Guard");
    }, [component]);

    return <>{component}</>
}

export default UnAuthGuard;