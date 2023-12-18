import  { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, FormControl, Image, Input, Text } from '@chakra-ui/react';
import {  getUser, updateUser } from '../../../store/slices/authFetchContent';
import { AppDispatch } from '../../../store/store';

export const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state:any) => state.authorization.contents);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const fileInput = useRef<HTMLInputElement | null>(null);
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  
  useEffect(() => {
    if (user) {
      let { firstName = '', lastName = '', email = '' } = user;
      setNewFirstName(firstName);
      setNewLastName(lastName);
      setNewEmail(email);
    }
  }, [user]);

  const handleButtonClick = async () => {
    if (isEditing) {
      const formData = new FormData();
      formData.append('firstName', newFirstName);
      formData.append('lastName', newLastName);
      formData.append('email', newEmail);
      if (fileInput.current && fileInput.current.files && fileInput.current.files[0]) {
        formData.append('image', fileInput.current.files[0]);
      }
      dispatch(updateUser(formData));
      await dispatch(getUser());
    } else {
      let { firstName = '', lastName = '', email = '' } = user;
      setNewFirstName(firstName);
      setNewLastName(lastName);
      setNewEmail(email);
    }
    setIsEditing(!isEditing);
  };

  return (
    <Box display="flex" width="80%" h='70vh' margin="0 auto" justifyContent="space-around" marginTop="5%" padding="2%" boxShadow="dark-lg">
      <Box>
        <Box width="150px" height="150px" borderRadius="50%" border="1px" overflow="hidden" position="relative" display="flex" justifyContent="center" alignItems="center">
        {/* <Image src={user.file.imagePath} alt='user'/> */}
        </Box>
        <Input type="file" accept="image/*" ref={fileInput} disabled={!isEditing} />
      </Box>
      <Box display="flex" flexDirection="column" gap="10%">
        <FormControl id="firstName">
          <Text>Имя</Text>
          <Input value={newFirstName} onChange={(e) => isEditing && setNewFirstName(e.target.value)} disabled={!isEditing} />
        </FormControl>
        <FormControl id="lastName">
          <Text>Фамилия</Text>
          <Input value={newLastName} onChange={(e) => isEditing && setNewLastName(e.target.value)} disabled={!isEditing} />
        </FormControl>
        <FormControl id="email">
          <Text>Email</Text>
          <Input value={newEmail} onChange={(e) => isEditing && setNewEmail(e.target.value)} disabled={!isEditing} />
        </FormControl>
      
        <Button onClick={handleButtonClick}>{isEditing ? 'Сохранить' : 'Редактировать'}</Button>
      </Box>
    </Box>
  );
};











// import { Button, Box, Text, Image, Input } from '@chakra-ui/react';
// import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser, updateUser } from '../../../store/slices/authFetchContent';
// import { AppDispatch } from '../../../store/store';
// import { useRef, useState, useEffect } from 'react';
// import defaultUserImage from '../../../../public/user.jpg';

// export const UserPage = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const user = useSelector((state: any) => state.authorization.contents);
//   const [selectedImage, setSelectedImage] = useState<string | undefined>(defaultUserImage);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newFirstName, setNewFirstName] = useState('');
//   const [newLastName, setNewLastName] = useState('');
//   const [newEmail, setNewEmail] = useState('');
//   const fileInput = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   useEffect(() => {
//     if (user) {
//       setNewFirstName(user.firstName);
//       setNewLastName(user.lastName);
//       setNewEmail(user.email);
//     }
//   }, [user]);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedImage(URL.createObjectURL(event.target.files[]));
//     }
//   };

//   const handleImageClick = () => {
//     if (isEditing && fileInput.current) {
//       fileInput.current.click();
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     const formData = new FormData();
//     formData.append('firstName', newFirstName);
//     formData.append('lastName', newLastName);
//     formData.append('email', newEmail);
//     formData.append('image', selectedImage || '');
//     console.log(selectedImage);
    
//     dispatch(updateUser(formData));
//     for (let pair of formData.entries()) {
//         console.log(pair[0]+ ', '+ pair[1]); 
//       }
    
//     setIsEditing(false);
//   };

