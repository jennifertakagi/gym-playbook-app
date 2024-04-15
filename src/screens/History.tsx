import { useState } from 'react';
import { Heading, VStack, SectionList } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '10.04.24',
      data: ["Front pull", "Unilateral row"]
    },
    {
      title: '15.04.24',
      data: ["Front pull"]
    }
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='History' />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
      />

    </VStack>
  );
}