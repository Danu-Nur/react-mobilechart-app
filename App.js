import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://interviewexercise.azurewebsites.net/api/v1/battery/1/logs/minutely?from=2022-10-01%2000:00:00&duration=1h')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
        // console.log(json);
        <Text>{json.status}</Text>
      })
      .catch(error => {
        console.error(error);
      });
  };

  getConsol = (prop) => {
    console.log(prop);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.getData()}

        <FlatList
          data={this.state.data.data}
          renderItem={({ item, index }) =>
          (
            <View>
              {/* <Text>test 1</Text> */}
              <Text>{item.data.x}</Text>
              {/* <Text>{item.data.data.x}</Text> */}
            </View>
          )

          }
          keyExtractor={item => item.y_names}
          // keyExtractor={(item, idx) => `${Object.keys(item)}-${idx}`}

        />
        <TouchableOpacity onPress={() => this.getData()}>
          <Text>Get Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;