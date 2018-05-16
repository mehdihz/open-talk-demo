// @flow

import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

type Props = {
  item: Object
};
type States = {
  imgWidth: number,
  imgHeight: number
};

class ImageItem extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imgWidth: 0,
      imgHeight: 0
    };
  }

  componentDidMount() {
    if (this.props.item && this.props.item.display_src) {
      Image.getSize(this.props.item.display_src, (width, height) => {
        const screenWidth = Dimensions.get("window").width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;
        this.setState({
          imgWidth: screenWidth,
          imgHeight: imageHeight
        });
      });
    }
  }

  render() {
    return (
      <View
        style={{
          alignSelf: "stretch"
        }}
      >
        <Image
          style={{
            width: this.state.imgWidth,
            height: this.state.imgHeight
          }}
          source={{
            uri: this.props.item.display_src
          }}
        />
        <View
          style={{
            marginHorizontal: 6
          }}
        >
          <Text
            style={{
              marginTop: 6
            }}
          >
            {this.props.item.likes} Likes
          </Text>
          <Text
            style={{
              marginTop: 6
            }}
          >
            {this.props.item.caption}
          </Text>
        </View>
      </View>
    );
  }
}

export default ImageItem;
