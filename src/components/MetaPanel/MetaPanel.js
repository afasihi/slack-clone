import React from "react";
import {
  Segment,
  Header,
  Accordion,
  Icon,
  Image,
  List
} from "semantic-ui-react";

class MetaPanel extends React.Component {
  state = {
    channel: this.props.currentChannel,
    privateChannel: this.props.isPrivateChannel,
    activeIndex: 0
  };

  setActiveIndex = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  formatCount = num => (num > 1 || num === 0 ? `${num} posts` : `${num} post`);

  displayTopPosters = posts =>
    Object.entries(posts)
      .sort((a, b) => b[1] - a[1])
      .map(([key, val], i) => (
        <List.Item key={i}>
          <Image avatar src={val.avatar} />
          <List.Content>
            <List.Header as="a">{key}</List.Header>
            <List.Description>{this.formatCount(val.count)}</List.Description>
          </List.Content>
        </List.Item>
      ))
      .slice(0, 5);

  render() {
    const { activeIndex, privateChannel, channel } = this.state;
    const { userPosts } = this.props;

    if (privateChannel || !channel) {
      return null;
    }

    return (
      <Segment>
        <Header as="h3" attached="top">
          About # {channel.name}
        </Header>
        <Accordion styled attached="true">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="info" />
            Channel Details
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            {channel.details}
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="user circle" />
            Top Posters
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <List>{userPosts && this.displayTopPosters(userPosts)}</List>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="pencil alternate" />
            Created By
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Header as="h3">
              <Image circular src={channel.createdBy.avatar} />
              {channel.createdBy.name}
            </Header>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

export default MetaPanel;
