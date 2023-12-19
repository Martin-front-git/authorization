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
      await dispatch(updateUser(formData));
      await dispatch(getUser());
    } else {
      let { firstName = '', lastName = '', email = '' } = user;
      setNewFirstName(firstName);
      setNewLastName(lastName);
      setNewEmail(email);
    }
    setIsEditing(!isEditing);
  };
  const imagePath = user && user.file ? user.file.imagePath : '';
  
  return (
    <Box display="flex" width="80%" h='70vh' margin="0 auto" justifyContent="space-around" marginTop="5%" padding="2%" boxShadow="dark-lg">
      <Box>
        <Box width="150px" height="150px" borderRadius="50%" border="1px" overflow="hidden" position="relative" display="flex" justifyContent="center" alignItems="center" style={{cursor: isEditing ? 'pointer' : 'default'}}>
          <Image src={imagePath} alt='user'/>
          <Input type="file" accept="image/*" ref={fileInput} disabled={!isEditing} style={{opacity: 0, position: 'absolute', width: '100%', height: '100%', pointerEvents: isEditing ? 'auto' : 'none'}}/>
        </Box>
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
