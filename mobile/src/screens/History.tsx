import { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';

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
          <Heading color="gray.200" fontSize="md" mt={10} mb={3} fontFamily="heading">
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            There are no exercises registered yet. {'\n'}
            Shall we exercise today?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />

    </VStack>
  );
}