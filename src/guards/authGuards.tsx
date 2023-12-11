import React, {  useEffect } from 'react';
import { IGuard } from '../models/interfaces/guard';



const AuthGuard: React.FC<IGuard> = ({component}) => {
    useEffect(() => {
        console.log("Auth Guard");
        
    }, []);

    return <>{component}</>
}

export default AuthGuard;