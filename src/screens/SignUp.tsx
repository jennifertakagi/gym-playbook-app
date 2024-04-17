import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp() {
    console.log({
      name,
      email,
      password,
      passwordConfirm
    });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          alt="People working out"
          resizeMode="contain"
          position="absolute"
          defaultSource={BackgroundImg}
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Train your mind and body.
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Create your account
          </Heading>

          <Input
            onChangeText={setName}
            placeholder="Nome"
          />

          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email"
          />
          <Input
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          <Input
            onChangeText={setPasswordConfirm}
            placeholder="Confirm your password"
            secureTextEntry
          />

          <Button
            onPress={handleSignUp}
            title="Create and log in"
          />
        </Center>

        <Button
          title="Back to login"
          variant="outline"
          onPress={handleGoBack}
          mt={15}
        />
      </VStack>
    </ScrollView>
  );
}