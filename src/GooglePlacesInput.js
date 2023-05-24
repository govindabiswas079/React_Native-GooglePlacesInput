import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';

const GooglePlacesInput = () => {
  const ref = useRef();

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      nearbyPlacesAPI='GoogleReverseGeocoding'
      placeholderTextColor='#000000'
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data);
      }}
      query={{
        // key: 'AIzaSyCINS2dyuBipK8MZzOQnzyKdrS2I1_b5I4',
        key: 'AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0',
        language: 'en',
        types: '(regions)'
      }}
      getDefaultValue={() => {
        return ''; // text input default value
      }}
      renderRightButton={() => {
        return (
          <Pressable style={{ height: 44, width: 70, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, }}>Clear</Text>
          </Pressable>
        )
      }}
      GooglePlacesSearchQuery={{ rankby: 'distance', type: 'restaurant' }}
      listUnderlayColor={'red'}
      textInputProps={{
        placeholderTextColor: '#000000',
        returnKeyType: "search",
      }}
      onFail={error => console.log(error)}
      onNotFound={() => console.log('no results')}
      autoFillOnNotFound={true}
      // currentLocation={true}
      currentLocationLabel='Current location'
      listEmptyComponent={() => {
        return (
          <View>
            <Text style={{ color: '#000000', textAlign: 'center', paddingTop: 10 }}>No place found</Text>
          </View>
        )
      }}
      value={'searchWords'}
      keepResultsAfterBlur={true}
      enablePoweredByContainer={false}
      debounce={400}
      minLength={4}
      autoFocus={false}
      fetchDetails={true}
      renderRow={(rowData) => {
        const title = rowData?.structured_formatting?.main_text;
        const address = rowData?.structured_formatting?.secondary_text;
        console.log(rowData)
        return (
          <View>
            <Text style={{ fontSize: 14, color: '#000000' }}>{title}</Text>
            <Text style={{ fontSize: 14, color: '#000000' }}>{address}</Text>
          </View>
        );
      }}
      // predefinedPlaces={[
      //   {
      //     type: 'favorite',
      //     description: 'Dominos Pizza',
      //     geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
      //   },
      //   {
      //     type: 'favorite',
      //     description: 'Chicken Republic',
      //     geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
      //   },
      // ]}
      styles={style}
    />
  );
};

export default GooglePlacesInput;


const style = StyleSheet.create({
  container: { //main container
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  textInput: { // text input
    backgroundColor: '#FFFFFF',
    color: '#000000',
    height: 44,
    borderRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
  poweredContainer: { // Google Logo
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#c8c7cc',
    borderTopWidth: 0.5,
  },
  powered: { // Google Logo
    display: 'none'
  },
  listView: { // place list
    backgroundColor: '#FFFFFF'
  },
  row: { // place list row
    backgroundColor: '#FFFFFF',
    padding: 13,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {  // divider
    height: 1,
    backgroundColor: '#000000',
  },
  description: { // place list name
    color: '#000000',
    fontSize: 14
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
    backgroundColor: 'red'
  },
})