//   return (
//     <Box display="flex" width="80%" margin="0px auto" justifyContent="space-around" marginTop="5%" height="50%" padding="2%" boxShadow='dark-lg'>
//       <Box>
//         <Box onClick={handleImageClick} width="150px" height="150px" borderRadius="50%" border="1px solid" cursor="pointer" overflow="hidden" display="flex" justifyContent="center" alignItems="center">
//           <Image src={selectedImage} alt="User" width="100%" height="100%" objectFit="cover" />
//         </Box>
//         <Input ref={fileInput} type="file" accept="image" onChange={handleImageUpload} style={{ display: 'none' }} />
//       </Box>
//       <Box display="flex" flexDirection="column" gap="10%">
//         {isEditing ? (
//           <>
//             <Editable defaultValue={newFirstName} onChange={(value) => setNewFirstName(value)}>
//               <EditablePreview />
//               <EditableInput />
//             </Editable>
//             <Editable defaultValue={newLastName} onChange={(value) => setNewLastName(value)}>
//               <EditablePreview />
//               <EditableInput />
//             </Editable>
//             <Editable defaultValue={newEmail} onChange={(value) => setNewEmail(value)}>
//               <EditablePreview />
//               <EditableInput />
//             </Editable>
//             <Button onClick={handleSaveClick}>Save</Button>
//           </>
//         ) : (
//           <>
//             <Text>{user.firstName}</Text>
//             <Text>{user.lastName}</Text>
//             <Text>{user.email}</Text>
//             <Button onClick={handleEditClick}>Edit</Button>
//           </>
//         )}
//       </Box>
//     </Box>
//   );
// };


// import { Button, Box, Text, Image, Input } from '@chakra-ui/react';
// import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser, updateUser } from '../../../store/slices/authFetchContent';
// import { IUserEdits } from '../../../models/interfaces/userEdits';
// import { AppDispatch } from '../../../store/store';
// import { useRef, useState, useEffect } from 'react';
// import defaultUserImage from '../../../../public/user.jpg';

// export const UserPage = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const user = useSelector((state: any) => state.authorization.contents);
//   const updatedUser = useSelector((state: any) => state.authorization.contents);
//   const [selectedImage, setSelectedImage] = useState<string | undefined>(defaultUserImage);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newFirstName, setNewFirstName] = useState('');
//   const [newLastName, setNewLastName] = useState('');
//   const [newEmail, setNewEmail] = useState('');
//   const fileInput = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   useEffect(() => {
//     if (user) {
//       setNewFirstName(user.firstName);
//       setNewLastName(user.lastName);
//       setNewEmail(user.email);
//       setSelectedImage(user.imageId || defaultUserImage);
//     }
//   }, [user]);

//   useEffect(() => {
//     if (updatedUser) {
//       setNewFirstName(updatedUser.firstName);
//       setNewLastName(updatedUser.lastName);
//       setNewEmail(updatedUser.email);
//       setSelectedImage(updatedUser.imageId || defaultUserImage);
//     }
//   }, [updatedUser]);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedImage(URL.createObjectURL(event.target.files[0]));
//     }
//   };

//   const handleImageClick = () => {
//     if (isEditing && fileInput.current) {
//       fileInput.current.click();
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     const userData: IUserEdits = {
//       firstName: newFirstName,
//       lastName: newLastName,
//       email: newEmail,
//       imageId: selectedImage || '',
//     };
//     dispatch(updateUser(userData));
//     setIsEditing(false);
//   };

//   return (
//     <Box display="flex" w="80%" margin="0px auto" justifyContent="space-around" mt="5%" h="50%" p="2%" shadow='dark-lg'>
//       <Box>
//         <Box onClick={handleImageClick} w="150px" h="150px" borderRadius="50%" border="1px solid" cursor="pointer" overflow="hidden" display="flex" justifyContent="center" alignItems="center">
//           <Image src={selectedImage} alt="User" w="100%" h="100%" objectFit="cover" />
//         </Box>
//         <Input ref={fileInput} type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
//       </Box>
//       <Box display="flex" flexDirection="column" gap="10%">
//         {isEditing ? (
//           <>
//             <Editable defaultValue={newFirstName} onChange={(value) => setNewFirstName(value)}>
//               <EditablePreview />
//               <EditableInput />
//             </Editable>
//             <Editable defaultValue={newLastName} onChange={(value) => setNewLastName(value)}>
//               <EditablePreview />
//               <EditableInput />
//             </Editable>
//             <Editable defaultValue={newEmail} onChange={(value) => setNewEmail(value)}>
//               <EditablePreview />
//               <EditableInput />
//             </Editable>
//             <Button onClick={handleSaveClick}>Save</Button>
//           </>
//         ) : (
//           <>
//             <Text>{newFirstName}</Text>
//             <Text>{newLastName}</Text>
//             <Text>{newEmail}</Text>
//             <Button onClick={handleEditClick}>Edit</Button>
//           </>
//         )}
//       </Box>
//     </Box>
//   );
// };
