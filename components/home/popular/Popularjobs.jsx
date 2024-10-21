import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './popularjobs.style';
import { useRouter } from 'expo-router';
import { SIZES, COLORS } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  
  const { data, error, isLoading } = useFetch(
    'search',
    {
      query: 'React developer',
      num_pages: 1,
    }
  );

  const [selectedJob, setselectedJob] = useState();

  const handleCardPress=(item)=>{
    router.push(`/job-details/${item.job_id}`);
    setselectedJob(item.job_id)
  }

  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}  // Use the actual fetched data here
            renderItem={({ item }) => (  // Destructure item correctly
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id?.toString()}  // Ensure each key is unique and a string
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}

export default Popularjobs;
