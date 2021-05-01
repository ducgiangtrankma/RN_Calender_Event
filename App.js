import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert,
  Platform,
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Read/Write Auth</Text>
            <Text style={styles.sectionDescription}>
              <Button
                title="Request auth"
                onPress={() => {
                  RNCalendarEvents.requestPermissions().then(
                    result => {
                      Alert.alert('Auth requested', result);
                    },
                    result => {
                      console.error(result);
                    },
                  );
                }}
              />
              <Text>{'\n'}</Text>
              <Button
                title="Check auth"
                onPress={() => {
                  RNCalendarEvents.checkPermissions().then(
                    result => {
                      Alert.alert('Auth check', result);
                    },
                    result => {
                      console.error(result);
                    },
                  );
                }}
              />
            </Text>
          </View>
          {Platform.OS === 'android' && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Read-Only Auth</Text>
              <Text style={styles.sectionDescription}>
                <Button
                  title="Request auth"
                  onPress={() => {
                    RNCalendarEvents.requestPermissions(true).then(
                      result => {
                        Alert.alert('Read-only Auth requested', result);
                      },
                      result => {
                        console.error(result);
                      },
                    );
                  }}
                />
                <Text>{'\n'}</Text>
                <Button
                  title="Check auth"
                  onPress={() => {
                    RNCalendarEvents.checkPermissions(true).then(
                      result => {
                        Alert.alert('Read-only Auth check', result);
                      },
                      result => {
                        console.error(result);
                      },
                    );
                  }}
                />
              </Text>
            </View>
          )}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Calendars</Text>
            <Text style={styles.sectionDescription}>
              <Button
                title="Find calendars"
                onPress={() => {
                  RNCalendarEvents.findCalendars().then(
                    result => {
                      Alert.alert(
                        'Calendars',
                        result
                          .reduce((acc, cal) => {
                            acc.push(cal.title);
                            return acc;
                          }, [])
                          .join('\n'),
                      );
                    },
                    result => {
                      console.error(result);
                    },
                  );
                }}
              />
              <Button
                title="Save event to calendars"
                onPress={() => {
                  RNCalendarEvents.saveEvent('Sinh nhat', {
                    startDate: '2021-05-26T14:00:00.000Z',
                    endDate: '2021-05-26T15:00:00.000Z',
                  }).then(result => {
                    Alert.alert(
                      'Lưu thành công',
                      'Mở ứng dụng lịch để xem bất ngờ nhé 😄',
                    );
                  });
                }}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
