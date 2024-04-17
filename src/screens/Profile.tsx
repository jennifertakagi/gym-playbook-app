import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';


const PHOTO_SIZE = 33;

export function Profile() {
  const toast = useToast();

  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://github.com/jennifertakagi.png');

  async function handleUserPhotoSelected(){
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const [photo] = photoSelected.assets;

      if (photo.uri) {

        const photoInfo = await FileSystem.getInfoAsync(photo.uri);

        if (photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5)) {
          return toast.show({
            title: 'Essa imagem é muito grande. Escolha uma de até 5MB.',
            placement: 'top',
            bgColor: 'red.500'
          })
        }

        setUserPhoto(photo.uri);
      }

    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Profile' />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
            :
              <UserPhoto
                source={{ uri: userPhoto }}
                alt="User avatar"
                size={PHOTO_SIZE}
              />
          }

          <TouchableOpacity onPress={handleUserPhotoSelected}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Change avatar
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder='Name'
          />

          <Input
            bg="gray.600"
            placeholder="Email"
            isDisabled
          />

          <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
            Update password
          </Heading>

          <Input
            bg="gray.600"
            placeholder="Current password"
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder="New password"
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder="Confirm new password"
            secureTextEntry
          />

          <Button title="Update" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}