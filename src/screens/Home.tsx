import { HStack, VStack } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { useState } from 'react';

export function Home() {

  const [groupSelected, setGroupSelected] = useState('arms')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          name="Arms"
          isActive={groupSelected === 'arms'}
          onPress={() => setGroupSelected('arms')}
        />
        <Group
          name="Legs"
          isActive={groupSelected === 'legs'}
          onPress={() => setGroupSelected('legs')}
        />
      </HStack>

    </VStack>
  );
}