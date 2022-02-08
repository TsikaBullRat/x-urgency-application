import React, {useState, useRef, useEffect} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";
import { Video } from "expo-av";

const WINDOW_HEIGHT = Dimensions.get("window").height;

const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);  
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

export default function UploadVideo({ navigation }) {

const [visible, setVisible] = useState(false)
const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
      }
    }
  };

  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();

        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };

  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      />
    </TouchableOpacity>
  );

  const renderVideoPlayer = () => (
    <Video
      source={{ uri: videoSource }}
      shouldPlay={true}
      style={styles.media}
    />
  );

  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );

  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );

  const [selectedImage, setSelectedImage] = useState(null);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
    <View>
    <Text style={styles.text}>No access to camera</Text>
 
      <Text style={styles.instructions}>
        To upload a Video from your phone, just press the button below!
      </Text>

      <View style= {{alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.cEbsQkks2CN7pkPbOsForAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.logo}
        />
      </View>

      <View style= {{alignItems: 'center', marginBottom: 30}}>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button1}>
          <Text style={styles.buttonText}>Pick a video</Text> 
        </TouchableOpacity>
      </View>
    </View>
    )
  }
  
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
<<<<<<< HEAD
      
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity
          onPress={() => {
            alert('Video uploaded')
            navigation.navigate('MedicalHome'); 
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Share this video</Text>
        </TouchableOpacity>  
=======

      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={() => { Upload(selectedImage.localUri) }} style={styles.button}>
          <Text style={styles.buttonText}>Share This Photo</Text>
        </TouchableOpacity>
>>>>>>> 2dfd4deacde9a840007b6d616069aead095e818c
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.instructions}>
        To upload a Video from your phone, just press the button below!
      </Text>

      <View style= {{alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.cEbsQkks2CN7pkPbOsForAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.logo}
        />
      </View>

      <View style= {{alignItems: 'center', marginBottom: 30}}>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button1}>
          <Text style={styles.buttonText}>Pick a video</Text> 
        </TouchableOpacity>
      </View>
 
      <SafeAreaView>

    {!visible ? (
      <SafeAreaView //style={styles.container}
    >
        <TouchableOpacity onPress={() => {setVisible(!visible)}}>
        <Text>Cam</Text>
        </TouchableOpacity>
      </SafeAreaView>
    ) : (

      <View>
      <TouchableOpacity onPress={() => {setVisible(!visible)}}>
        <Text>Close</Text>
=======
      <Text style={styles.instructions}> To Upload A Video From Your Phone, Just Press The Button Below! </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick A Photo</Text>
>>>>>>> 2dfd4deacde9a840007b6d616069aead095e818c
      </TouchableOpacity>

      <SafeAreaView //style={styles.container}
    >
    

      <Camera
        ref={cameraRef}
        style={styles.contain}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      
      <View style={styles.contain}>
        {isVideoRecording && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        {!videoSource && !isPreview && renderCaptureControl()}
      </View>

      

</SafeAreaView>
</View>
    )}

    </SafeAreaView>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 850,
  },

  imgContainer: {
    alignItems: 'center',
  },

  instructions: {
    textAlign:'center',
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    paddingTop: 150, 
  }, 

  logo: {
    width: 270,
    height: 270,
    marginLeft: 20,
    marginTop: 20,
  },

  thumbnail: {
    width: 300,
    height: 300,
    marginTop: 100,
    resizeMode: 'contain',
  },

  button1: {
    backgroundColor: '#F47066',
    padding: 20,
    marginTop: 30,
    marginLeft: 20, 
    borderRadius: 5,  

  },

  button: {
    backgroundColor: '#F47066',
    padding: 20,
    marginTop: 30,
    borderRadius: 5,  
    alignSelf: 'center'
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',   
  },

  contain: {
    flex:1, 
    alignItems:'center'  
  },
  closeButton: {
    position: "absolute",  
    top: 35,
    left: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  media: {
    ...StyleSheet.absoluteFillObject,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    textAlign:'center'
  },
});
