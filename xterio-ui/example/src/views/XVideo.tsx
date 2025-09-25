import { ScrollView, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video'

export default function Demo() {
  const assetId = require('./test.mp4');
  // const assetId =
  //   'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const currentPlayer = useVideoPlayer(assetId, (player) => {
    player.play();
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#141430' }}>
      <VideoView
        style={{ width: '100%', height: '100%'}}
        player={currentPlayer}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}

