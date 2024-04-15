import { Center, ScrollView, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Profile' />

      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: 'https://github.com/jennifertakagi.png' }}
            alt="User avatar"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}