
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { View,SafeAreaView,ScrollView } from 'react-native';

import {COLORS,icons,images,SIZES} from '../constants';
import {NearbyJobCard,Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

const Home = () => {

  const router = useRouter();
  const [searchTerm, setsearchTerm] = useState("")

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen 
      options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:()=>(
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
        ),
        headerRight:()=>(
          <ScreenHeaderBtn iconUrl={images.profile} dimension='80%' />
        ),
        headerTitle:''
      }}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex:1,
            padding:SIZES.medium
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setsearchTerm={setsearchTerm}
            handleClick={()=>{
              if(searchTerm){
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
