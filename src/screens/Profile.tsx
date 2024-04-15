import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useTheme } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';


const PHOTO_SIZE = 33;

export function Profile() {

  const [photoIsLoading, setPhotoIsLoading] = useState(false);

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
                source={{ uri: 'https://github.com/jennifertakagi.png' }}
                alt="User avatar"
                size={PHOTO_SIZE}
              />
          }

          <TouchableOpacity>
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