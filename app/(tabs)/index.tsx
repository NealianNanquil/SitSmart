import { Image, View, Button, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Camera } from 'expo-camera';

import { useRouter } from 'expo-router'; // Import useRouter


export default function HomeScreen() {
  const router = useRouter(); // Initialize router

  const handleStartDetection = () => {
    // Navigate to the Detection screen
    router.push('/detectionScreen'); // Adjust the path to your DetectionScreen's file location
  };

  return (  
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')} // Update this path to your logo image
        style={styles.logo}
        />
<TouchableOpacity style={styles.button} onPress={handleStartDetection}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6581AB',
  },

  logo: {
    width: 350, 
    height: 350, 
    marginTop: 40, 
    resizeMode: 'contain',
  },
  
  button: {
    marginTop: 20,
    backgroundColor: '#1D3356', 
    paddingVertical: 15, 
    paddingHorizontal: 30,
    borderRadius: 25, 
    elevation: 3, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#fff', 
  },
});
