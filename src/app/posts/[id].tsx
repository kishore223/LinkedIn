import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import posts from '../../../assets/data/posts.json';
import PostListItem from '../../components/PostListItem';

const PostDetails = () => {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <Text>Not found</Text>;
  }

  return <PostListItem post={post} />;
};

export default PostDetails;



// import { ScrollView, Text } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
// import posts from '../../../assets/data/posts.json';
// import PostListItem from '../../components/PostListItem';

// export default function PostDetailsScreen() {
//     const { id } = useLocalSearchParams();
//     const post = posts.find((post) => post.id === id);
  
//     if (!post) {
//       return <Text>Post Not found</Text>;
//     }
  
//     return (
//     <ScrollView>
//         <PostListItem post={post} />;
//     </ScrollView>
//     );
// }
  