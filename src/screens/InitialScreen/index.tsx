import React, {FC, useMemo} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';
import {initial_background, LOGO} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const InitialScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground source={initial_background} style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>
          Make yourself stronger than your excuses
        </Text>
        <View style={styles.footer}>
          <Button
            title="Get Started"
            disabled={false}
            onPress={() => navigation.navigate('SignupScreen')}
          />
          <Pressable onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.loginText}>Or login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
