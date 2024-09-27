import React, { Component } from "react";
import {
  BackHandler,
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchInput from "../../components/Search/SearchInput";
import profile_posts from "../../data/profile_posts";
import PostItem from "../../components/Search/PostItem";
import recent_search from "../../data/recent_search";
import styles from "./styles";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPosts: true,
      searchText: '',
      isInputFocused: false,
    };

    this.handleKeyboardShow = this.handleKeyboardShow.bind(this);
    this.handleKeyboardHide = this.handleKeyboardHide.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.handleKeyboardShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleKeyboardShow = () => {
    this.setState({ showPosts: false });
  };

  handleKeyboardHide = () => {
    this.setState({ showPosts: true });
  };

  handleBackPress = () => {
    if (this.state.isInputFocused) {
      Keyboard.dismiss();
      return true;
    }
    return false;
  };

  changeSearchText = (value) => {
    this.setState({ searchText: value });
  };

  handleFocus = () => {
    this.setState({ isInputFocused: true });
  };

  handleBlur = () => {
    this.setState({ isInputFocused: false });
  };

  groupPosts = (posts) => {
    const groups = [];
    for (let i = 0; i < posts.length; i += 5) {
      groups.push(posts.slice(i, i + 5));
    }
    return groups;
  };

  render() {
    const groupedPosts = this.groupPosts(profile_posts);
    const finalGroups = groupedPosts.map(group => {
      const fourPosts = group.slice(0, 4);
      const onePost = group[4] ? group[4] : null; // Eğer 5. post yoksa null
      return { fourPosts, onePost };
    });

    const { showPosts, searchText } = this.state;

    const result_recent = recent_search.filter((item,index)=>{
      return item.username.match(searchText);
    });

    const data = showPosts ? finalGroups : result_recent;

    return (
      <View style={styles.container}>
        <SearchInput
          value={searchText}
          changeSearchText={this.changeSearchText}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <View style={styles.empty_content_area}>
              <Text style={styles.empty_content_text}>Veri bulunamadı</Text>
            </View>
          )}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            showPosts ?
              <PostItem item={item} index={index} />
              :
              <>
                <TouchableOpacity>
                  <View
                    style={styles.recent_item_area}
                  >
                    <Image style={styles.recent_item_image} source={{ uri: item.avatar }} />
                    <View style={styles.recent_item_detail_area}>
                      <Text style={styles.recent_item_username}>{item.username}</Text>
                      <Text style={styles.recent_item_description} numberOfLines={1}>{item.description}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>

          )}
        />
      </View>
    );
  }
}
