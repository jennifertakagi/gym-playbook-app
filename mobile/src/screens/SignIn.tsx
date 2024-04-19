import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { Controller, useForm } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  function handleNewAccount() {
    navigation.navigate('signUp');
  }

  function handleSignIn({ email, password }: FormData){
    console.log(email, password)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
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
            Access your account
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{ required: 'Email is required' }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required' }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Sign in" />
        </Center>

        <Center mt={18}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Do not have an account?
          </Text>
        </Center>

        <Button
          title="Sign up"
          variant="outline"
          onPress={handleSubmit(handleNewAccount)}
        />
      </VStack>
    </ScrollView>
  );
}